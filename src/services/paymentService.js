const { APIContracts, APIControllers } = require('authorizenet');
const User = require('../models/userModel');
const { merchantAuthentication } = require('../config/authorizeNet');


const processSubscriptions = async () => {
  const users = await User.find({
    status: 'active',
    planEndDate: { $lte: new Date() },
  });

  for (const user of users) {
    try {
      const paymentRequest = new APIContracts.CreateTransactionRequest();
      const creditCard = new APIContracts.CreditCardType();
      creditCard.setCardNumber(user.paymentDetails.cardNumber);
      creditCard.setExpirationDate(user.paymentDetails.expiryDate);
      creditCard.setCardCode(user.paymentDetails.cvc);

      const paymentType = new APIContracts.PaymentType();
      paymentType.setCreditCard(creditCard);

      const transactionRequestType = new APIContracts.TransactionRequestType();
      transactionRequestType.setTransactionType(
        APIContracts.TransactionTypeEnum.AUTHCAPTURETRANSACTION
      );
      transactionRequestType.setAmount(97.0);
      transactionRequestType.setPayment(paymentType);

      paymentRequest.setMerchantAuthentication(merchantAuthentication);
      paymentRequest.setTransactionRequest(transactionRequestType);

      const ctrl = new APIControllers.CreateTransactionController(
        paymentRequest.getJSON()
      );
      ctrl.execute(() => {
        const response = ctrl.getResponse();
        const result = new APIContracts.CreateTransactionResponse(response);

        if (result.getMessages().getResultCode() === 'Ok') {
          logger.info(`Payment Success for User: ${user.email}`);
          user.planEndDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // Extend 1 month
          user.save();
        } else {
          logger.error(`Payment Failed for User: ${user.email}`);
        }
      });
    } catch (error) {
      logger.error(`Error Processing Payment for User: ${user.email}`);
    }
  }
};

module.exports = { processSubscriptions };

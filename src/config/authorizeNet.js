const { APIContracts } = require("authorizenet");

// Create the merchant authentication object
const merchantAuthentication = new APIContracts.MerchantAuthenticationType();
merchantAuthentication.setName(process.env.AUTHORIZE_API_LOGIN_ID);
merchantAuthentication.setTransactionKey(process.env.AUTHORIZE_TRANSACTION_KEY);

module.exports = {
    merchantAuthentication,
};

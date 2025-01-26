const { APIContracts, APIControllers } = require("authorizenet");


const merchantAuthentication = new APIContracts.ANetApiRequestAuthentication();

merchantAuthentication.setName(process.env.AUTHORIZE_API_LOGIN_ID);
merchantAuthentication.setTransactionKey(process.env.AUTHORIZE_TRANSACTION_KEY);

module.exports = {
    merchantAuthentication
}
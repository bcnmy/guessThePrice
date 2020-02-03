let config = {};
config.baseURL = `https://api.moonshot.biconomy.io`;
config.loginPath = `/v1/users/login`;
config.updatePath = `/v1/users/update`;
config.getNoncePath = `/v1/users/getNonce`;
config.getPricePath = `/v1/price/getPrice`;
config.getSmartContractPath = `/v1/game/smartContract`;
config.symbol = "MATICUSDT";
config.lastPriceUnit = "USDT";
config.betDisplayUnit = "USDT";
config.requestPriceIntervalInSec = 3;
config.socketConnectionURL = `https://api.moonshot.biconomy.io`;
config.loginMessageToSign = "Please provide your signature to login. Tracking ID ";
config.betSignMessage = "To confirm your bet, press the sign button below. Tacking ID ";
config.endGameTopicId="0x80686c7634c916b5d7c21079bc76aa69e483abbe9cb82d47addb4cc7cb3a90d4";
config.betPlacedTopicId="0x129d4e83dabdc677d13f18c9aa3ec10b867b7ca29240cd9c6f8f30611e8f10c5";

config.biconomyDappId = "5e389e2fcdbe6d2ddbc27d97";
config.biconomyAPIKey = "Ks6sfLzT0.d82ce0fe-8d59-4809-986e-361cd4959ae7";

config.state = {
    LAUNCH: "LAUNCH",
    PREPARE: "PREPARE",
    WAITING: "WAITING",
    START: "START",
    RESULT: "RESULT"
}

let LS_KEY = {
    LOGGED_IN : "LI",
    USERNAME: "UN",
    USER_ADDRESS: "UA"
}
module.exports = {config, LS_KEY};
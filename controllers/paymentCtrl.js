// paypal payment control
const { Client, Environment, ApiError } = require("square");

const client = new Client({
  environment: Environment.Sandbox,
  accessToken: `${process.env.SQUARE_ACCESS_TOKEN}`,
});

const paymentCtrl = {
  createPayments: async (req, res) => {
    const requestParams = req.body;
    paymentsApi = client.paymentsApi;
    // const idempotencyKey = crypto.randomBytes(22).toString('hex');

    // const idempotencyKey = uuidv4();

    const requestBody = {
      source_id: requestParams.nonce,
      idempotencyKey: requestParams.idempotencyKey,
      amountMoney: {
        amount: "100",
        currency: "USD",
      },
      autocomplete: true,
      locationId: requestParams.locationId,
    };

    try {
      const response = await paymentsApi.createPayment(requestBody);

      res.status(200).json({
        title: "Payment Successful",
        result: response.result,
      });
    } catch (error) {
      let errorResult = null;
      if (error instanceof ApiError) {
        errorResult = error.errors;
      } else {
        errorResult = error;
      }
      res.status(500).json({
        title: "Payment Failure on the backend",
        result: errorResult,
      });
    }
  },
};

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

module.exports = paymentCtrl;

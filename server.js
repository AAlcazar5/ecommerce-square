require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const cookieParser = require('cookie-parser')
const path = require('path')
// // Square code
// const bodyParser = require('body-parser');
// const { Client, Environment, ApiError } = require('square');

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(fileUpload({
    useTempFiles: true
}))

// //More square code
// const accessToken = buyerVerificationToken
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(__dirname));
// const client = new Client({
//     environment: Environment.Sandbox,
//     accessToken: accessToken
// })

// Routes
app.use('/user', require('./routes/userRouter'))
app.use('/api', require('./routes/categoryRouter'))
app.use('/api', require('./routes/upload'))
app.use('/api', require('./routes/productRouter'))
app.use('/api', require('./routes/blogRouter'))
app.use('/api', require('./routes/paymentRouter'))

// app.post('/process-payment')
//     .post(async (req, res) => {
//     const requestParams = req.body;
  
//     // Charge the customer's card
//     const paymentsApi = client.paymentsApi;
//     const requestBody = {
//       sourceId: requestParams.nonce,
//       amountMoney: {
//         amount: 100, // $1.00 charge
//         currency: 'USD'
//       },
//       locationId: requestParams.location_id,
//       idempotencyKey: requestParams.idempotency_key,
//     };
  
//     try {
//       const response = await paymentsApi.createPayment(requestBody);
//       res.status(200).json({
//         'title': 'Payment Successful',
//         'result': response.result
//       });
//     } catch(error) {
//       let errorResult = null;
//       if (error instanceof ApiError) {
//         errorResult = error.errors;
//       } else {
//         errorResult = error;
//       }
//       res.status(500).json({
//         'title': 'Payment Failure',
//         'result': errorResult
//       });
//     }
//   });



// Connect to mongodb
const URI = process.env.MONGODB_URL
mongoose.connect(URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err =>{
    if(err) throw err;
    console.log('Connected to MongoDB')
})

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
}

const PORT = process.env.PORT || 5000
app.listen(PORT, () =>{
    console.log('Server is running on port', PORT)
})
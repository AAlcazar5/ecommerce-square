const express = require('express')
const router = express.Router()
const paymentCtrl = require('../controllers/paymentCtrl')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')

// router.get('/payments', [auth], () => {
//     { nonce, buyerVerificationToken }
// })

router.route('payments')
    // .get(paymentCtrl.getPayment)
    .post(
        auth, 
        authAdmin, 
        paymentCtrl.createPayments)

module.exports = router;
 
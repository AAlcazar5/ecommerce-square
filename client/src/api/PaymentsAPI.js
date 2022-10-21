import { useState, useEffect } from 'react'
import axios from 'axios'
 
function PaymentsAPI() {
    const [payments, setPayments] = useState([])
    const [callback, setCallback] = useState(false)

    useEffect(() => {
        const getPayments = async () => {
            const res = await axios.get('https://js.squareupsandbox.com/v2/paymentform')
        }

        getPayments()
    },[callback])

    return {
        callback: [callback, setCallback]
    }
}

export default PaymentsAPI
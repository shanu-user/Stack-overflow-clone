import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom' 
import PayButton from "./PayButton"
import "./PaymentForm.css"


const PaymentForm = () => {
  {/* const cart = useSelector((state) => state.cartReducer)  */}
  const [product, setProduct] = useState({
    name: 'Free Plan',
    price: 0,
    currency: 'inr'
  })
  const auth = useSelector((state) => state.currentUserReducer)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  
  return (
    <div className="product-list">
      <div className="product">
        <h1>Silver Plan</h1>
        <ul className="product-features">
          <li>500 rupees per month</li>
          <li>5 questions per day</li>
        </ul>
        <PayButton amount={500} currency="inr"/>
      </div>
      <div className="product">
        <h1>Gold Plan</h1>
        <ul className="product-features">
          <li>1000 rupees per month</li>
          <li>Unlimited questions</li>
        </ul>
        <PayButton amount={1000} currency="inr"/>
      </div>
    </div>
  )
}

export default PaymentForm





























































// import React from 'react'
// import "./PaymentForm.css"
// import PayButton from "./PayButton"
// import {useElements, useStripe, CardElement} from '@stripe/react-stripe-js'
// import axios from 'axios'


// const PaymentForm = () => {
//   const stripe = useStripe()
//   const elements = useElements()

  
//   const handleSubmit = async (e) => {
//     e.preventDefault()
    
//     if(!stripe || !elements)
//       return
    
    
    
//     //Create payment intent on server
//     const { error: backendError, clientSecret } = await axios.post('http://localhost:5000/payment', {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         paymentMethodType: 'card',
//         currency: 'inr'
//       })
//     }).then((resp) => resp.json())

//     if(backendError){
//       console.log(backendError.message)
//       return
//     }
//     console.log('Payment intent created')

//     //Confirm the payment on the client
//     const {error: stripeError, paymentIntent} = await stripe.confirmCardPayment(
//       clientSecret, {
//         payment_method: {
//           card: elements.getElement(CardElement)
//         }
//       }
//     )
    
//     if(stripeError){
//       console.log(stripeError.message)
//       return
//     }

//     console.log(`Payment Intent ${paymentIntent.id}: ${paymentIntent.status}`)
//   }





//   return (
//     <div className="product_details">
//       <form onSubmit={handleSubmit}>
//         <CardElement />
//         <button>Pay</button>
//       </form>
//     </div>
//   )
// }

// export default PaymentForm

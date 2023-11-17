import React, { useState } from 'react'
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js'
import axios from 'axios'

const PaymentForm = (props) => {
  const stripe = useStripe()
  const elements = useElements()
  const [errorMessage, setErrorMessage] = useState(null)
  
  //Handling the form onSubmit event
  const handleSubmit = async(e) => {
    e.preventDefault()

    if(!stripe || !elements){
      return
    }

    const {error} = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: 'http://localhost:3000/'
      }
    })

    if(error){
      setErrorMessage(error.message)
    }
  }


  return (
    <div>
        <PaymentElement />
        {props.productList.map((item, index) => (
          <form onSubmit={handleSubmit} key={index} className="product_details" >
            <h1>{item.paymentType}</h1>
            <ul className="feature_list">
              <li>{item.paymentCondition}</li>
            </ul>
            
            <button disabled={!stripe} className="pay-btn">Pay {item.paymentCost}</button>
          </form>
        ))}
        {errorMessage && <div>{errorMessage}</div>}
    </div>
  )
}

export default PaymentForm
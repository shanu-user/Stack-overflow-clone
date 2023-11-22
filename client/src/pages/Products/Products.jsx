import React from 'react'
import "./Products.css"
import PaymentForm  from "./PaymentForm"
import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'


const Products = () => {
    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_ID_KEY)
    console.log(process.env.REACT_APP_STRIPE_ID_KEY)
    return (
        <div className="products">
            <Elements stripe={stripePromise}>
                <PaymentForm />
            </Elements>
        </div>
    )
}

export default Products

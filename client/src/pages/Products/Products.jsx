import React, { useState } from 'react'
import "./Products.css"
// import StripeCheckout from 'react-stripe-checkout'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import PaymentForm from "./PaymentForm"

const Products = () => {
    const stripePromise = loadStripe('process.env.STRIPE_ID_KEY')
    
    const options = {
        clientSecret: process.env.STRIPE_SECRET_KEY
    }

    //Creating list of products
    const productList = [
        {paymentType: 'Free Plan', paymentCost: 'free', paymentCondition: '1 question per day'}, 
        {paymentType: 'Silver Plan', paymentCost: 500, paymentCondition: '5 questions per day'},
        {paymentType: 'Gold Plan', paymentCost: 1000, paymentCondition: 'Unlimited questions'}
    ]

    return (
        <div className="products">
        <Elements stripe={stripePromise} options={options}>
            <h1>Subscriptions</h1>
            <PaymentForm productList={productList}/>
            {/* <form className="product_details">
                <h1>Free Plan</h1>
                <ul className="feature-list">
                    <li>1 question a day</li>
                </ul>
                <button className="pay-btn">Free</button>
            </form>
            <form className="product_details">
                <h1>Silver Plan</h1>
                <ul className="feature-list">
                    <li>5 questions per day</li>
                    <li>500 rupees per month</li>
                </ul>
                <button className="pay-btn">Pay 500</button>
            </form>
            <form className="product_details">
                <h1>Gold Plan</h1>
                <ul className="feature-list">
                    <li>Unlimited questions</li>
                    <li>1000 rupees per month</li>
                </ul>
                <button className="pay-btn">Pay 1000</button>
    </form> */}
        </Elements>
        </div>
    )
}

export default Products
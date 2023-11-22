import React from 'react'
import { handleCheckout } from '../../actions/products.js'
import { useSelector, useDispatch } from 'react-redux'
import "./PayButton.css"


const PayButton = (props) => {
    const dispatch = useDispatch()
    const auth = useSelector(state=>state.currentUserReducer)
    // console.log(props.amount)
    
    // const handleCheckout = () => {
    //     axios.post(`${process.env.REACT_APP_SERVER_URL}/payment/create-checkout-session`).
    //     then((res) => {
            
    //     })
    // }
    return (
        <button onClick={() => dispatch(handleCheckout(props))} className="pay-btn">Pay {props.amount}</button>
    )
}

export default PayButton

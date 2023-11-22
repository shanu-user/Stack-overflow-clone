import * as api from '../api'


export const handleCheckout = (props) => async(dispatch) => {
    try{
        const {data} = await api.createPayment(props)
        console.log(data)
        // dispatch({type: 'MAKE_PAY', payload: data})
    }
    catch(err){
        console.log(err)
    }
}
const paymentReducer=(state={data: null},action)=>{
    switch(action.type){
        case 'MAKE_PAY':
            console.log(`Data reached to authReducer ${JSON.stringify({...action?.data})}`)
            localStorage.setItem('Profile',JSON.stringify({...action?.data}))
            console.log("Hello reached to authReducer")
            console.log(state)
            return {...state, data: action?.data}
        case 'LOGOUT':
            localStorage.clear()
            return state
        default:
            return state
    }
}


export default paymentReducer
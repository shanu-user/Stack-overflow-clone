const currentUserReducer = (state={data: null}, action)=>{
    switch(action.type){
        case 'FETCH_CURRENT_USER':
            console.log('Hello reached to current user reducer')
            console.log(action?.payload)
            if(action?.payload != null){
                localStorage.setItem("Profile", action?.payload)
            }
            return action?.payload
        default: 
            return state
    }
}

export default currentUserReducer
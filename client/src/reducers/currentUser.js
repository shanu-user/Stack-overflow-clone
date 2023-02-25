const currentUserReducer = (state=null,action)=>{
    switch(action){
        case 'FETCH_CURRENT_USER':
            return action.payload 
        default: 
            return state
    }
}

export default currentUserReducer
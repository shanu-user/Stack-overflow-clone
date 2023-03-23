const currentUserReducer = (state={data: null}, action)=>{
    switch(action.type){
        case 'FETCH_CURRENT_USER':
            console.log('Hello reached to reducer')
            console.log(action?.payload)
            return action?.payload
        default: 
            return state
    }
}

export default currentUserReducer
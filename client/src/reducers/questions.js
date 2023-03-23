const questionsReducer = (state = {data: null}, action) =>{
    switch(action.type){
        case 'POST_QUESTION':
            return {...state, data: action.payload}
        case 'FETCH_ALL_QUESTIONS':
            console.log('Hello reached to question reducer')
            return {...state, data: action.payload}
        case 'POST_ANSWER':
            return {...state}
        default:
            return state
    }
}

export default questionsReducer 
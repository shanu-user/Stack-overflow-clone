const authReducer=(state={data: null},actions)=>{
    switch(state.type){
        case 'AUTH':
            localStorage.setItem('Profile',JSON.stringify(...actions?.data))
            return {...state,data: actions?.data}
        case 'LOGOUT':
            localStorage.clear()
            return { ...state, data: null}
        default:
            return state
            break;
    }
}

export default authReducer
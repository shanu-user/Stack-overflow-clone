const setCurrentUser=(data)=>async(dispatch)=>{
    dispatch({type: 'FETCH_CURRENT_USER', payload: data})
    // return {
    //     type: 'FETCH_CURRENT_USER',
    //     payload: data
    // }
}

export default setCurrentUser
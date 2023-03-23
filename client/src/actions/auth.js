import * as api from '../api'
import {fetchAllUsers} from "./users"
// import authReducer from '../reducers/auth.js'
// import currentUserReducer from '../reducers/currentUser.js'
import setCurrentUser from './currentUser.js'
export const signup=(authData)=> async(dispatch)=> {
    try{
        console.log('Entered signup auth action page')
        const {data}=await api.signUp(authData)
        console.log(`Sent data through API calls ${data}`)
        // dispatch({type: 'AUTH', data})
        // authReducer({type: 'AUTH'},data)
        dispatch({type: 'AUTH', data})
        dispatch(fetchAllUsers())
    }catch(err){
        console.log(err)
    }
}
export const login=(authData)=> async(dispatch)=> {
    try{
        const {data}=await api.logIn(authData)
        // authReducer({type: 'AUTH', data})
        console.log(data)
        // console.log(process.env.JWT_SECRET_TOKEN)
        dispatch({ type: "AUTH", data });
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
    }catch(err){
        console.log(err)
    }
}
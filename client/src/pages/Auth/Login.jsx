import React from 'react'
import "./Auth.css"
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { login} from '../../actions/auth'


const Login = ({email, setEmail, password, setPassword}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const handleSubmit = (e) =>{
        console.log(e)
        e.preventDefault()
        dispatch(login({email, password}))
        console.log({ email, password})
        navigate('/')
    }

    return (
    <div>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <label htmlFor="email">
                <h4>Email</h4>
                <input type="email" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            </label>
            <label htmlFor="password">
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <h4>Password</h4>
                    <p style={{color: "#007ac6", fontSize: "13px"}}>Forgot Password?</p>
                </div>
                <input type="password" name="password" id="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
            </label>
            <button type="submit" className="auth-btn">Login</button>
        </form>
    </div>
  )
}

export default Login

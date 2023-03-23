import React from 'react'
import "./Auth.css"
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {signup} from '../../actions/auth'

const Signup = ({name, setName, email, setEmail, password, setPassword}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const handleSubmit = (e) =>{
        console.log(e)
        e.preventDefault()
        if(!name && !email && !password){
            alert("Enter name, email and password")
        }
        dispatch(signup({name, email, password}))
        navigate('/')
        console.log({name, email, password})
    }
  
    return (
    <div>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <label htmlFor="name">
            <h4>Display Name</h4>
            <input type="text" id="name" name="name" value={name} onChange={(e)=>{setName(e.target.value)}} />
        </label>
        <label htmlFor="email">
            <h4>Email</h4>
            <input type="email" name="email" id="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        </label>
        <label htmlFor="password">
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <h4>Password</h4>
                <p style={{color: "#007ac6", fontSize: "13px"}}>Forgot Password?</p>
            </div>
            <input type="password" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            <p>Password must contain at least eight <br /> characters, including at least 1 letter and  1 <br /> number</p>
        </label>
        <button type="submit" className="auth-btn">Sign Up</button>
      </form>
    </div>
  )
}

export default Signup

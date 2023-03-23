import React, {useState} from 'react'
import "./Auth.css"
import icon from '../../assets/logo.png'
import AboutAuth from "./AboutAuth"
import Login from "./Login"
import Signup from "./Signup"


const Auth = () => {
  const [isSignup,setIsSignup]=useState(false);
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const handleSwitch=()=>{
    setIsSignup(!isSignup)
    setName("")
    setEmail("")
    setPassword("")
  }

  return (
    <section className='auth-section'>
      {isSignup && <AboutAuth />}
      <div className='auth-container-2'>
        <img src={icon} alt='stack-overflow' className='login-logo'/>
        {/* <form onSubmit={(e)=>handleSubmit(e)}>
        {
          isSignup && (
            <label htmlFor="name">
                <h4>Display Name</h4>
                <input type="text" id='name' name='name' value={name} onChange={(e)=>{setName(e.target.value)}}/>
              </label>
            )
        }
        <label htmlFor="email">
          <h4>Email</h4>
          <input type="email" name="email" id="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        </label>
        <label htmlFor="password">
          <div style={{display: "flex", justifyContent: "space-between"}}>
            <h4>Password</h4>
            {!isSignup && <p style={{color: "#007ac6", fontSize: "13px"}}>Forgot Password?</p>}
          </div>
            <input type="password" name="password" id="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            {isSignup && <p>Password must contain at least eight <br /> characters, including at least 1 letter and 1 <br /> number</p>}
        </label>
        <button type="submit" className='auth-btn'>{isSignup ? 'Sign Up': 'Login'}</button>
      </form> */}
      {isSignup ? <Login email={email} setEmail={setEmail} password={password} setPassword={setPassword}/> : <Signup name={name} setName={setName} email={email} setEmail={setEmail} password={password} setPassword={setPassword} />}
      <p>
        {!isSignup ? "Already have an account? ": "Don't have an account?"}
        <button type="submit" className='handle-switch-btn' onClick={handleSwitch}>{!isSignup ? "Log in" : "Sign Up"}</button>
      </p>
      </div>
    </section>
  )
}

export default Auth

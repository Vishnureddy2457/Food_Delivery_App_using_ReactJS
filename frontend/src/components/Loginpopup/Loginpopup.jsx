import React, { useState } from 'react'
import './Loginpopup.css'
import { assets } from '../../assets/assets'

const Loginpopup = ({setshowlogin}) => {
    const [currentstate,setcurrentstate]=useState("Login")
  return (
    <div className='Loginpopup'>
      <form action="" className="loginpopup-container">
        <div className="loginpopup-title">
            <h2>{currentstate}</h2>
            <img onClick={()=>setshowlogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="loginpopup-inputs">
            {currentstate==="Login"?<></>:<input type="text" placeholder="Enter User Name" required/>}
            <input type="email" placeholder='Enter Your Email' required />
            <input type="password" placeholder='Enter Your password' required />
        </div>
        <button>{currentstate==="Sign Up"?"Create Your Account":"Login"}</button>
        <div className="Loginpopup-condition">
            <input type="checkbox" required/>
            <p>By continuing, i agree to the terms of use & Privacy policy</p>
        </div>
        {currentstate==="Login"
            ?<p>Create a new account? <span onClick={()=>setcurrentstate("Sign Up")}>Click Here</span></p>
            :<p>Already have an account? <span onClick={()=>setcurrentstate("Login")}>Login Here</span></p>
        }


      </form>
    </div>
  )
}

export default Loginpopup

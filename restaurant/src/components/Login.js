import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'


function Login() {
    
    const Navigate=useNavigate();

    const [user, setuser] = useState("")
    const [userErr, setuserErr] = useState(false)
    const [password, setpassword] = useState("")
    const [passwordErr, setpasswordErr] = useState(false)

    function userHandler(e) {
        let item = e.target.value
        if (item.length < 5) {
            setuserErr(true)
        }
        else {
            setuserErr(false)
        }
        setuser(item)
    }

    function passwordHandler(e) {
        let item = e.target.value
        if (item.length < 6) {
            setpasswordErr(true)
        }
        else {
            setpasswordErr(false)
        }
        setpassword(item)
    }

    function LoginHandler(e) {
        if(user.length<5 || password.length<6 )
        {
            alert("Invalid Data")
        }
        else{
            Navigate("/")
        }
       
        e.preventDefault()
       
    }
    return (
        
        <div>
            <h1>Login</h1>

            <form onSubmit={LoginHandler}>
                <input type="text" placeholder='Enter Username' onChange={userHandler} />
                {userErr?<span>Invalid username</span>:null}<br /><br />
                <input type="password" placeholder='Enter password'  onChange={passwordHandler}/>
                {passwordErr?<span>Invalid password</span>:null}
                    <br /><br />
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login
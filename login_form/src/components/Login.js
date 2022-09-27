import React, { useState } from 'react'

const Login = () => {
    const [name, setName] = useState("");
    const [nameErr, setnameErr] = useState("false");
    const [email, setEmail] = useState("");
    const [emailErr, setemailErr] = useState("false");
    const [phone, setPhone] = useState("");
    const [phoneErr, setphoneErr] = useState("false");
    const [arr,setarr]=useState([])
    function handleName(e) {
        let name = e.target.value;
        var regex = '[a-zA-Z]';
        setName(e.target.value)
        if (name.length == 5 && name != '' && name == regex) {
            setnameErr(true)
        }
        else {
            setnameErr(false)
        }
    }
    function handleEmail(e) {
        let email = e.target.value;
        setEmail( e.target.value)
        var regex = '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$';
        if (email == regex && email != '') {
            setemailErr(true)
        }
        else {
            setemailErr(false)
        }
    }
    function handlePhone(e) {
        let phone = e.target.value;
        var regex = /^\d{10}$/;
        if (phone.length == 10 && phone != '' && phone == regex) {
            setphoneErr(true)
        }
        else {
            setphoneErr(false)
        }
    }
    const handleclick=(e)=>{
        e.preventDefault()
     let data={
        name:name,
        email:email,
        phone:phone
     }
     console.log(data);
     let arr1=[];
     arr1.push(data)
     setarr([...arr1])
     
     console.log(arr);
    }
        return (
            <div>
                <h1>Login Form</h1>
                <form>
                    <label>Name: </label>
                    <input type="text" onChange={handleName} name="Name" /><br /><br />
                    <label>Email: </label>
                    <input type="email" onChange={handleEmail} name="Email" /><br /><br />
                    <label>Phone: </label>
                    <input type="number" onChange={e=>setPhone(e.target.value)} name="Phone" /><br /><br />
                    <button type='submit' onClick={handleclick}>Submit</button>
                </form>
            </div>
        )
    
}

    export default Login;

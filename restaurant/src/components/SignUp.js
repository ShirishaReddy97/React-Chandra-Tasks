import React, { useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const handleUserName = (e)=>{
     setName(e.target.value)
  }
  const handlePassword =(e)=>{
    setPassword(e.target.value)
  }
  const register = (e)=>{
    alert(`${name}+" "+${password}`)
    e.preventDefault();
    
  }
  return (
    <div>
      <h1>User Registration</h1>
      <form>
        <div className="form-group">
          <label className="form-lable">User Name</label>
          <input
            type="text"
            className="form-control"
            name="username"
            value={name}
            onChange={handleUserName}
          />
        </div>
        <div className="form-group">
          <label>PassWord</label>
          <input
            type="text"
            className="form-control"
            name="password"
            value={password}
            onChange={handlePassword}
          />
        </div>
        <input type="submit" value="Register" className="btn btn-primary" onClick={register}/>
      </form>
    </div>
  );
};

export default SignUp;

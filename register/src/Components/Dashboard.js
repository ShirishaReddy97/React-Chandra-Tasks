import React, { useEffect, useState } from 'react'

function Dashboard() {
    const[user,setUser]=useState({Email:'',Password:''});
  useEffect(()=>{
      var a=localStorage.getItem('myData');
      var b=JSON.parse(a);
      console.log(b.EmployeeName);
      setUser(b)
      console.log(user.EmployeeName)
  },[]);
    return (
        <>
        <div className='col-sm-12 btn btn-primary'>
    Dashboard
    </div>
  <h1>Welcome:{user.EmployeeName}</h1>
    </>  
    
  )
}

export default Dashboard

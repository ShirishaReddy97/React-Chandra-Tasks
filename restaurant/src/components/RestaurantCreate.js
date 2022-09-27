import React, { Component } from 'react'

export class RestaurantCreate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: null,
      email: null,
      address: null,
      rating: null,
      nameError: null,
      emailError: null,
      addressError: null,
      ratingError: null
    }
  }
  nameHandler=(event)=> {
    this.setState({name:event.target.value});
    let nameItem =event.target.value
    if(nameItem.length<6)
    {
      this.setState({nameError:true})
    }
    else{
      this.setState({nameError:false})
    }
    this.setState({name:nameItem})
  }
  emailHandler(event) {
    this.setState({email:event.target.value});
    let emailItem=event.target.value
    if(emailItem.length<6)
    {
      this.setState({emailError:true})
    }
    else{
      this.setState({emailError:false})
    }
this.setState({email:emailItem})
  }
  addressHandler(event) {
this.setState({address:event.target.value});
let addressItem=event.target.value
if(addressItem.length<8)
{
  this.setState({addressError:true})
}
else{
  this.setState({addressError:false})
}
this.setState({address:addressItem})
  }
  ratingHandler(event) {
this.setState({rating:event.target.value});
let ratingItem=event.target.value
if(ratingItem.length<5)
{
this.setState({ratingError:true})
}
else{
  this.setState({ratingError:false})
}
this.setState({rating:ratingItem})
  }
  create(e) {
    e.preventDefault();
    fetch("http://localhost:3000/restaurant", {
      method: "Post",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    }).then((result) => {
      result.json().then((response) => {
        alert("Restaurant has been added");
        window.location.replace("http://localhost:3001/list")
      })
    })
  }
  render() {
    return (
      <div>
        <h1>RestaurantCreate</h1>
        <div>
          <input onChange={(event) =>this.nameHandler(event) } placeholder="Restaurant Name" required />
          {this.state.nameError?<span>Invalid Name</span>:null}<br /><br />
          <input onChange={(event) =>this.emailHandler(event) } placeholder="Restaurant Email" required/>
          {this.setState.emailError?<span>Invalid Email</span>:null}<br /><br />
          <input onChange={(event) =>this.addressHandler(event)} placeholder="Restaurant Rating" required/>
          {this.state.addressError?<span>Invalid Address</span>:null}<br /><br />
          <input onChange={(event) =>this.ratingHandler(event)} placeholder="Restaurant Address" required/>
          {this.setState.ratingError?<span>Invalid Rating</span>:null}<br /><br />
          <button onClick={(e) => { this.create() }} className="btn btn-primary">Add</button>
        </div>
      </div>
    )
  }
}

export default RestaurantCreate

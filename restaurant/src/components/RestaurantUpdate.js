import React, { Component } from 'react'
import {Table} from 'react-bootstrap';
import {Link} from 'react-router-dom';
export class RestaurantUpdate extends Component {
  constructor(props){
    super(props);
    this.state={
      name:null,
      email:null,
      address:null,
      rating:null,
      id:null,
    }
  }
  componentDidMount(props){
    fetch("http://localhost:3000/restaurant"+this.props.match.params.id).then((response)=>{
      response.json().then((result)=>{
        console.warn(result)
        this.setState({
          name:result.name,
          email:result.email,
          address:result.address,
          rating:result.rating,
          id:result.id,
        })
      })
    })
  }
    update(){
      console.log("sai");
     fetch("http://localhost:3000/restaurant"+this.state.id,{
      method:"PUT",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(this.state)
}).then((result)=>{
  result.json().then((response)=>{
    console.log("hiii");
    alert("Restaurant has been updated");
    window.location.replace("http://localhost:3001/list");
  })
})

    }
  
  render() {
    console.warn(this.state);
    return (
      <div>
        <h1>RestaurantUpdate</h1>
        <div>
          <input onChange={(event)=>{this.setState({name:event.target.value})}} value={this.state.name}/><br/>
          <input onChange={(event)=>{this.setState({email:event.target.value})}} value={this.state.email}/><br/>
          <input onChange={(event)=>{this.setState({rating:event.target.value})}} value={this.state.rating}/><br/>
          <input onChange={(event)=>{this.setState({address:event.target.value})}} value={this.state.address}/><br/>
          <button onClick={()=>{this.update()}} className="btn btn-primary">Update</button>
        </div>
      </div>
    )
  }
}

export default RestaurantUpdate

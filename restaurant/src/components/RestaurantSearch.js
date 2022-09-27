import React, { Component } from 'react'
import {Table} from 'react-bootstrap';
export class RestaurantSearch extends Component {
  constructor(){
    super()
    this.state={
      searchData:null,
      noData:false,
      lastSearch:"",
    }
  }
  search(key){
    console.log(key)
    this.setState({lastSearch:key})
    fetch("http://localhost:3000/restaurant?q="+key).then((data)=>{
      data.json().then((response)=>{
        console.warn("resp",response)
        if(response.length>0){
          this.setState({searchData:response,noData:false})
        }
        else{
          this.setState({noData:true,searchData:null})
        }
      })
    })
  }
  render() {
    return (
      <div>
        <h1>RestaurantSearch</h1>
        <input type="text" onChange={(event)=>this.search(event.target.value)}/>
      <div>
        {
          this.state.searchData?
          <div>
            <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Address</th>
          <th>Email</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
          {
            this.state.searchData.map((item)=>
            <tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.rating}</td>
          <td>{item.address}</td>
          </tr>
            )
          }
          </tbody>
          </Table>
          </div>
          :""
        }
      {
        this.state.noData?<h3>No Data Found</h3>:null
      }
      </div>
      </div>
    )
  }
}

export default RestaurantSearch

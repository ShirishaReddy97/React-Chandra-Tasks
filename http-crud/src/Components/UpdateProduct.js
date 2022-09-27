import React, { Component } from 'react';

export class UpdateProduct extends Component {
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
    componentDidMount(){
        fetch("http://localhost:3000/products/" + this.props.match.params.id).then(
            (response)=>{
                response.json().then((result)=>{
                    console.warn(result);
                    this.setState({
                        name:result.name,
                        email:result.email,
                        address:result.address,
                        rating:result.rating,
                        id:result.id
                    });
                });
            }
        );
    }
    update(){
        fetch('http://localhost:3000/products/'+this.state.id,{
          method: "PUT",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.state)
        }).then((result)=>{
          result.json().then((resp)=>{
            alert("Product has been Updated");
           window.location.replace("http://localhost:3001/list");
          })
        })
      }
  render() {
    return (
      <div>
        <h1>UpdateProduct</h1>
        <div>
            <input onChange={(event)=>{this.setState({name:event.target.value})}} value={this.state.name}/><br/>
            <input onChange={(event)=>{this.setState({email:event.target.value})}} value={this.state.email}/><br/>
            <input onChange={(event)=>{this.setState({address:event.target.value})}} value={this.state.address}/><br/>
            <input onChange={(event)=>{this.setState({rating:event.target.value})}} value={this.state.rating}/><br/>
            <button onClick={()=>{this.update()}} className="btn-btn-info">Update</button>
            
        </div>
      </div>
    );
  }
}

export default UpdateProduct;

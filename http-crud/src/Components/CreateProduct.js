import React, { Component } from "react";

export class CreateProduct extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name:null,
            email:null,
            address:null,
            rating:null,
        }
    }

    create()
    {
      fetch('http://localhost:3000/products',
      {
        method: "Post",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state)
      }).then((result)=>
       {
        result.json().then((resp)=>{
          alert("Product has been added");
          window.location = '/list';
        
        })
      })
    }
    
  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="card-header">
            <h1 style={{ color: "blue" }}>Create Product Details</h1>
          </div>
          <div className="card-body">
            <input
              onChange={(event) => {
                this.setState({ name: event.target.value });
              }}
              placeholder="Product Name"
            />
            <br />
            <br />
            <br />
            <input
              onChange={(event) => {
                this.setState({ email: event.target.value });
              }}
              placeholder="Product Holder Email Id"
            />
            <br />
            <br />
            <br />
            <input
              onChange={(event) => {
                this.setState({ rating: event.target.value });
              }}
              placeholder="Product Rating"
            />
            <br />
            <br />
            <br />
            <input
              onChange={(event) => {
                this.setState({ address: event.target.value });
              }}
              placeholder="Product  Address"
            />
            <br />
            <br />
            <button
              onClick={() => {
                this.create();
              }}
              className="btn btn-primary"
            >
              Add Product
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateProduct;

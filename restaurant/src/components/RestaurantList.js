import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { Link, Route,BrowserRouter as Router, } from 'react-router-dom';
import RestaurantUpdate from './RestaurantUpdate';

export class RestaurantList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: null
    }
  }
  delete(id){
    fetch("http://localhost:3000/restaurant/" + id, { method: "DELETE" }).then((response) => {
      response.join().then((result) => {
        window.location.replace("http://localhost:3001/list")
      })
    })
  }
  componentDidMount(props) {
    fetch("http://localhost:3000/restaurant").then((response) => {
      response.json().then((result) => {
        this.setState({ list: result })
      })
    })
  }
  render() {
    return (
      <div>
        <h1>RestaurantList</h1>
        {
          this.state.list ?
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
                    this.state.list.map((item, i) =>
                      <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.rating}</td>
                        <td>{item.address}</td>
                        <td>
                         
                          <span><Link to={"/update"+item.id} className="btn btn-primary">Update</Link></span>
                          <span> <Link to={"/details"+item.id} className="btn btn-info">Details</Link></span>
                          <span onClick={() => { this.delete(item.id) }} className="btn btn-danger"> Delete </span>
                          {/* </Route> */}
                        </td>
                        <Router><Route path={"/update"+item.id} Component={RestaurantUpdate} ></Route></Router>
                      </tr>
                    )
                  }
                </tbody>
              </Table>
            </div>
            : <p>Please Wait</p>
        }
      </div>
    )
  }
}

export default RestaurantList

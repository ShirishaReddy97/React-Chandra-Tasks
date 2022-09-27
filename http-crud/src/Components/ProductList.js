import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { faDeleteLeft, faRefresh} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => this.setState({ list: data }));
  }
delete(id){
    alert("Delete!" + id);
    fetch("http://localhost:3000/products/" + id,{
        method:"DELETE",
    }).then((result)=>{
        result.json().then((resp)=>{
            alert("Product has been deleted");
            window.location.replace("http://localhost:3001");
        });
    });
}
  render() {
    return (
      <div className="container">
         {this.state.list ? (
          <div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Rating</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                this.state.list.map((item, i) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.address}</td>
                    <td>{item.rating}</td>
                    <td>
                    <span style={{ padding: 5 }}>
                        <Link
                          to={"/update/" + item.id}
                          className="btn btn-info"
                        >
                         <FontAwesomeIcon icon={faRefresh} />
                        </Link>
                      </span>
                      <span style={{ padding: 5 }}>
                        <button
                          className="btn btn-danger"
                          onClick={() => this.delete(item.id)}
                        >
                           <FontAwesomeIcon icon={faDeleteLeft} />
                        </button>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        ) : (
          <p>Please wait</p>
        )}
      </div>
    );
  }
}

export default ProductList;

import React, { Component } from 'react'
import { BrowserRouter,Routes,Route, Link } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Service from './Service';

export default class Navbar extends Component {
  render() {
    return (
      <div>
      <BrowserRouter>
      <ul>
              <li>
                  <Link to="/" className="active">Home</Link>
                  </li>
                  <li>
                  <Link to="/Service">Services</Link>
                  </li>
                  <li>
                  <Link to="/About">About</Link>
                  </li>
                  <li>
                  <Link to="/Contact">Contact</Link>
                  </li>
          </ul>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="Service" element={<Service />} />
      <Route path="About" element={<About />} />
      <Route path="Contact" element={<Contact />} />
            </Routes>
            </BrowserRouter>
      </div>
    )
  }
}

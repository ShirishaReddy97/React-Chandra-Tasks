import React from 'react';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ProductList from './ProductList';
import CreateProduct from './CreateProduct';
import UpdateProduct from './UpdateProduct';
function Navbar() {
  return (
    <div>
      <BrowserRouter>
      <ul>
        <li>
          <Link to='/list'>ProductList</Link>
        </li>
        <li>
          <Link to='/create'>CreateProduct</Link>
        </li>
      </ul>
      <Routes>
        <Route path='/list' element={<ProductList/>}/>
        <Route path='/create' element={<CreateProduct/>}/>
        <Route path='/update/:id' render={props=>(<UpdateProduct{...props}/>)}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default Navbar;

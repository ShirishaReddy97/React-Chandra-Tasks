import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './components/Pages/Home';
import Home from './components/Pages/Home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" exact component={Home}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;

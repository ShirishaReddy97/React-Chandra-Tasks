
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import Register from './Components/Register';

function App() {
  return (
    
    <Router> 
      <div className="container">
        <nav className='navbar navbar-expand-lg navheader'>
          <div className='collapse navbar-collapse'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item'>
                <Link to={'/Login'} className="nav-link">Login</Link>
              </li>
              <li className='nav-item'>
<Link to={'/Register'} className='nav-link'>Register</Link>
              </li>
            </ul>
          </div>
        </nav><br/>
        <Switch>
          <Route path='/Login' component={Login}/> 
          <Route path='/Register' component={Register}/>
          <Route path='/Dashboard' component={Dashboard}/>
        </Switch>
    </div>
    </Router>
    
  );
}

export default App;

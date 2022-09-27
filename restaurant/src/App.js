import { Route,BrowserRouter,Link ,Routes} from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import RestaurantCreate from './components/RestaurantCreate';
import RestaurantDetail from './components/RestaurantDetail';
import RestaurantList from './components/RestaurantList';
import RestaurantSearch from './components/RestaurantSearch';
import RestaurantUpdate from './components/RestaurantUpdate';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/list"}>List</Link></li>
          <li><Link to={"/create"}>Create</Link></li>
          <li><Link to={"/search"}>Search</Link></li>
          <li><Link to={"/details"}>Details</Link></li>
          {/* <li><Link to={"/update/:id"}>Update</Link></li> */}
          <li><Link to={"/login"}>Login</Link></li>
          <li><Link to={"/signup"}>SignUp</Link></li>
        </ul>
        <Routes>
        <Route path="/list" element={<RestaurantList/>} />
     
        <Route path="/create" element={<RestaurantCreate/>}/>
         
       
        <Route path="/search" element={<RestaurantSearch/>}/>
       
       
        <Route path="/details" element={<RestaurantDetail/>}/>
         
       
        <Route path="/update/:id"  render={props => (<RestaurantUpdate {...props} />

)}

/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
         
       
        <Route path="/" element={<Home/>}/>  
     
        </Routes>
        </BrowserRouter>
        <Footer/>
    </div>
  );
}
export default App;

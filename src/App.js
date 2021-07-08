import logo from './logo.svg';
import './App.css';
import Card from './Card'
import {useStateValue} from './StateProvider/StateProvider'
import Navbar from './Navbar.js'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Customer from "./Customer.js";
import Footer from "./Footer.js";
import Register from "./Register.js";
import Signin from "./Signin.js";
import Aboutus from "./Aboutus.js";

function App() {
  const [state, dispatch] = useStateValue();
  return (
    <Router>
      <Switch>
      <Route path="/Register">
          <Register/>
        </Route>
        <Route path="/Signin">
          <Signin/>
        </Route>
        <Route path="/Aboutus">
        <Navbar/>
          <Aboutus/>
          <Footer/>
        </Route>
        <Route path="/customer">
        <Navbar/>
          <Customer /> 
          <Footer/>    
        </Route>
        <Route path="/">
          <div className="App">
            <Navbar />
            <h4 className="catagories">Categories</h4>
            <div className="catagories-image">
            {state.product.map((product) => (
              <Card 
                title={product.title}
                imageUrl={product.imageUrl}
                body={product.body}
              />
  
            ))}
            </div>
            <Footer/>
          </div>
         
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

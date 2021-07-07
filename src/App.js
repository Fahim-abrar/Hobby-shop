import logo from './logo.svg';
import './App.css';
import Card from './Card'
import {useStateValue} from './StateProvider/StateProvider'
import Navbar from './Navbar.js'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Customer from "./Customer.js";
import Footer from "./Footer.js";

function App() {
  const [state, dispatch] = useStateValue();
  return (
    <Router>
      <Switch>
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

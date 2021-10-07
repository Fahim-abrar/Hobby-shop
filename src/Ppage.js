import React from "react";
import "./Ppage.css";
import {useStateValue} from './StateProvider/StateProvider'
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

function Ppage() {
    const [state, dispatch] = useStateValue();
    const {category}=useParams()
  let filteredProducts= state.Allproducts.filter(oneproduct => oneproduct.category===category);
  return (
    <div className="ppage">
      <div className="ppage-corner">Home / Categories / {category}</div>
      <div className="ppage-header"> {category}</div>
      <div className="ppage-cards">
      <div className="ppage-map">
      {filteredProducts.map((product) => ( 
          <div className="ppage-filter">
          <div className="ppage-imagediv">
        <img
          className="ppage-img" 
          src={product.imageUrl}
        />
        </div>
        <div className="ppage-left">
        <div className="ppage-two">
          <div className="ppage-text">{product.title}</div>
          <div className="ppage-taka">TK</div>
          <div className="ppage-rating">
            &#11088;&#11088;&#11088;&#11088;&#11088;
          </div>
          <div className="ppage-desc">
            {product.body}
          </div>
          </div>
         <div className="ppage-three" >
         <Link  className='ppage-btn-1'>
              <button className="ppage-btn-btn">
                  <a className="ppage-btn-btn">
                      Add to Cart
                  </a>
              </button>
          </Link>
          <Link  className='ppage-btn-2'>
              <button className="ppage-btn-btn">
                  <a className="ppage-btn-btn">
                      Add to wishlist
                  </a>
              </button>
          </Link>
          </div>
        </div>
      </div>
      
      ))}
      </div>
      </div>
      </div>
     
  );
}

export default Ppage;

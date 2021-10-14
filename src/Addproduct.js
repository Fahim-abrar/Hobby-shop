import React from 'react'
import "./Addproduct.css";

function Addproduct() {
    return (
        <div className="Addproduct">
        <div className="Addproduct-right-middle">
          <div className="Addproduct-right-textarea">
            <div className="Addproduct-Info">Product name : </div>
            <input placeholder="Enter your first name" className="Addproduct-current" />
          </div>
          <div className="Addproduct-right-textarea">
            <div className="Addproduct-Info">Product Category : </div>
            <input placeholder="Enter your last name" className="Addproduct-current" />
          </div>
          <div className="Addproduct-right-textarea">
            <div className="Addproduct-Info">Price : </div>
            <input placeholder="Enter your email" className="Addproduct-current"  />
          </div>
          <div className="Addproduct-right-textarea">
            <div className="Addproduct-Info">Description: </div>
            <textarea placeholder="Enter your description" row="3" className="Addproduct-input" />
          </div>
          <div className="Addproduct-right-lower">
          <div className="Addproduct-btn-1">
            <button>
              <a>Add Product</a>
            </button>
          </div>
          <div className="Addproduct-btn-2">
            <button>
              <a>Cancel</a>
            </button>
          </div>
          </div>
        </div>
        </div>
    )
}

export default Addproduct

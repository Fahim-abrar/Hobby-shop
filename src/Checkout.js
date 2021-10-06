import React from "react";
import "./Checkout.css";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout-left">
        <div className="checkout-inputfeilds">
          <div className="checkout-contactdetailsfeild">
            <div className="checkout-contactdetails">Contact Details: </div>
            <textarea row="3" className="checkout-input" />
          </div>
          <div className="checkout-shippingaddressfeild">
            <div className="checkout-shippingaddress">Shipping Address:</div>
            <textarea row="3" className="checkout-input" />
          </div>
        </div>
        <div className="checkout-lowerbox">
          Method of Payment:
          <div className="checkout-radio">
          <div className="checkout-label">
          <input
            type="radio"
            id="html"
            name="fav_language"
            value="HTML"
          ></input>
          <label className="label" for="html">Cash on delivery</label></div>
          <div className="checkout-label">
          <input type="radio" id="css" name="fav_language" value="CSS"></input>
          <label className="label" for="css">Credit/debit</label></div>
          <div className="checkout-label">
          <input type="radio" id="css" name="fav_language" value="CSS"></input>
          <label className="label" for="css">Mobile Money system</label></div>
          </div>
        </div>
      </div>

      <div className="checkout-right">
        <div className="checkout-words">
          <div className="checkout-items">Items: </div>
          <div className="checkout-subtotal">Subtotal: </div>
          <div className="checkout-shipping">Shipping: </div>
          <div className="checkout-total">Total: </div>
          <div className="checkout-placeorder">Place Order</div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;

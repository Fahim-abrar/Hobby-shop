import React from 'react'
import "./customer.css"


function Customer() {
    return (
      <div className="customer">
        <div className="customer-name">
          My Orders Wishlist 8 My ratings My reviews Notifications Setting
          ------------------------------ Logout
          <div className="customer-profile">this is profile</div>
        </div>
        <div className='customer-card'>
          <div className='customer-image'>
               <img src="" alt=''/>
          </div>
            <div className='customer_content'>
                <div className='customer-title'>
                    <h3>Customer Profile</h3>
                </div>
                <div className='customer-body'>
                    <p>First Name: 
                    Last Name: 
                    E-mail: 
                    Birthday: </p>
                </div>
            </div>

          <div className='btn'>
              <button>
                  <a>
                      Change Password
                  </a>
              </button>
          </div>
            
        </div>
      </div>
    );
}

export default Customer

import React, { useContext } from 'react'
import './PlaceOrder.css'

import { StoreContext } from '../../context/storecontext'
import '../Cart/Cart.css'

const PlaceOrder = () => {

  const {gettotalcartAmount}=useContext(StoreContext)

  return (
    <div className='placeorder'>
      <div className="placeorder-left">
        <p className='title'>Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name'/>
          <input type="text" placeholder='Last Name'/>
        </div>
          <input type="email" placeholder='Email Address'/>
          <input type="text" placeholder='Street'/>
          <div className="multi-fields">
          <input type="text" placeholder='City'/>
          <input type="text" placeholder='State'/>
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip Code'/>
          <input type="text" placeholder='Country'/>
        </div>
        <input type="text" placeholder='Phone Number'/>
      </div>

      <div className="placeorder-right">
      <h2>Cart Total</h2>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>${gettotalcartAmount()}</p>
          </div><hr />
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>${gettotalcartAmount()===0?0:2}</p>
          </div><hr />
          <div className="cart-total-details">
            <p>Total</p>
            <p>${gettotalcartAmount()===0?0:gettotalcartAmount()+2}</p>
          </div><hr />
            <button>Proceed To Payment</button>
      </div>
      
    </div>

  )
}

export default PlaceOrder

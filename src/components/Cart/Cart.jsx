import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    /* const {cart} = props; */
   // const cart = props.cart;

  let total = 0;
  let totalShipping = 0;
  
  for(const product of cart){
    total = total + product.price;
    totalShipping = totalShipping + product.shipping;
  }
  let tax = total*7/100;
  let GrandTotal = tax+total+totalShipping;

    return (
        <div className='cart'>
            <h3>Order summary </h3>
            <p>Selected Items : {cart.length} </p>
            <p>Total Price : ${total}</p>
            <p>Total Shipping:${totalShipping}</p>
            <p>Tax:{tax}</p>
            <h6>Grand Total ${GrandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;
import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Cart.css'; 
import { GiHamburger } from "react-icons/gi";

const Cart = () => {
  const abc=()=>{
    alert("Are You Want To Remove It");
  }
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <div className="cart-item">
        <h2 className="cart-item-image"><GiHamburger /></h2>
        <div className="cart-item-details">
          <h3>Burger</h3>
          <p>90 Rs</p>
        </div>
        <Button variant="danger" className="remove-button" onClick={abc}>
          Remove
        </Button>
      </div>
    </div>
  );
};

export default Cart;

import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Cart.css'; 
import { GiHamburger } from "react-icons/gi";
import { IoPizzaSharp } from "react-icons/io5";
import { FaPrescriptionBottle } from "react-icons/fa";
import { IoPizzaOutline } from "react-icons/io5";
import { TbBottle } from "react-icons/tb";

const Cart = () => {
  const abc=()=>{
    alert("Are You Want To Remove It");
  }
  return (
   <>
    <div className="cart">
      <h2>Your Cart</h2>
      <div className="cart-item">
        <h2 className="cart-item-image"><GiHamburger /></h2>
        <div className="cart-item-details">
          <h3>Veg Burger with Cheese </h3>
          <p>85 Rs</p>
        </div>
        <Button variant="danger" className="remove-button" onClick={abc}>
          Remove
        </Button>
      </div>

      <div className="cart-item">
        <h2 className="cart-item-image"><IoPizzaSharp /></h2>
        <div className="cart-item-details">
          <h3>Corn Pizza</h3>
          <p>79 Rs</p>
        </div>
        <Button variant="danger" className="remove-button" onClick={abc}>
          Remove
        </Button>
      </div>

      <div className="cart-item">
        <h2 className="cart-item-image"><GiHamburger /></h2>
        <div className="cart-item-details">
          <h3>Veg Burger Without Cheese</h3>
          <p>75 Rs</p>
        </div>
        <Button variant="danger" className="remove-button" onClick={abc}>
          Remove
        </Button>
      </div>

      <div className="cart-item">
        <h2 className="cart-item-image"><FaPrescriptionBottle/></h2>
        <div className="cart-item-details">
          <h3>Coke Zero(300ml)</h3>
          <p>30 Rs</p>
        </div>
        <Button variant="danger" className="remove-button" onClick={abc}>
          Remove
        </Button>
      </div>

      <div className="cart-item">
        <h2 className="cart-item-image"><IoPizzaOutline /></h2>
        <div className="cart-item-details">
          <h3>Onion Pizza</h3>
          <p>89 Rs</p>
        </div>
        <Button variant="danger" className="remove-button" onClick={abc}>
          Remove
        </Button>
      </div>

      <div className="cart-item">
        <h2 className="cart-item-image"><TbBottle /></h2>
        <div className="cart-item-details">
          <h3>Sprite(1L)</h3>
          <p>90 Rs</p>
        </div>
        <Button variant="danger" className="remove-button" onClick={abc}>
          Remove
        </Button>
      </div>

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
   
   
    
   </>
  );
};

export default Cart;

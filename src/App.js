import "./App.css";
import React, { Component} from 'react';
import {Route,Routes,BrowserRouter} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import Home_Page from "./Components/Home_Page";
import Cart from "./Components/Cart";
import Registration from "./Components/Registration";
import Booking_Page from "./Components/Booking_Page";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/registration" element={<Registration/>}></Route>
        <Route path="/" element={<Home_Page/>}></Route>
        <Route path="/home" element={<Home_Page/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/testimonial" element={<Testimonial/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/book" element={<Booking_Page/>}></Route>
      </Routes>
      </BrowserRouter>
    );
  }
}

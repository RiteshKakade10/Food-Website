import React from "react";
import ProfilePic from "../Assets/ritesh_png-removebg-preview.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Feedback</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
         Feedback about a all food's including veg and non-veg food's
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img className="image1" src={ProfilePic} alt="" />
        <p>
          Quality of Food Is Best!!!
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Ritesh Kakade</h2>
      </div>
    </div>
    
  );
};

export default Testimonial;

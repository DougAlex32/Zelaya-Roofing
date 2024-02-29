import React from "react";
import "./AboutStyles.css"; 
import aboutImage from '../assets/about.jpg'; 
import LoginButton from './LoginButton';

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-image">
        <img src={aboutImage} alt="About Us" />
      </div>
      <div className="about-text">
        <h2>About Us</h2>
        <p>
          We are a family-run business with a passion for excellence. Founded in
          2003, our mission has been to provide top-quality service while
          fostering community and building lasting relationships. Our journey is
          a story of commitment, resilience, and the pursuit of a dream.
        </p>
        <p>
          Established in 2003, our family-owned roofing company in the DFW area
          has proudly served the community for over 20 years. Known for our
          honor and high standards, we are committed to providing reliable,
          professional service with a focus on quality craftsmanship. Whether
          you need a repair or a full roof replacement, trust us to deliver
          excellence. Contact us today to experience the difference of our
          dedicated approach.
        </p>
        <LoginButton /> 
      </div>
    </div>
  );
};

export default AboutUs;


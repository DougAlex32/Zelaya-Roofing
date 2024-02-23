import React, { useState } from "react";
import "./ServiceStyles.css";
import {useNavigate} from 'react-router-dom';

import metalRoofCover from "../assets/metalroof1.jpg";
import metalRoof2 from "../assets/metalroof2.jpg";
import asphaltCover from "../assets/asphalt1.jpg";
import asphalt2 from "../assets/asphalt2.jpg";
import asphalt3 from "../assets/asphalt3.jpg";
import woodCover from "../assets/wood1.jpg";
import wood2 from "../assets/wood2.jpg";
import tpoCover from "../assets/Tpo1.jpg";
import tpo2 from "../assets/Tpo2.jpg";

const services = [
  {
    name: "Metal Roofs",
    coverImage: metalRoofCover,
    images: [metalRoof2],
    description: " Our metal roofing services are a testament to durability, style, and longevity. We offer a wide range of metal roofing options, from standing seam to metal shingles, tailored to meet your specific needs and preferences. Our expert team ensures that each metal roof is installed with meticulous attention to detail, using only the highest quality materials. With a focus on both aesthetics and functionality, our metal roofs not only enhance the beauty of your property but also provide superior protection against the elements",
  },
  {
    name: "Asphalt Shingles",
    coverImage: asphaltCover,
    images: [asphalt2, asphalt3],
    description: "Our asphalt roofing services are tailored to meet the unique needs of your residential or commercial property. We begin with a thorough assessment to determine the best approach for installation or repairs. Our skilled team ensures that every asphalt roof is installed with precision, using high-quality materials to guarantee longevity and performance. From traditional shingles to modern asphalt options, we deliver unmatched expertise and exceptional service",
  },
  {
    name: "Wood Shingles",
    coverImage: woodCover,
    images: [wood2],
    description: " Experience the timeless beauty and exceptional quality of wood roofing with our expert services. We specialize in cedar shakes and shingles, offering a range of styles to suit your aesthetic preferences. Our team meticulously installs and repairs wood roofs, ensuring they not only enhance the look of your property but also provide long-lasting protection. With our commitment to craftsmanship and attention to detail, your wood roof will stand out for all the right reasons",
  },
  {
    name: "TPO",
    coverImage: tpoCover,
    images: [tpo2],
    description: " When it comes to TPO roofing, we are the experts you can trust. Our TPO roofing services are designed to provide durable and environmentally friendly solutions for your roofing needs. We use high-quality TPO membranes that are energy-efficient and resistant to UV radiation and weather damage. Our team ensures that your TPO roof is installed with precision, providing long-lasting performance and peace of mind.",
  },
  // Add more services similarly...
];



const Service = () => {
    const [selectedService, setSelectedService] = useState(null);
    const navigate = useNavigate(); // useNavigate instead of useHistory
  
    const handleServiceClick = (service) => {
      setSelectedService(service);
    };

    return (
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card" onClick={() => handleServiceClick(service)}>
            <img src={service.coverImage} alt={service.name} />
            <h3>{service.name}</h3>
          </div>
        ))}
        {selectedService && (
          <Modal service={selectedService} onClose={() => setSelectedService(null)} navigate={navigate} />
        )}
      </div>
    );
};
const Modal = ({ service, onClose }) => {
    const navigate = useNavigate(); // useNavigate instead of useHistory
  
    const handleContactClick = () => {
      onClose(); // Close the modal
      navigate('/contact'); // Navigate to the contact page
    };
  
    return (
      <div className="modal-backdrop" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <h2>{service.name}</h2>
          {service.images.map((image, index) => (
            <img key={index} src={image} alt={`${service.name} ${index + 1}`} />
          ))}
          <p>{service.description}</p>
          <button className="contact-btn" onClick={handleContactClick}>Contact</button> {/* Apply any necessary className */}
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    );
  };
  
  export default Service;
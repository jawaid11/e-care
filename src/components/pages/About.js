import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col md:flex-row md:p-20 p-3">
      <div className="md:w-1/2 bg-gray-100">
        <img src="https://images.unsplash.com/photo-1587556930720-58ec521056a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="About" className="w-full h-full" />
      </div>
      <div className="md:w-1/2 bg-white p-6">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-lg mb-4">
          At e-Care, we are dedicated to providing exceptional healthcare services to our patients. 
          Our team of experienced professionals is committed to ensuring the well-being and 
          comfort of our patients throughout their healthcare journey.
        </p>
        <p className="text-lg mb-4">
          We offer a wide range of specialized services, including personalized care plans, 
          nutritional support, medication management, and emotional assistance. Our goal is to 
          improve the quality of life for our patients by providing comprehensive and compassionate 
          care tailored to their individual needs.
        </p>
        <p className="text-lg mb-4">
          With e-Care, you can rest assured that you are in capable hands. We prioritize the 
          health and well-being of our patients and strive to exceed expectations in delivering 
          top-notch healthcare services. Contact us today to learn more about our services and 
          how we can support you on your healthcare journey.
        </p>
      </div>
    </div>
  );
};

export default About;

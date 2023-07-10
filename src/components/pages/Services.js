import React from 'react'
import food from '../../assets/food.jpg';
import visit from '../../assets/visit.jpg';
import monitor from '../../assets/monitor.jpg';
import Card from '../Card';

const Services = () => {
  const nutritious = "Nutritious Diet Program";
  const nurse = "Nurse visitation program";
  const monitoring ="Daily monitoring progrma";
  return (
    <>
    <div className='flex justify-center pt-20 text-gray-500 text-4xl border-b-3'>
      <p>Our services</p>
    </div>
      <Card img={food} title ={nutritious}>“ At e-Care, we are dedicated to ensuring the health and well-being
        of your loved ones. Our specialized Nutritious Diet Program is designed
        to provide optimal nutrition and support for patients during their recovery
        or healthcare journey.
        By providing wholesome and balanced meals, we aim to enhance the healing process,
        boost energy levels, and strengthen the immune system. We are committed to delivering
        exceptional care and ensuring that your loved ones receive the nutritional support t
        hey
        need for a healthier and happier life.”
      </Card>
      <Card img={visit} title ={nurse}>At our healthcare facility, we understand the importance of regular
        visits from a qualified and compassionate nurse. Our nurse visitation program is designed
        to provide personalized care and support to individuals in need of healthcare services.
        During regular nurse visits, our dedicated healthcare professionals make it a priority
        to assess the overall health and well-being of our patients. They closely monitor vital signs,
        administer medications, and ensure that any medical treatments or procedures are carried out
        effectively.
      </Card>
      <Card img={monitor} title ={monitoring}>At our healthcare center, we emphasize the significance of data monitoring as a vital
        component of proactive healthcare management. We offer comprehensive solutions and guidance
        for individuals who wish to keep track of their health through the collection and analysis of
        important health data.
        Experience the benefits of data-driven health monitoring and take control of your well-being.
        Together, we can work towards a healthier future through the power of information and
        proactive healthcare managemen</Card>
    </>
  )
}

export default Services;
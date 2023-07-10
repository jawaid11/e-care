import React from 'react';
import home from '../../assets/home.jpg';

const Home = () => {
  return (
    <div className='relative'>
      <div className='w-screen h-screen'>
        <img src={home} alt='homeImg' className='object-cover w-full h-full' style={{ opacity: 0.5 }} />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-4xl font-bold'>
        "Welcome to the e-Care one place for your loved ones!"
        </div>
      </div>
    </div>
  );
};

export default Home;

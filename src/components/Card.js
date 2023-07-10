import React from 'react';

const Card = (props) => {
  return (
    <div className="flex flex-col md:flex-row md:p-20 p-3">
      <div className="md:w-1/2 bg-gray-100">
        <img className="w-full h-80" src={props.img} alt="img" />
      </div>
      <div className="md:w-1/2 bg-white px-6">
        <div className="text-2xl font-bold mb-4">{props.title}</div>
        <div className="text-lg">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Card;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [showHealthForm, setShowHealthForm] = useState(false);
  const items = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "About Us", link: "/about" },
    { name: "Contact Us", link: "/contact" }
  ];

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setShowHealthForm(false);
  };

  const toggleHealthForm = () => {
    setShowHealthForm(!showHealthForm);
  };

  return (
    <nav className="shadow-md w-full fixed top-0 left-0 z-10">
      <div className='md:flex items-center justify-between md:px-10 px-7 py-4 bg-white'>
        <div className='font-bold text-xl flex items-center cursor-pointer'>
          e-Care
        </div>
        <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-5 cursor-pointer md:hidden'>
          {open ? <AiOutlineClose /> : <FiMenu />}
        </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto
        md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-19 opacity-100' : 'top-[-490px] opacity-0'} md:opacity-100`}
        >
          {items.map((item, i) => (
            <li key={item.name} className='md:ml-6 text-xl md:my-0 my-5 ml-2'>
              <Link to={item.link} className='text-grey-800 hover:text-grey-400 duration-500'>{item.name}</Link>
            </li>
          ))}
          {loggedIn ? (
            <>
              <li className='md:ml-6 text-xl md:my-0 my-5 ml-2'>
                <Button onClick={toggleHealthForm}>
                  Fill Health Form
                </Button>
              </li>
              <li className='md:ml-6 text-xl md:my-0 my-5 ml-2'>
                <Button onClick={handleLogout}>
                  Log Out
                </Button>
              </li>
            </>
          ) : (
            <li className='md:ml-6 text-xl md:my-0 my-5 ml-2'>
              <Link to='/health-form' className='text-grey-800 hover:text-grey-400 duration-500'>
                <Button onClick={handleLogin}>
                  Get started
                </Button>
              </Link>
            </li>
          )}
        </ul>
      </div>
      {loggedIn && showHealthForm && (
        <div className="p-4 bg-gray-200">
          <h2 className="text-xl font-bold mb-4">Health Form</h2>
          {/* Add health form fields and logic here */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

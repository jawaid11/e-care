import React from 'react';

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row md:p-20 p-3">
      <div className="md:w-1/2 bg-gray-100 p-6">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg mb-4">
          We'd love to hear from you! If you have any questions, comments, or inquiries, please feel free to reach out to us using the contact information below.
        </p>
        <p className="text-lg mb-4">
          Email: contact@example.com
        </p>
        <p className="text-lg mb-4">
          Phone: 123-456-7890
        </p>
        <p className="text-lg mb-4">
          Address: 1234 Street, City, Country
        </p>
      </div>
      <div className="md:w-1/2 bg-white p-6">
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="text-lg font-medium">Name</label>
            <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-lg font-medium">Email</label>
            <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="text-lg font-medium">Message</label>
            <textarea id="message" rows="4" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;


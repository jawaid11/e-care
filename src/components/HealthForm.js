import React, { useState } from 'react';

const HealthForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [bloodPressure, setBloodPressure] = useState('');
  const [bloodSugar, setBloodSugar] = useState('');
  const [heartRate, setHeartRate] = useState('');
  const [weight, setWeight] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation
    const errors = {};
    if (!name) {
      errors.name = 'Name is required';
    }
    if (!age) {
      errors.age = 'Age is required';
    }
    if (!bloodPressure) {
      errors.bloodPressure = 'Blood Pressure is required';
    }
    if (!bloodSugar) {
      errors.bloodSugar = 'Blood Sugar is required';
    }
    if (!heartRate) {
      errors.heartRate = 'Heart Rate is required';
    }
    if (!weight) {
      errors.weight = 'Weight is required';
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      // Perform form submission logic here
      console.log('Name:', name);
      console.log('Age:', age);
      console.log('Blood Pressure:', bloodPressure);
      console.log('Blood Sugar:', bloodSugar);
      console.log('Heart Rate:', heartRate);
      console.log('Weight:', weight);
      // Reset the form
      setName('');
      setAge('');
      setBloodPressure('');
      setBloodSugar('');
      setHeartRate('');
      setWeight('');
      setErrors({});
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md w-full px-4 py-8">
        <h2 className="text-2xl mb-4">Health Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full border rounded px-3 py-2"
            />
            {errors.name && <span className="text-red-500">{errors.name}</span>}
          </div>
          <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
            className="w-full border rounded px-3 py-2"
          />
          {errors.age && <span className="text-red-500">{errors.age}</span>}
        </div>
        <div>
          <label htmlFor="bloodPressure">Blood Pressure:</label>
          <input
            type="text"
            id="bloodPressure"
            value={bloodPressure}
            onChange={(e) => setBloodPressure(e.target.value)}
            required
            className="w-full border rounded px-3 py-2"
          />
          {errors.bloodPressure && <span className="text-red-500">{errors.bloodPressure}</span>}
        </div>
        <div>
          <label htmlFor="bloodSugar">Blood Sugar:</label>
          <input
            type="text"
            id="bloodSugar"
            value={bloodSugar}
            onChange={(e) => setBloodSugar(e.target.value)}
            required
            className="w-full border rounded px-3 py-2"
          />
          {errors.bloodSugar && <span className="text-red-500">{errors.bloodSugar}</span>}
        </div>
        <div>
          <label htmlFor="heartRate">Heart Rate:</label>
          <input
            type="number"
            id="heartRate"
            value={heartRate}
            onChange={(e) => setHeartRate(e.target.value)}
            required
            className="w-full border rounded px-3 py-2"
          />
          {errors.heartRate && <span className="text-red-500">{errors.heartRate}</span>}
        </div>
        <div>
          <label htmlFor="weight">Weight:</label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
            className="w-full border rounded px-3 py-2"
          />
          {errors.weight && <span className="text-red-500">{errors.weight}</span>}
        </div>
        <div className="mt-6">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded w-full sm:w-auto"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HealthForm;

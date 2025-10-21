// import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import React, { useState, useEffect } from 'react';


const Hero = () => {
   const [displayAmount, setDisplayAmount] = useState(0);
  const targetAmount = 66854873.84;

  // Animate the number increasing
  useEffect(() => {
    const duration = 3000; // 3 seconds
    const steps = 60;
    const stepDuration = duration / steps;
    const increment = targetAmount / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const newValue = Math.min(Math.floor(increment * currentStep), targetAmount);
      setDisplayAmount(newValue);
      
      if (currentStep >= steps) {
        clearInterval(timer);
        setDisplayAmount(targetAmount);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [targetAmount]);

  // Format number with commas
  const formatCurrency = (amount) => {
    return `$${amount.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })}`;
  };


  return (
    <div className=" bg-white flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <header className="flex justify-between items-center mb-16">
          <div className="text-2xl font-bold text-gray-800"><img src={logo} alt="" /></div>
           <Link to={'/wallet'}><button className="bg-transparent text-gray-700 border-2 px-6 py-2 rounded-lg font-medium transition-colors duration-200">
            Connect Wallet
          </button>
           </Link>
        </header>


<div className=" bg-orange-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
    <div className="flex justify-between items-center mb-8 border-b border-gray-200">
      {/* Left side: Capacity */}
      <Link
        to="/wallet"
        className="pb-4 px-2 font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200 border-b-2 border-transparent hover:border-blue-600"
      >
        Capacity
      </Link>

      {/* Right side: Other links */}
      <div className="flex space-x-8">
        {["Overview", "Pools", "Docs"].map((item) => (
          <Link
            key={item}
            to="/wallet"
            className={`pb-4 px-2 font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200 border-b-2 border-transparent hover:border-blue-600`}
          >
            {item}
          </Link>
        ))}
      </div>
    </div>


        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Total Supplied */}
          <div className=" p-8">
            <h2 className="text-xl font-semibold text-gray-700 ">
              Total supplied
            </h2>
            <div className="">
              <div className="text-3xl font-bold text-gray-900 ">
                {formatCurrency(displayAmount)}
              </div>
              
            </div>

          </div>

         
        </div>

      
      </div>
    </div>
       
      </div>
    </div>
  );
};

export default Hero;
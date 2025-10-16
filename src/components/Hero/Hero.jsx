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
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <header className="flex justify-between items-center mb-16">
          <div className="text-2xl font-bold text-gray-800"><img src={logo} alt="" /></div>
           <Link to={'/wallet'}><button className="bg-transparent text-gray-700 border-2 px-6 py-2 rounded-lg font-medium transition-colors duration-200">
            Connect Wallet
          </button>
           </Link>
        </header>


<div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Finance Dashboard</h1>
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold">U</span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex space-x-8 mb-8 border-b border-gray-200">
          {['Capacity', 'Overview', 'Pools', 'Docs'].map((item) => (
            <button
              key={item}
              className={`pb-4 px-2 font-medium transition-colors duration-200 ${
                item === 'Overview'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Total Supplied */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
              Total supplied
            </h2>
            <div className="mb-8">
              <div className="text-5xl font-bold text-gray-900 mb-2">
                {formatCurrency(displayAmount)}
              </div>
              <div className="flex items-center text-green-600">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">+2.4% from last month</span>
              </div>
            </div>

            {/* Additional Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="text-sm text-blue-600 font-medium">Active Pools</div>
                <div className="text-2xl font-bold text-gray-900">24</div>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <div className="text-sm text-green-600 font-medium">Avg. Return</div>
                <div className="text-2xl font-bold text-gray-900">8.2%</div>
              </div>
            </div>
          </div>

          {/* Right Column - Graph */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-700">
                Supply Overview
              </h2>
              <div className="flex space-x-2">
                <button className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                  1D
                </button>
                <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors">
                  1W
                </button>
                <button className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                  1M
                </button>
                <button className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                  1Y
                </button>
              </div>
            </div>

            {/* Graph Placeholder */}
            <div className="h-80 bg-gradient-to-b from-blue-50 to-white rounded-xl border border-gray-200 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <p className="text-gray-600 font-medium">Supply Growth Chart</p>
                <p className="text-gray-500 text-sm mt-1">Interactive visualization of total supplied amount over time</p>
              </div>
            </div>

            {/* Graph Legend */}
            <div className="flex justify-center space-x-6 mt-6">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-600">Total Supplied</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-600">Growth Trend</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="bg-white rounded-xl shadow-sm p-4 text-left hover:shadow-md transition-shadow border border-gray-100">
            <div className="text-lg font-semibold text-gray-800">Add Funds</div>
            <div className="text-gray-600 text-sm mt-1">Deposit into existing pools</div>
          </button>
          <button className="bg-white rounded-xl shadow-sm p-4 text-left hover:shadow-md transition-shadow border border-gray-100">
            <div className="text-lg font-semibold text-gray-800">Create Pool</div>
            <div className="text-gray-600 text-sm mt-1">Start a new investment pool</div>
          </button>
          <button className="bg-white rounded-xl shadow-sm p-4 text-left hover:shadow-md transition-shadow border border-gray-100">
            <div className="text-lg font-semibold text-gray-800">Generate Report</div>
            <div className="text-gray-600 text-sm mt-1">Export financial data</div>
          </button>
        </div>
      </div>
    </div>
       
      </div>
    </div>
  );
};

export default Hero;
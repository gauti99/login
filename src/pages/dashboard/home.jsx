// src/pages/dashboard/home.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../component/Navbar/Navbar';

export function Home() {  // Changed from 'Home' (capital H) to 'Home'
  const [username] = useState("");

  return (
    <>

    <Navbar/>
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Welcome Header */}
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <span className="text-sm font-medium text-blue-600">
              Productivity Dashboard
            </span>
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Welcome back, <span className="text-blue-600">{username}</span>
          </h1>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            Organize your day and get things done efficiently.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-8">
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <p className="text-gray-600 text-sm mb-1">Total Tasks</p>
            <h3 className="text-2xl font-bold">12</h3>
          </div>
          
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <p className="text-gray-600 text-sm mb-1">Pending</p>
            <h3 className="text-2xl font-bold text-yellow-600">8</h3>
          </div>
          
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <p className="text-gray-600 text-sm mb-1">Completed</p>
            <h3 className="text-2xl font-bold text-green-600">4</h3>
          </div>
        </div>

        {/* Feature Card */}
        <div className="bg-blue-50 p-5 rounded-lg border border-blue-100 mb-8">
          <div className="flex items-start gap-4">
            <div className="text-2xl">✍️</div>
            <div>
              <h3 className="text-lg font-semibold text-blue-700 mb-1">
                Create Tasks
              </h3>
              <p className="text-gray-700 text-sm">
                Add tasks instantly and never miss important work.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Link 
            to="/todos" 
            className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            My Todos
          </Link>
        </div>
      </div>
    </div>

    </>
  );
}

// If you need default export, add this:
// export default Home;
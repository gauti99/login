// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Title */}
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-blue-600">
              TodoApp
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Dashboard
            </Link>
            <Link 
              to="/todos" 
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              My Todos
            </Link>
            <Link 
              to="/create" 
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Create Task
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700">
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden bg-white border-t">
        <div className="px-4 py-2 space-y-1">
          <Link 
            to="/" 
            className="block py-2 text-gray-700 hover:text-blue-600"
          >
            Dashboard
          </Link>
          <Link 
            to="/todos" 
            className="block py-2 text-gray-700 hover:text-blue-600"
          >
            My Todos
          </Link>
          <Link 
            to="/create" 
            className="block py-2 text-gray-700 hover:text-blue-600"
          >
            Create Task
          </Link>
        </div>
      </div>
    </nav>
  );
}

// For default export
export default Navbar;
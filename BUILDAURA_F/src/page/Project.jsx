// src/pages/Project.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Project() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
            My Projects
          </h1>
          <p className="text-gray-600">
            Track and manage your project portfolio
          </p>
        </div>

        {/* New Project Button */}
        <div className="mb-8 flex justify-center">
          <button
            onClick={() => navigate("/projectcart")}
            className="bg-gradient-to-r from-orange-500 to-amber-500 
                       hover:from-orange-600 hover:to-amber-600 
                       text-white px-8 py-3 rounded-xl 
                       font-semibold text-lg transition-all 
                       duration-200 transform hover:scale-105 
                       hover:shadow-lg flex items-center"
          >
            <svg
              className="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            New Project
          </button>
        </div>

        {/* Placeholder Section */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-12 text-center">
          <p className="text-gray-500 text-lg">
            Your projects will appear here soon...
          </p>
        </div>
      </div>
    </div>
  );
}

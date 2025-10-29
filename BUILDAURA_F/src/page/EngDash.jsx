// src/pages/EngDash.jsx
import React, { useState } from "react";

const EngDash = () => {
  const [activeTab, setActiveTab] = useState("projects");

  const tabConfig = {
    projects: { icon: "📋", label: "Projects", color: "blue" },
    companyCarts: { icon: "🏢", label: "Company Carts", color: "green" },
  };

  const renderTabContent = () => {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
        <p className="text-gray-500 text-lg">
          {tabConfig[activeTab].label} content will appear here...
        </p>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
      <div className="p-6 max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
            Engineer Dashboard
          </h1>
          <p className="text-gray-600 text-lg">
            Manage your projects and company carts here
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-2 flex gap-1 border border-gray-200">
            {Object.entries(tabConfig).map(([tab, config]) => (
              <button
                key={tab}
                className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center gap-2 ${
                  activeTab === tab
                    ? `bg-gradient-to-r from-${config.color}-500 to-${config.color}-600 text-white shadow-lg`
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                <span className="text-lg">{config.icon}</span>
                {config.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="transition-all duration-300 ease-in-out">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default EngDash;

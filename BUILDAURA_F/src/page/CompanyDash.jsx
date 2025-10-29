// src/pages/CompanyDash.jsx
import React from "react";

const CompanyDash = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="p-6 max-w-7xl mx-auto space-y-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-2">
            Company Dashboard
          </h1>
          <p className="text-gray-600">Manage your projects and track progress</p>
        </div>

        {/* Empty Section (Placeholder for future content) */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-12 text-center">
          <p className="text-gray-500 text-lg">
            Content will appear here soon...
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyDash;

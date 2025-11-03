import React from 'react';
import { useAuth }. from '../hooks/useAuth';

const Admin: React.FC = () => {
  const { logout } = useAuth();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <button
          onClick={logout}
          className="px-4 py-2 font-semibold text-white bg-red-600 rounded-md hover:bg-red-700"
        >
          Logout
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Placeholder for content editing sections */}
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Edit Hero Section</h2>
          <p className="text-gray-600">Functionality to edit the hero section will be here.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Manage Skills</h2>
          <p className="text-gray-600">Functionality to add/remove skills will be here.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Update Projects</h2>
          <p className="text-gray-600">Functionality to edit project details will be here.</p>
        </div>
        {/* Add more sections as needed */}
      </div>
    </div>
  );
};

export default Admin;

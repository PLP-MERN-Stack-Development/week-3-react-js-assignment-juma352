import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4 text-white flex justify-between">
      <div className="text-lg font-bold">Task Manager</div>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/tasks" className="hover:underline">Tasks</Link>
      </div>
    </nav>
  );
};

export default Navbar;

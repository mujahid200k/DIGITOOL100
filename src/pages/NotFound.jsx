import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-6 text-center">
      <h1 className="font-black text-gray-200 text-9xl">404</h1>
      <h2 className="mt-4 text-3xl font-bold">Page Not Found</h2>
      <p className="mt-2 mb-8 text-gray-500">The page you are looking for doesn't exist.</p>
      <Link to="/" className="bg-[#7C3AED] text-white px-8 py-3 rounded-xl font-bold">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetails = () => {
  return (
    <div className="max-w-4xl px-6 py-20 mx-auto">
      <Link href="/" className="inline-block mb-8 font-bold text-purple-600">← Back to Products</Link>
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div className="flex items-center justify-center p-10 bg-gray-100 rounded-2xl h-80">
           <span className="text-gray-400">Product Image Preview</span>
        </div>
        <div>
          <h1 className="mb-4 text-4xl font-black">AI Writing Pro</h1>
          <p className="mb-6 text-lg text-gray-500">
            Generate high-quality content, blogs, and marketing copy in seconds with advanced AI capabilities.
          </p>
          <div className="mb-8 text-3xl font-black text-gray-900">$29</div>
          <button className="w-full bg-[#7C3AED] text-white py-4 rounded-xl font-bold text-lg hover:bg-purple-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
import React from 'react';

const Cart = () => {
  const cartItems = [
    { id: 1, name: "AI Writing Pro", price: 29 },
    { id: 2, name: "Design Templates Pack", price: 49 }
  ];

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="max-w-3xl px-6 py-20 mx-auto">
      <h2 className="mb-10 text-3xl font-bold text-gray-900">Your Cart</h2>
      <div className="space-y-4">
        {cartItems.map(item => (
          <div key={item.id} className="flex items-center justify-between p-6 border border-gray-100 bg-gray-50 rounded-2xl">
            <div>
              <h4 className="text-lg font-bold">{item.name}</h4>
              <p className="text-gray-500">${item.price}</p>
            </div>
            <button className="font-semibold text-red-500 hover:underline">Remove</button>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between pt-6 mt-10 border-t">
        <span className="text-xl text-gray-500">Total</span>
        <span className="text-3xl font-black text-gray-900">${total}</span>
      </div>
      <button className="w-full bg-[#7C3AED] text-white mt-10 py-4 rounded-xl font-bold text-lg shadow-lg">
        Proceed To Checkout
      </button>
    </div>
  );
};

export default Cart;
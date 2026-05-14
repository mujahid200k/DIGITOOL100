import React, { useEffect, useState } from 'react';
import icon1 from "../assets/icon2.png";
import icon2 from "../assets/writing_2327400 1.png";
import icon5 from "../assets/icon5.png";
import icon4 from "../assets/settings.png";
import icon3 from "../assets/icon3.png";
import icon6 from "../assets/icon6.png";
import icon7 from "../assets/camera.png";


import userImg from "../assets/user.png";
import boxImg from "../assets/icon4.png";
import playImg from "../assets/icon1.png";


import demoLogo from "../assets/play.png";


const Home = () => {
  const [activeTab, setActiveTab] = useState('products');

  useEffect(() => {
    fetch('/products.json')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section - Side by Side Layout */}
      <section className="grid items-center grid-cols-1 gap-10 px-10 py-20 mx-auto bg-white max-w-7xl md:grid-cols-2">
        
        {/* Left Side: Content */}
        <div className="text-left">
          <span className="inline-block px-4 py-1 mb-6 text-sm font-bold text-purple-600 border border-purple-100 rounded-full bg-purple-50">
            New: AI-Powered Tools Available
          </span>
          <h1 className="mb-6 text-5xl font-black leading-tight text-gray-900 lg:text-6xl">
            Supercharge Your <br /> 
            <span className="text-[#7C3AED]">Digital Workflow</span>
          </h1>
          <p className="max-w-lg mb-10 text-lg text-gray-500">
            Access premium AI tools, design assets, templates, and productivity software all in one place. Start creating faster today.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-[#7C3AED] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-purple-700 transition">
              Explore Products
            </button>
            <button className="flex items-center gap-2 px-8 py-4 text-lg font-bold transition border border-gray-200 rounded-xl hover:bg-gray-50">
              <img
      src={demoLogo}
       alt="Demo"
       className="object-contain w-5 h-5"
      /> Watch Demo
            </button>
          </div>
        </div>

        {/* Right Side: Banner Image */}
        <div className="relative">
          <img 
            src="/src/assets/banner.png" 
            alt="Banner" 
            className="object-cover w-full h-auto border border-gray-100 shadow-2xl rounded-2xl"
          />
          {/* Optional: Add decorative background element to match premium feel */}
          <div className="absolute w-64 h-64 bg-purple-100 rounded-full opacity-50 -z-10 -top-10 -right-10 blur-3xl"></div>
        </div>
      </section>

      {/* Stats Section -  */}
      <section className="py-16 bg-[#7C3AED] border-y">
        <div className="flex justify-around max-w-6xl mx-auto">
          <div className="text-center">
            <h2 className="text-4xl font-black text-brand-light">50K+</h2>
            <p className="text-lime-100">Active Users</p>
          </div>
          <div className="text-center">
            <h2 className="text-4xl font-black text-brand-light">200+</h2>
            <p className="text-lime-100">Premium Tools</p>
          </div>
          <div className="text-center">
            <h2 className="text-4xl font-black text-brand-light">4.9★</h2>
            <p className="text-lime-100">Rating</p>
          </div>
        </div>
      </section>

     {/* Premium Digital Tools Section */}
<section className="py-16 bg-white">
  <div className="px-4 mx-auto text-center max-w-7xl">
    <h2 className="mb-4 text-4xl font-bold text-gray-900">Premium Digital Tools</h2>
    <p className="max-w-2xl mx-auto mb-8 text-gray-500">
      Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
    </p>

    {/* Tab Switching Buttons */}
    <div className="flex justify-center gap-4 p-1 mx-auto mb-12 border border-gray-100 rounded-full bg-gray-50 w-fit">
      <button
        onClick={() => setActiveTab('products')}
        className={`px-8 py-2 rounded-full font-medium transition-all ${
          activeTab === 'products' ? 'bg-blue-600 text-white shadow-md' : 'text-gray-500 hover:text-gray-700'
        }`}
      >
        Products
      </button>
      <button
        onClick={() => setActiveTab('cart')}
        className={`px-8 py-2 rounded-full font-medium transition-all ${
          activeTab === 'cart' ? 'bg-blue-600 text-white shadow-md' : 'text-gray-500 hover:text-gray-700'
        }`}
      >
        Cart (2)
      </button>
    </div>

    {/* conditional view based on activeTab */}
    {activeTab === 'products' ? (
      /* --- PRODUCT GRID (image_39c655.png) --- */
      <div className="grid grid-cols-1 gap-8 text-left md:grid-cols-3">
        {[
  { title: "AI Writing Pro", price: "29", tag: "Best Seller", image: icon2 },
  { title: "Design Templates Pack", price: "49", tag: "Popular", image: icon1 },
  { title: "Premium Stock Assets", price: "19", tag: "New", image: icon7 },
  { title: "Automation Toolkit", price: "79", tag: "Popular", image: icon4 },
  { title: "Resume Builder Pro", price: "15", tag: "New", image: icon3 },
  { title: "Social Media Kit", price: "39", tag: "Best Seller", image: icon6 }
].map((item, index) => (
          <div key={index} className="relative p-6 transition-shadow bg-white border border-gray-100 shadow-sm rounded-3xl hover:shadow-md">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-blue-50 rounded-2xl">
  <img
    src={item.image}
    alt={item.title}
    className="object-contain w-10 h-10"
  />
</div>
              <span className="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold rounded-full uppercase">{item.tag}</span>
            </div>
            <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
            <p className="mb-4 text-sm text-gray-400">Generate high-quality content and boost your digital workflow fast.</p>
            <p className="mb-6 text-2xl font-bold">${item.price}<span className="text-sm font-normal text-gray-400">/Mo</span></p>
            <button className="w-full py-3 font-bold text-white transition-colors bg-blue-600 rounded-2xl hover:bg-blue-700">Buy Now</button>
          </div>
        ))}
      </div>
    ) : (
      /* --- CART VIEW (image_39c2f7.png) --- */
      <div className="max-w-3xl p-8 mx-auto text-left border border-blue-100 rounded-3xl bg-blue-50/20">
        <h3 className="mb-6 text-xl font-bold">Your Cart</h3>
        
        <div className="mb-8 space-y-4">
          {/* Cart Item 1 */}
          <div className="flex items-center justify-between p-5 bg-white border shadow-sm rounded-2x1 border-gray-50">
            <div className="flex items-center gap-4">
              <span className="text-2xl">📝</span>
             
              <div>
                <p className="font-bold text-gray-800">AI Writing Pro</p>
                <p className="text-sm text-gray-400"> $29</p>
               
              </div>
            </div>
            
            <button className="text-sm font-semibold text-red-500 hover:underline">Remove</button>
          </div>

          {/* Cart Item 2 */}
          <div className="flex items-center justify-between p-5 bg-white border shadow-sm rounded-2xl border-gray-50">
            <div className="flex items-center gap-4">
              <span className="text-2xl">🎨</span>
              <div>
                <p className="font-bold text-gray-800">Design Templates Pack</p>
                <p className="text-sm text-gray-400">$49</p>
              </div>
            </div>
            <button className="text-sm font-semibold text-red-500 hover:underline">Remove</button>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 mb-6 border-t border-gray-100">
          <span className="font-medium text-gray-500">Total:</span>
          <span className="text-2xl font-extrabold text-gray-900">$78</span>
        </div>

        <button className="w-full py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 shadow-lg shadow-blue-100 transition-all active:scale-[0.98]">
          Proceed To Checkout
        </button>
      </div>
    )}
  </div>
</section>
     
{/* How It Works / Get Started Section */}
<section className="py-20 bg-gray-50">
  <div className="px-4 mx-auto max-w-7xl">
    <div className="mb-16 text-center">
      <h2 className="mb-4 text-4xl font-bold text-gray-900">Get Started In 3 Steps</h2>
      <p className="text-gray-500">Start using premium digital tools in minutes, not hours.</p>
    </div>

    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      {/* Step 1 */}
      <div className="relative p-8 text-center transition-shadow bg-white border border-gray-100 shadow-sm rounded-3xl group hover:shadow-md">
        <span className="absolute flex items-center justify-center w-8 h-8 text-xs font-bold text-white bg-blue-600 rounded-full top-6 right-6">01</span>
        <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-full bg-blue-50">
          <img
  src={userImg}
  alt="Create Account"
  className="object-contain w-10 h-10"
/>
        </div>
        <h3 className="mb-3 text-xl font-bold text-gray-900">Create Account</h3>
        <p className="text-sm leading-relaxed text-gray-500">Sign up for free in seconds. No credit card required to get started.</p>
      </div>

      {/* Step 2 */}
      <div className="relative p-8 text-center transition-shadow bg-white border border-gray-100 shadow-sm rounded-3xl group hover:shadow-md">
        <span className="absolute flex items-center justify-center w-8 h-8 text-xs font-bold text-white bg-blue-600 rounded-full top-6 right-6">02</span>
        <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-full bg-blue-50">
         <img
  src={boxImg}
  alt="Choose Products"
  className="object-contain w-10 h-10"
/>
        </div>
        <h3 className="mb-3 text-xl font-bold text-gray-900">Choose Products</h3>
        <p className="text-sm leading-relaxed text-gray-500">Browse our catalog and select the tools that fit your needs.</p>
      </div>

      {/* Step 3 */}
      <div className="relative p-8 text-center transition-shadow bg-white border border-gray-100 shadow-sm rounded-3xl group hover:shadow-md">
        <span className="absolute flex items-center justify-center w-8 h-8 text-xs font-bold text-white bg-blue-600 rounded-full top-6 right-6">03</span>
        <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-full bg-blue-50">
          <img
  src={playImg}
  alt="Start Creating"
  className="object-contain w-10 h-10"
/>
        </div>
        <h3 className="mb-3 text-xl font-bold text-gray-900">Start Creating</h3>
        <p className="text-sm leading-relaxed text-gray-500">Download and start using your premium tools immediately.</p>
      </div>
    </div>
  </div>
</section>
     


{/* Pricing Section */}
<section className="py-20 bg-white">
  <div className="px-4 mx-auto max-w-7xl">
    <div className="mb-16 text-center">
      <h2 className="mb-4 text-4xl font-bold text-gray-900">Simple, Transparent Pricing</h2>
      <p className="text-gray-500">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
    </div>

    <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-3">
      
      {/* Starter Plan */}
      <div className="p-8 transition-all bg-white border border-gray-100 shadow-sm rounded-3xl hover:shadow-md">
        <h3 className="mb-2 text-xl font-bold text-gray-900">Starter</h3>
        <p className="mb-6 text-sm text-gray-400">Perfect for getting started</p>
        <div className="mb-6">
          <span className="text-4xl font-bold text-gray-900">$0</span>
          <span className="text-gray-400">/Month</span>
        </div>
        <ul className="mb-8 space-y-4">
          {["Access to 10 free tools", "Basic templates", "Community support", "1 project per month"].map((feature, i) => (
            <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
              <span className="font-bold text-green-500">✓</span> {feature}
            </li>
          ))}
        </ul>
        <button className="w-full py-3 font-bold text-blue-600 transition-colors border-2 border-blue-600 rounded-2xl hover:bg-blue-50">
          Get Started Free
        </button>
      </div>

      {/* Pro Plan (Highlighted) */}
      <div className="relative p-8 bg-blue-600 shadow-xl rounded-3xl shadow-blue-100 md:scale-110">
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest">
          Most Popular
        </div>
        <h3 className="mb-2 text-xl font-bold text-white">Pro</h3>
        <p className="mb-6 text-sm text-blue-100">Best for professionals</p>
        <div className="mb-6">
          <span className="text-4xl font-bold text-white">$29</span>
          <span className="text-blue-100">/Month</span>
        </div>
        <ul className="mb-8 space-y-4">
          {["Access to all premium tools", "Unlimited templates", "Priority support", "Unlimited projects", "Cloud sync", "Advanced analytics"].map((feature, i) => (
            <li key={i} className="flex items-center gap-3 text-sm text-white">
              <span className="font-bold">✓</span> {feature}
            </li>
          ))}
        </ul>
        <button className="w-full py-3 font-bold text-blue-600 transition-colors bg-white rounded-2xl hover:bg-gray-50">
          Start Pro Trial
        </button>
      </div>

      {/* Enterprise Plan */}
      <div className="p-8 transition-all bg-white border border-gray-100 shadow-sm rounded-3xl hover:shadow-md">
        <h3 className="mb-2 text-xl font-bold text-gray-900">Enterprise</h3>
        <p className="mb-6 text-sm text-gray-400">For teams and businesses</p>
        <div className="mb-6">
          <span className="text-4xl font-bold text-gray-900">$99</span>
          <span className="text-gray-400">/Month</span>
        </div>
        <ul className="mb-8 space-y-4">
          {["Everything in Pro", "Team collaboration", "Custom integrations", "Dedicated support", "SLA guarantee", "Custom branding"].map((feature, i) => (
            <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
              <span className="font-bold text-green-500">✓</span> {feature}
            </li>
          ))}
        </ul>
        <button className="w-full py-3 font-bold text-blue-600 transition-colors border-2 border-blue-600 rounded-2xl hover:bg-blue-50">
          Contact Sales
        </button>
      </div>

    </div>
  </div>
</section>




{/* Final CTA Section */}
<section className="px-4 py-20">
  <div className="mx-auto max-w-7xl">
    <div className="bg-blue-600 rounded-[3rem] py-20 px-8 text-center text-white shadow-2xl shadow-blue-200 relative overflow-hidden">
      
      {/* Decorative background circles (optional) */}
      <div className="absolute top-0 left-0 w-64 h-64 -translate-x-1/2 -translate-y-1/2 bg-blue-500 rounded-full opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 translate-x-1/2 translate-y-1/2 bg-blue-700 rounded-full opacity-50"></div>

      <div className="relative z-10">
        <h2 className="mb-6 text-4xl font-bold md:text-5xl">
          Ready To Transform Your Workflow?
        </h2>
        <p className="max-w-2xl mx-auto mb-10 text-lg text-blue-100">
          Join thousands of professionals who are already using Digitools to work smarter. 
          Start your free trial today.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 mb-8 md:flex-row">
          <button className="px-10 py-4 font-bold text-blue-600 transition-all bg-white rounded-full shadow-lg hover:bg-gray-50 active:scale-95">
            Explore Products
          </button>
          <button className="px-10 py-4 font-bold text-white transition-all border-2 rounded-full border-white/30 hover:bg-white/10 active:scale-95">
            View Pricing
          </button>
        </div>

        <p className="text-sm text-blue-200">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </div>
  </div>
</section>



    </div>
  );
};

export default Home;

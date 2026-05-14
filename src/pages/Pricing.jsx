import React from 'react';

const Pricing = () => {
  const plans = [
    { name: "Starter", price: 0, desc: "Perfect for getting started", features: ["10 free tools", "Basic templates", "Community support"] },
    { name: "Pro", price: 29, desc: "Best for professionals", features: ["All premium tools", "Unlimited templates", "Priority support"], popular: true },
    { name: "Enterprise", price: 99, desc: "For teams and businesses", features: ["Everything in Pro", "Team collaboration", "Custom integrations"] }
  ];

  return (
    <div className="px-6 py-24 mx-auto max-w-7xl">
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-black text-gray-900">Simple, Transparent Pricing</h2>
        <p className="mt-4 text-gray-500">Choose the plan that fits your needs.</p>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {plans.map((plan, i) => (
          <div key={i} className={`p-10 rounded-3xl border ${plan.popular ? 'border-[#7C3AED] bg-[#7C3AED] text-white' : 'border-gray-200 bg-white'}`}>
            {plan.popular && <span className="inline-block px-3 py-1 mb-4 text-xs font-bold text-black bg-yellow-400 rounded-full">Most Popular</span>}
            <h3 className="mb-2 text-2xl font-bold">{plan.name}</h3>
            <p className={`${plan.popular ? 'text-purple-100' : 'text-gray-500'} mb-6`}>{plan.desc}</p>
            <div className="mb-8 text-4xl font-black">${plan.price}<span className="text-sm font-normal">/Month</span></div>
            <ul className="mb-10 space-y-4">
              {plan.features.map((f, j) => <li key={j} className="flex items-center gap-2">✔ {f}</li>)}
            </ul>
            <button className={`w-full py-4 rounded-xl font-bold ${plan.popular ? 'bg-white text-[#7C3AED]' : 'bg-[#7C3AED] text-white'}`}>
              {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
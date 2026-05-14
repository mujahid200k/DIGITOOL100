import React from 'react';

const Footer = () => {          
  return (
    <footer className="bg-[#182030] text-white py-16 px-4">
      <div className="mx-auto max-w-7xl">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 gap-8 mb-16 md:grid-cols-6">
          
          {/* Logo & Description */}
          <div className="col-span-2">
            <h2 className="mb-6 text-3xl font-bold">DigiTools</h2>
            <p className="max-w-xs text-sm leading-relaxed text-gray-400">
              Premium digital tools for creators, professionals, and businesses. 
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* Product Column */}
          <div className="col-span-1">
            <h4 className="mb-6 font-semibold text-white">Product</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="transition-colors cursor-pointer hover:text-white">Features</li>
              <li className="transition-colors cursor-pointer hover:text-white">Pricing</li>
              <li className="transition-colors cursor-pointer hover:text-white">Templates</li>
              <li className="transition-colors cursor-pointer hover:text-white">Integrations</li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="col-span-1">
            <h4 className="mb-6 font-semibold text-white">Company</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="transition-colors cursor-pointer hover:text-white">About</li>
              <li className="transition-colors cursor-pointer hover:text-white">Blog</li>
              <li className="transition-colors cursor-pointer hover:text-white">Careers</li>
              <li className="transition-colors cursor-pointer hover:text-white">Press</li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="col-span-1">
            <h4 className="mb-6 font-semibold text-white">Resources</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="transition-colors cursor-pointer hover:text-white">Documentation</li>
              <li className="transition-colors cursor-pointer hover:text-white">Help Center</li>
              <li className="transition-colors cursor-pointer hover:text-white">Community</li>
              <li className="transition-colors cursor-pointer hover:text-white">Contact</li>
            </ul>
          </div>
          
          {/* Social Links Section (Updated) */}
          <div className="col-span-1">
            <h4 className="mb-6 font-semibold text-white">Social Links</h4>
            <div className="flex gap-3">
            {/* Instagram */}
            <a 
              href="https://instagram.com/yourprofile" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center transition-all bg-white rounded-full w-9 h-9 hover:bg-gray-200 hover:-translate-y-1"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" 
                alt="Instagram" 
                className="object-contain w-5 h-5"
              />
            </a>

            {/* Facebook */}
            <a 
              href="https://www.facebook.com/muhammed.mujahid.54293" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center transition-all bg-white rounded-full w-9 h-9 hover:bg-gray-200 hover:-translate-y-1"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg" 
                alt="Facebook" 
                className="object-contain w-5 h-5"
              />
            </a>

            {/* X (Twitter) */}
            <a 
              href="https://x.com/MuhammedMu34344" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center transition-all bg-white rounded-full w-9 h-9 hover:bg-gray-200 hover:-translate-y-1"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg" 
                alt="X" 
                className="object-contain w-4 h-4"
              />
            </a>
          </div>
        </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs text-gray-500 border-t border-gray-800 md:flex-row">
          <p>© 2026 DigiTools. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="cursor-pointer hover:text-white">Privacy Policy</span>
            <span className="cursor-pointer hover:text-white">Terms of Service</span>
            <span className="cursor-pointer hover:text-white">Cookies</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
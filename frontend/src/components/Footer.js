import React from 'react';
import { ShieldCheck, Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => (
  <footer className="bg-cardBg border-t border-gray-800 text-gray-400 py-12 px-10">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-white text-xl font-bold">
          <ShieldCheck className="text-accentRed w-6 h-6" />
          <span>SECURE<span className="text-accentRed">DEV</span></span>
        </div>
        <p className="text-sm leading-relaxed">
          The central hub for defensive security engineering and compliance management.
        </p>
      </div>
      <div>
        <h4 className="text-white font-bold mb-4">Resources</h4>
        <ul className="text-sm space-y-2">
          <li>OWASP Top 10</li>
          <li>NIST Framework</li>
          <li>MITRE ATT&CK</li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-bold mb-4">Contact</h4>
        <ul className="text-sm space-y-2">
          <li>Documentation</li>
          <li>Security Team</li>
          <li>Support</li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-bold mb-4">Stay Alert</h4>
        <div className="flex">
          <input type="text" placeholder="Email" className="bg-darkBg border border-gray-700 px-3 py-2 rounded-l w-full text-sm outline-none focus:border-accentRed"/>
          <button className="bg-accentRed text-white px-3 py-2 rounded-r hover:bg-red-700 transition">
            <Mail size={16}/>
          </button>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-xs">
      © {new Date().getFullYear()} SecureDev Hub. All Rights Reserved.
    </div>
  </footer>
);

export default Footer;
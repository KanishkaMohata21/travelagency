import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' }
];

export const SocialLinks = () => {
  return (
    <div className="text-center">
      <h3 className="text-xl font-semibold mb-6">Follow Us</h3>
      <div className="flex justify-center space-x-6">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all"
            aria-label={label}
          >
            <Icon className="w-6 h-6" />
          </a>
        ))}
      </div>
    </div>
  );
};
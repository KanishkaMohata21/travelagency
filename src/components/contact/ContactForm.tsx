import React from 'react';
import { Button } from '../common/Button';

export const ContactForm = () => {
  return (
    <form className="max-w-xl mx-auto space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="text"
          placeholder="First Name"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
          required
        />
      </div>
      <input
        type="email"
        placeholder="Email Address"
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
        required
      />
      <textarea
        placeholder="Your Message"
        rows={6}
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all resize-none"
        required
      />
      <Button type="submit" size="lg" className="w-full">
        Send Message
      </Button>
    </form>
  );
};
"use client"
import React from 'react';
import { FAQ } from './FAQ';

const faqs = [
  {
    question: 'How do I book a trip?',
    answer: 'You can book a trip through our website by selecting your desired destination and following the booking process, or contact our travel experts directly for assistance.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, bank transfers, and PayPal. Payment plans are also available for select packages.'
  },
  {
    question: 'Can I modify or cancel my booking?',
    answer: 'Yes, bookings can be modified or cancelled up to 30 days before departure. Please review our cancellation policy for specific terms.'
  }
];

export const FAQSection = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQ key={index} {...faq} />
        ))}
      </div>
    </div>
  );
};
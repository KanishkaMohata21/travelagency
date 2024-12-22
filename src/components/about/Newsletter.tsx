import React from 'react';
import { Container } from '../common/Container';
import { Mail } from 'lucide-react';
import { Button } from '../common/Button';

export const Newsletter = () => {
  return (
    <div className="bg-blue-600 py-20">
      <Container>
        <div className="max-w-2xl mx-auto text-center text-white">
          <Mail className="w-12 h-12 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="mb-8">Subscribe to our newsletter for travel tips and exclusive offers</p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <Button variant="secondary" size="lg">Subscribe</Button>
          </form>
        </div>
      </Container>
    </div>
  );
};
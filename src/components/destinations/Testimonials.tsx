import React from 'react';
import { Container } from '../common/Container';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    location: 'Visited Bali',
    quote: 'An unforgettable experience! The team made everything perfect.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    rating: 5
  },
  {
    name: 'Michael Chen',
    location: 'Visited Greece',
    quote: 'Professional service and amazing attention to detail.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
    rating: 5
  },
  {
    name: 'Emma Rodriguez',
    location: 'Visited Japan',
    quote: 'They helped create memories that will last a lifetime.',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80',
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <Container className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">What Our Travelers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map(({ name, location, quote, avatar, rating }) => (
          <div
            key={name}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <div className="flex items-center mb-4">
              <img src={avatar} alt={name} className="w-12 h-12 rounded-full mr-4" />
              <div>
                <h3 className="font-semibold">{name}</h3>
                <p className="text-gray-600 text-sm">{location}</p>
              </div>
            </div>
            <div className="flex text-yellow-400 mb-4">
              {[...Array(rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="text-gray-700">{quote}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};
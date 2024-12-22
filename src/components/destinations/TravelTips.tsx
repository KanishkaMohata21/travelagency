import React from 'react';
import { Container } from '../common/Container';
import { Compass, Sun, CreditCard, Plane } from 'lucide-react';

const tips = [
  {
    icon: Compass,
    title: 'Plan Ahead',
    description: 'Book accommodations and activities in advance for the best rates.'
  },
  {
    icon: Sun,
    title: 'Best Seasons',
    description: 'Research the ideal time to visit your chosen destination.'
  },
  {
    icon: CreditCard,
    title: 'Budget Tips',
    description: 'Save money with our insider tips and local recommendations.'
  },
  {
    icon: Plane,
    title: 'Travel Smart',
    description: 'Pack efficiently and travel with confidence using our guides.'
  }
];

export const TravelTips = () => {
  return (
    <div className="bg-gray-50 py-20">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-12">Travel Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tips.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-white p-6 rounded-lg shadow-md "
            >
              <Icon className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
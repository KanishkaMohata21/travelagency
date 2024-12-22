import React from 'react';
import { Container } from '../common/Container';
import { MessageSquare, Calendar, Plane, Heart } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: 'Consultation',
    description: 'We discuss your travel dreams and preferences'
  },
  {
    icon: Calendar,
    title: 'Planning',
    description: 'We craft your perfect itinerary'
  },
  {
    icon: Plane,
    title: 'Booking',
    description: 'We handle all reservations and logistics'
  },
  {
    icon: Heart,
    title: 'Experience',
    description: 'You enjoy your dream vacation'
  }
];

export const Process = () => {
  return (
    <Container className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map(({ icon: Icon, title, description }, index) => (
          <div
            key={title}
            className="relative "
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
                <Icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-blue-200 -translate-y-1/2 transform" />
            )}
          </div>
        ))}
      </div>
    </Container>
  );
};
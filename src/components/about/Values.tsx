import React from 'react';
import { Container } from '../common/Container';
import { Heart, Shield, Users, Globe } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Passion',
    description: 'We love what we do and put our heart into every journey we plan.'
  },
  {
    icon: Shield,
    title: 'Trust',
    description: 'Your safety and satisfaction are our top priorities.'
  },
  {
    icon: Users,
    title: 'Community',
    description: 'We build lasting relationships with our travelers and partners.'
  },
  {
    icon: Globe,
    title: 'Sustainability',
    description: 'Committed to responsible tourism and environmental protection.'
  }
];

export const Values = () => {
  return (
    <Container className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map(({ icon: Icon, title, description }, index) => (
          <div
            key={title}
            className="text-center p-6 rounded-lg bg-white shadow-lg"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <Icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};
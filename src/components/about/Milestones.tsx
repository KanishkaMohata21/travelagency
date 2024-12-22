import React from 'react';
import { Container } from '../common/Container';
import { Milestone } from './Milestone';
import { Users, Globe, Award, Heart } from 'lucide-react';

export const Milestones = () => {
  const milestones = [
    { icon: Users, number: '50,000+', label: 'Happy Travelers' },
    { icon: Globe, number: '100+', label: 'Destinations' },
    { icon: Award, number: '25+', label: 'Years Experience' },
    { icon: Heart, number: '98%', label: 'Satisfaction Rate' }
  ];

  return (
    <div className="bg-gray-50 py-20">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {milestones.map((milestone, index) => (
            <div
              key={milestone.label}
              className=""
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Milestone {...milestone} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
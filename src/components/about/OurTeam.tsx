import React from 'react';
import { Container } from '../common/Container';
import { TeamMember } from './TeamMember';

export const OurTeam = () => {
  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Travel Director',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80'
    },
    {
      name: 'Michael Chen',
      role: 'Adventure Specialist',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Luxury Travel Consultant',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80'
    }
  ];

  return (
    <Container className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.map((member, index) => (
          <div 
            key={member.name}
            className=""
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <TeamMember {...member} />
          </div>
        ))}
      </div>
    </Container>
  );
};
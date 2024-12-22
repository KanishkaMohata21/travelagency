import React from 'react';
import { Container } from '../../common/Container';
import { GuideCard } from './GuideCard';

const guides = [
  {
    title: 'Ultimate Japan Travel Guide',
    excerpt: 'Everything you need to know about traveling to Japan, from customs to cuisine.',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e',
    category: 'Asia'
  },
  {
    title: 'European Train Adventures',
    excerpt: 'How to plan the perfect rail journey through Europe\'s most scenic routes.',
    image: 'https://images.unsplash.com/photo-1513581166391-887a96ddeafd',
    category: 'Europe'
  },
  {
    title: 'Hidden Gems of South America',
    excerpt: 'Discover lesser-known destinations that will take your breath away.',
    image: 'https://images.unsplash.com/photo-1531449862596-6b0ae1fae0ad',
    category: 'South America'
  }
];

export const TravelGuides = () => {
  return (
    <div className="bg-gray-50 py-20">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-12">Travel Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map((guide) => (
            <div
              key={guide.title}
            >
              <GuideCard {...guide} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
import React from 'react';
import { Container } from '../common/Container';
import { DestinationCard } from './DestinationCard';

const destinations = [
  {
    name: 'Santorini',
    country: 'Greece',
    image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&q=80',
    rating: 5,
    price: '$1,299'
  },
  {
    name: 'Machu Picchu',
    country: 'Peru',
    image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&q=80',
    rating: 5,
    price: '$1,499'
  },
  {
    name: 'Kyoto',
    country: 'Japan',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80',
    rating: 4,
    price: '$1,199'
  },
  {
    name: 'Maldives',
    country: 'Maldives',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80',
    rating: 5,
    price: '$1,899'
  },
  {
    name: 'Swiss Alps',
    country: 'Switzerland',
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&q=80',
    rating: 4,
    price: '$1,399'
  },
  {
    name: 'Bali',
    country: 'Indonesia',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80',
    rating: 4,
    price: '$999'
  }
];

export const TopDestinations = () => {
  return (
    <Container className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Popular Destinations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((destination) => (
          <div
            key={destination.name}
            className=""
          >
            <DestinationCard {...destination} />
          </div>
        ))}
      </div>
    </Container>
  );
};
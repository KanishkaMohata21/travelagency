import React from 'react';
import { Container } from '../common/Container';
import { ServiceCard } from './ServiceCard';
import { Plane, Hotel, Map, Car, Compass, Headphones } from 'lucide-react';

export const ServiceCards = () => {
  const services = [
    {
      title: 'Guided Tours',
      description: 'Expert-led tours with local insights and hidden gems.',
      Icon: Compass
    },
    {
      title: 'Flight Bookings',
      description: 'Best deals on international and domestic flights.',
      Icon: Plane
    },
    {
      title: 'Hotel Reservations',
      description: 'Luxury stays at competitive prices worldwide.',
      Icon: Hotel
    },
    {
      title: 'Transportation',
      description: 'Seamless transfers and car rentals at your destination.',
      Icon: Car
    },
    {
      title: 'Custom Itineraries',
      description: 'Personalized travel plans tailored to your interests.',
      Icon: Map
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock assistance throughout your journey.',
      Icon: Headphones
    }
  ];

  return (
    <Container className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.title} className="">
            <ServiceCard {...service} />
          </div>
        ))}
      </div>
    </Container>
  );
};
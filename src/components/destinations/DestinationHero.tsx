import React from 'react';
import { Container } from '../common/Container';

export const DestinationHero = () => {
  return (
    <div 
      className="relative min-h-[70vh] flex items-center bg-fixed bg-cover bg-center"
      style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?auto=format&fit=crop&q=80")' }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
      <Container className="relative z-10 text-white">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold mb-6">
            Explore Dream Destinations
          </h1>
          <p className="text-xl">
            Discover breathtaking locations and unforgettable experiences across the globe
          </p>
        </div>
      </Container>
    </div>
  );
};
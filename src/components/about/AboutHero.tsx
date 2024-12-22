import React from 'react';
import { Container } from '../common/Container';

export const AboutHero = () => {
  return (
    <div 
      className="relative min-h-[60vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80")' }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <Container className="relative z-10 text-white text-center">
        <h1 className="text-5xl font-bold mb-6 ">
          Our Story
        </h1>
        <p className="max-w-2xl mx-auto text-xl ">
          Since 1970, weve been crafting unforgettable journeys and creating lasting memories for travelers around the globe.
        </p>
      </Container>
    </div>
  );
};
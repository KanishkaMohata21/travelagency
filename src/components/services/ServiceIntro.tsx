import React from 'react';
import { Container } from '../common/Container';
import { Compass } from 'lucide-react';

export const ServiceIntro = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8 animate-bounce">
            <Compass className="w-16 h-16 mx-auto" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 ">
            Travel Services That Take You Further
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            From personalized itineraries to luxury accommodations, we craft unforgettable travel experiences tailored just for you.
          </p>
        </div>
      </Container>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
};
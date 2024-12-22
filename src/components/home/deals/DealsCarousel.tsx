"use client"
import React, { useState } from 'react';
import { Container } from '../../common/Container';
import { DealCard } from './DealCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const deals = [
  {
    title: 'Bali Paradise',
    description: '7 days of tropical bliss',
    price: '$899',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4',
    discount: '30% OFF'
  },
  {
    title: 'Swiss Alps Adventure',
    description: '5 days ski package',
    price: '$1299',
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7',
    discount: '25% OFF'
  },
  {
    title: 'Greek Islands',
    description: '10 days island hopping',
    price: '$1499',
    image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e',
    discount: '20% OFF'
  }
];

export const DealsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((current) => (current + 1) % deals.length);
  const prev = () => setCurrentIndex((current) => (current - 1 + deals.length) % deals.length);

  return (
    <Container className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Exclusive Deals</h2>
      <div className="relative">
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {deals.map((deal) => (
              <div key={deal.title} className="w-full flex-shrink-0 px-4">
                <DealCard {...deal} />
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </Container>
  );
};
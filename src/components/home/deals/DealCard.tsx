import React from 'react';
import { Button } from '../../common/Button';

interface DealProps {
  title: string;
  description: string;
  price: string;
  image: string;
  discount: string;
}

export const DealCard = ({ title, description, price, image, discount }: DealProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl">
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full">
        {discount}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold">{price}</span>
          <Button variant="primary" size="sm">Book Now</Button>
        </div>
      </div>
    </div>
  );
};
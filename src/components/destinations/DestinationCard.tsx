import React from 'react';
import { MapPin } from 'lucide-react';

interface DestinationCardProps {
  name: string;
  country: string;
  image: string;
  rating: number;
  price: string;
}

export const DestinationCard = ({ name, country, image, rating, price }: DestinationCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2">
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      <div className="absolute bottom-0 p-6 w-full">
        <div className="flex items-center text-yellow-400 mb-2">
          {[...Array(rating)].map((_, i) => (
            <span key={i} className="text-lg">★</span>
          ))}
        </div>
        <h3 className="text-2xl font-bold text-white mb-1">{name}</h3>
        <div className="flex items-center text-white/80 mb-3">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{country}</span>
        </div>
        <p className="text-white font-semibold">
          From <span className="text-xl">{price}</span>
        </p>
      </div>
    </div>
  );
};
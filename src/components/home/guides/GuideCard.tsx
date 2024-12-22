import React from 'react';
import { ArrowRight } from 'lucide-react';

interface GuideProps {
  title: string;
  excerpt: string;
  image: string;
  category: string;
}

export const GuideCard = ({ title, excerpt, image, category }: GuideProps) => {
  return (
    <div className="group cursor-pointer">
      <div className="mb-4 overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <span className="text-blue-600 font-medium">{category}</span>
      <h3 className="text-xl font-bold mt-2 mb-3 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 mb-4">{excerpt}</p>
      <div className="flex items-center text-blue-600 font-medium">
        Read More
        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-2" />
      </div>
    </div>
  );
};
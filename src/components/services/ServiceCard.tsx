import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, Icon }) => {
  return (
    <div className="group bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="mb-6">
        <Icon className="w-12 h-12 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
      </div>
      <h3 className="text-xl font-semibold mb-4 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};
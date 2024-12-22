import React from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
}

export const TeamMember = ({ name, role, image }: TeamMemberProps) => {
  return (
    <div className="group relative perspective-1000">
      <div className="relative duration-1000 preserve-3d group-hover:rotate-y-180">
        <div className="backface-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-80 object-cover rounded-lg"
          />
        </div>
        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-blue-600 rounded-lg p-6 flex flex-col items-center justify-center text-white">
          <h3 className="text-xl font-semibold mb-2">{name}</h3>
          <p className="text-blue-100">{role}</p>
        </div>
      </div>
    </div>
  );
};
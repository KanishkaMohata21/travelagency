import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MilestoneProps {
  icon: LucideIcon;
  number: string;
  label: string;
}

export const Milestone = ({ icon: Icon, number, label }: MilestoneProps) => {
  return (
    <div className="text-center">
      <Icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
      <div className="text-4xl font-bold mb-2">{number}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
};
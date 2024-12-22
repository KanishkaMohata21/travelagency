import { Process } from '@/components/services/Process';
import { ServiceCards } from '@/components/services/ServiceCards';
import { ServiceIntro } from '@/components/services/ServiceIntro';
import React from 'react';

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <ServiceIntro />
      <ServiceCards />
      <Process />
    </div>
  );
};

export default ServicesPage;
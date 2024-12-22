import { DestinationHero } from '@/components/destinations/DestinationHero';
import { SeasonalDeals } from '@/components/destinations/SeasonalDeals';
import { Testimonials } from '@/components/destinations/Testimonials';
import { TopDestinations } from '@/components/destinations/TopDestinations';
import { TravelTips } from '@/components/destinations/TravelTips';
import React from 'react';

const DestinationPage = () => {
  return (
    <div className="min-h-screen">
      <DestinationHero />
      <TopDestinations />
      <SeasonalDeals />
      <TravelTips />
      <Testimonials />
    </div>
  );
};

export default DestinationPage;
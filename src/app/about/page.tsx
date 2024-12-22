import { AboutHero } from '@/components/about/AboutHero';
import { Milestones } from '@/components/about/Milestones';
import { Newsletter } from '@/components/about/Newsletter';
import { OurTeam } from '@/components/about/OurTeam';
import { Values } from '@/components/about/Values';
import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <Values />
      <Milestones />
      <OurTeam />
      <Newsletter />
    </div>
  );
};


export default AboutPage;
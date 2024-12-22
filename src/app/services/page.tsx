"use client"
import  {motion}  from 'framer-motion';
import  {Hero}  from '@/components/services/Hero';
import  {FeaturedServices}  from '@/components/services/FeaturedServices';
import  {Destinations}  from '@/components/services/Destinations';
import  {Process}  from '@/components/services/Process';
import  {Pricing}  from '@/components/services/Pricing';
import  {Testimonials}  from '@/components/services/Testimonials';
import  {ContactCTA}  from '@/components/services/ContactCTA';

const ServicesPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <FeaturedServices />
      <Destinations />
      <Process />
      <Pricing />
      <Testimonials />
      <ContactCTA />
    </motion.div>
  );
};



export default ServicesPage;
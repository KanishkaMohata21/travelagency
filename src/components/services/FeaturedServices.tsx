import { motion } from 'framer-motion';
import { Plane, Hotel, Ship, Train, Users, Map, Compass } from 'lucide-react';

const services = [
  { icon: Plane, title: 'Flight Bookings', description: 'International and domestic flights at competitive prices', color: 'blue' },
  { icon: Hotel, title: 'Hotel Reservations', description: 'Luxury and budget accommodations worldwide', color: 'green' },
  { icon: Ship, title: 'Cruise Packages', description: 'Unforgettable ocean and river cruise experiences', color: 'purple' },
  { icon: Train, title: 'Rail Tours', description: 'Scenic rail journeys across continents', color: 'orange' },
  { icon: Users, title: 'Group Tours', description: 'Guided tours for all group sizes', color: 'pink' },
  { icon: Map, title: 'Custom Itineraries', description: 'Personalized travel planning services', color: 'red' },
  { icon: Compass, title: 'Adventure Tours', description: 'Exciting expeditions and outdoor activities', color: 'blue' },
];

export const FeaturedServices = () => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.2 } }
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="py-20 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
              className={`bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-l-4 border-${service.color}-600`}
            >
              <service.icon className={`w-12 h-12 text-${service.color}-600 mb-4`} />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
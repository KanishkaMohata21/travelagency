import { motion } from 'framer-motion';
import { Search, Calendar, Plane, Heart } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Discover',
    description: 'Browse our curated selection of destinations and experiences',
  },
  {
    icon: Calendar,
    title: 'Plan',
    description: 'Work with our experts to create your perfect itinerary',
  },
  {
    icon: Plane,
    title: 'Travel',
    description: 'Enjoy your journey with our 24/7 travel support',
  },
  {
    icon: Heart,
    title: 'Share',
    description: 'Share your memories and inspire others to explore',
  },
];

export const Process = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          How It Works
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <div className="relative mb-6">
                <step.icon className="w-12 h-12 mx-auto text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
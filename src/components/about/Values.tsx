import { motion } from 'framer-motion';
import { Heart, Shield, Globe, Users } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Passion',
    description: 'We are passionate about creating exceptional travel experiences',
    color: 'pink'
  },
  {
    icon: Shield,
    title: 'Trust',
    description: 'Building lasting relationships through reliability and transparency',
    color: 'blue'
  },
  {
    icon: Globe,
    title: 'Sustainability',
    description: 'Committed to responsible and sustainable tourism practices',
    color: 'green'
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Supporting local communities and fostering cultural exchange',
    color: 'purple'
  },
];

export const Values = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Our Core Values
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`text-center p-6 rounded-lg bg-white shadow-lg border-t-4 border-${value.color}-600`}
            >
              <value.icon className={`w-12 h-12 mx-auto text-${value.color}-600 mb-4`} />
              <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
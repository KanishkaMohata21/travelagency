import { motion } from 'framer-motion';
import { TreePine, Recycle, Heart, Users } from 'lucide-react';

const impacts = [
  {
    icon: TreePine,
    title: 'Environmental',
    stat: '1M+',
    description: 'Trees planted through our eco-tourism initiatives',
  },
  {
    icon: Users,
    title: 'Community',
    stat: '50+',
    description: 'Local communities supported worldwide',
  },
  {
    icon: Heart,
    title: 'Social',
    stat: '100k+',
    description: 'Lives positively impacted through tourism',
  },
  {
    icon: Recycle,
    title: 'Sustainability',
    stat: '90%',
    description: 'Of our tours use eco-friendly practices',
  },
];

export const Impact = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Our Impact
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impacts.map((impact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <impact.icon className="w-12 h-12 mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">{impact.title}</h3>
              <p className="text-3xl font-bold text-blue-600 mb-2">{impact.stat}</p>
              <p className="text-gray-600">{impact.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
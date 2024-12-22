import { motion } from 'framer-motion';
import { Award, Users, Globe } from 'lucide-react';

const stats = [
  { icon: Award, label: 'Awards', value: '50+', color: 'pink' },
  { icon: Users, label: 'Clients', value: '10k+', color: 'purple' },
  { icon: Globe, label: 'Destinations', value: '100+', color: 'green' },
];

export const Story = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2010, we began with a simple mission: to make extraordinary travel experiences accessible to everyone. Over the years, weve grown from a small local agency to a global travel partner, serving thousands of happy travelers worldwide.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`text-center p-4 rounded-lg bg-${stat.color}-50 border border-${stat.color}-200`}
                >
                  <stat.icon className={`w-8 h-8 mx-auto text-${stat.color}-600 mb-2`} />
                  <h4 className={`font-bold text-xl text-${stat.color}-700`}>{stat.value}</h4>
                  <p className={`text-${stat.color}-600`}>{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3"
              alt="Travel experiences"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-lg -z-10 transform translate-x-4 translate-y-4"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
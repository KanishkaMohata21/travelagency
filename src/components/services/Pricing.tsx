import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: '$299',
    color: 'blue',
    features: ['Flight Booking', 'Hotel Booking', '24/7 Support', 'Travel Insurance'],
  },
  {
    name: 'Premium',
    price: '$599',
    color: 'purple',
    features: ['All Basic Features', 'Private Tours', 'Airport Transfers', 'Luxury Accommodations'],
  },
  {
    name: 'Elite',
    price: '$999',
    color: 'green',
    features: ['All Premium Features', 'Private Jet Options', 'Yacht Charters', 'Personal Concierge'],
  },
];

export const Pricing = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          Travel Packages
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`bg-gradient-to-b from-${plan.color}-50 to-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border border-${plan.color}-100`}
            >
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className={`text-4xl font-bold text-${plan.color}-600 mb-6`}>{plan.price}</p>
              <ul className="space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check className={`w-5 h-5 text-${plan.color}-500 mr-2`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full mt-8 bg-${plan.color}-600 text-white py-2 rounded-lg hover:bg-${plan.color}-700 transition-colors`}
              >
                Choose Plan
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
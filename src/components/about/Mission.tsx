import { motion } from 'framer-motion';
import { Target } from 'lucide-react';

export const Mission = () => {
  return (
    <div className="py-16 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Target className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl max-w-3xl mx-auto text-white/90">
            To transform travel dreams into unforgettable experiences, connecting people with extraordinary destinations 
            while promoting sustainable and responsible tourism practices that benefit both travelers and local communities.
          </p>
        </motion.div>
      </div>
    </div>
  );
};
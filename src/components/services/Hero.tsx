import { motion } from 'framer-motion';
import { Plane } from 'lucide-react';

export const Hero = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3")' }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/50 to-purple-600/50" />
      <motion.div 
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2 }}
        className="relative text-center text-white"
      >
        <Plane className="w-16 h-16 mx-auto mb-4" />
        <h1 className="text-5xl font-bold mb-4">Our Services</h1>
        <p className="text-xl max-w-2xl mx-auto">Discover a world of exceptional travel experiences tailored just for you</p>
      </motion.div>
    </motion.div>
  );
};
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const awards = [
  {
    year: '2023',
    title: 'Best Travel Agency',
    organization: 'Travel Industry Awards',
  },
  {
    year: '2022',
    title: 'Sustainability Excellence',
    organization: 'Green Tourism Board',
  },
  {
    year: '2021',
    title: 'Customer Service Award',
    organization: 'Tourism Excellence',
  },
  {
    year: '2020',
    title: 'Innovation in Travel',
    organization: 'Digital Travel Awards',
  },
];

export const Awards = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Recognition & Awards
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-50 p-6 rounded-lg text-center"
            >
              <Award className="w-12 h-12 mx-auto text-blue-600 mb-4" />
              <p className="text-sm text-blue-600 mb-2">{award.year}</p>
              <h3 className="text-xl font-bold mb-2">{award.title}</h3>
              <p className="text-gray-600">{award.organization}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
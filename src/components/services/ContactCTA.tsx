import { motion } from 'framer-motion';
import { Phone, Mail, Calendar } from 'lucide-react';

const contacts = [
  { icon: Phone, label: 'Call Us', href: 'tel:+1234567890', color: 'blue' },
  { icon: Mail, label: 'Email Us', href: 'mailto:info@travelpro.com', color: 'purple' },
  { icon: Calendar, label: 'Book Consultation', href: '#book', color: 'green' }
];

export const ContactCTA = () => {
  return (
    <div className="py-16 bg-gradient-to-br from-blue-600 via-purple-600 to-green-600">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 text-white/90">Contact us today and let us plan your perfect trip</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contacts.map((contact, index) => (
              <motion.a
                key={index}
                href={contact.href}
                whileHover={{ scale: 1.05 }}
                className={`flex items-center justify-center space-x-2 bg-${contact.color}-500/20 p-4 rounded-lg backdrop-blur-sm border border-white/20 hover:bg-${contact.color}-500/30 transition-colors`}
              >
                <contact.icon className="w-6 h-6" />
                <span>{contact.label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
import React from 'react';
import { Container } from '../common/Container';
import { Mail, Phone, Clock } from 'lucide-react';

export const ContactHero = () => {
  return (
    <div className="relative min-h-[60vh] flex items-center bg-cover bg-center"
      style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80")' }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
      <Container className="relative z-10 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 ">
            Get in Touch
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { icon: Mail, text: 'info@travelagency.com' },
              { icon: Phone, text: '+1 (555) 123-4567' },
              { icon: Clock, text: '24/7 Support' }
            ].map(({ icon: Icon, text }) => (
              <div 
                key={text}
                className="flex flex-col items-center "
              >
                <Icon className="w-8 h-8 mb-3" />
                <span className="text-lg">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};
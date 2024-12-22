import { Container } from '@/components/common/Container';
import { ContactForm } from '@/components/contact/ContactForm';
import { ContactHero } from '@/components/contact/ContactHero';
import { FAQSection } from '@/components/contact/FAQSection';
import { SocialLinks } from '@/components/contact/SocialLinks';
import React from 'react';


 const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <ContactHero />
      <Container className="py-20">
        <div className="space-y-20">
          <ContactForm />
          <FAQSection />
          <SocialLinks />
        </div>
      </Container>
    </div>
  );
};

export default ContactPage;
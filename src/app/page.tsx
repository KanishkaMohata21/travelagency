import Destinations from "@/components/components/Destinations";
import Footer from "@/components/components/Footer";
import Hero from "@/components/components/Hero";
import Navbar from "@/components/components/Navbar";
import Services from "@/components/components/Services";
import TestimonialSection from "@/components/components/testimonials";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Services />
      <Destinations />
      <TestimonialSection />
      <Footer />
    </div>
  );
}

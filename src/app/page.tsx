import { FAQSection } from "@/components/contact/FAQSection";
import { DealsCarousel } from "@/components/home/deals/DealsCarousel";
import Destinations from "@/components/home/Destinations";
import { PhotoGallery } from "@/components/home/gallery/PhotoGallery";
import { TravelGuides } from "@/components/home/guides/TravelGuides";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import TestimonialSection from "@/components/home/testimonials";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Services />
      <Destinations />
      <TestimonialSection />
      <DealsCarousel />
      <TravelGuides />
      <PhotoGallery />
      <div className="bg-gray-50 py-20">
        <FAQSection />
      </div>
    </div>
  );
}

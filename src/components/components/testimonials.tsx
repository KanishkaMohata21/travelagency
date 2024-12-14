// TestimonialSection.js

import { testimonials } from "@/constants/testimonials";
import { AnimatedTestimonials } from "../ui/animated-testimonials";


const TestimonialSection = () => {
  return (
    <div>
      <h2 className="text-center text-3xl font-bold py-8">What Our Customers Say</h2>
      <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
    </div>
  );
};

export default TestimonialSection;

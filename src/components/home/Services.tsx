"use client"
import { useState } from 'react';
import { motion } from "framer-motion";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Services Data
import { MapPin, Plane, Hotel, Camera, Globe, Calendar } from 'lucide-react';

export const services = [
  {
    title: 'Corporate Travel Packages',
    description: 'Exclusive corporate fares designed for seamless business travel.',
    icon: Globe,
    color: 'blue',
    features: ['Tailored Itineraries', 'Exclusive Corporate Rates', 'Flexible Rescheduling']
  },
  {
    title: 'Air Travel Deals',
    description: 'Corporate fares and exclusive coupon deals for flights worldwide.',
    icon: Plane,
    color: 'green',
    features: ['Global Destinations', 'Discounted Corporate Rates', '24/7 Assistance']
  },
  {
    title: 'Hotel Bookings',
    description: 'B2B rates for premium accommodations that suit every budget.',
    icon: Hotel,
    color: 'purple',
    features: ['Wide Range of Options', 'Verified Listings', 'Special B2B Discounts']
  },
  {
    title: 'Train Tickets',
    description: 'Effortless confirmed and Tatkal bookings for hassle-free train travel.',
    icon: MapPin,
    color: 'orange',
    features: ['Instant Confirmation', 'Tatkal Booking', 'Nationwide Coverage']
  },
  {
    title: 'Bus Tickets',
    description: 'Nationwide bus booking services for intercity and local travel.',
    icon: Camera,
    color: 'pink',
    features: ['Comfortable Rides', 'Budget-friendly Options', 'Real-time Availability']
  },
  {
    title: 'Visa Processing',
    description: 'Hassle-free visa applications for all your travel needs.',
    icon: Calendar,
    color: 'red',
    features: ['Simplified Documentation', 'Quick Approvals', 'Comprehensive Support']
  }
] as const;

// Badge Component
const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", 
  {
    variants: {
      variant: {
        blue: "bg-blue-100 text-blue-800",
        green: "bg-green-100 text-green-800",
        purple: "bg-purple-100 text-purple-800",
        orange: "bg-orange-100 text-orange-800",
        pink: "bg-pink-100 text-pink-800",
        red: "bg-red-100 text-red-800",
      },
    },
    defaultVariants: {
      variant: "blue",
    },
  }
);

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'blue' | 'green' | 'purple' | 'orange' | 'pink' | 'red'; // Adjusted this line to match the badgeVariants
}

function Badge({ className, variant = "blue", ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

// Custom Button Component with 'variant' prop
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'ghost' | 'solid' | 'outline'; // Define variants as needed
}

const Button = ({ variant = 'ghost', className, children, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        "transition-colors duration-300", // add the base styles
        variant === 'ghost' ? "bg-transparent text-gray-600" : "bg-blue-600 text-white", // handle variant logic
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

// Animation Variants
const animations = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  },
  item: {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }
};

// Main Component
export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-lg text-gray-600">
            Empowering your digital transformation with cutting-edge solutions and expertise
          </p>
        </div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={animations.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={animations.item}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative group"
              >
                <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl border border-gray-100">
                  {/* Icon */}
                  <div 
                    className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300",
                      hoveredIndex === index 
                        ? `bg-${service.color}-600 text-white` 
                        : `bg-${service.color}-100 text-${service.color}-600`
                    )}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <Badge
                        key={featureIndex}
                        variant={service.color} // Pass the variant from the service
                        className="mr-2"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Button */}
                  <Button
                    variant="ghost"
                    className={cn(
                      "mt-6 w-full justify-center transition-colors duration-300",
                      `group-hover:bg-${service.color}-600 group-hover:text-white`
                    )}
                  >
                    Learn More
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

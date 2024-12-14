export interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface Destination {
  title: string;
  image: string;
  description: string;
  itinerary?: string;
}

export interface Testimonial {
  name: string;
  text: string;
  rating: number;
  image: string;
}
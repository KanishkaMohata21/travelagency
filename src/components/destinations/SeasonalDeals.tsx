import React from 'react';
import { Container } from '../common/Container';
import { Calendar, Sun, Snowflake, Leaf } from 'lucide-react';

interface SeasonalDeal {
  season: string;
  icon: React.ReactNode;
  destinations: string[];
  discount: string;
}

const deals: SeasonalDeal[] = [
  {
    season: 'Summer',
    icon: <Sun className="w-8 h-8" />,
    destinations: ['Greece', 'Croatia', 'Spain'],
    discount: '20% OFF'
  },
  {
    season: 'Winter',
    icon: <Snowflake className="w-8 h-8" />,
    destinations: ['Swiss Alps', 'Norway', 'Canada'],
    discount: '25% OFF'
  },
  {
    season: 'Spring',
    icon: <Leaf className="w-8 h-8" />,
    destinations: ['Japan', 'Netherlands', 'France'],
    discount: '15% OFF'
  },
  {
    season: 'Last Minute',
    icon: <Calendar className="w-8 h-8" />,
    destinations: ['Bali', 'Thailand', 'Vietnam'],
    discount: '30% OFF'
  }
];

export const SeasonalDeals = () => {
  return (
    <div className="bg-gray-50 py-20">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-12">Seasonal Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {deals.map((deal) => (
            <div
              key={deal.season}
              className="bg-white rounded-xl p-6 shadow-md "
            >
              <div className="text-blue-600 mb-4">{deal.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{deal.season}</h3>
              <ul className="text-gray-600 mb-4">
                {deal.destinations.map(dest => (
                  <li key={dest}>{dest}</li>
                ))}
              </ul>
              <p className="text-2xl font-bold text-blue-600">{deal.discount}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
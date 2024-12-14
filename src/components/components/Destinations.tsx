import { destinations } from "@/constants/destinations";


export default function Destinations() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Popular Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="group relative h-[400px] [transform-style:preserve-3d] [transition:transform_0.8s] hover:[transform:rotateY(180deg)]"
            >
              {/* Front of the card */}
              <div className="absolute inset-0 [backface-visibility:hidden]">
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-bold text-white">{destination.title}</h3>
                  <p className="text-lg text-gray-300">{destination.description}</p>
                </div>
              </div>

              {/* Back of the card */}
              <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden] bg-white rounded-xl p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">{destination.title}</h3>
                <p className="text-gray-700 mb-4">{destination.itinerary}</p>
                <p className="text-sm text-gray-500 italic mt-4 cursor-pointer hover:text-blue-500">View Itinerary Details</p> {/* Updated text */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

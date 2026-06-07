import Image from 'next/image';

const showrooms = [
  {
    id: 1,
    name: 'Dubai Showroom',
    address: '123 Sheikh Zayed Road, Al Quoz Industrial Area 3, Near Mall of the Emirates, Dubai, UAE',
    image: '/images/yellow-car.jpg',
    mapLink: 'https://www.google.com/maps/search/123+Sheikh+Zayed+Road,+Al+Quoz+Industrial+Area+3,+Near+Mall+of+the+Emirates,+Dubai,+UAE/@25.2081882,55.2740198,17z?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D',
  },
  {
    id: 2,
    name: 'Abu Dhabi Showroom',
    address: '123 Sheikh Zayed Road, Al Quoz Industrial Area 3, Near Mall of the Emirates, Dubai, UAE',
    image: '/images/Black-car.jpg',
    mapLink: 'https://www.google.com/maps/search/123+Sheikh+Zayed+Road,+Al+Quoz+Industrial+Area+3,+Near+Mall+of+the+Emirates,+Dubai,+UAE/@25.2081882,55.2740198,17z?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D',
  },
];

export default function Showrooms() {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#d6d6d6' }}>
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          <h2
            className="text-[#0f172a] text-2xl font-bold uppercase tracking-wide"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            OUR SHOWROOMS
          </h2>
          <p
            className="text-[#0f172a] text-base leading-relaxed"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.
          </p>
        </div>

        {/* Showrooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {showrooms.map((showroom) => (
            <a
              key={showroom.id}
              href={showroom.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* Image with white padding */}
              <div className="p-3">
                <div className="relative h-80 overflow-hidden rounded-lg">
                  <Image
                    src={showroom.image}
                    alt={showroom.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Navy Info Section with white padding */}
              <div className="px-3 pb-3">
                <div className="bg-[#0f172a] rounded-lg px-5 py-4">
                  <h3
                    className="text-white text-lg font-bold mb-1"
                    style={{ fontFamily: 'Syne, sans-serif' }}
                  >
                    {showroom.name}
                  </h3>
                  <p
                    className="text-gray-400 text-sm leading-relaxed"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    {showroom.address}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
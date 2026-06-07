export default function AboutStatsGrid() {
  return (
    <section className="py-16 px-4" style={{ backgroundColor: '#d6d6d6' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-3 gap-4">
          
          {/* Row 1 */}
          {/* Grey Card - 10+ Years */}
          <div className="bg-[#b8b8b8] rounded-2xl p-8 flex flex-col items-center justify-center text-center h-48">
            <h3
              className="text-[#0f172a] text-3xl font-bold mb-2"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              10+ Years
            </h3>
            <p className="text-[#0f172a] text-xs uppercase tracking-wider font-medium">
              Experience in Car Sales
            </p>
          </div>

          {/* Image Card - Dubai Building */}
          <div className="relative h-48 rounded-2xl overflow-hidden">
            <img
              src="/images/dubai-building.jpg"
              alt="Dubai"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Green Card - 1000+ */}
          <div className="bg-[#31b56b] rounded-2xl p-8 flex flex-col items-center justify-center text-center h-48">
            <h3
              className="text-white text-3xl font-bold mb-2"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              1000+
            </h3>
            <p className="text-white text-xs uppercase tracking-wider font-medium">
              Happy Clients
            </p>
          </div>

          {/* Row 2 */}
          {/* Green Card - 300+ */}
          <div className="bg-[#31b56b] rounded-2xl p-8 flex flex-col items-center justify-center text-center h-48">
            <h3
              className="text-white text-3xl font-bold mb-2"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              300+
            </h3>
            <p className="text-white text-xs uppercase tracking-wider font-medium">
              Cars in Stock
            </p>
          </div>

          {/* Image Card - Red Car */}
          <div className="relative h-48 rounded-2xl overflow-hidden">
            <img
              src="/images/Red-car.jpg"
              alt="Car"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Grey Card - 50+ */}
          <div className="bg-[#b8b8b8] rounded-2xl p-8 flex flex-col items-center justify-center text-center h-48">
            <h3
              className="text-[#0f172a] text-3xl font-bold mb-2"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              50+
            </h3>
            <p className="text-[#0f172a] text-xs uppercase tracking-wider font-medium">
              Car Brands
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
export default function AboutStats() {
  return (
    <section 
      className="py-16 px-4"
      style={{ backgroundColor: '#b2b2b2' }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="bg-[#0f172a] rounded-2xl p-10 md:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            
            {/* Left: About Us */}
            <div>
              <p
                className="text-[#31b56b] text-sm font-medium uppercase tracking-wider mb-3"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                ABOUT US
              </p>
              <h2
                className="text-white text-[28px] font-bold leading-[36.4px] mb-2"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                BUILT ON CAR PASSION,
              </h2>
              <h2
                className="text-white text-[28px] font-bold leading-[36.4px] mb-6"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                FOCUSED ON YOUR NEEDS
              </h2>
              <p
                className="text-[#a2a7ba] text-[18px] font-normal leading-[27px]"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
              </p>
            </div>

            {/* Right: Stats Grid 2x2 with Dividers */}
            <div className="grid grid-cols-2">
              
              {/* Stat 1 - Top Left */}
              <div className="text-center p-6 border-r border-b border-white/10">
                <h3
                  className="text-white text-[32px] font-bold leading-tight mb-1"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  1000+
                </h3>
                <p
                  className="text-[#a2a7ba] text-sm font-medium uppercase tracking-wider"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  HAPPY CLIENTS
                </p>
              </div>

              {/* Stat 2 - Top Right */}
              <div className="text-center p-6 border-b border-white/10">
                <h3
                  className="text-white text-[32px] font-bold leading-tight mb-1"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  500+
                </h3>
                <p
                  className="text-[#a2a7ba] text-sm font-medium uppercase tracking-wider"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  CARS SOLD
                </p>
              </div>

              {/* Stat 3 - Bottom Left */}
              <div className="text-center p-6 border-r border-white/10">
                <h3
                  className="text-white text-[32px] font-bold leading-tight mb-1"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  300+
                </h3>
                <p
                  className="text-[#a2a7ba] text-sm font-medium uppercase tracking-wider"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  CARS IN STOCK
                </p>
              </div>

              {/* Stat 4 - Bottom Right */}
              <div className="text-center p-6">
                <h3
                  className="text-white text-[32px] font-bold leading-tight mb-1"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  50+
                </h3>
                <p
                  className="text-[#a2a7ba] text-sm font-medium uppercase tracking-wider"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  CAR BRANDS
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
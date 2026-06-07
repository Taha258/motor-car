import Image from 'next/image';

export default function AboutFounder() {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#dedede' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Founder Image */}
          <div className="relative h-[500px] rounded-xl overflow-hidden">
            <Image
              src="/images/men.jpg"
              alt="Founder"
              fill
              className="object-cover"
            />
          </div>

          {/* Right: Founder Info */}
          <div>
            <h2
              className="text-[#0f172a] text-2xl font-bold uppercase tracking-wide mb-6"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              OUR FOUNDER
            </h2>
            <p
              className="text-[#0f172a] text-base leading-relaxed mb-6 opacity-80"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            
            <h3
              className="text-[#0f172a] text-xl font-bold uppercase tracking-wide mb-4"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              DRIVEN VISION
            </h3>
            <p
              className="text-[#0f172a] text-base leading-relaxed opacity-80"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
import Image from 'next/image';

export default function AboutStory() {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#dedede' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Text */}
          <div>
            <p
              className="text-[#31b56b] text-sm font-medium uppercase tracking-wider mb-3"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              OUR STORY
            </p>
            <h2
              className="text-[#0f172a] text-[28px] font-bold leading-[36.4px] mb-2 uppercase"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              BUILT WITH PURPOSE,
            </h2>
            <h2
              className="text-[#0f172a] text-[28px] font-bold leading-[36.4px] mb-6 uppercase"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              DRIVEN BY INTEGRITY
            </h2>
            <p
              className="text-[#0f172a] text-[18px] font-normal leading-[27px] mb-4 opacity-80"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi viverra ornare, eros dolor interdum nulla.
            </p>
            <p
              className="text-[#0f172a] text-[18px] font-normal leading-[27px] opacity-80"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
            </p>
          </div>

          {/* Right: Image */}
          <div className="relative h-80 rounded-xl overflow-hidden">
            <Image
              src="/images/yellow-car.jpg"
              alt="About MotorDeal"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
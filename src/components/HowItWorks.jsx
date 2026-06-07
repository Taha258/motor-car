import Image from 'next/image';
import Link from 'next/link';

const steps = [
  {
    icon: '/images/6732899e5c80c65a5fdcf83b_car.svg',
    title: 'Choose Your Car',
    description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur adipisci velit.',
  },
  {
    icon: '/images/67328b7e87eee52830b9bf6b_enquiry.svg',
    title: 'Submit Enquiry',
    description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur adipisci velit.',
  },
  {
    icon: '/images/67328b19535bef838e4f29d4_paperwork.svg',
    title: 'Finalize Paperwork',
    description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur adipisci velit.',
  },
  {
    icon: '/images/6732899e086419eea40646f9_steering-wheel.svg',
    title: 'Hit The Road',
    description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur adipisci velit.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#d6d6d6' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Text Content */}
          <div>
            <p
              className="text-[#31b56b] text-[18px] font-bold leading-[27px] uppercase tracking-wider mb-2"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              HOW IT WORKS
            </p>
            <h2
              className="text-[#0f1523] text-[28px] font-bold leading-[36.4px] mb-4 uppercase"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              THE EASIEST WAY TO
              <br />
              FIND YOUR NEXT CAR
            </h2>
            <p
              className="text-[#0f1523] text-[18px] font-normal leading-[27px] mb-8"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.
            </p>
            <Link
              href="/showroom"
              className="inline-block bg-[#31b56b] text-white text-sm font-semibold px-6 py-3 rounded-lg hover:bg-[#28a05e] transition-colors"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              GET STARTED
            </Link>
          </div>

          {/* Right: Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
            {steps.map((step, index) => (
              <div key={index}>
                <Image
                  src={step.icon}
                  alt={step.title}
                  width={32}
                  height={32}
                  className="mb-4"
                />
                <h3
                  className="text-[#0f1523] text-[20px] font-medium leading-[26px] mb-2"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-[#0f1523] text-sm leading-relaxed opacity-80"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
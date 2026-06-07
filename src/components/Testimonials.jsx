'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Alex Grant',
    role: 'Instagram',
    image: '/images/6738c1f8a220b4656b9a38e8_tom.jpg',
    rating: 5,
    text: 'Lorem ipsum dolor amet, consectetuer adipiscing elit. In curae litora sociosqu mus hendrerit quis lectus sed vivamus scelerisque vehicula vestibulum.',
  },
  {
    id: 2,
    name: 'Sara Blake',
    role: 'Facebook',
    image: '/images/6738c1f7ac831b128ccfcc33_Sara-p-500.jpg',
    rating: 5,
    text: 'Lorem ipsum dolor amet, consectetuer adipiscing elit. In curae litora sociosqu mus hendrerit quis lectus sed vivamus scelerisque vehicula vestibulum.',
  },
  {
    id: 3,
    name: 'Jack Lee',
    role: 'X (twitter)',
    image: '/images/6738c1f8ccc3d328d217bf7c_Alex.jpg',
    rating: 5,
    text: 'Lorem ipsum dolor amet, consectetuer adipiscing elit. In curae litora sociosqu mus hendrerit quis lectus sed vivamus scelerisque vehicula vestibulum.',
  },
  {
    id: 4,
    name: 'Lisa Chen',
    role: 'Google',
    image: '/images/6738c1f70036ea32826789a5_Lisa-p-500.jpg',
    rating: 5,
    text: 'Lorem ipsum dolor amet, consectetuer adipiscing elit. In curae litora sociosqu mus hendrerit quis lectus sed vivamus scelerisque vehicula vestibulum.',
  },
  {
    id: 5,
    name: 'Emma Wilson',
    role: 'LinkedIn',
    image: '/images/6738c1f812ab66f45b0b1c7c_Emma-p-500.jpg',
    rating: 5,
    text: 'Lorem ipsum dolor amet, consectetuer adipiscing elit. In curae litora sociosqu mus hendrerit quis lectus sed vivamus scelerisque vehicula vestibulum.',
  },
  {
    id: 6,
    name: 'Tom Harris',
    role: 'YouTube',
    image: '/images/6738c1f8d57d4774478a6614_Jack.jpg',
    rating: 5,
    text: 'Lorem ipsum dolor amet, consectetuer adipiscing elit. In curae litora sociosqu mus hendrerit quis lectus sed vivamus scelerisque vehicula vestibulum.',
  },
];

export default function Testimonials() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="bg-[#0f172a] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h2
            className="text-white text-2xl font-bold uppercase tracking-wide"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            HAPPY CLIENTS
          </h2>
          
          {/* Navigation Arrows */}
          <div className="flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full bg-[#31b56b] flex items-center justify-center hover:bg-[#28a05e] transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full bg-[#31b56b] flex items-center justify-center hover:bg-[#28a05e] transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Testimonials Carousel - Overflow Hidden */}
        <div className="overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-6 scroll-smooth"
            style={{ overflowX: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-xl p-6 w-[280px] flex-shrink-0"
              >
                {/* Stars + Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-0.5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#31b56b] text-[#31b56b]" />
                    ))}
                  </div>
                  <Image src="/images/67352cb041509b2f819f7cd2_quote.svg" alt="Quote" width={20} height={20} />
                </div>

                {/* Review Text */}
                <p className="text-[#0f172a] text-sm leading-relaxed mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  {testimonial.text}
                </p>

                {/* User Info */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <Image src={testimonial.image} alt={testimonial.name} width={40} height={40} className="object-cover w-full h-full" />
                  </div>
                  <div>
                    <h4 className="text-[#0f172a] text-sm font-semibold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500 text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
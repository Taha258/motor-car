'use client';

import { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';

export default function HeroSection() {
  const [carMake, setCarMake] = useState('');
  const [carType, setCarType] = useState('');
  const [carCondition, setCarCondition] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section className="relative w-full h-[500px] md:h-[550px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/HeroSectionimage.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 pt-20">
        {/* Heading */}
        <h1
          className="text-white text-center uppercase tracking-wide"
          style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: '46px',
            fontWeight: 700,
            lineHeight: '55.2px',
          }}
        >
          MotorDeal Cars
        </h1>

        {/* Search Filter Box - Blur Background */}
        <div className="mt-8 w-full max-w-4xl bg-white/10 backdrop-blur-md rounded-xl p-4 md:p-6">
          <div className="flex flex-col md:flex-row gap-3">
            {/* Car Make Dropdown */}
            <div className="relative flex-1">
              <button className="w-full flex items-center justify-between bg-white text-gray-700 px-4 py-3 rounded-lg text-sm font-medium">
                <span>{carMake || 'Car Make'}</span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </button>
            </div>

            {/* Car Type Dropdown */}
            <div className="relative flex-1">
              <button className="w-full flex items-center justify-between bg-white text-gray-700 px-4 py-3 rounded-lg text-sm font-medium">
                <span>{carType || 'Car Type'}</span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </button>
            </div>

            {/* Car Condition Dropdown */}
            <div className="relative flex-1">
              <button className="w-full flex items-center justify-between bg-white text-gray-700 px-4 py-3 rounded-lg text-sm font-medium">
                <span>{carCondition || 'Car Condition'}</span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </button>
            </div>

            {/* Search Input + Button */}
            <div className="flex gap-2 flex-1">
              <input
                type="text"
                placeholder="Search any car"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-white text-gray-700 px-4 py-3 rounded-lg text-sm placeholder-gray-400 outline-none"
              />
              <button className="bg-[#31b56b] text-white px-5 py-3 rounded-lg text-sm font-semibold hover:bg-[#28a05e] transition-colors flex items-center gap-1 shrink-0">
                <Search className="w-4 h-4" />
                <span className="hidden sm:inline">SEARCH</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
// src/components/showroom/HeroSection.jsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { useRouter } from 'next/navigation';

const CAR_MAKES = ['Lamborghini', 'Ferrari', 'Mercedes', 'BMW', 'Audi'];
const CAR_TYPES = ['Convertible', 'Coupe', 'SUV', 'Sedan', 'Hatchback'];
const CAR_CONDITIONS = ['New', 'Used'];

// ─── Reusable Dropdown ────────────────────────────────────────────────────────
function Dropdown({ label, options, value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div className="relative flex-1" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between bg-white text-gray-700 px-4 py-3 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
      >
        <span className={value ? 'text-[#0f172a] font-semibold' : 'text-gray-400'}>
          {value || label}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-xl border border-gray-100 z-50 overflow-hidden">
          {/* Clear / All option */}
          <button
            onClick={() => { onChange(''); setOpen(false); }}
            className="w-full text-left px-4 py-2.5 text-sm text-gray-400 hover:bg-gray-50 border-b border-gray-100"
          >
            All {label}s
          </button>
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => { onChange(opt); setOpen(false); }}
              className={`w-full text-left px-4 py-2.5 text-sm transition-colors
                ${value === opt
                  ? 'bg-[#31b56b]/10 text-[#31b56b] font-semibold'
                  : 'text-gray-700 hover:bg-[#31b56b]/10 hover:text-[#31b56b]'
                }`}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Main HeroSection ─────────────────────────────────────────────────────────
export default function HeroSection() {
  const router = useRouter();
  const [carMake, setCarMake]           = useState('');
  const [carType, setCarType]           = useState('');
  const [carCondition, setCarCondition] = useState('');
  const [searchQuery, setSearchQuery]   = useState('');

  function handleSearch() {
    const params = new URLSearchParams();
    if (carMake)      params.set('make', carMake);
    if (carType)      params.set('type', carType);
    if (carCondition) params.set('condition', carCondition);
    if (searchQuery.trim()) params.set('q', searchQuery.trim());

    router.push(`/showroom?${params.toString()}`);
  }

  return (
    <section className="relative w-full h-[500px] md:h-[550px] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/HeroSectionimage.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 pt-20">
        <h1
          className="text-white text-center uppercase tracking-wide"
          style={{ fontFamily: 'Syne, sans-serif', fontSize: '46px', fontWeight: 700, lineHeight: '55.2px' }}
        >
          MotorDeal Cars
        </h1>

        {/* Filter Box */}
        <div className="mt-8 w-full max-w-4xl bg-white/10 backdrop-blur-md rounded-xl p-4 md:p-6">
          <div className="flex flex-col md:flex-row gap-3">

            <Dropdown
              label="Car Make"
              options={CAR_MAKES}
              value={carMake}
              onChange={setCarMake}
            />
            <Dropdown
              label="Car Type"
              options={CAR_TYPES}
              value={carType}
              onChange={setCarType}
            />
            <Dropdown
              label="Car Condition"
              options={CAR_CONDITIONS}
              value={carCondition}
              onChange={setCarCondition}
            />

            {/* Search + Button */}
            <div className="flex gap-2 flex-1">
              <input
                type="text"
                placeholder="Search any car..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                className="flex-1 bg-white text-gray-700 px-4 py-3 rounded-lg text-sm placeholder-gray-400 outline-none min-w-0"
              />
              <button
                onClick={handleSearch}
                className="bg-[#31b56b] text-white px-5 py-3 rounded-lg text-sm font-bold hover:bg-[#28a05e] transition-colors flex items-center gap-2 shrink-0"
              >
                <Search className="w-4 h-4" />
                <span>SEARCH</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { cars } from '@/src/lib/carsData';

export default function FeaturedCars() {
  return (
    <section className="py-16 px-4" style={{ backgroundColor: '#dedede' }}>
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h2
            className="text-[#0f172a] text-2xl font-bold uppercase tracking-wide"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            FEATURED CARS
          </h2>
          <Link
            href="/showroom"
            className="bg-[#0f172a] text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-[#1e293b] transition-colors"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            SHOW ALL
          </Link>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <Link
              key={car.id}
              href={`/car/${car.slug}`}
              className="group block bg-[#0f172a] rounded-xl overflow-hidden"
            >
              {/* Brand Logo + Name Row */}
              <div className="flex items-center gap-3 px-4 pt-4 pb-2">
                <Image
                  src={car.brandLogo}
                  alt={car.brand}
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
                <div>
                  <h3
                    className="text-white text-base font-bold leading-tight"
                    style={{ fontFamily: 'Syne, sans-serif' }}
                  >
                    {car.name}
                  </h3>
                  <p className="text-gray-400 text-xs">
                    {car.year} • {car.type} • {car.condition}
                  </p>
                </div>
              </div>

              {/* Car Image */}
              <div className="relative h-48 mx-4 rounded-lg overflow-hidden">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Specs Bar */}
              <div className="mx-4 mt-3 bg-[#1e293b] rounded-lg p-3">
                <div className="grid grid-cols-4 gap-2">
                  <div className="flex flex-col items-center gap-1">
                    <Image
                      src="/images/67222a63d64f86825005a64d_mileage.svg"
                      alt="Mileage"
                      width={20}
                      height={20}
                    />
                    <span className="text-gray-400 text-xs">{car.mileage}</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Image
                      src="/images/67222a63306d244ceda1759e_engine.svg"
                      alt="Engine"
                      width={20}
                      height={20}
                    />
                    <span className="text-gray-400 text-xs">{car.engine}</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Image
                      src="/images/67222a6379b17d04a7c4bd02_fuel-type.svg"
                      alt="Fuel"
                      width={20}
                      height={20}
                    />
                    <span className="text-gray-400 text-xs">{car.fuel}</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Image
                      src="/images/67222a637ccaaffb8230978c_transmission.svg"
                      alt="Transmission"
                      width={20}
                      height={20}
                    />
                    <span className="text-gray-400 text-xs">{car.transmission}</span>
                  </div>
                </div>
              </div>

              {/* Price */}
              <div className="px-4 pt-3 pb-2">
                <span
                  className="text-white text-lg font-bold"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  {car.price}
                </span>
              </div>

              {/* See Details Button */}
              <div className="px-4 pb-4">
                <span className="block w-full bg-[#31b56b] text-white text-sm font-semibold text-center py-3 rounded-lg hover:bg-[#28a05e] transition-colors">
                  SEE DETAILS
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
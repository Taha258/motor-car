import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { cars } from '@/src/lib/carsData';
import { 
  ArrowLeft, Phone, Mail, MessageSquare, 
  CheckCircle2, Bluetooth, Navigation, Smartphone, 
  Camera, Volume2, Lightbulb, Armchair 
} from 'lucide-react';

export async function generateStaticParams() {
  return cars.map((car) => ({ slug: car.slug }));
}

const featureIcons = {
  bluetooth: Bluetooth,
  gps: Navigation,
  wireless: Smartphone,
  camera: Camera,
  sound: Volume2,
  led: Lightbulb,
  leather: Armchair,
};

export default function CarDetailPage({ params }) {
  const car = cars.find((c) => c.slug === params.slug);
  if (!car) notFound();

  return (
    <main className="min-h-screen bg-[#b2b2b2] pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#0f172a] hover:text-[#31b56b] transition-colors text-sm mb-6 font-medium"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          <ArrowLeft className="w-4 h-4" />
          Back to Showroom
        </Link>

        {/* Title */}
        <h1 
          className="text-[#0f172a] text-2xl font-bold uppercase tracking-wide mb-6"
          style={{ fontFamily: 'Syne, sans-serif' }}>
          {car.name}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* LEFT COLUMN */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Main Image */}
            <div className="relative h-[350px] rounded-xl overflow-hidden">
              <Image src={car.image} alt={car.name} fill className="object-cover" priority />
            </div>

            {/* Gallery Thumbnails */}
            <div className="grid grid-cols-4 gap-3">
              {[car.image, car.image, car.image, car.image].map((img, i) => (
                <div key={i} className="relative h-20 rounded-lg overflow-hidden">
                  <Image src={img} alt={`${car.name} ${i+1}`} fill className="object-cover" />
                </div>
              ))}
            </div>

            {/* Specifications */}
            <div className="bg-[#c8c8c8] rounded-xl p-6">
              <h2 
                className="text-[#0f172a] text-sm font-bold uppercase tracking-wider mb-4"
                style={{ fontFamily: 'Syne, sans-serif' }}>
                SPECIFICATIONS
              </h2>
              <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                {[
                  ['Car Make', car.brand],
                  ['Cylinders', car.cylinders || '10'],
                  ['Car Type', car.type],
                  ['Engine', car.engine],
                  ['Car Condition', car.condition],
                  ['Mileage (KM)', car.mileage],
                  ['Fuel Type', car.fuel],
                  ['Horsepower', car.horsepower || '562 HP'],
                  ['Transmission', car.transmission],
                  ['Body Color', car.bodyColor || 'Satin Blue'],
                  ['Year', car.year],
                  ['Stock ID', car.stockId || 'ABC123'],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between items-center py-2 border-b border-gray-400/50">
                    <span className="text-gray-600 text-xs" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{label}</span>
                    <span className="text-[#0f172a] text-xs font-medium" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Overview */}
            <div className="bg-[#c8c8c8] rounded-xl p-6">
              <h2 
                className="text-[#0f172a] text-sm font-bold uppercase tracking-wider mb-4"
                style={{ fontFamily: 'Syne, sans-serif' }}>
                OVERVIEW
              </h2>
              <p 
                className="text-[#0f172a] text-sm leading-relaxed opacity-80"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiatnullam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6">
            
            {/* Get In Touch */}
            <div className="bg-[#c8c8c8] rounded-xl p-5">
              <h2 
                className="text-[#0f172a] text-sm font-bold uppercase tracking-wider mb-4"
                style={{ fontFamily: 'Syne, sans-serif' }}>
                GET IN TOUCH
              </h2>
              <div className="space-y-3">
                <button className="w-full bg-[#31b56b] text-white py-3 rounded-lg flex items-center justify-center gap-2 text-sm font-medium hover:bg-[#28a05e] transition-colors">
                  <Phone className="w-4 h-4" /> Phone
                </button>
                <button className="w-full bg-[#0f172a] text-white py-3 rounded-lg flex items-center justify-center gap-2 text-sm font-medium hover:bg-[#1e293b] transition-colors">
                  <Mail className="w-4 h-4" /> Email
                </button>
                <Link 
                  href="/contactUs"
                  className="w-full bg-[#6b7280] text-white py-3 rounded-lg flex items-center justify-center gap-2 text-sm font-medium hover:bg-[#4b5563] transition-colors">
                  <MessageSquare className="w-4 h-4" /> Contact us
                </Link>
              </div>
            </div>

            {/* Extra Benefits */}
            <div className="bg-[#c8c8c8] rounded-xl p-5">
              <h2 
                className="text-[#0f172a] text-sm font-bold uppercase tracking-wider mb-4"
                style={{ fontFamily: 'Syne, sans-serif' }}>
                EXTRA BENEFITS
              </h2>
              <div className="space-y-3">
                {['Warranty', 'Financing Option', 'Vehicle Insurance', 'Maintenance Offers'].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3 bg-[#b8b8b8] rounded-lg px-4 py-3">
                    <CheckCircle2 className="w-5 h-5 text-[#31b56b]" />
                    <span className="text-[#0f172a] text-sm font-medium" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="bg-[#c8c8c8] rounded-xl p-5">
              <h2 
                className="text-[#0f172a] text-sm font-bold uppercase tracking-wider mb-4"
                style={{ fontFamily: 'Syne, sans-serif' }}>
                FEATURES
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Bluetooth, name: 'Bluetooth' },
                  { icon: Navigation, name: 'Built-in GPS' },
                  { icon: Smartphone, name: 'Wireless Qi' },
                  { icon: Camera, name: '360° Camera' },
                  { icon: Volume2, name: 'Sound System' },
                  { icon: Lightbulb, name: 'LED Headlight' },
                  { icon: Armchair, name: 'Leather Seats' },
                ].map((feature) => (
                  <div key={feature.name} className="bg-[#b8b8b8] rounded-lg p-4 flex flex-col items-center gap-2 text-center">
                    <feature.icon className="w-6 h-6 text-[#0f172a]" />
                    <span className="text-[#0f172a] text-xs font-medium" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{feature.name}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
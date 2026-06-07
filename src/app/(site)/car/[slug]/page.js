// src/app/car/[slug]/page.js
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { clientFetch } from '@/src/sanity/lib/client';
import { carBySlugQuery, allCarSlugsQuery } from '@/src/sanity/lib/queries';
import {
  ArrowLeft, Phone, Mail, MessageSquare, CheckCircle2,
  Bluetooth, Navigation, Smartphone, Camera,
  Volume2, Lightbulb, Armchair, Shield,
} from 'lucide-react';

// ─── Static Params (build time mein sab slugs generate ho) ───────────────────
export async function generateStaticParams() {
  const slugs = await clientFetch(allCarSlugsQuery);
  return slugs.map((item) => ({ slug: item.slug }));
}

// ─── Feature Icon Map ─────────────────────────────────────────────────────────
const featureIconMap = {
  'bluetooth':      Bluetooth,
  'built-in gps':   Navigation,
  'gps':            Navigation,
  'wireless qi':    Smartphone,
  'wireless':       Smartphone,
  '360° camera':    Camera,
  'camera':         Camera,
  'sound system':   Volume2,
  'led headlight':  Lightbulb,
  'leather seats':  Armchair,
  'security':       Shield,
};

function getFeatureIcon(featureName) {
  const key = featureName.toLowerCase();
  for (const [match, Icon] of Object.entries(featureIconMap)) {
    if (key.includes(match)) return Icon;
  }
  return CheckCircle2; // default icon
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default async function CarDetailPage({ params }) {
  const car = await clientFetch(carBySlugQuery, { slug: params.slug });
  if (!car) notFound();

  // Gallery: mainImage + extra gallery images
  const allImages = [
    car.mainImageUrl,
    ...(car.galleryUrls || []),
  ].filter(Boolean);

  const specs = [
    ['Car Make',       car.brand],
    ['Car Type',       car.carType],
    ['Car Condition',  car.condition],
    ['Fuel Type',      car.fuel],
    ['Transmission',   car.transmission],
    ['Year',           car.year],
    ['Cylinders',      car.cylinders],
    ['Engine',         car.engine],
    ['Mileage (KM)',   car.mileage],
    ['Horsepower',     car.horsepower],
    ['Body Color',     car.bodyColor],
    ['Stock ID',       car.stockId],
  ];

  return (
    <main className="min-h-screen bg-[#b2b2b2] pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#0f172a] hover:text-[#31b56b] transition-colors text-sm mb-6 font-medium"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Showroom
        </Link>

        {/* Title */}
        <h1
          className="text-[#0f172a] text-2xl font-bold uppercase tracking-wide mb-6"
          style={{ fontFamily: 'Syne, sans-serif' }}
        >
          {car.name}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* ── LEFT COLUMN ─────────────────────────────────── */}
          <div className="lg:col-span-2 space-y-6">

            {/* Main Image */}
            <div className="relative h-[350px] rounded-xl overflow-hidden">
              {car.mainImageUrl ? (
                <Image
                  src={car.mainImageUrl}
                  alt={car.name}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="w-full h-full bg-[#c8c8c8] flex items-center justify-center">
                  <span className="text-gray-500">No Image</span>
                </div>
              )}
            </div>

            {/* Gallery Thumbnails */}
            {allImages.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {allImages.slice(0, 4).map((img, i) => (
                  <div key={i} className="relative h-20 rounded-lg overflow-hidden">
                    <Image
                      src={img}
                      alt={`${car.name} ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Specifications */}
            <div className="bg-[#c8c8c8] rounded-xl p-6">
              <h2
                className="text-[#0f172a] text-sm font-bold uppercase tracking-wider mb-4"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                SPECIFICATIONS
              </h2>
              <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                {specs.map(([label, value]) => (
                  value ? (
                    <div
                      key={label}
                      className="flex justify-between items-center py-2 border-b border-gray-400/50"
                    >
                      <span
                        className="text-gray-600 text-xs"
                        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                      >
                        {label}
                      </span>
                      <span
                        className="text-[#0f172a] text-xs font-medium"
                        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                      >
                        {value}
                      </span>
                    </div>
                  ) : null
                ))}
              </div>
            </div>

            {/* Overview */}
            {car.overview && (
              <div className="bg-[#c8c8c8] rounded-xl p-6">
                <h2
                  className="text-[#0f172a] text-sm font-bold uppercase tracking-wider mb-4"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  OVERVIEW
                </h2>
                <p
                  className="text-[#0f172a] text-sm leading-relaxed opacity-80"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {car.overview}
                </p>
              </div>
            )}
          </div>

          {/* ── RIGHT COLUMN ────────────────────────────────── */}
          <div className="space-y-6">

            {/* Price */}
            <div className="bg-[#0f172a] rounded-xl p-5">
              <p className="text-gray-400 text-xs mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Price
              </p>
              <p
                className="text-white text-2xl font-bold"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                {car.price}
              </p>
            </div>

            {/* Get In Touch */}
            <div className="bg-[#c8c8c8] rounded-xl p-5">
              <h2
                className="text-[#0f172a] text-sm font-bold uppercase tracking-wider mb-4"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
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
                  href="/contact-us"
                  className="w-full bg-[#6b7280] text-white py-3 rounded-lg flex items-center justify-center gap-2 text-sm font-medium hover:bg-[#4b5563] transition-colors block text-center"
                >
                  <MessageSquare className="w-4 h-4 inline mr-1" /> Contact us
                </Link>
              </div>
            </div>

            {/* Extra Benefits */}
            <div className="bg-[#c8c8c8] rounded-xl p-5">
              <h2
                className="text-[#0f172a] text-sm font-bold uppercase tracking-wider mb-4"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                EXTRA BENEFITS
              </h2>
              <div className="space-y-3">
                {['Warranty', 'Financing Option', 'Vehicle Insurance', 'Maintenance Offers'].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3 bg-[#b8b8b8] rounded-lg px-4 py-3">
                    <CheckCircle2 className="w-5 h-5 text-[#31b56b]" />
                    <span
                      className="text-[#0f172a] text-sm font-medium"
                      style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                    >
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features — Sanity se dynamic */}
            {car.features && car.features.length > 0 && (
              <div className="bg-[#c8c8c8] rounded-xl p-5">
                <h2
                  className="text-[#0f172a] text-sm font-bold uppercase tracking-wider mb-4"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  FEATURES
                </h2>
                <div className="grid grid-cols-2 gap-3">
                  {car.features.map((feature) => {
                    const Icon = getFeatureIcon(feature);
                    return (
                      <div
                        key={feature}
                        className="bg-[#b8b8b8] rounded-lg p-4 flex flex-col items-center gap-2 text-center"
                      >
                        <Icon className="w-6 h-6 text-[#0f172a]" />
                        <span
                          className="text-[#0f172a] text-xs font-medium"
                          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                        >
                          {feature}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </main>
  );
}
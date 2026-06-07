import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    category: 'Events',
    author: 'Sara Blake',
    time: '8 min',
    image: '/images/BMW.jpg',
    title: 'Find The Best Car Shows To Attend This Year',
    slug: 'find-the-best-car-shows',
  },
  {
    id: 2,
    category: 'Events',
    author: 'Lisa Chen',
    time: '12 min',
    image: '/images/Orange-car.jpg',
    title: 'Inside The Latest Auto Expo: Trends To Watch',
    slug: 'inside-latest-auto-expo',
  },
  {
    id: 3,
    category: 'Guides',
    author: 'James Woods',
    time: '9 min',
    image: '/images/Enginee.jpg',
    title: 'Hybrid Vs. Petrol: Choosing The Right One',
    slug: 'hybrid-vs-petrol',
  },
  {
    id: 4,
    category: 'Reviews',
    author: 'Jack Lee',
    time: '11 min',
    image: '/images/OD-car.jpg',
    title: 'Luxury Car Review: Mercedes-Benz S-Class',
    slug: 'mercedes-s-class-review',
  },
];

export default function BlogAndCTA() {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#dedede' }}>
      <div className="max-w-6xl mx-auto">
        
        {/* Blog Posts Header */}
        <div className="flex items-center justify-between mb-10">
          <h2
            className="text-[#0f172a] text-2xl font-bold uppercase tracking-wide"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            OUR BLOG POSTS
          </h2>
          <Link
            href="/blog"
            className="bg-[#0f172a] text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-[#1e293b] transition-colors"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            SHOW ALL
          </Link>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group block"
            >
              {/* Image with Category Badge */}
              <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-white text-[#0f172a] text-xs font-medium px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>

              {/* Meta */}
              <div className="flex items-center gap-2 text-[#0f172a] text-xs mb-2 opacity-70">
                <span>{post.author}</span>
                <span>•</span>
                <span>{post.time}</span>
              </div>

              {/* Title */}
              <h3
                className="text-[#0f172a] text-sm font-bold leading-snug mb-3 group-hover:text-[#31b56b] transition-colors"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                {post.title}
              </h3>

              {/* Read Post */}
              <span className="inline-flex items-center gap-1 text-[#31b56b] text-sm font-medium group-hover:underline">
                READ POST
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Left Card - Dark */}
          <div className="bg-[#0f172a] rounded-2xl p-10 md:p-12">
            <h2
              className="text-white text-2xl font-bold uppercase tracking-wide mb-4"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              CHOOSE YOUR DREAM CAR
            </h2>
            <p
              className="text-gray-400 text-sm leading-relaxed mb-8"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
            </p>
            <Link
              href="/showroom"
              className="inline-block bg-[#31b56b] text-white text-sm font-semibold px-6 py-3 rounded-lg hover:bg-[#28a05e] transition-colors"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              BROWSE CARS
            </Link>
          </div>

          {/* Right Card - Light */}
          <div className="bg-white rounded-2xl p-10 md:p-12">
            <h2
              className="text-[#0f172a] text-2xl font-bold uppercase tracking-wide mb-4"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              UNABLE TO FIND YOUR CAR?
            </h2>
            <p
              className="text-[#0f172a] text-sm leading-relaxed mb-8 opacity-70"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#0f172a] text-white text-sm font-semibold px-6 py-3 rounded-lg hover:bg-[#1e293b] transition-colors"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              LET US KNOW
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
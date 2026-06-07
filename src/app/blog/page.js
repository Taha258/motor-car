// src/app/blog/page.js
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/src/lib/blogData';
import { ArrowUpRight } from 'lucide-react';

export const metadata = {
  title: 'Blog - MotorDeal',
  description: 'Latest automotive news, reviews, and guides',
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#d6d6d6] pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Page Header */}
        <div className="mb-12">
          <h1 
            className="text-[#0f172a] text-3xl md:text-4xl font-bold uppercase leading-tight mb-4"
            style={{ fontFamily: 'Syne, sans-serif' }}>
            Latest Blog Posts
          </h1>
          <p className="text-gray-600 text-base" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Stay updated with the latest automotive news, reviews, and expert guides.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link 
              key={post.id} 
              href={`/blog/${post.slug}`} 
              className="group block bg-[#c8c8c8] rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-52 overflow-hidden">
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
              <div className="p-5">
                <div className="flex items-center gap-2 text-[#0f172a] text-xs mb-3 opacity-70">
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 
                  className="text-[#0f172a] text-sm font-bold leading-snug mb-3 group-hover:text-[#31b56b] transition-colors" 
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {post.title}
                </h3>
                <span className="inline-flex items-center gap-1 text-[#31b56b] text-sm font-medium group-hover:underline">
                  READ POST <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
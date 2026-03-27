"use client";

import { useState } from "react";
import { Navbar } from "@/components/home/navbar";
import { Footer } from "@/components/home/footer";
import { BlogHero } from "@/components/blog/blog-hero";
import { BlogCard } from "@/components/blog/blog-card";
import { CategoryTabs } from "@/components/blog/category-tabs";
import { posts } from "@/lib/blog";
import { ChevronLeft, ChevronRight } from "lucide-react";

const POSTS_PER_PAGE = 3;

export default function BlogListingPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = activeCategory === "All" 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      
      <BlogHero />

      <section className="container max-w-[1280px] px-6 mx-auto pb-32">
        <CategoryTabs 
          activeCategory={activeCategory} 
          onCategoryChange={handleCategoryChange} 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {paginatedPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-neutral-500 text-xl">No posts found in this category.</p>
          </div>
        )}

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-20">
            <button
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-brand-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-10 h-10 rounded-xl border font-bold text-sm transition-all ${
                    currentPage === i + 1
                      ? "bg-brand-primary border-brand-primary text-neutral-900 shadow-[0_0_20px_rgba(245,145,32,0.15)]"
                      : "bg-neutral-900 border-neutral-800 text-neutral-500 hover:text-neutral-200 hover:border-neutral-600"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-brand-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}

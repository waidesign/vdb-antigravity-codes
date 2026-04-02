"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Share2, Twitter, Linkedin, Link as LinkIcon } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ArticleRenderer } from "@/components/article-renderer";
import { ArticleSidebar } from "@/components/article-sidebar";
import { BlogCard } from "@/components/blog-card";
import { posts } from "@/lib/blog";
import { Badge } from "@/components/ui/badge";

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = posts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="relative pt-32 pb-20">
        <div className="container px-6 mx-auto max-w-[1280px]">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-neutral-500 hover:text-brand-primary transition-colors mb-12 font-bold uppercase tracking-widest text-[10px]"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Journal
          </Link>

          <div className="relative aspect-[21/9] rounded-[2.5rem] overflow-hidden mb-16 border border-neutral-800/50 shadow-2xl shadow-brand-primary/5">
            <Image src={post.coverImage} alt={post.title} fill className="object-cover" priority />
          </div>

          <header className="mb-16">
            <Badge variant="brand" className="mb-8 px-4 py-1.5 uppercase tracking-widest text-[10px] font-black">
              {post.category}
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.1] mb-8">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center justify-between gap-6 pb-12 border-b border-neutral-800/10">
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-2xl overflow-hidden border-2 border-brand-primary/20">
                  <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="text-white font-black tracking-tight">{post.author.name}</p>
                  <p className="text-neutral-500 text-xs font-medium">{post.author.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 text-xs font-bold text-neutral-500">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-brand-primary" />
                  {post.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-brand-secondary" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </header>

          <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
            <div className="flex-1 min-w-0">
              {/* Key Takeaways */}
              <div className="mb-12 p-8 rounded-[2rem] bg-brand-primary/5 border border-brand-primary/10">
                <h3 className="text-lg font-black text-brand-primary uppercase tracking-widest mb-4">Key Takeaways</h3>
                <ul className="space-y-3">
                  {[
                    "Understand current infrastructure limitations",
                    "Analyze high-performance data decoding patterns",
                    "Implement scalable vehicle data APIs"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-neutral-300 text-sm font-medium leading-relaxed">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <ArticleRenderer post={post} />
              
              <div className="mt-20 pt-12 border-t border-neutral-800/20 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-black uppercase tracking-widest text-neutral-500">Share this insight</span>
                  <div className="flex items-center gap-2">
                    <button className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-brand-primary hover:text-brand-primary transition-all">
                      <Twitter className="w-4 h-4" />
                    </button>
                    <button className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-brand-primary hover:text-brand-primary transition-all">
                      <Linkedin className="w-4 h-4" />
                    </button>
                    <button className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-brand-primary hover:text-brand-primary transition-all">
                      <LinkIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <ArticleSidebar featuredPosts={relatedPosts} />
          </div>
        </div>
      </div>

      <section className="bg-neutral-950/50 py-32 border-t border-neutral-800/10">
        <div className="container px-6 mx-auto max-w-[1280px]">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div>
              <h2 className="text-4xl font-black text-white tracking-tight mb-4">Related Intelligence</h2>
              <p className="text-neutral-500 font-medium">Continue decoding the automotive future with our latest articles.</p>
            </div>
            <Link 
              href="/blog" 
              className="px-8 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-sm font-black uppercase tracking-widest hover:border-brand-primary hover:text-brand-primary transition-all"
            >
              View All Insights
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((p) => (
              <BlogCard key={p.id} post={p} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

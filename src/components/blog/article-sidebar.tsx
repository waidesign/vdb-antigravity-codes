"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Post } from "@/lib/blog";

interface ArticleSidebarProps {
  featuredPosts: Post[];
}

export function ArticleSidebar({ featuredPosts }: ArticleSidebarProps) {
  return (
    <aside className="w-full lg:w-[380px] space-y-8">
      {/* Sticky Container */}
      <div className="sticky top-32 space-y-8">
        {/* CTA Box */}
        <div className="relative group overflow-hidden rounded-[2rem] p-8 border border-brand-primary/20 bg-neutral-900/50 backdrop-blur-xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 rounded-full blur-[60px] -z-10" />
          
          <h3 className="text-xl font-black text-white tracking-tight mb-4">
            Start decoding automotive data today
          </h3>
          <p className="text-neutral-400 text-sm font-medium mb-8 leading-relaxed">
            Get access to the most comprehensive vehicle database with sub-millisecond latency.
          </p>
          
          <div className="space-y-3">
            <Link 
              href="#"
              className={cn(
                buttonVariants({ variant: "primary", size: "lg" }),
                "w-full uppercase tracking-widest text-[10px] font-black h-12"
              )}
            >
              Start Free Trial
            </Link>
            <Link 
              href="#"
              className={cn(
                buttonVariants({ variant: "secondary", size: "lg" }),
                "w-full uppercase tracking-widest text-[10px] font-black h-12 bg-neutral-800/50 backdrop-blur-sm"
              )}
            >
              Book a Demo
            </Link>
          </div>
        </div>

        {/* Connect with us */}
        <div className="p-8 rounded-[2rem] border border-neutral-800 bg-neutral-900/30">
          <h3 className="text-xs font-black uppercase tracking-widest text-neutral-500 mb-6">Connect with us</h3>
          <div className="grid grid-cols-2 gap-3">
            <Link href="#" className="flex items-center justify-center p-3 rounded-xl bg-neutral-800 border border-neutral-700 hover:border-brand-primary hover:text-brand-primary transition-all text-sm font-bold">
              Twitter
            </Link>
            <Link href="#" className="flex items-center justify-center p-3 rounded-xl bg-neutral-800 border border-neutral-700 hover:border-brand-primary hover:text-brand-primary transition-all text-sm font-bold">
              LinkedIn
            </Link>
          </div>
        </div>

        {/* Quick Resources */}
        <div className="p-8 rounded-[2rem] border border-neutral-800 bg-neutral-900/30">
          <h3 className="text-xs font-black uppercase tracking-widest text-neutral-500 mb-6">Quick Resources</h3>
          <ul className="space-y-4">
            {[
              { label: "API Documentation", href: "/docs" },
              { label: "Vehicle Data Guide", href: "#" },
              { label: "Success Stories", href: "#" }
            ].map((link, i) => (
              <li key={i}>
                <Link href={link.href} className="group flex items-center justify-between text-sm font-bold text-neutral-400 hover:text-white transition-colors">
                  {link.label}
                  <ArrowUpRight className="w-4 h-4 text-neutral-600 group-hover:text-brand-primary transition-colors" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Featured Posts */}
        <div className="space-y-6">
          <h3 className="text-xs font-black uppercase tracking-widest text-neutral-500 px-2">
            Featured Intelligence
          </h3>
          
          <div className="space-y-4">
            {featuredPosts.map((post) => (
              <Link 
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group flex gap-4 p-2 rounded-2xl hover:bg-neutral-900/50 border border-transparent hover:border-neutral-800 transition-all"
              >
                <div className="relative w-24 h-20 rounded-xl overflow-hidden flex-shrink-0 border border-neutral-800">
                  <Image 
                    src={post.coverImage} 
                    alt={post.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                </div>
                <div className="flex flex-col justify-center gap-1.5">
                  <Badge variant="outline" className="w-fit text-[8px] px-2 py-0 border-neutral-800 text-neutral-500 uppercase font-black">
                    {post.category}
                  </Badge>
                  <h4 className="text-xs font-bold text-neutral-300 group-hover:text-white transition-colors line-clamp-2 leading-tight">
                    {post.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}

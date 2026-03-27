"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Clock, Calendar } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Post } from "@/lib/blog";

interface BlogCardProps {
  post: Post;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <Card variant="glass" className="h-full flex flex-col overflow-hidden border-neutral-800/50 bg-neutral-900/40 hover:border-brand-primary/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(245,145,32,0.05)]">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent opacity-60" />
          <div className="absolute top-4 left-4">
            <Badge className="bg-neutral-950/80 backdrop-blur-md border-neutral-800 text-brand-primary font-bold px-3 py-1">
              {post.category}
            </Badge>
          </div>
        </div>
        
        <CardContent className="p-6 flex-1 flex flex-col gap-4">
          <div className="flex items-center gap-3 mb-1">
            <div className="relative w-6 h-6 rounded-full overflow-hidden border border-neutral-800">
              <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
            </div>
            <span className="text-xs font-semibold text-neutral-300">{post.author.name}</span>
            <span className="w-1 h-1 rounded-full bg-neutral-800 mx-1" />
            <span className="text-xs font-medium text-neutral-500">{post.date}</span>
          </div>
          
          <h3 className="text-xl font-bold text-neutral-100 group-hover:text-white transition-colors leading-snug">
            {post.title}
          </h3>
          
          <p className="text-sm text-neutral-400 line-clamp-3 leading-relaxed">
            {post.excerpt}
          </p>
        </CardContent>
        
        <CardFooter className="px-6 py-4 border-t border-neutral-800/50 flex items-center justify-between">
          <div className="flex items-center gap-4 text-xs font-medium text-neutral-500">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-brand-primary group-hover:text-white transition-colors flex items-center gap-2">
            Read more
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
}

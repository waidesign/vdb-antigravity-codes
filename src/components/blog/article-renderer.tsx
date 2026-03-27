"use client";

import { Post } from "@/lib/blog";

interface ArticleRendererProps {
  post: Post;
}

export function ArticleRenderer({ post }: ArticleRendererProps) {
  return (
    <article className="prose prose-invert prose-neutral max-w-none 
                        prose-headings:text-white prose-headings:font-black prose-headings:tracking-tight
                        prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-8
                        prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6
                        prose-p:text-lg prose-p:text-neutral-400 prose-p:leading-relaxed prose-p:mb-8
                        prose-strong:text-white prose-strong:font-bold
                        prose-blockquote:border-l-brand-primary prose-blockquote:bg-brand-primary/5 prose-blockquote:p-8 prose-blockquote:rounded-r-2xl prose-blockquote:not-italic prose-blockquote:my-12 prose-blockquote:text-neutral-200
                        prose-li:text-neutral-400 prose-li:mb-2
                        prose-ul:my-8
                        prose-table:w-full prose-table:border-collapse prose-table:my-8
                        prose-th:text-brand-primary prose-th:font-bold prose-th:p-4 prose-th:border-b prose-th:border-neutral-800
                        prose-td:p-4 prose-td:border-b prose-td:border-neutral-800 prose-td:text-neutral-400
                        prose-pre:bg-neutral-900 prose-pre:border prose-pre:border-neutral-800 prose-pre:p-6 prose-pre:rounded-2xl prose-pre:my-8
                        prose-code:text-brand-primary prose-code:bg-neutral-900 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none"
             dangerouslySetInnerHTML={{ __html: post.content }}
    />
  );
}

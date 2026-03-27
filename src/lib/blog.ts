export interface Author {
  name: string;
  role: string;
  avatar: string;
  bio: string;
}

export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  author: Author;
  coverImage: string;
  featured?: boolean;
}

export const authors: Record<string, Author> = {
  architect: {
    name: "Marcus Vane",
    role: "Core Engine Architect",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200",
    bio: "Marcus leads the core VDB engine development, specializing in distributed systems and real-time vehicle telematics."
  },
  specialist: {
    name: "Elena Rossi",
    role: "Data Science Lead",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200",
    bio: "Elena specializes in predictive maintenance models and machine learning applications for automotive data sets."
  }
};

export const posts: Post[] = [
  {
    id: "v4-launch",
    slug: "introducing-v4-engine",
    title: "Introducing the V4 Decoding Engine: 10x Performance",
    excerpt: "Discover how our latest architectural shift enables sub-50ms decoding for global vehicle data sets.",
    content: `
      <h2>The Need for Speed</h2>
      <p>As the automotive industry moves towards software-defined vehicles, the speed of data access becomes the critical bottleneck. Our V4 engine addressed this by moving to a Rust-based core.</p>
      
      <div className="my-12 overflow-x-auto rounded-2xl border border-neutral-800">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-neutral-900/50">
              <th className="p-4 border-b border-neutral-800 text-brand-primary font-bold">Engine Version</th>
              <th className="p-4 border-b border-neutral-800 text-brand-primary font-bold">Decoding Speed</th>
              <th className="p-4 border-b border-neutral-800 text-brand-primary font-bold">Accuracy</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-4 border-b border-neutral-800 text-neutral-300">V2 (Legacy)</td>
              <td className="p-4 border-b border-neutral-800 text-neutral-300">450ms</td>
              <td className="p-4 border-b border-neutral-800 text-neutral-300">94.2%</td>
            </tr>
            <tr>
              <td className="p-4 border-b border-neutral-800 text-neutral-300">V3</td>
              <td className="p-4 border-b border-neutral-800 text-neutral-300">220ms</td>
              <td className="p-4 border-b border-neutral-800 text-neutral-300">97.8%</td>
            </tr>
            <tr className="bg-brand-primary/5">
              <td className="p-4 text-white font-bold">V4 (Current)</td>
              <td className="p-4 text-white font-bold">42ms</td>
              <td className="p-4 text-white font-bold">99.9%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <blockquote>We've reduced latency by over 900% while increasing data accuracy across all European markets.</blockquote>

      <h3>Implementation Details</h3>
      <p>Our migration to a low-level systems language allowed us to optimize memory allocation and parallelize VIN normalization tasks.</p>

      <pre><code>{
  "engine": "v4-turbo",
  "optimization": "memory-mapped-io",
  "concurrency": "tokio-multithreaded",
  "latency_target": "<50ms"
}</code></pre>

      <h3>Key Innovations</h3>
      <ul>
        <li>Distributed Caching Layer with Redis backing</li>
        <li>Sub-millisecond VIN validation using bloom filters</li>
        <li>Real-time manufacturer source syncing via gRPC</li>
      </ul>
    `,
    category: "Engineering",
    date: "Mar 12, 2024",
    readTime: "6 min read",
    author: authors.architect,
    coverImage: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=1200&h=600",
    featured: true
  },
  {
    id: "predictive-ai",
    slug: "predictive-maintenance-ai",
    title: "AI-Driven Predictive Maintenance: The New Standard",
    excerpt: "Learn how we use machine learning to predict component failure before it happens.",
    content: "<p>Deep dive into our AI models...</p>",
    category: "Data Science",
    date: "Mar 10, 2024",
    readTime: "8 min read",
    author: authors.specialist,
    coverImage: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=1200&h=600"
  },
  {
    id: "api-security",
    slug: "securing-automotive-data",
    title: "Securing Automotive Data in a Connected World",
    excerpt: "Best practices for implementing VDB APIs in high-security environments.",
    content: "<p>Security overview...</p>",
    category: "Security",
    date: "Mar 05, 2024",
    readTime: "5 min read",
    author: authors.architect,
    coverImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200&h=600"
  },
  {
    id: "fleet-management",
    slug: "fleet-management-optimization",
    title: "Optimizing Fleet Operations with Dynamic APIs",
    excerpt: "How real-time data streaming can transform your logistics and fleet health monitoring.",
    content: "<p>Fleet optimization strategies...</p>",
    category: "Engineering",
    date: "Mar 01, 2024",
    readTime: "7 min read",
    author: authors.architect,
    coverImage: "https://images.unsplash.com/photo-1519003722824-192d9978736b?auto=format&fit=crop&q=80&w=1200&h=600"
  },
  {
    id: "ev-charging",
    slug: "ev-charging-networks",
    title: "The Future of EV Charging: Data-First Approach",
    excerpt: "Analyzing the impact of vehicle-to-grid technologies on modern power distribution.",
    content: "<p>EV charging insights...</p>",
    category: "Product",
    date: "Feb 28, 2024",
    readTime: "5 min read",
    author: authors.specialist,
    coverImage: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=1200&h=600"
  },
  {
    id: "connected-cars",
    slug: "connected-cars-privacy",
    title: "Connected Cars & Privacy: A Delicate Balance",
    excerpt: "Navigating the complexities of data privacy in the age of autonomous vehicles.",
    content: "<p>Privacy framework for connected cars...</p>",
    category: "Security",
    date: "Feb 25, 2024",
    readTime: "9 min read",
    author: authors.architect,
    coverImage: "https://images.unsplash.com/photo-1554744512-d6cde2f5d41d?auto=format&fit=crop&q=80&w=1200&h=600"
  }
];

export const categories = ["All", "Engineering", "Data Science", "Security", "Product"];

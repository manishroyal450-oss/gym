import React from 'react';
import { Calendar, ArrowRight, Clock } from 'lucide-react';
import { BlogPost } from '../types';
import { BLOG_POSTS } from '../data';

interface BlogsSectionProps {
  onReadPost: (post: BlogPost) => void;
}

export const BlogsSection: React.FC<BlogsSectionProps> = ({ onReadPost }) => {
  return (
    <section id="blogs" className="space-y-6 pt-2">
      <div>
        <div className="badge-pill mb-3">
          <span className="badge-dot" />
          <span>Blogs</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-900 leading-tight">
          Gym Tips and Workout Guides
        </h2>
        <p className="text-stone-600 text-xs sm:text-sm mt-2 leading-relaxed">
          Explore our blogs for workout tips, nutrition advice, recovery strategies, and simple routines for daily fitness.
        </p>
      </div>

      <div className="space-y-6">
        {BLOG_POSTS.map((post) => (
          <article 
            key={post.id}
            id={`blog-item-${post.id}`}
            onClick={() => onReadPost(post)}
            className="space-y-3 cursor-pointer group rounded-3xl p-3 -m-3 hover:bg-white/80 transition-colors"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xs">
              <span className="absolute top-4 left-4 z-10 bg-[#FF3B00] text-white text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                {post.tag}
              </span>
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="flex items-center justify-between text-stone-500 text-xs font-medium">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-stone-400" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1 text-stone-400">
                <Clock className="w-3 h-3" />
                <span>{post.readTime}</span>
              </div>
            </div>
            <h3 className="text-lg font-bold text-neutral-900 group-hover:text-[#FF3B00] transition-colors leading-snug">
              {post.title}
            </h3>
            <p className="text-stone-600 text-xs leading-relaxed">
              {post.snippet}
            </p>
            <div className="flex items-center gap-1 text-[#FF3B00] text-xs font-bold pt-1">
              <span>Read Full Guide</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

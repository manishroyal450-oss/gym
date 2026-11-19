import React from 'react';
import { X, Calendar, Clock, Share2, ArrowLeft } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogModalProps {
  post: BlogPost | null;
  onClose: () => void;
  onStartProgram: () => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({ post, onClose, onStartProgram }) => {
  if (!post) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-md bg-white rounded-3xl overflow-hidden shadow-2xl border border-stone-200 relative my-auto max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-60 w-full shrink-0">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 text-white hover:bg-black flex items-center justify-center transition cursor-pointer"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="absolute top-4 left-4">
            <span className="bg-[#FF3B00] text-white text-xs font-bold px-3 py-1 rounded-full shadow-xs">
              {post.tag}
            </span>
          </div>
          <div className="absolute bottom-4 left-5 right-5 text-white">
            <div className="flex items-center gap-3 text-xs text-stone-300 mb-1">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> {post.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> {post.readTime}
              </span>
            </div>
            <h3 className="text-xl font-bold leading-snug">{post.title}</h3>
          </div>
        </div>

        <div className="p-6 overflow-y-auto space-y-4 text-stone-700 text-xs sm:text-sm leading-relaxed">
          <p className="font-semibold text-neutral-900 text-sm">
            {post.snippet}
          </p>
          
          <div className="border-t border-stone-100 pt-3 space-y-3 whitespace-pre-line text-stone-600">
            {post.fullContent || post.snippet}
          </div>

          <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-stone-200 mt-4 space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF3B00]">Ready to apply this?</span>
            <p className="text-xs text-neutral-800">
              Join Oxygen Gym today and let our certified personal trainers build a program tailored to your goals.
            </p>
            <button
              onClick={() => {
                onClose();
                onStartProgram();
              }}
              className="w-full bg-[#FF3B00] hover:bg-orange-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition mt-1 cursor-pointer"
            >
              Get Started with a Coach
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

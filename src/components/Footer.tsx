import React from 'react';
import { Dumbbell, ArrowUp, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenJoin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenJoin }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-stone-200/80 bg-white mt-12 py-10 px-5 text-neutral-900">
      <div className="w-full max-w-md mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#FF3B00] flex items-center justify-center text-white">
              <Dumbbell className="w-5 h-5" />
            </div>
            <div>
              <span className="font-extrabold text-xl tracking-tight text-black block leading-tight">OXYGEN GYM</span>
              <span className="text-[9px] font-bold tracking-widest text-[#FF3B00] uppercase">Fitness & Strength</span>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 flex items-center justify-center transition cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs text-stone-600 leading-relaxed">
          Transforming lives through fitness, one powerful workout at a time. Personalized training plans tailored to your lifestyle and progressive consistency.
        </p>

        <div className="grid grid-cols-2 gap-4 text-xs font-semibold text-stone-700">
          <div className="space-y-2">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-stone-400 block mb-1">
              Explore
            </span>
            <button onClick={() => onNavigate('programs')} className="block hover:text-[#FF3B00] text-left">
              Training Programs
            </button>
            <button onClick={() => onNavigate('about')} className="block hover:text-[#FF3B00] text-left">
              About Our Coaches
            </button>
            <button onClick={() => onNavigate('how-it-works')} className="block hover:text-[#FF3B00] text-left">
              How It Works
            </button>
          </div>

          <div className="space-y-2">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-stone-400 block mb-1">
              Community
            </span>
            <button onClick={() => onNavigate('blogs')} className="block hover:text-[#FF3B00] text-left">
              Gym Tips & Guides
            </button>
            <button onClick={() => onNavigate('pricing')} className="block hover:text-[#FF3B00] text-left">
              Membership Plans
            </button>
            <button onClick={onOpenJoin} className="block text-[#FF3B00] font-bold text-left">
              Join Free Pass →
            </button>
          </div>
        </div>

        <div className="border-t border-stone-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-stone-500">
          <span>© 2026 Oxygen Gym. All rights reserved.</span>
          <span className="flex items-center gap-1">
            Build Muscle & Get Stronger
          </span>
        </div>
      </div>
    </footer>
  );
};

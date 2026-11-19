import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

interface HeroProps {
  onJoinClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onJoinClick }) => {
  return (
    <section id="hero" className="pt-4 flex flex-col items-center text-center">
      {/* Tag Pill */}
      <div className="inline-flex items-center bg-white border border-stone-200 rounded-full pl-1 pr-4 py-1 gap-2 shadow-xs mb-6 hover:border-orange-200 transition-colors">
        <span className="bg-[#FF3B00] text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">#1 Top</span>
        <span className="text-xs font-bold tracking-wider text-stone-800 uppercase">Train Hard. Look Strong.</span>
      </div>

      <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-neutral-900 leading-[1.15] mb-6">
        Build Muscle and Get Stronger
      </h1>

      {/* Athlete / Hero Image */}
      <div className="relative w-full flex justify-center my-2 group">
        <div className="relative w-full overflow-hidden rounded-3xl">
          <img 
            src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop" 
            alt="Athlete Training" 
            className="w-full h-80 object-cover rounded-3xl shadow-sm transition-transform duration-700 group-hover:scale-105"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 rounded-3xl pointer-events-none" />
          <div className="absolute bottom-3.5 left-4 right-4 flex items-center justify-between text-white text-xs font-bold">
            <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">Strength & Conditioning</span>
            <span className="bg-[#FF3B00]/90 px-3 py-1 rounded-full font-extrabold flex items-center gap-1">
              <Star className="w-3 h-3 fill-white" /> Pro Coaching
            </span>
          </div>
        </div>
      </div>

      {/* Social Proof / Testimonial Box */}
      <div className="w-full bg-white rounded-2xl p-5 border border-stone-200/80 mt-5 text-left shadow-xs hover:border-orange-200 transition-colors">
        <div className="flex items-center gap-3 mb-3">
          <div className="flex -space-x-2 overflow-hidden">
            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face" alt="Member" />
            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" alt="Member" />
            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face" alt="Member" />
            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face" alt="Member" />
          </div>
          <span className="text-xs font-extrabold tracking-wide text-neutral-800">5K+ HAPPY MEMBERS</span>
        </div>
        <p className="text-stone-600 text-sm leading-relaxed mb-4">
          Their coaches guided me every step, and now I train harder and recover faster daily.
        </p>
        <button 
          id="hero-join-btn"
          onClick={onJoinClick}
          className="w-full sm:w-auto bg-[#FF3B00] hover:bg-orange-600 active:scale-95 text-white font-bold py-3.5 px-6 rounded-xl transition text-sm flex items-center justify-center gap-2 shadow-sm shadow-orange-500/20 cursor-pointer"
        >
          <span>Join Now</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};

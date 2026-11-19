import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface AboutSectionProps {
  onStartClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onStartClick }) => {
  return (
    <section id="about" className="space-y-4 pt-2">
      <div className="badge-pill">
        <span className="badge-dot" />
        <span>About us</span>
      </div>

      <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-900 leading-tight">
        Build a stronger body. Live better.
      </h2>

      <p className="text-stone-600 text-sm leading-relaxed">
        Our expert coaches support you throughout your journey, keeping every workout focused.
      </p>

      <div>
        <button 
          id="about-start-btn"
          onClick={onStartClick}
          className="bg-[#FF3B00] hover:bg-orange-600 active:scale-95 text-white font-bold py-3 px-6 rounded-xl text-sm transition inline-flex items-center gap-2 shadow-sm shadow-orange-500/20 cursor-pointer"
        >
          <span>Start Today</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* About Image Card */}
      <div className="bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-xs mt-6 group hover:border-orange-200 transition-colors">
        <div className="overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop" 
            alt="Dumbbell Workout" 
            className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="p-6 space-y-3">
          <div className="flex items-center gap-1.5 text-[#FF3B00] text-xs font-extrabold uppercase tracking-wider">
            <CheckCircle2 className="w-3.5 h-3.5" /> Certified Master Trainers
          </div>
          <h3 className="font-bold text-lg text-neutral-900 leading-snug">
            Transforming lives through fitness, one powerful workout at a time.
          </h3>
          <p className="text-stone-600 text-xs leading-relaxed">
            Personalized training plans tailored to your goals, fitness level, lifestyle, and consistency for lasting results.
          </p>
        </div>
      </div>
    </section>
  );
};

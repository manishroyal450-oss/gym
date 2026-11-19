import React from 'react';
import { Activity, Brain, Flame, Target } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="space-y-5 pt-2">
      {/* Top Coach Arched Image */}
      <div className="w-full flex justify-center mb-6">
        <div className="w-full h-80 rounded-t-full rounded-b-2xl overflow-hidden border border-stone-200 shadow-sm relative group">
          <img 
            src="https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=800&auto=format&fit=crop" 
            alt="Coach" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-4 left-6 right-6 text-center text-white">
            <span className="text-xs uppercase tracking-widest font-extrabold text-orange-200">Head Performance Coach</span>
          </div>
        </div>
      </div>

      <div className="badge-pill">
        <span className="badge-dot" />
        <span>Why Choose us</span>
      </div>

      <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 leading-snug">
        Training that builds strength, confidence, and a better lifestyle
      </h2>

      <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-6">
        At our gym, fitness is more than just a workout. We help you build strength, improve your fitness, and stay consistent with expert guidance and the right environment.
      </p>

      {/* Feature Items List */}
      <div className="space-y-6 pt-2">
        {/* 1 */}
        <div id="feature-strong-body" className="flex items-start gap-4 group">
          <div className="w-12 h-12 rounded-full bg-[#FF3B00] text-white flex items-center justify-center shrink-0 shadow-sm shadow-orange-500/25 group-hover:scale-105 transition-transform">
            <Activity className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-lg text-neutral-900">Strong Body</h3>
            <p className="text-stone-600 text-xs leading-relaxed mt-0.5">
              Build strength, improve endurance, and develop a healthier, stronger body.
            </p>
          </div>
        </div>

        {/* 2 */}
        <div id="feature-strong-mind" className="flex items-start gap-4 group">
          <div className="w-12 h-12 rounded-full bg-[#FF3B00] text-white flex items-center justify-center shrink-0 shadow-sm shadow-orange-500/25 group-hover:scale-105 transition-transform">
            <Brain className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-lg text-neutral-900">Strong Mind</h3>
            <p className="text-stone-600 text-xs leading-relaxed mt-0.5">
              Stay focused, motivated, and disciplined while building a positive mindset toward fitness.
            </p>
          </div>
        </div>

        {/* 3 */}
        <div id="feature-muscle-growth" className="flex items-start gap-4 group">
          <div className="w-12 h-12 rounded-full bg-[#FF3B00] text-white flex items-center justify-center shrink-0 shadow-sm shadow-orange-500/25 group-hover:scale-105 transition-transform">
            <Flame className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-lg text-neutral-900">Muscle Growth</h3>
            <p className="text-stone-600 text-xs leading-relaxed mt-0.5">
              Improve your stamina, energy, flexibility, and overall physical performance.
            </p>
          </div>
        </div>

        {/* 4 */}
        <div id="feature-fitness-goals" className="flex items-start gap-4 group">
          <div className="w-12 h-12 rounded-full bg-[#FF3B00] text-white flex items-center justify-center shrink-0 shadow-sm shadow-orange-500/25 group-hover:scale-105 transition-transform">
            <Target className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-lg text-neutral-900">Fitness Goals</h3>
            <p className="text-stone-600 text-xs leading-relaxed mt-0.5">
              Whether you want to lose fat, build muscle, or get stronger, our training helps you stay on track.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

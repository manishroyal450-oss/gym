import React, { useState } from 'react';
import { ArrowRight, ChevronDown, Check } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data';

interface HowItWorksProps {
  onStepAction: (stepId: string) => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onStepAction }) => {
  const [expandedStep, setExpandedStep] = useState<string | null>('step-1');

  const toggleStep = (id: string) => {
    setExpandedStep(prev => prev === id ? null : id);
  };

  return (
    <section id="how-it-works" className="space-y-4 pt-4">
      <div className="badge-pill">
        <span className="badge-dot" />
        <span>How it works</span>
      </div>

      <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-900 leading-tight">
        Simple Steps to Reach Your Goals
      </h2>

      <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-6">
        Discover how to plan your training, follow workouts, and stay consistent without losing motivation.
      </p>

      <div className="divide-y divide-stone-200/90 border-y border-stone-200/90">
        {HOW_IT_WORKS_STEPS.map((step) => {
          const isExpanded = expandedStep === step.id;
          return (
            <div
              key={step.id}
              id={`step-${step.id}`}
              onClick={() => toggleStep(step.id)}
              className="py-6 group cursor-pointer transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="space-y-1 pr-4">
                  <span className="text-xs font-bold text-stone-400 font-mono tracking-wider">{step.num}</span>
                  <h3 className="text-lg font-extrabold uppercase text-neutral-900 tracking-tight group-hover:text-[#FF3B00] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </div>
                <button 
                  type="button"
                  aria-label={`Toggle step ${step.title}`}
                  className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center transition-all ${
                    isExpanded 
                      ? 'bg-[#FF3B00] text-white rotate-90 shadow-sm shadow-orange-500/30' 
                      : 'bg-neutral-900 text-white group-hover:bg-[#FF3B00]'
                  }`}
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Expandable detail card */}
              {isExpanded && (
                <div className="mt-4 p-4 rounded-2xl bg-white border border-stone-200/90 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="flex items-start gap-2.5 text-xs text-stone-700 leading-relaxed">
                    <div className="w-5 h-5 rounded-full bg-orange-100 text-[#FF3B00] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <p>{step.detail}</p>
                  </div>
                  <div className="pt-1">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onStepAction(step.id);
                      }}
                      className="text-xs font-bold text-[#FF3B00] hover:underline flex items-center gap-1.5"
                    >
                      <span>Start with this step</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

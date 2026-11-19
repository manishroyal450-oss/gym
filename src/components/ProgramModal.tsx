import React from 'react';
import { X, Check, Clock, Award, ArrowRight } from 'lucide-react';
import { TrainingProgram } from '../types';

interface ProgramModalProps {
  program: TrainingProgram | null;
  onClose: () => void;
  onEnroll: (program: TrainingProgram) => void;
}

export const ProgramModal: React.FC<ProgramModalProps> = ({ program, onClose, onEnroll }) => {
  if (!program) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-md bg-white rounded-3xl overflow-hidden shadow-2xl border border-stone-200 relative my-auto animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-56 w-full">
          <img src={program.image} alt={program.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 text-white hover:bg-black flex items-center justify-center transition cursor-pointer"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="absolute bottom-4 left-5 right-5 text-white">
            <span className="text-[11px] font-mono font-bold bg-[#FF3B00] px-2 py-0.5 rounded-md uppercase">
              Program {program.num}
            </span>
            <h3 className="text-2xl font-black mt-1 leading-tight">{program.title}</h3>
            <p className="text-xs text-stone-300 font-medium">{program.tags}</p>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between text-xs bg-stone-50 p-3 rounded-2xl border border-stone-200/80">
            <div className="flex items-center gap-1.5 text-stone-700 font-semibold">
              <Clock className="w-3.5 h-3.5 text-[#FF3B00]" />
              <span>{program.duration}</span>
            </div>
            <div className="flex items-center gap-1.5 text-stone-700 font-semibold">
              <Award className="w-3.5 h-3.5 text-[#FF3B00]" />
              <span>{program.level}</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1">
              Program Overview
            </h4>
            <p className="text-stone-700 text-xs leading-relaxed">
              {program.description}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
              Key Focus Highlights
            </h4>
            <div className="space-y-2">
              {program.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-stone-700">
                  <div className="w-4 h-4 rounded-full bg-orange-100 text-[#FF3B00] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => {
              onClose();
              onEnroll(program);
            }}
            className="w-full bg-[#FF3B00] hover:bg-orange-600 text-white font-bold py-3.5 px-6 rounded-xl transition text-sm flex items-center justify-center gap-2 shadow-sm shadow-orange-500/30 cursor-pointer pt-2"
          >
            <span>Start This Program Today</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

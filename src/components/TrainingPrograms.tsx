import React from 'react';
import { TrainingProgram } from '../types';
import { TRAINING_PROGRAMS } from '../data';

interface TrainingProgramsProps {
  onSelectProgram: (program: TrainingProgram) => void;
}

export const TrainingPrograms: React.FC<TrainingProgramsProps> = ({ onSelectProgram }) => {
  return (
    <section id="programs" className="space-y-5 pt-2">
      <div className="flex items-center justify-between">
        <div className="badge-pill">
          <span className="badge-dot" />
          <span>Programs</span>
        </div>
        <span className="text-xs font-bold text-stone-400">4 Specializations</span>
      </div>

      <div className="space-y-5">
        {TRAINING_PROGRAMS.map((prog) => (
          <div
            key={prog.id}
            id={`program-card-${prog.id}`}
            onClick={() => onSelectProgram(prog)}
            className="group relative rounded-3xl overflow-hidden h-[340px] text-white flex flex-col justify-between p-6 shadow-sm cursor-pointer transition-transform duration-300 hover:scale-[1.01]"
          >
            <img 
              src={prog.image} 
              alt={prog.title} 
              className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            {prog.id === 'active-recovery' ? (
              <div className="absolute inset-0 bg-gradient-to-t from-sky-950/90 via-sky-900/40 to-black/60 z-0 group-hover:via-sky-900/30 transition-colors" />
            ) : prog.id === 'fat-burn' ? (
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/60 z-0 group-hover:via-black/30 transition-colors" />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60 z-0 group-hover:via-black/30 transition-colors" />
            )}

            <div className="relative z-10 flex justify-between text-xs font-semibold text-stone-300">
              <span className="font-mono bg-black/40 backdrop-blur-xs px-2.5 py-0.5 rounded-full">{prog.num}</span>
              <span className="tracking-wider uppercase text-[11px]">(TRAINING PROGRAMS)</span>
            </div>

            <div className="relative z-10 text-center space-y-3">
              <h3 className="text-2xl font-bold tracking-tight text-white drop-shadow-xs">{prog.title}</h3>
              <p className="text-xs text-stone-300 font-medium">{prog.tags}</p>
              <button 
                id={`btn-program-${prog.id}`}
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectProgram(prog);
                }}
                className="bg-[#FF3B00] hover:bg-orange-600 active:scale-95 text-white font-bold py-2.5 px-6 rounded-xl text-xs transition shadow-sm shadow-orange-500/30 cursor-pointer"
              >
                Start Today
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

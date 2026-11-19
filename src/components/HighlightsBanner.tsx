import React from 'react';
import { Zap } from 'lucide-react';

export const HighlightsBanner: React.FC = () => {
  return (
    <section 
      id="highlights" 
      className="bg-[#FF3B00] -mx-5 px-6 py-4 grid grid-cols-2 gap-y-3 gap-x-4 text-white text-xs font-bold tracking-wide shadow-xs"
    >
      <div className="flex items-center gap-2">
        <Zap className="w-4 h-4 fill-white text-white shrink-0" />
        <span>Easy training</span>
      </div>
      <div className="flex items-center gap-2">
        <Zap className="w-4 h-4 fill-white text-white shrink-0" />
        <span>Stay fit</span>
      </div>
      <div className="flex items-center gap-2">
        <Zap className="w-4 h-4 fill-white text-white shrink-0" />
        <span>Gain strength</span>
      </div>
      <div className="flex items-center gap-2">
        <Zap className="w-4 h-4 fill-white text-white shrink-0" />
        <span>Burn calories</span>
      </div>
    </section>
  );
};

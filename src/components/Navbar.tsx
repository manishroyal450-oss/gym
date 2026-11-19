import React, { useState } from 'react';
import { Dumbbell, Menu, X, ArrowRight, ShieldCheck, PhoneCall } from 'lucide-react';

interface NavbarProps {
  onOpenJoin: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenJoin, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <header id="main-header" className="w-full max-w-md mx-auto px-5 py-4 flex items-center justify-between relative z-30">
        <button 
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-2.5 text-left group focus:outline-none"
          aria-label="Oxygen Gym Home"
        >
          <div className="w-9 h-9 rounded-xl bg-[#FF3B00] flex items-center justify-center text-white shadow-sm shadow-orange-500/20 group-hover:scale-105 transition-transform duration-200">
            <Dumbbell className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-xl tracking-tight text-neutral-900 leading-none">OXYGEN GYM</span>
            <span className="text-[10px] font-extrabold tracking-widest text-[#FF3B00] uppercase">Fitness & Strength</span>
          </div>
        </button>

        <button
          id="nav-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          className="bg-[#FF3B00] hover:bg-orange-600 active:scale-95 transition text-white px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-2 shadow-sm shadow-orange-500/25 cursor-pointer"
        >
          <span>Menu</span>
          {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </header>

      {/* Slide-down / Dropdown Menu Drawer */}
      {mobileMenuOpen && (
        <div 
          id="menu-overlay"
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs flex justify-center p-4 transition-all"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div 
            id="mobile-drawer"
            className="w-full max-w-md bg-white rounded-3xl p-6 shadow-2xl border border-stone-200 self-start mt-16 space-y-5 animate-in fade-in slide-in-from-top-4 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-stone-100">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#FF3B00] flex items-center justify-center text-white">
                  <Dumbbell className="w-4 h-4" />
                </div>
                <span className="font-extrabold text-base tracking-tight text-neutral-900">OXYGEN GYM</span>
              </div>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="w-8 h-8 rounded-full bg-stone-100 text-stone-600 hover:text-black flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <nav className="flex flex-col space-y-2 text-sm font-bold text-neutral-800">
              <button 
                onClick={() => handleNavClick('hero')} 
                className="flex items-center justify-between py-2.5 px-3 rounded-xl hover:bg-stone-50 transition text-left"
              >
                <span>Home & Overview</span>
                <ArrowRight className="w-4 h-4 text-stone-400" />
              </button>
              <button 
                onClick={() => handleNavClick('about')} 
                className="flex items-center justify-between py-2.5 px-3 rounded-xl hover:bg-stone-50 transition text-left"
              >
                <span>About Oxygen Gym</span>
                <ArrowRight className="w-4 h-4 text-stone-400" />
              </button>
              <button 
                onClick={() => handleNavClick('programs')} 
                className="flex items-center justify-between py-2.5 px-3 rounded-xl hover:bg-stone-50 transition text-left"
              >
                <span>Training Programs</span>
                <ArrowRight className="w-4 h-4 text-stone-400" />
              </button>
              <button 
                onClick={() => handleNavClick('blogs')} 
                className="flex items-center justify-between py-2.5 px-3 rounded-xl hover:bg-stone-50 transition text-left"
              >
                <span>Guides & Blogs</span>
                <ArrowRight className="w-4 h-4 text-stone-400" />
              </button>
              <button 
                onClick={() => handleNavClick('how-it-works')} 
                className="flex items-center justify-between py-2.5 px-3 rounded-xl hover:bg-stone-50 transition text-left"
              >
                <span>How It Works</span>
                <ArrowRight className="w-4 h-4 text-stone-400" />
              </button>
              <button 
                onClick={() => handleNavClick('why-us')} 
                className="flex items-center justify-between py-2.5 px-3 rounded-xl hover:bg-stone-50 transition text-left"
              >
                <span>Why Choose Us</span>
                <ArrowRight className="w-4 h-4 text-stone-400" />
              </button>
              <button 
                onClick={() => handleNavClick('pricing')} 
                className="flex items-center justify-between py-2.5 px-3 rounded-xl hover:bg-stone-50 transition text-left"
              >
                <span>Membership & Pricing</span>
                <span className="text-[11px] bg-orange-100 text-[#FF3B00] px-2 py-0.5 rounded-md font-extrabold">Plans</span>
              </button>
            </nav>

            <div className="pt-2 border-t border-stone-100 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenJoin();
                }}
                className="w-full bg-[#FF3B00] hover:bg-orange-600 text-white font-bold py-3.5 px-6 rounded-xl transition text-sm flex items-center justify-center gap-2 shadow-sm shadow-orange-500/30"
              >
                <span>Join Now — Free Trial</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="flex items-center justify-center gap-3 text-xs text-stone-500 pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> No commitments
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <PhoneCall className="w-3.5 h-3.5 text-[#FF3B00]" /> Coach support
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

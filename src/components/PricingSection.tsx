import React from 'react';
import { Check, Shield, ArrowRight } from 'lucide-react';
import { PRICING_PLANS } from '../data';
import { PricingPlan } from '../types';

interface PricingSectionProps {
  onSelectPlan: (plan: PricingPlan) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  return (
    <section id="pricing" className="space-y-6 pt-6">
      {/* PRICING HEADER */}
      <div className="text-center space-y-4">
        <div className="badge-pill inline-flex">
          <span className="badge-dot" />
          <span>Pricing</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-900 leading-tight">
          Choose the Best Plan For You
        </h2>
        <p className="text-stone-600 text-xs sm:text-sm leading-relaxed max-w-sm mx-auto">
          Flexible membership options designed to help you train consistently and achieve your fitness goals.
        </p>
      </div>

      {/* Pricing Card */}
      <div className="space-y-4 pt-2">
        {PRICING_PLANS.map((plan) => (
          <div
            key={plan.id}
            id={`pricing-card-${plan.id}`}
            className="rounded-3xl p-6 transition-all duration-200 bg-white text-neutral-900 border border-stone-200/90 shadow-xs hover:border-orange-200"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-black text-lg text-neutral-900">
                {plan.name}
              </h3>
              {plan.badge && (
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-700">
                  {plan.badge}
                </span>
              )}
            </div>

            <p className="text-xs mb-4 leading-relaxed text-stone-600">
              {plan.description}
            </p>

            <div className="flex items-baseline gap-1.5 mb-5">
              <span className="text-3xl sm:text-4xl font-black tracking-tight">₹{plan.monthlyPrice.toLocaleString('en-IN')}</span>
              <span className="text-xs font-semibold text-stone-500">
                / month
              </span>
            </div>

            <div className="space-y-2.5 mb-6 text-xs">
              {plan.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-orange-100 text-[#FF3B00]">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span className="text-stone-700">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <button
              id={`btn-plan-${plan.id}`}
              onClick={() => onSelectPlan(plan)}
              className="w-full font-bold py-3.5 px-6 rounded-xl transition text-sm flex items-center justify-center gap-2 cursor-pointer bg-red-600 hover:bg-red-700 active:bg-red-800 text-white shadow-md shadow-red-600/25"
            >
              <span>Join Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      {/* Trust guarantees badge */}
      <div className="bg-white rounded-2xl p-4 border border-stone-200 flex items-center justify-center gap-2 text-center text-xs text-stone-600">
        <Shield className="w-4 h-4 text-[#FF3B00] shrink-0" />
        <span>14-day money-back guarantee • No long-term commitments • Cancel anytime</span>
      </div>
    </section>
  );
};

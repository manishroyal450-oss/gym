import React, { useState } from 'react';
import { X, Check, Dumbbell, Sparkles, ArrowRight, User, Mail, Phone, MapPin, Building2, ChevronDown } from 'lucide-react';
import { PricingPlan } from '../types';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan?: PricingPlan | null;
}

const STATES_LIST = [
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chandigarh',
  'Chhattisgarh',
  'Delhi',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jammu & Kashmir',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttar Pradesh',
  'Uttarakhand',
  'West Bengal',
  'Other'
];

export const JoinModal: React.FC<JoinModalProps> = ({
  isOpen,
  onClose,
  selectedPlan,
}) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName.trim() || !lastName.trim() || !email.trim() || !number.trim()) return;
    setStep('success');
  };

  const resetAndClose = () => {
    setStep('form');
    setFirstName('');
    setLastName('');
    setEmail('');
    setNumber('');
    setStreetAddress('');
    setCity('');
    setState('');
    onClose();
  };

  return (
    <div 
      id="join-modal-overlay"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
      onClick={resetAndClose}
    >
      <div 
        id="join-modal-card"
        className="w-full max-w-lg bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-stone-200 relative my-auto animate-in fade-in zoom-in-95 duration-200 max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={resetAndClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 flex items-center justify-center transition cursor-pointer z-10"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {step === 'form' ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-lg bg-[#FF3B00] flex items-center justify-center text-white">
                <Dumbbell className="w-4 h-4" />
              </div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF3B00]">Oxygen Gym Membership</span>
            </div>

            <h3 className="text-2xl font-black text-neutral-900 tracking-tight leading-snug">
              Join Oxygen Gym
            </h3>
            <p className="text-stone-600 text-xs mt-1 mb-4 leading-relaxed">
              Fill in your details below to activate your gym membership and start training with our expert coaches.
            </p>

            {selectedPlan && (
              <div className="bg-[#FAF7F2] rounded-2xl p-3.5 border border-stone-200/90 mb-5 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider">Selected Membership</span>
                  <div className="font-extrabold text-sm text-neutral-900">{selectedPlan.name}</div>
                </div>
                <div className="text-right">
                  <span className="text-base font-black text-[#FF3B00]">
                    ₹{selectedPlan.monthlyPrice.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs text-stone-500 font-semibold"> / month</span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* First Name */}
              <div>
                <label className="block text-sm font-semibold text-neutral-800 mb-1.5">
                  First Name <span className="text-teal-600 font-bold">*</span>
                </label>
                <div className="flex items-center gap-3 bg-white border border-stone-200 rounded-xl px-4 py-3 text-sm text-neutral-900 focus-within:border-neutral-900 focus-within:ring-1 focus-within:ring-neutral-900 transition shadow-xs">
                  <User className="w-4 h-4 text-stone-400 shrink-0" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full bg-transparent text-sm placeholder:text-stone-400 focus:outline-none text-neutral-900"
                  />
                </div>
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-sm font-semibold text-neutral-800 mb-1.5">
                  Last Name <span className="text-teal-600 font-bold">*</span>
                </label>
                <div className="flex items-center gap-3 bg-white border border-stone-200 rounded-xl px-4 py-3 text-sm text-neutral-900 focus-within:border-neutral-900 focus-within:ring-1 focus-within:ring-neutral-900 transition shadow-xs">
                  <User className="w-4 h-4 text-stone-400 shrink-0" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jenkins"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full bg-transparent text-sm placeholder:text-stone-400 focus:outline-none text-neutral-900"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-neutral-800 mb-1.5">
                  Email <span className="text-teal-600 font-bold">*</span>
                </label>
                <div className="flex items-center gap-3 bg-white border border-stone-200 rounded-xl px-4 py-3 text-sm text-neutral-900 focus-within:border-neutral-900 focus-within:ring-1 focus-within:ring-neutral-900 transition shadow-xs">
                  <Mail className="w-4 h-4 text-stone-400 shrink-0" />
                  <input
                    type="email"
                    required
                    placeholder="sarah.jenkins@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent text-sm placeholder:text-stone-400 focus:outline-none text-neutral-900"
                  />
                </div>
              </div>

              {/* Number */}
              <div>
                <label className="block text-sm font-semibold text-neutral-800 mb-1.5">
                  Number <span className="text-teal-600 font-bold">*</span>
                </label>
                <div className="flex items-center gap-3 bg-white border border-stone-200 rounded-xl px-4 py-3 text-sm text-neutral-900 focus-within:border-neutral-900 focus-within:ring-1 focus-within:ring-neutral-900 transition shadow-xs">
                  <Phone className="w-4 h-4 text-stone-400 shrink-0" />
                  <input
                    type="tel"
                    required
                    maxLength={15}
                    placeholder="Enter 10-digit phone number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    className="w-full bg-transparent text-sm placeholder:text-stone-400 focus:outline-none text-neutral-900"
                  />
                </div>
              </div>

              {/* Street Address */}
              <div>
                <label className="block text-sm font-semibold text-neutral-800 mb-1.5">
                  Street Address <span className="text-teal-600 font-bold">*</span>
                </label>
                <div className="flex items-center gap-3 bg-white border border-stone-200 rounded-xl px-4 py-3 text-sm text-neutral-900 focus-within:border-neutral-900 focus-within:ring-1 focus-within:ring-neutral-900 transition shadow-xs">
                  <MapPin className="w-4 h-4 text-stone-400 shrink-0" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. 742 Evergreen Terrace, Apt 4B"
                    value={streetAddress}
                    onChange={(e) => setStreetAddress(e.target.value)}
                    className="w-full bg-transparent text-sm placeholder:text-stone-400 focus:outline-none text-neutral-900"
                  />
                </div>
              </div>

              {/* City */}
              <div>
                <label className="block text-sm font-semibold text-neutral-800 mb-1.5">
                  City <span className="text-teal-600 font-bold">*</span>
                </label>
                <div className="flex items-center gap-3 bg-white border border-stone-200 rounded-xl px-4 py-3 text-sm text-neutral-900 focus-within:border-neutral-900 focus-within:ring-1 focus-within:ring-neutral-900 transition shadow-xs">
                  <Building2 className="w-4 h-4 text-stone-400 shrink-0" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Houston"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full bg-transparent text-sm placeholder:text-stone-400 focus:outline-none text-neutral-900"
                  />
                </div>
              </div>

              {/* State */}
              <div>
                <label className="block text-sm font-semibold text-neutral-800 mb-1.5">
                  State <span className="text-teal-600 font-bold">*</span>
                </label>
                <div className="relative flex items-center bg-white border border-stone-200 rounded-xl px-4 py-3 text-sm text-neutral-900 focus-within:border-neutral-900 focus-within:ring-1 focus-within:ring-neutral-900 transition shadow-xs">
                  <select
                    required
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="w-full bg-transparent text-sm text-neutral-900 appearance-none focus:outline-none cursor-pointer pr-6"
                  >
                    <option value="" disabled>Select State</option>
                    {STATES_LIST.map((st) => (
                      <option key={st} value={st}>
                        {st}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 text-stone-400 absolute right-4 pointer-events-none" />
                </div>
              </div>

              {/* Red Join Now Button */}
              <button
                type="submit"
                id="btn-submit-join-form"
                className="w-full bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold py-3.5 px-6 rounded-xl transition text-sm flex items-center justify-center gap-2 shadow-md shadow-red-600/25 cursor-pointer mt-2"
              >
                <span>Join Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-center text-[11px] text-stone-500">
                Guaranteed response within 2 hours • 100% Secure registration
              </p>
            </form>
          </div>
        ) : (
          <div className="text-center py-4 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <Check className="w-7 h-7 stroke-[3]" />
            </div>
            <h3 className="text-2xl font-black text-neutral-900">
              Welcome to Oxygen Gym!
            </h3>
            <p className="text-stone-600 text-xs leading-relaxed max-w-sm mx-auto">
              Thank you, <span className="font-bold text-neutral-900">{firstName} {lastName}</span>! Your membership registration for <span className="font-bold text-red-600">Oxygen Gym</span> has been submitted successfully.
            </p>

            {/* Registration Summary Card */}
            <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-stone-200 text-xs text-left space-y-2.5">
              <div className="flex items-center gap-2 font-bold text-neutral-900">
                <Sparkles className="w-4 h-4 text-red-600" /> Member Registration Details:
              </div>
              <div className="grid grid-cols-2 gap-2 text-stone-600 pt-1">
                <div>
                  <span className="block text-[10px] uppercase font-bold text-stone-400">Name</span>
                  <span className="font-medium text-neutral-800">{firstName} {lastName}</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold text-stone-400">Phone</span>
                  <span className="font-medium text-neutral-800">{number}</span>
                </div>
                <div className="col-span-2">
                  <span className="block text-[10px] uppercase font-bold text-stone-400">Email</span>
                  <span className="font-medium text-neutral-800">{email}</span>
                </div>
                <div className="col-span-2">
                  <span className="block text-[10px] uppercase font-bold text-stone-400">Address</span>
                  <span className="font-medium text-neutral-800">{streetAddress ? `${streetAddress}, ` : ''}{city}{state ? `, ${state}` : ''}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-stone-200 text-stone-600">
                <p>• Membership details & invoice dispatched to <span className="font-semibold text-neutral-800">{email}</span></p>
                <p>• Your personal coach at Oxygen Gym will contact you at <span className="font-semibold text-neutral-800">{number}</span></p>
              </div>
            </div>

            <button
              type="button"
              onClick={resetAndClose}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 px-6 rounded-xl text-xs transition cursor-pointer shadow-md shadow-red-600/20"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

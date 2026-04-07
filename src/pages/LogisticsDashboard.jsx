import React from 'react';
import { Truck, MapPin, Navigation, User, Info, CheckCircle2, CircleDashed } from 'lucide-react';
import { motion } from 'framer-motion';

const StatusStep = ({ title, description, status, isLast }) => {
  const isCompleted = status === 'completed';
  const isActive = status === 'active';

  return (
    <div className="relative flex gap-4 pb-8">
      {!isLast && (
        <div className={`absolute left-4 top-10 h-[calc(100%-2.5rem)] w-0.5 ${isCompleted ? 'bg-energetic-teal' : 'bg-gray-200'}`}></div>
      )}
      <div className="relative z-10 flex h-8 w-8 items-center justify-center shrink-0">
        {isCompleted ? (
          <div className="h-8 w-8 rounded-full bg-energetic-teal flex items-center justify-center text-white">
            <CheckCircle2 size={18} />
          </div>
        ) : isActive ? (
          <div className="h-8 w-8 rounded-full border-2 border-energetic-teal bg-white flex items-center justify-center text-energetic-teal animate-pulse">
            <CircleDashed size={18} className="animate-spin" />
          </div>
        ) : (
          <div className="h-8 w-8 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center text-gray-400">
            <div className="h-2 w-2 rounded-full bg-current" />
          </div>
        )}
      </div>
      <div className="pt-0.5">
        <h3 className={`text-sm font-bold uppercase tracking-wider ${isActive ? 'text-energetic-teal' : 'text-slate-grey'}`}>
          {title}
        </h3>
        <p className="text-sm text-gray-500 mt-1">{description}</p>
      </div>
    </div>
  );
};

export default function LogisticsDashboard() {
  return (
    <div className="max-w-7xl mx-auto py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-black text-slate-grey uppercase tracking-tighter">Agricultural Command Center</h1>
        <p className="text-gray-500 mt-2 font-medium">Real-time logistics & shipment intelligence</p>
      </header>

      <div className="grid lg:grid-cols-12 gap-6 min-h-[600px]">
        {/* Left Side: Interactive Live Map */}
        <div className="lg:col-span-7 bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden relative group">
          <div className="absolute top-6 left-6 z-10 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-slate-100">
            <div className="flex items-center gap-3">
              <div className="bg-energetic-teal/20 p-2 rounded-lg">
                <Navigation className="text-energetic-teal w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-grey uppercase tracking-widest">Live Route</p>
                <p className="text-sm font-medium text-gray-600">Farmer → Factory X</p>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="absolute inset-0 bg-[#f1f5f9] flex items-center justify-center">
             <div className="relative w-full h-full p-20 opacity-40">
                <svg className="w-full h-full" viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 400C200 350 400 450 700 100" stroke="#00BFA5" strokeWidth="4" strokeDasharray="12 12" className="animate-[dash_20s_linear_infinite]" />
                    <circle cx="100" cy="400" r="12" fill="#263238" />
                    <circle cx="700" cy="100" r="12" fill="#00BFA5" />
                </svg>
                <style>{`
                    @keyframes dash {
                        to { stroke-dashoffset: -1000; }
                    }
                `}</style>
             </div>
             
             {/* Animated Truck Asset */}
             <motion.div 
               animate={{ 
                 x: [0, 400], 
                 y: [0, -200],
                 rotate: [-20, -15]
               }} 
               transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
               className="absolute left-[100px] bottom-[100px] z-20"
             >
                <div className="bg-white p-3 rounded-xl shadow-2xl border border-slate-100">
                    <Truck className="text-energetic-teal w-8 h-8" />
                </div>
             </motion.div>
          </div>

          <div className="absolute bottom-6 right-6 flex gap-2">
            <button className="bg-white p-2 rounded-lg shadow-md border border-slate-100 text-slate-grey hover:bg-slate-50 transition-colors">+</button>
            <button className="bg-white p-2 rounded-lg shadow-md border border-slate-100 text-slate-grey hover:bg-slate-50 transition-colors">-</button>
          </div>
        </div>

        {/* Right Side: Shipment Intelligence */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 flex-grow">
            <div className="flex justify-between items-start mb-10">
              <div>
                <p className="text-xs font-black text-energetic-teal uppercase tracking-[0.2em] mb-1">Shipment Intelligence</p>
                <h2 className="text-2xl font-black text-slate-grey tracking-tight">ID #HSD-90210</h2>
              </div>
              <div className="bg-slate-grey text-white px-3 py-1 rounded-md text-xs font-bold tracking-widest">PRIORITY</div>
            </div>

            <div className="space-y-0">
              <StatusStep 
                title="Order Confirmed" 
                description="April 05, 2026 - 09:30 AM" 
                status="completed" 
              />
              <StatusStep 
                title="Pickup Complete" 
                description="April 05, 2026 - 11:15 AM" 
                status="completed" 
              />
              <StatusStep 
                title="In Transit" 
                description="Currently 12km from destination" 
                status="active" 
              />
              <StatusStep 
                title="Delivered" 
                description="Estimated 02:45 PM" 
                status="pending" 
                isLast 
              />
            </div>

            <hr className="my-8 border-slate-100" />

            <div className="grid grid-cols-2 gap-4">
               <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Driver Bio</p>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-slate-200"></div>
                    <p className="text-xs font-bold text-slate-grey">Ahmed K.</p>
                  </div>
               </div>
               <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">ETA</p>
                  <p className="text-xs font-bold text-slate-grey">42 MINS</p>
               </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
               <div className="bg-slate-grey/5 p-4 rounded-xl border border-slate-100 relative overflow-hidden">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Payload Stability</p>
                  <div className="flex items-end justify-between">
                    <p className="text-xs font-black text-slate-grey uppercase tracking-tighter">98% SECURE</p>
                    <div className="flex gap-0.5 h-4 items-end">
                        {[40, 70, 90, 60, 100].map((h, i) => (
                            <div key={i} className="w-1 bg-energetic-teal rounded-full" style={{ height: `${h}%` }}></div>
                        ))}
                    </div>
                  </div>
               </div>
               <div className="bg-slate-grey/5 p-4 rounded-xl border border-slate-100">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Moisture Level</p>
                  <div className="flex items-end justify-between">
                    <p className="text-xs font-black text-slate-grey uppercase tracking-tighter">14.2% DRY</p>
                    <Info size={14} className="text-energetic-teal" />
                  </div>
               </div>
            </div>
          </div>
          
          <div className="bg-slate-grey text-white rounded-2xl p-6 flex justify-between items-center group cursor-pointer overflow-hidden relative">
             <div className="relative z-10">
                <p className="text-sm text-white/60 font-medium">Next Milestone</p>
                <h3 className="text-lg font-bold">Factory Arrival Verification</h3>
             </div>
             <div className="bg-energetic-teal p-3 rounded-xl relative z-10 group-hover:scale-110 transition-transform">
                <CheckCircle2 className="text-white w-6 h-6" />
             </div>
             <div className="absolute right-0 top-0 w-32 h-32 bg-energetic-teal/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-energetic-teal/20 transition-all"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

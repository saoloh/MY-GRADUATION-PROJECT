import React, { useState } from 'react';
import { Truck, MapPin, Navigation, CheckCircle2, Box, ArrowRight, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

const LoadCard = ({ load, onClaim }) => (
  <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-all">
    <div className="flex justify-between items-start mb-4">
        <div className="bg-energetic-teal/10 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-energetic-teal">
            {load.payout} Payout
        </div>
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{load.distance} km trip</span>
    </div>
    <div className="space-y-4 mb-6">
        <div className="flex gap-3">
            <div className="flex flex-col items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-slate-grey"></div>
                <div className="w-0.5 h-6 bg-slate-100"></div>
                <div className="w-2 h-2 rounded-full bg-energetic-teal"></div>
            </div>
            <div className="space-y-3">
                <div className="text-xs">
                    <p className="font-black text-slate-grey uppercase leading-none mb-1">Pickup</p>
                    <p className="text-gray-500 font-medium">{load.from}</p>
                </div>
                <div className="text-xs">
                    <p className="font-black text-slate-grey uppercase leading-none mb-1">Delivery</p>
                    <p className="text-gray-500 font-medium">{load.to}</p>
                </div>
            </div>
        </div>
    </div>
    <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-2xl mb-6">
        <Box size={16} className="text-slate-400" />
        <p className="text-xs font-bold text-slate-grey uppercase tracking-tight">{load.material} • {load.weight}</p>
    </div>
    <button 
        onClick={() => onClaim(load)}
        className="w-full bg-slate-grey text-white py-4 rounded-xl font-black text-xs uppercase tracking-[0.2em] hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group"
    >
        Claim Load
        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
    </button>
  </div>
);

export default function DriverConsole() {
  const [activeTab, setActiveTab] = useState('available');
  const [isClaimed, setIsClaimed] = useState(false);

  const availableLoads = [
    { id: 1, from: 'El-Minya Farm Sector 4', to: 'Cairo Bio-Fuel Plant', payout: '$120.00', distance: '180', material: 'Rice Husk', weight: '1.2 Tons' },
    { id: 2, from: 'Dakahlia Agri-Hub', to: 'Alexandria Paper Mill', payout: '$85.00', distance: '95', material: 'Wheat Stalks', weight: '800 kg' },
  ];

  if (isClaimed) {
    return (
        <div className="max-w-md mx-auto space-y-6">
            <div className="bg-slate-grey text-white p-8 rounded-[2.5rem] relative overflow-hidden">
                <div className="relative z-10">
                    <div className="flex justify-between items-center mb-8">
                        <p className="text-xs font-black text-energetic-teal uppercase tracking-widest">Active Route</p>
                        <AlertTriangle size={20} className="text-amber-400" />
                    </div>
                    <h2 className="text-3xl font-black tracking-tighter mb-2">ON ROUTE</h2>
                    <p className="text-white/60 text-sm font-medium">To: Cairo Bio-Fuel Plant</p>
                </div>
                <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-energetic-teal/10 rounded-full blur-3xl"></div>
            </div>

            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-8">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2 text-energetic-teal">
                        <Navigation size={20} />
                        <span className="font-black text-xs uppercase tracking-widest">Navigation Live</span>
                    </div>
                    <p className="text-2xl font-black text-slate-grey tracking-tighter">12.4 km</p>
                </div>
                
                <div className="space-y-4">
                    <button className="w-full bg-energetic-teal text-white py-5 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-energetic-teal/20">
                        Confirm Pickup (Scan QR)
                    </button>
                    <button 
                        onClick={() => setIsClaimed(false)}
                        className="w-full text-gray-400 py-2 font-bold text-xs uppercase tracking-widest"
                    >
                        Report Issue
                    </button>
                </div>
            </div>
        </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-black text-slate-grey uppercase tracking-tighter">Driver Console</h1>
          <p className="text-gray-500 mt-1 font-medium">Available logistics opportunities</p>
        </div>
        <div className="flex bg-white p-1.5 rounded-2xl border border-slate-100 shadow-sm">
            <button 
                onClick={() => setActiveTab('available')}
                className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'available' ? 'bg-slate-grey text-white' : 'text-gray-400'}`}
            >
                Available
            </button>
            <button 
                onClick={() => setActiveTab('history')}
                className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'history' ? 'bg-slate-grey text-white' : 'text-gray-400'}`}
            >
                History
            </button>
        </div>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        {availableLoads.map(load => (
            <LoadCard key={load.id} load={load} onClaim={() => setIsClaimed(true)} />
        ))}
      </div>
    </div>
  );
}

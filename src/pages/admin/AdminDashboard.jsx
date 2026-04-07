import React, { useState } from 'react';
import { ShieldCheck, Truck, BarChart3, Users, CheckCircle2, XCircle, Clock, Search, Navigation } from 'lucide-react';
import { motion } from 'framer-motion';

const TabButton = ({ active, onClick, icon: Icon, label }) => (
  <button 
    onClick={onClick}
    className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-xs uppercase tracking-widest transition-all ${
      active 
      ? 'bg-slate-grey text-white shadow-lg' 
      : 'bg-white text-gray-400 border border-slate-100 hover:border-slate-200'
    }`}
  >
    <Icon size={16} />
    {label}
  </button>
);

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('analytics');

  return (
    <div className="space-y-8 pb-20">
      <header>
        <h1 className="text-3xl font-black text-slate-grey uppercase tracking-tighter">Admin Analytics Command</h1>
        <p className="text-gray-500 mt-1 font-medium">Governance, fleet oversight, and impact intelligence</p>
      </header>

      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
        <TabButton active={activeTab === 'analytics'} onClick={() => setActiveTab('analytics')} icon={BarChart3} label="Impact Analytics" />
        <TabButton active={activeTab === 'fleet'} onClick={() => setActiveTab('fleet')} icon={Truck} label="Fleet Management" />
        <TabButton active={activeTab === 'safety'} onClick={() => setActiveTab('safety')} icon={ShieldCheck} label="Trust & Safety" />
      </div>

      <div className="grid gap-8">
        {activeTab === 'analytics' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
             <div className="grid md:grid-cols-4 gap-6">
                {[
                  { label: 'Revenue Flow', value: '$242,500', trend: '+18%', icon: BarChart3 },
                  { label: 'CO2 Offset', value: '1.2k Tons', trend: '+24%', icon: Navigation },
                  { label: 'Active Drivers', value: '48', trend: '+5', icon: Truck },
                  { label: 'Verified Users', value: '1,240', trend: '+124', icon: Users },
                ].map((stat, i) => (
                  <div key={i} className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                        <div className="bg-slate-50 p-3 rounded-xl"><stat.icon size={20} className="text-slate-grey" /></div>
                        <span className="text-xs font-black text-green-500">{stat.trend}</span>
                    </div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{stat.label}</p>
                    <p className="text-2xl font-black text-slate-grey">{stat.value}</p>
                  </div>
                ))}
             </div>
             
             {/* Simple Chart Placeholder */}
             <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm h-[400px] flex flex-col">
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <h3 className="text-xl font-black text-slate-grey uppercase tracking-tight">Ecosystem Growth</h3>
                        <p className="text-sm text-gray-400">Monthly platform volume vs. carbon offset</p>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex items-center gap-2 text-xs font-bold"><div className="w-3 h-3 rounded-full bg-energetic-teal"></div> VOLUME</div>
                        <div className="flex items-center gap-2 text-xs font-bold"><div className="w-3 h-3 rounded-full bg-slate-grey"></div> CO2 OFFSET</div>
                    </div>
                </div>
                <div className="flex-grow flex items-end gap-4">
                    {[60, 40, 80, 50, 90, 70, 100, 85].map((h, i) => (
                        <div key={i} className="flex-grow flex flex-col gap-2 justify-end h-full">
                            <div className="bg-slate-grey/10 w-full rounded-t-lg transition-all hover:bg-slate-grey/20" style={{ height: `${h-20}%` }}></div>
                            <div className="bg-energetic-teal w-full rounded-t-lg transition-all hover:opacity-80" style={{ height: `${h}%` }}></div>
                        </div>
                    ))}
                </div>
             </div>
          </motion.div>
        )}

        {activeTab === 'safety' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-[3rem] border border-slate-100 shadow-sm overflow-hidden">
             <div className="p-10">
                <h3 className="text-xl font-black text-slate-grey uppercase tracking-tight mb-8">Verification Queue</h3>
                <div className="space-y-4">
                    {[
                      { name: 'Green Valley Farm', role: 'Farmer', id: 'ID-8821', status: 'Pending' },
                      { name: 'AgroProcessing Ltd', role: 'Factory', id: 'LIC-9021', status: 'Pending' },
                      { name: 'K. Ahmed Transport', role: 'Driver', id: 'DRV-7712', status: 'Pending' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-energetic-teal/30 transition-all group">
                         <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center font-black text-slate-grey border border-slate-100">
                                {item.name[0]}
                            </div>
                            <div>
                                <p className="font-black text-slate-grey text-sm uppercase tracking-tight">{item.name}</p>
                                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{item.role} • {item.id}</p>
                            </div>
                         </div>
                         <div className="flex gap-3">
                            <button className="p-3 rounded-xl bg-white text-green-500 border border-slate-100 hover:bg-green-500 hover:text-white transition-all"><CheckCircle2 size={18} /></button>
                            <button className="p-3 rounded-xl bg-white text-red-500 border border-slate-100 hover:bg-red-500 hover:text-white transition-all"><XCircle size={18} /></button>
                         </div>
                      </div>
                    ))}
                </div>
             </div>
          </motion.div>
        )}

        {activeTab === 'fleet' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="grid lg:grid-cols-3 gap-8">
             <div className="lg:col-span-2 bg-white rounded-[3rem] border border-slate-100 shadow-sm p-10">
                <h3 className="text-xl font-black text-slate-grey uppercase tracking-tight mb-8">Vehicle Tracking</h3>
                <div className="space-y-6">
                    {[
                      { id: 'TRK-900', driver: 'S. Mansour', payload: 'Wheat Stalks', status: 'On Route', eta: '12 min' },
                      { id: 'TRK-422', driver: 'M. Ali', payload: 'Rice Husk', status: 'Loading', eta: '--' },
                      { id: 'TRK-105', driver: 'J. Smith', payload: 'Empty', status: 'Idle', eta: '--' },
                    ].map((trk, i) => (
                      <div key={i} className="flex items-center justify-between p-4 border-b border-slate-50 last:border-0">
                         <div className="flex items-center gap-4">
                            <Truck className="text-slate-grey" />
                            <div>
                                <p className="font-bold text-slate-grey text-sm uppercase">{trk.id} • {trk.driver}</p>
                                <p className="text-xs text-gray-400 font-medium">{trk.payload}</p>
                            </div>
                         </div>
                         <div className="text-right">
                            <p className="text-xs font-black uppercase tracking-widest text-energetic-teal">{trk.status}</p>
                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">ETA: {trk.eta}</p>
                         </div>
                      </div>
                    ))}
                </div>
             </div>
             <div className="bg-slate-grey rounded-[3rem] p-10 text-white relative overflow-hidden flex flex-col justify-between">
                <div className="relative z-10">
                    <h3 className="text-xl font-black uppercase tracking-tight mb-2">Fleet Efficiency</h3>
                    <p className="text-white/60 text-sm font-medium">Platform-wide logistical performance score</p>
                </div>
                <div className="relative z-10 py-10">
                    <div className="text-6xl font-black text-energetic-teal tracking-tighter mb-4">98.4%</div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div initial={{ width: 0 }} animate={{ width: '98.4%' }} transition={{ duration: 1.5 }} className="h-full bg-energetic-teal shadow-[0_0_20px_rgba(0,191,165,0.5)]"></motion.div>
                    </div>
                </div>
                <p className="relative z-10 text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">Live Data Feed • Sector 04</p>
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-energetic-teal/10 rounded-full blur-[80px]"></div>
             </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

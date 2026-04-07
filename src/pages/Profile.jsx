import React, { useState } from 'react';
import { User, Mail, Shield, Bell, Save, Lock, Camera } from 'lucide-react';
import { useAuth } from '../utils/AuthContext';

export default function Profile() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('account');

  return (
    <div className="max-w-4xl mx-auto py-8">
      <header className="mb-12">
        <h1 className="text-3xl font-black text-slate-grey uppercase tracking-tighter">Unified Profile Management</h1>
        <p className="text-gray-500 mt-1 font-medium">Security settings and personal credentials</p>
      </header>

      <div className="grid md:grid-cols-4 gap-8">
        <aside className="space-y-2">
            {[
                { id: 'account', label: 'Account', icon: User },
                { id: 'security', label: 'Security', icon: Shield },
                { id: 'notifications', label: 'Alerts', icon: Bell },
            ].map(tab => (
                <button 
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all ${
                        activeTab === tab.id 
                        ? 'bg-slate-grey text-white shadow-lg' 
                        : 'bg-white text-gray-400 border border-slate-100 hover:border-slate-200'
                    }`}
                >
                    <tab.icon size={16} />
                    {tab.label}
                </button>
            ))}
        </aside>

        <div className="md:col-span-3">
            <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
                <div className="p-10">
                    {activeTab === 'account' && (
                        <div className="space-y-8 animate-in fade-in duration-500">
                            <div className="flex items-center gap-6">
                                <div className="relative group">
                                    <div className="w-24 h-24 rounded-3xl bg-slate-100 flex items-center justify-center border-2 border-dashed border-slate-200 group-hover:bg-slate-200 transition-all cursor-pointer">
                                        <Camera className="text-slate-400" />
                                    </div>
                                    <div className="absolute -bottom-2 -right-2 bg-energetic-teal text-white p-2 rounded-lg shadow-lg">
                                        <Save size={14} />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-black text-slate-grey uppercase tracking-tight">{user?.role} Profile</h3>
                                    <p className="text-sm text-gray-400 font-medium">Verified Account • ID #HSD-9021</p>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 pt-4">
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">Full Name</label>
                                    <input type="text" className="block w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-slate-grey font-bold" defaultValue="Ahmed Mansour" />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">Email</label>
                                    <input type="email" className="block w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-slate-grey font-bold" defaultValue="ahmed@hasad-farm.com" />
                                </div>
                            </div>

                            <button className="bg-slate-grey text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-800 transition-all shadow-xl">
                                Update Information
                            </button>
                        </div>
                    )}

                    {activeTab === 'security' && (
                        <div className="space-y-8 animate-in fade-in duration-500">
                            <h3 className="text-xl font-black text-slate-grey uppercase tracking-tight">Security Access</h3>
                            <div className="space-y-6">
                                <div className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-white p-3 rounded-xl"><Lock className="text-slate-grey" /></div>
                                        <div>
                                            <p className="font-bold text-slate-grey">Two-Factor Authentication</p>
                                            <p className="text-xs text-gray-400">Add an extra layer of security to your account.</p>
                                        </div>
                                    </div>
                                    <div className="w-12 h-6 bg-slate-200 rounded-full relative cursor-pointer">
                                        <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'notifications' && (
                        <div className="space-y-6 animate-in fade-in duration-500">
                            <h3 className="text-xl font-black text-slate-grey uppercase tracking-tight">Notification Hub</h3>
                            {[
                                { title: 'Shipment Update', desc: 'Alert me when a driver is 5km from pickup.', status: true },
                                { title: 'Bidding Alerts', desc: 'Notify me when I am outbid on a listing.', status: true },
                                { title: 'System Security', desc: 'Alert me on new device login attempts.', status: false },
                            ].map((n, i) => (
                                <div key={i} className="flex items-center justify-between p-4 border-b border-slate-50 last:border-0">
                                    <div>
                                        <p className="font-bold text-slate-grey text-sm uppercase">{n.title}</p>
                                        <p className="text-xs text-gray-400">{n.desc}</p>
                                    </div>
                                    <div className={`w-12 h-6 rounded-full relative cursor-pointer transition-colors ${n.status ? 'bg-energetic-teal' : 'bg-slate-200'}`}>
                                        <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-all ${n.status ? 'right-1' : 'left-1'}`}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

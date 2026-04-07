import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, Wallet, Package, TrendingUp, History } from 'lucide-react';

const StatCard = ({ title, value, icon: Icon, trend }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
    <div className="flex justify-between items-start mb-4">
      <div className="p-2 bg-slate-50 rounded-lg">
        <Icon className="text-slate-grey w-5 h-5" />
      </div>
      {trend && (
        <span className={`text-xs font-bold ${trend > 0 ? 'text-green-500' : 'text-red-500'}`}>
          {trend > 0 ? '+' : ''}{trend}%
        </span>
      )}
    </div>
    <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
    <h3 className="text-2xl font-black text-slate-grey">{value}</h3>
  </div>
);

export default function FarmerDashboard() {
  return (
    <div className="space-y-8">
      <header className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-black text-slate-grey tracking-tight">Farmer Command Center</h1>
          <p className="text-gray-500 mt-1 font-medium">Manage your waste listings and track earnings</p>
        </div>
        <Link to="/farmer/intake" className="bg-energetic-teal text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-energetic-teal/90 transition-all shadow-lg shadow-energetic-teal/20">
          <Plus size={20} />
          <span>New Waste Intake</span>
        </Link>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Earnings" value="$12,450.00" icon={Wallet} trend={12.5} />
        <StatCard title="Active Listings" value="8" icon={Package} />
        <StatCard title="Waste Collected" value="4.2 Tons" icon={TrendingUp} trend={8.2} />
        <StatCard title="Total Sales" value="142" icon={History} />
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
          <h2 className="text-xl font-black text-slate-grey mb-6">Active Market Listings</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-50">
                  <th className="pb-4 font-bold text-xs uppercase tracking-widest text-gray-400">Waste Type</th>
                  <th className="pb-4 font-bold text-xs uppercase tracking-widest text-gray-400">Quantity</th>
                  <th className="pb-4 font-bold text-xs uppercase tracking-widest text-gray-400">Status</th>
                  <th className="pb-4 font-bold text-xs uppercase tracking-widest text-gray-400">Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {[
                  { type: 'Rice Husk', qty: '500 kg', status: 'Bidding', price: '$45.00' },
                  { type: 'Wheat Stalks', qty: '1.2 Tons', status: 'Available', price: '$120.00' },
                  { type: 'Corn Cobs', qty: '200 kg', status: 'In Transit', price: '$30.00' },
                ].map((item, i) => (
                  <tr key={i} className="group hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 font-bold text-slate-grey">{item.type}</td>
                    <td className="py-4 text-sm text-gray-600">{item.qty}</td>
                    <td className="py-4 text-sm text-gray-600 font-medium">
                      <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase ${
                        item.status === 'In Transit' ? 'bg-blue-50 text-blue-600' : 'bg-green-50 text-green-600'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="py-4 font-black text-slate-grey">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-slate-grey rounded-2xl p-8 text-white relative overflow-hidden">
           <div className="relative z-10">
              <h2 className="text-xl font-black mb-2">Platform Impact</h2>
              <p className="text-white/60 text-sm mb-8 leading-relaxed">Your contributions are helping the planet.</p>
              
              <div className="space-y-6">
                 <div>
                    <div className="flex justify-between text-xs font-bold uppercase tracking-widest mb-2">
                       <span>CO2 Offset</span>
                       <span className="text-energetic-teal">1.2 Tons</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                       <div className="h-full bg-energetic-teal w-3/4"></div>
                    </div>
                 </div>
                 <div>
                    <div className="flex justify-between text-xs font-bold uppercase tracking-widest mb-2">
                       <span>Recycle Efficiency</span>
                       <span className="text-energetic-teal">94%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                       <div className="h-full bg-energetic-teal w-[94%]"></div>
                    </div>
                 </div>
              </div>
           </div>
           <div className="absolute -right-8 -bottom-8 w-48 h-48 bg-energetic-teal/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
}

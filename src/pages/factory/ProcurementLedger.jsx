import React from 'react';
import { FileText, Download, Clock, CheckCircle2, Truck, ExternalLink } from 'lucide-react';

const OrderRow = ({ order }) => (
  <tr className="group hover:bg-slate-50/50 transition-colors border-b border-slate-50 last:border-0">
    <td className="py-6">
        <div className="flex flex-col">
            <span className="font-black text-slate-grey uppercase tracking-tight">#{order.id}</span>
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{order.date}</span>
        </div>
    </td>
    <td className="py-6">
        <div className="flex flex-col">
            <span className="font-bold text-slate-grey text-sm">{order.material}</span>
            <span className="text-xs text-gray-500">{order.quantity}</span>
        </div>
    </td>
    <td className="py-6">
        <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
            order.status === 'Delivered' ? 'bg-green-50 text-green-600' :
            order.status === 'In Transit' ? 'bg-blue-50 text-blue-600' :
            'bg-amber-50 text-amber-600'
        }`}>
            {order.status}
        </span>
    </td>
    <td className="py-6 font-black text-slate-grey">{order.total}</td>
    <td className="py-6 text-right">
        <button className="inline-flex items-center gap-2 bg-slate-grey/5 text-slate-grey px-4 py-2 rounded-xl text-xs font-bold hover:bg-slate-grey hover:text-white transition-all">
            <Download size={14} />
            <span>INVOICE</span>
        </button>
    </td>
  </tr>
);

export default function ProcurementLedger() {
  const orders = [
    { id: 'HSD-90210', date: 'April 05, 2026', material: 'Rice Husk Batch A', quantity: '500 kg', status: 'In Transit', total: '$45.00' },
    { id: 'HSD-88124', date: 'March 28, 2026', material: 'Premium Wheat Stalks', quantity: '1.2 Tons', status: 'Delivered', total: '$120.00' },
    { id: 'HSD-87552', date: 'March 15, 2026', material: 'Corn Cobs High Yield', quantity: '200 kg', status: 'Delivered', total: '$30.00' },
  ];

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-black text-slate-grey uppercase tracking-tighter">Procurement Ledger</h1>
        <p className="text-gray-500 mt-1 font-medium">Complete order history and automated invoicing</p>
      </header>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4">
            <div className="bg-energetic-teal/10 p-4 rounded-2xl">
                <Truck className="text-energetic-teal" />
            </div>
            <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Active Shipments</p>
                <p className="text-xl font-black text-slate-grey">02</p>
            </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4">
            <div className="bg-slate-grey/5 p-4 rounded-2xl">
                <CheckCircle2 className="text-slate-grey" />
            </div>
            <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Completed Orders</p>
                <p className="text-xl font-black text-slate-grey">142</p>
            </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4">
            <div className="bg-energetic-teal/10 p-4 rounded-2xl">
                <FileText className="text-energetic-teal" />
            </div>
            <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Total Procurement</p>
                <p className="text-xl font-black text-slate-grey">$12,450.00</p>
            </div>
        </div>
      </div>

      <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-10">
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b border-slate-50">
                            <th className="pb-6 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Order ID</th>
                            <th className="pb-6 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Material</th>
                            <th className="pb-6 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Status</th>
                            <th className="pb-6 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Total</th>
                            <th className="pb-6 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => <OrderRow key={order.id} order={order} />)}
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    </div>
  );
}

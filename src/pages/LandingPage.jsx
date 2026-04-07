import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, ArrowRight, ShieldCheck, Zap, Globe, BarChart3, Users } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
    <div className="bg-energetic-teal/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
      <Icon className="text-energetic-teal w-7 h-7" />
    </div>
    <h3 className="text-xl font-black text-slate-grey mb-3 uppercase tracking-tight">{title}</h3>
    <p className="text-gray-500 leading-relaxed text-sm font-medium">{description}</p>
  </div>
);

export default function LandingPage() {
  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative pt-12 lg:pt-20 overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-energetic-teal/10 text-energetic-teal px-4 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-6">
              <Zap size={14} />
              <span>The Uber of Agriculture</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-slate-grey leading-[1.1] tracking-tighter mb-8">
              REVOLUTIONIZING <br />
              <span className="text-energetic-teal">AGRI-WASTE</span> <br />
              LOGISTICS.
            </h1>
            <p className="text-lg text-gray-500 font-medium mb-10 max-w-lg leading-relaxed">
              HASAD connects thousands of farmers with industrial factories, turning agricultural waste into high-value raw materials through an intelligent, real-time ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/signup" className="bg-slate-grey text-white px-8 py-4 rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/20 group">
                <span>JOIN THE ECOSYSTEM</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/signin" className="bg-white text-slate-grey border-2 border-slate-100 px-8 py-4 rounded-2xl font-black flex items-center justify-center hover:bg-slate-50 transition-all">
                LEARN MORE
              </Link>
            </div>
            
            <div className="mt-12 flex items-center gap-8 grayscale opacity-50">
                <div className="flex items-center gap-2 font-black text-slate-grey">
                    <Globe size={24} />
                    <span className="tracking-tighter">GLOBAL REACH</span>
                </div>
                <div className="flex items-center gap-2 font-black text-slate-grey">
                    <ShieldCheck size={24} />
                    <span className="tracking-tighter">SECURE GOVERNANCE</span>
                </div>
            </div>
          </div>

          <div className="relative lg:h-[600px]">
             <div className="absolute inset-0 bg-energetic-teal rounded-[4rem] rotate-3 opacity-10"></div>
             <div className="absolute inset-0 bg-slate-grey rounded-[4rem] -rotate-3 overflow-hidden shadow-2xl">
                <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-[url('https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center"></div>
                <div className="relative h-full flex items-center justify-center p-12 text-center">
                    <div className="space-y-4">
                        <p className="text-energetic-teal font-black text-6xl tracking-tighter">500,000+</p>
                        <p className="text-white font-bold uppercase tracking-[0.3em] text-sm">Tons of Waste Recycled</p>
                    </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="impact" className="bg-slate-grey rounded-[3rem] p-12 lg:p-20 text-white relative overflow-hidden">
        <div className="grid md:grid-cols-3 gap-12 text-center relative z-10">
          <div className="space-y-2">
            <h3 className="text-4xl font-black text-energetic-teal tracking-tighter">10k+</h3>
            <p className="text-white/60 font-bold uppercase tracking-widest text-xs">Active Farmers</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-4xl font-black text-energetic-teal tracking-tighter">120</h3>
            <p className="text-white/60 font-bold uppercase tracking-widest text-xs">Industrial Partners</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-4xl font-black text-energetic-teal tracking-tighter">12</h3>
            <p className="text-white/60 font-bold uppercase tracking-widest text-xs">Operated Regions</p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-energetic-teal/10 rounded-full blur-[100px] -mr-48 -mt-48"></div>
      </section>

      {/* Features Section */}
      <section id="platform">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-black text-slate-grey tracking-tight mb-4 uppercase">Advanced Infrastructure</h2>
          <p className="text-gray-500 font-medium">Powering the future of circular agriculture with real-time data and logistics.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={BarChart3} 
            title="Market Intelligence" 
            description="High-performance marketplace for available agricultural waste with advanced filtering and bidding logic."
          />
          <FeatureCard 
            icon={Globe} 
            title="Logistics Network" 
            description="Real-time fleet management and shipment tracking using our proprietary Agricultural Command Center."
          />
          <FeatureCard 
            icon={Users} 
            title="Impact Analytics" 
            description="Comprehensive dashboards to visualize platform growth, revenue flow, and total CO2 offset."
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-energetic-teal rounded-[3rem] p-12 lg:p-20 text-center text-slate-grey">
        <h2 className="text-4xl lg:text-5xl font-black tracking-tight mb-8">READY TO TRANSFORM <br/>YOUR WASTE INTO WEALTH?</h2>
        <Link to="/signup" className="bg-slate-grey text-white px-10 py-5 rounded-2xl font-black inline-flex items-center gap-2 hover:bg-slate-800 transition-all shadow-2xl shadow-slate-900/30">
          GET STARTED NOW
          <ArrowRight size={20} />
        </Link>
      </section>
    </div>
  );
}

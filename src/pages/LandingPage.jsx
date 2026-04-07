import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, ArrowRight, ShieldCheck, Zap, Globe, BarChart3, Users } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const FeatureCard = ({ icon: Icon, title, description, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
    whileHover={{ y: -8, transition: { duration: 0.2 } }}
    className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-300 group"
  >
    <motion.div 
      whileHover={{ scale: 1.1, rotate: 5 }}
      className="bg-energetic-teal/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-energetic-teal group-hover:text-white transition-colors duration-300"
    >
      <Icon className="text-energetic-teal w-8 h-8 group-hover:text-white transition-colors duration-300" />
    </motion.div>
    <h3 className="text-xl font-black text-slate-grey mb-3 uppercase tracking-tight group-hover:text-energetic-teal transition-colors">{title}</h3>
    <p className="text-gray-500 leading-relaxed text-sm font-medium">{description}</p>
  </motion.div>
);

const StatCounter = ({ value, label, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value.replace(/[,+]/g, ''));

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      onViewportEnter={() => {
        let start = 0;
        const end = numericValue;
        const duration = 2000;
        const increment = end / (duration / 16);
        
        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);
      }}
      viewport={{ once: true }}
      className="space-y-2"
    >
      <h3 className="text-5xl font-black text-energetic-teal tracking-tighter">
        {count.toLocaleString()}{suffix}
      </h3>
      <p className="text-white/60 font-bold uppercase tracking-[0.2em] text-xs">{label}</p>
    </motion.div>
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export default function LandingPage() {
  const { scrollYProgress } = useScroll();
  const scaleProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="space-y-32 pb-32">
      {/* Hero Section */}
      <section className="relative pt-16 lg:pt-24 overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="relative z-10"
          >
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-slate-grey/5 text-slate-grey px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.25em] mb-8 border border-slate-200"
            >
              <div className="w-2 h-2 rounded-full bg-energetic-teal animate-pulse"></div>
              <span>Digital Infrastructure for circular economy</span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-6xl lg:text-8xl font-black text-slate-grey leading-[0.95] tracking-tighter mb-10"
            >
              REVERSE <br />
              <span className="text-energetic-teal">LOGISTICS</span> <br />
              FOR AGRI-WASTE.
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-500 font-medium mb-12 max-w-xl leading-relaxed"
            >
              HASAD orchestrates the entire lifecycle of agricultural byproducts, transforming underutilized biomass into industrial-grade feedstock through AI-driven routing.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-5"
            >
              <Link to="/signup" className="bg-slate-grey text-white px-10 py-5 rounded-3xl font-black flex items-center justify-center gap-3 hover:bg-slate-800 transition-all shadow-2xl shadow-slate-900/30 group relative overflow-hidden">
                <motion.span whileHover={{ x: 5 }}>JOIN THE ECOSYSTEM</motion.span>
                <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link to="/signin" className="bg-white text-slate-grey border-2 border-slate-200 px-10 py-5 rounded-3xl font-black flex items-center justify-center hover:bg-slate-50 transition-all">
                EXPLORE PLATFORM
              </Link>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="mt-16 flex flex-wrap items-center gap-10 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            >
                <div className="flex items-center gap-3 font-black text-slate-grey text-sm">
                    <Globe size={24} className="text-energetic-teal" />
                    <span className="tracking-tight uppercase">ISO 14001 COMPLIANT</span>
                </div>
                <div className="flex items-center gap-3 font-black text-slate-grey text-sm">
                    <ShieldCheck size={24} className="text-energetic-teal" />
                    <span className="tracking-tight uppercase">BLOCKCHAIN VERIFIED</span>
                </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 100, rotate: 5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, ease: "circOut" }}
            className="relative"
          >
             <motion.div 
                animate={{ rotate: [3, -3, 3] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-energetic-teal rounded-[5rem] opacity-5 -m-6"
             ></motion.div>
             
             <div className="relative h-[500px] lg:h-[650px] bg-slate-grey rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(38,50,56,0.3)] group">
                <motion.div 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 opacity-60 mix-blend-overlay bg-[url('https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center"
                ></motion.div>
                
                <div className="relative h-full flex flex-col items-center justify-center p-16 text-center bg-gradient-to-t from-slate-grey via-transparent to-transparent">
                    <motion.div 
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.8, type: "spring" }}
                      className="bg-white/10 backdrop-blur-xl p-10 rounded-[3rem] border border-white/20 shadow-2xl"
                    >
                        <motion.div
                          animate={{ y: [0, -10, 0] }}
                          transition={{ duration: 4, repeat: Infinity }}
                        >
                            <p className="text-energetic-teal font-black text-7xl lg:text-8xl tracking-tighter mb-2">500K+</p>
                            <p className="text-white font-bold uppercase tracking-[0.4em] text-xs">Metric Tons Processed</p>
                        </motion.div>
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2 }}
                      className="absolute bottom-12 left-0 right-0 px-8"
                    >
                        <div className="flex justify-between items-center bg-slate-900/40 backdrop-blur-md p-6 rounded-3xl border border-white/10">
                            <div className="text-left">
                                <p className="text-white/60 text-[10px] font-black uppercase mb-1">Live Shipment</p>
                                <p className="text-white font-bold text-sm">HSD-90210 • In Transit</p>
                            </div>
                            <div className="w-12 h-12 bg-energetic-teal rounded-2xl flex items-center justify-center">
                                <Zap className="text-slate-grey fill-slate-grey" size={20} />
                            </div>
                        </div>
                    </motion.div>
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        id="impact" 
        className="bg-slate-grey rounded-[4rem] p-16 lg:p-24 text-white relative overflow-hidden"
      >
        <div className="grid md:grid-cols-3 gap-16 text-center relative z-10">
          <StatCounter value="10,000" label="Verified Farmers" suffix="+" />
          <StatCounter value="120" label="Industrial Plants" />
          <StatCounter value="12" label="Economic Zones" />
        </div>
        
        <motion.div 
          style={{ scale: scaleProgress, opacity: 0.15 }}
          className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-energetic-teal rounded-full blur-[120px]"
        ></motion.div>
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute -top-24 -right-24 w-[400px] h-[400px] bg-energetic-teal rounded-full blur-[100px]"
        ></motion.div>
      </motion.section>

      {/* Infrastructure Section */}
      <section id="platform" className="relative">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-energetic-teal font-black text-xs uppercase tracking-[0.4em] mb-4 block"
          >
            Core Capabilities
          </motion.span>
          <h2 className="text-5xl lg:text-6xl font-black text-slate-grey tracking-tighter mb-6 uppercase leading-none">The Engine of <br/>Sustainability</h2>
          <p className="text-gray-500 font-medium text-lg">We provide the technological backbone for high-volume agricultural byproduct trade and movement.</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <FeatureCard 
            index={0}
            icon={BarChart3} 
            title="Yield Analytics" 
            description="Predictive modeling for waste generation patterns based on regional harvest cycles and soil data."
          />
          <FeatureCard 
            index={1}
            icon={Globe} 
            title="Supply Chain" 
            description="End-to-end transparency from farm gate to factory floor with real-time GPS tracking and geofencing."
          />
          <FeatureCard 
            index={2}
            icon={Users} 
            title="Partner Portal" 
            description="Integrated financial tools for automated payments, bidding management, and tax-compliant invoicing."
          />
        </div>
      </section>

      {/* Final CTA */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", damping: 20 }}
        className="bg-energetic-teal rounded-[4rem] p-16 lg:p-32 text-center text-slate-grey relative overflow-hidden"
      >
        <motion.div
            animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none flex items-center justify-center"
        >
            <Globe size={800} />
        </motion.div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-5xl lg:text-7xl font-black tracking-tighter mb-12 leading-none uppercase">
                Building the future <br/>of raw materials.
            </h2>
            <Link to="/signup" className="bg-slate-grey text-white px-12 py-6 rounded-3xl font-black inline-flex items-center gap-4 hover:bg-slate-800 transition-all shadow-[0_20px_50px_rgba(38,50,56,0.3)] hover:scale-105 active:scale-95 duration-200">
              <span className="text-lg">START TRADING NOW</span>
              <ArrowRight size={24} />
            </Link>
            <p className="mt-8 font-bold text-slate-grey/60 uppercase tracking-widest text-xs">Join 10,000+ early adopters worldwide</p>
        </div>
      </motion.section>
    </div>
  );
}

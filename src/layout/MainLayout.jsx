import { Outlet, useLocation, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';

export default function MainLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      <main className="flex-grow container mx-auto p-4 lg:p-8 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <footer className="bg-slate-grey text-white/60 p-12 lg:p-20 border-t border-white/5">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 text-sm">
          <div className="space-y-6">
            <h3 className="text-white font-black text-2xl tracking-tighter uppercase">HASAD Ecosystem</h3>
            <p className="leading-relaxed text-base font-medium">Digital infrastructure for high-performance agricultural byproduct logistics and industrial circular economy.</p>
          </div>
          <div className="space-y-6">
            <h4 className="text-white font-black uppercase tracking-widest text-xs">Navigation</h4>
            <ul className="space-y-4 font-bold">
              <li><Link to="/" className="hover:text-energetic-teal transition-colors">Platform Home</Link></li>
              <li><a href="#" className="hover:text-energetic-teal transition-colors">Privacy & Governance</a></li>
              <li><a href="#" className="hover:text-energetic-teal transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-white font-black uppercase tracking-widest text-xs">Global Impact</h4>
            <div className="space-y-2 font-bold text-white/40">
                <p className="flex justify-between border-b border-white/5 pb-2"><span>Verified Farmers</span> <span className="text-energetic-teal">10,000+</span></p>
                <p className="flex justify-between border-b border-white/5 pb-2"><span>CO2 Offset</span> <span className="text-energetic-teal">500k Tons</span></p>
                <p className="flex justify-between border-b border-white/5 pb-2"><span>Economic Zones</span> <span className="text-energetic-teal">12 Regions</span></p>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-20 pt-8 border-t border-white/5 text-center">
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20">© 2026 HASAD LOGISTICS • ALL RIGHTS RESERVED</p>
        </div>
      </footer>
    </div>
  );
}

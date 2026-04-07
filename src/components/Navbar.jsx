import { Link } from 'react-router-dom';
import { Leaf, ShoppingCart, Truck, ShieldCheck, User, LogOut, FileText } from 'lucide-react';
import { useAuth } from '../utils/AuthContext';
import { motion } from 'framer-motion';

export default function Navbar() {
  const { isLoggedIn, logout, user } = useAuth();

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="bg-slate-grey text-white p-4 shadow-lg sticky top-0 z-50 border-b border-white/5 backdrop-blur-md bg-opacity-95"
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link to="/" className="flex items-center gap-2 text-xl font-black text-energetic-teal tracking-tighter uppercase">
            <Leaf className="w-6 h-6" />
            <span>HASAD</span>
          </Link>
        </motion.div>
        
        <div className="flex gap-8 items-center">
          {isLoggedIn ? (
            <>
              {user?.role === 'farmer' && (
                <Link to="/farmer" className="text-xs font-bold uppercase tracking-widest hover:text-energetic-teal flex items-center gap-2 transition-colors">
                  <Leaf className="w-4 h-4" />
                  <span>Farmer</span>
                </Link>
              )}
              {user?.role === 'factory' && (
                <>
                  <Link to="/factory" className="text-xs font-bold uppercase tracking-widest hover:text-energetic-teal flex items-center gap-2 transition-colors">
                    <ShoppingCart className="w-4 h-4" />
                    <span>Market</span>
                  </Link>
                  <Link to="/factory/ledger" className="text-xs font-bold uppercase tracking-widest hover:text-energetic-teal flex items-center gap-2 transition-colors">
                    <FileText className="w-4 h-4" />
                    <span>Ledger</span>
                  </Link>
                </>
              )}
              {(user?.role === 'admin' || user?.role === 'factory') && (
                <Link to="/logistics" className="text-xs font-bold uppercase tracking-widest hover:text-energetic-teal flex items-center gap-2 transition-colors">
                  <Truck className="w-4 h-4" />
                  <span>Logistics</span>
                </Link>
              )}
              {user?.role === 'admin' && (
                <Link to="/admin" className="text-xs font-bold uppercase tracking-widest hover:text-energetic-teal flex items-center gap-2 transition-colors">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Admin</span>
                </Link>
              )}
              <div className="w-px h-6 bg-white/10 mx-2"></div>
              <div className="flex items-center gap-6">
                <Link to="/profile" className="flex items-center gap-2 text-white/60 hover:text-white transition-all group">
                  <User className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em]">Profile</span>
                </Link>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={logout}
                  className="flex items-center gap-2 text-red-400 hover:text-red-300 transition-all cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em]">Exit</span>
                </motion.button>
              </div>
            </>
          ) : (
            <>
              <a href="#platform" className="text-xs font-bold uppercase tracking-widest hover:text-energetic-teal transition-colors">Platform</a>
              <a href="#impact" className="text-xs font-bold uppercase tracking-widest hover:text-energetic-teal transition-colors">Impact</a>
              <div className="w-px h-6 bg-white/10 mx-2"></div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/signin" className="flex items-center gap-2 bg-energetic-teal text-slate-grey px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest shadow-xl shadow-energetic-teal/20 hover:bg-white transition-all">
                  <User className="w-4 h-4" />
                  <span>Sign In</span>
                </Link>
              </motion.div>
            </>
          )}
        </div>
      </div>
    </motion.nav>
  );
}

import { Link } from 'react-router-dom';
import { Leaf, ShoppingCart, Truck, ShieldCheck, User, LogOut, FileText } from 'lucide-react';
import { useAuth } from '../utils/AuthContext';

export default function Navbar() {
  const { isLoggedIn, logout, user } = useAuth();

  return (
    <nav className="bg-slate-grey text-white p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-energetic-teal">
          <Leaf className="w-6 h-6" />
          <span>HASAD</span>
        </Link>
        
        <div className="flex gap-6 items-center">
          {isLoggedIn ? (
            <>
              {user?.role === 'farmer' && (
                <Link to="/farmer" className="hover:text-energetic-teal flex items-center gap-1 transition-colors">
                  <Leaf className="w-4 h-4" />
                  <span>Farmer Dashboard</span>
                </Link>
              )}
              {user?.role === 'factory' && (
                <>
                  <Link to="/factory" className="hover:text-energetic-teal flex items-center gap-1 transition-colors">
                    <ShoppingCart className="w-4 h-4" />
                    <span>Marketplace</span>
                  </Link>
                  <Link to="/factory/ledger" className="hover:text-energetic-teal flex items-center gap-1 transition-colors">
                    <FileText className="w-4 h-4" />
                    <span>Ledger</span>
                  </Link>
                </>
              )}
              {(user?.role === 'admin' || user?.role === 'factory') && (
                <Link to="/logistics" className="hover:text-energetic-teal flex items-center gap-1 transition-colors">
                  <Truck className="w-4 h-4" />
                  <span>Logistics</span>
                </Link>
              )}
              {user?.role === 'admin' && (
                <Link to="/admin" className="hover:text-energetic-teal flex items-center gap-1 transition-colors">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Admin</span>
                </Link>
              )}
              <div className="w-px h-6 bg-gray-600 mx-2"></div>
              <div className="flex items-center gap-4">
                <Link to="/profile" className="flex items-center gap-2 text-gray-400 hover:text-white transition-all">
                  <User className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-widest">Profile</span>
                </Link>
                <button 
                  onClick={logout}
                  className="flex items-center gap-2 text-red-400 hover:text-red-300 transition-all cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-widest">Sign Out</span>
                </button>
              </div>
            </>
          ) : (
            <>
              <a href="#platform" className="hover:text-energetic-teal transition-colors font-medium">Platform</a>
              <a href="#impact" className="hover:text-energetic-teal transition-colors font-medium">Impact</a>
              <div className="w-px h-6 bg-gray-600 mx-2"></div>
              <Link to="/signin" className="flex items-center gap-2 bg-energetic-teal/10 text-energetic-teal border border-energetic-teal px-4 py-1.5 rounded-full hover:bg-energetic-teal hover:text-white transition-all">
                <User className="w-4 h-4" />
                <span>Sign In</span>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

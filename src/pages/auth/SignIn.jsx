import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Leaf, Mail, Lock, ArrowRight } from 'lucide-react';
import { useAuth } from '../../utils/AuthContext';

export default function SignIn() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple logic: if email contains 'admin', log in as admin
    const role = email.toLowerCase().includes('admin') ? 'admin' : 'farmer';
    login(role);
    navigate(role === 'admin' ? '/admin' : '/farmer');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
        <div className="p-10">
          <div className="flex flex-col items-center mb-10">
            <div className="bg-slate-grey p-3 rounded-2xl mb-4">
              <Leaf className="text-energetic-teal w-8 h-8" />
            </div>
            <h1 className="text-2xl font-black text-slate-grey uppercase tracking-tight text-center">
              Sign In to HASAD
            </h1>
            <p className="text-gray-500 mt-2 text-sm font-medium">Access your agricultural command center</p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">Email Address</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-energetic-teal transition-colors" />
                </div>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-100 rounded-xl text-slate-grey placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-energetic-teal/20 focus:border-energetic-teal transition-all" 
                  placeholder="name@farm.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-center px-1">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Password</label>
                <Link to="/forgot-password" size="sm" className="text-[10px] font-bold text-energetic-teal uppercase hover:underline">Forgot?</Link>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-energetic-teal transition-colors" />
                </div>
                <input 
                  type="password" 
                  className="block w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-100 rounded-xl text-slate-grey placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-energetic-teal/20 focus:border-energetic-teal transition-all" 
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button className="w-full bg-slate-grey text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-lg active:scale-[0.98]">
              <span>ENTER COMMAND CENTER</span>
              <ArrowRight size={18} />
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-slate-50 text-center">
            <p className="text-sm text-gray-500 font-medium">
              Not registered yet?{' '}
              <Link to="/signup" className="text-energetic-teal font-bold hover:underline">Request Access</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

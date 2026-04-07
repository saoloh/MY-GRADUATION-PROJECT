import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Leaf, Mail, Lock, User, ArrowRight, ShieldCheck, ShoppingCart } from 'lucide-react';
import { useAuth } from '../../utils/AuthContext';

export default function SignUp() {
  const [role, setRole] = useState('farmer');
  const { login } = useAuth();
  const navigate = useNavigate();

  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, we would send the data to the server here
    setIsSuccess(true);
    setTimeout(() => {
        navigate('/signin');
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center p-4">
        <div className="bg-white w-full max-w-md rounded-3xl shadow-xl border border-slate-100 p-10 text-center">
            <div className="bg-energetic-teal/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="text-energetic-teal w-10 h-10" />
            </div>
            <h2 className="text-2xl font-black text-slate-grey uppercase tracking-tight mb-2">Registration Sent!</h2>
            <p className="text-gray-500 font-medium">Your credentials have been submitted for verification. Redirecting to Sign In...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[90vh] flex items-center justify-center p-4 py-12">
      <div className="bg-white w-full max-w-xl rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
        <div className="p-10">
          <div className="flex flex-col items-center mb-10">
            <div className="bg-slate-grey p-3 rounded-2xl mb-4">
              <Leaf className="text-energetic-teal w-8 h-8" />
            </div>
            <h1 className="text-2xl font-black text-slate-grey uppercase tracking-tight text-center">
              Join HASAD Ecosystem
            </h1>
            <p className="text-gray-500 mt-2 text-sm font-medium">Revolutionizing agricultural waste management</p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Role Selection */}
            <div className="grid grid-cols-2 gap-4">
               <button 
                 type="button"
                 onClick={() => setRole('farmer')}
                 className={`p-4 rounded-2xl border-2 transition-all text-left flex flex-col gap-2 ${
                   role === 'farmer' 
                   ? 'border-energetic-teal bg-energetic-teal/5' 
                   : 'border-slate-100 bg-slate-50 hover:border-slate-200'
                 }`}
               >
                 <Leaf className={`w-6 h-6 ${role === 'farmer' ? 'text-energetic-teal' : 'text-slate-400'}`} />
                 <div>
                   <p className={`text-xs font-black uppercase tracking-widest ${role === 'farmer' ? 'text-energetic-teal' : 'text-slate-400'}`}>Farmer</p>
                   <p className="text-[10px] text-gray-500 font-medium">Supply waste</p>
                 </div>
               </button>
               <button 
                 type="button"
                 onClick={() => setRole('factory')}
                 className={`p-4 rounded-2xl border-2 transition-all text-left flex flex-col gap-2 ${
                   role === 'factory' 
                   ? 'border-energetic-teal bg-energetic-teal/5' 
                   : 'border-slate-100 bg-slate-50 hover:border-slate-200'
                 }`}
               >
                 <ShoppingCart className={`w-6 h-6 ${role === 'factory' ? 'text-energetic-teal' : 'text-slate-400'}`} />
                 <div>
                   <p className={`text-xs font-black uppercase tracking-widest ${role === 'factory' ? 'text-energetic-teal' : 'text-slate-400'}`}>Factory</p>
                   <p className="text-[10px] text-gray-500 font-medium">Procure materials</p>
                 </div>
               </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">Full Name</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400 group-focus-within:text-energetic-teal transition-colors" />
                  </div>
                  <input 
                    type="text" 
                    className="block w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-slate-grey placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-energetic-teal/20 focus:border-energetic-teal transition-all" 
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">Email Address</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-energetic-teal transition-colors" />
                  </div>
                  <input 
                    type="email" 
                    className="block w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-slate-grey placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-energetic-teal/20 focus:border-energetic-teal transition-all" 
                    placeholder="name@farm.com"
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">Password</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-energetic-teal transition-colors" />
                  </div>
                  <input 
                    type="password" 
                    className="block w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-slate-grey placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-energetic-teal/20 focus:border-energetic-teal transition-all" 
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">National ID / License</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <ShieldCheck className="h-5 w-5 text-gray-400 group-focus-within:text-energetic-teal transition-colors" />
                  </div>
                  <input 
                    type="text" 
                    className="block w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-slate-grey placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-energetic-teal/20 focus:border-energetic-teal transition-all" 
                    placeholder="ID Number"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 px-1">
              <input type="checkbox" className="mt-1 rounded border-gray-300 text-energetic-teal focus:ring-energetic-teal" required />
              <p className="text-xs text-gray-500 font-medium leading-relaxed">
                I agree to the <a href="#" className="text-energetic-teal font-bold hover:underline">Terms of Service</a> and <a href="#" className="text-energetic-teal font-bold hover:underline">Privacy Policy</a>. I understand that my credentials will be verified by the Admin Command.
              </p>
            </div>

            <button className="w-full bg-slate-grey text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-lg active:scale-[0.98]">
              <span>CREATE ACCOUNT</span>
              <ArrowRight size={18} />
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-slate-50 text-center">
            <p className="text-sm text-gray-500 font-medium">
              Already part of the ecosystem?{' '}
              <Link to="/signin" className="text-energetic-teal font-bold hover:underline">Sign In</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Leaf, Camera, MapPin, ArrowRight, ArrowLeft, CheckCircle2, Weight, Tag } from 'lucide-react';

export default function WasteIntakeForm() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    category: '',
    weight: '',
    description: '',
    location: 'Current GPS Location',
  });

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const categories = [
    { id: 'husk', name: 'Rice Husk', icon: '🌾' },
    { id: 'stalks', name: 'Wheat Stalks', icon: '🌱' },
    { id: 'cobs', name: 'Corn Cobs', icon: '🌽' },
    { id: 'other', name: 'Other Bio-waste', icon: '🍂' },
  ];

  if (step === 4) {
    return (
      <div className="max-w-xl mx-auto py-20 text-center">
        <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-slate-100">
          <div className="bg-energetic-teal/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="text-energetic-teal w-10 h-10" />
          </div>
          <h2 className="text-3xl font-black text-slate-grey uppercase tracking-tight mb-4 text-center">Intake Registered!</h2>
          <p className="text-gray-500 font-medium mb-10">Your waste listing #HSD-7721 is now live in the marketplace. Local factories have been notified.</p>
          <button 
            onClick={() => navigate('/farmer')}
            className="bg-slate-grey text-white px-10 py-4 rounded-2xl font-black hover:bg-slate-800 transition-all shadow-xl"
          >
            RETURN TO DASHBOARD
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-8">
      <header className="mb-12 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-black text-slate-grey uppercase tracking-tighter">Waste Intake Engine</h1>
          <p className="text-gray-500 mt-1 font-medium">Step {step} of 3: {
            step === 1 ? 'Category Selection' : step === 2 ? 'Quantity & Details' : 'Verification'
          }</p>
        </div>
        <div className="flex gap-2">
          {[1, 2, 3].map(i => (
            <div key={i} className={`h-2 w-12 rounded-full transition-all ${i <= step ? 'bg-energetic-teal' : 'bg-slate-200'}`} />
          ))}
        </div>
      </header>

      <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden">
        <div className="p-10 lg:p-16">
          {step === 1 && (
            <div className="space-y-8 animate-in fade-in duration-500">
              <h2 className="text-xl font-black text-slate-grey uppercase tracking-widest flex items-center gap-2">
                <Tag className="text-energetic-teal" />
                Select Waste Category
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => { setFormData({...formData, category: cat.id}); nextStep(); }}
                    className={`p-8 rounded-3xl border-2 transition-all text-left flex flex-col gap-4 group ${
                      formData.category === cat.id 
                      ? 'border-energetic-teal bg-energetic-teal/5' 
                      : 'border-slate-50 bg-slate-50 hover:border-slate-200'
                    }`}
                  >
                    <span className="text-4xl group-hover:scale-110 transition-transform inline-block">{cat.icon}</span>
                    <span className={`font-black uppercase tracking-widest ${
                      formData.category === cat.id ? 'text-energetic-teal' : 'text-slate-400'
                    }`}>{cat.name}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-8 animate-in slide-in-from-right duration-500">
              <h2 className="text-xl font-black text-slate-grey uppercase tracking-widest flex items-center gap-2">
                <Weight className="text-energetic-teal" />
                Quantity & Details
              </h2>
              <div className="space-y-6">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">Estimated Weight (kg)</label>
                  <input 
                    type="number" 
                    value={formData.weight}
                    onChange={(e) => setFormData({...formData, weight: e.target.value})}
                    className="block w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-slate-grey focus:outline-none focus:ring-2 focus:ring-energetic-teal/20 focus:border-energetic-teal transition-all font-bold text-lg"
                    placeholder="e.g. 500"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">Description</label>
                  <textarea 
                    rows="3"
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    className="block w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-slate-grey focus:outline-none focus:ring-2 focus:ring-energetic-teal/20 focus:border-energetic-teal transition-all font-medium"
                    placeholder="Mention quality or processing state..."
                  />
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-8 animate-in slide-in-from-right duration-500">
              <h2 className="text-xl font-black text-slate-grey uppercase tracking-widest flex items-center gap-2">
                <Camera className="text-energetic-teal" />
                Visual Verification
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                 <div className="aspect-square bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center gap-4 group cursor-pointer hover:bg-slate-100 transition-colors">
                    <div className="bg-white p-4 rounded-2xl shadow-sm group-hover:scale-110 transition-transform">
                        <Camera className="text-slate-400" />
                    </div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Upload Image</p>
                 </div>
                 <div className="bg-slate-grey rounded-3xl p-8 text-white relative overflow-hidden flex flex-col justify-between">
                    <div>
                        <div className="flex items-center gap-2 text-energetic-teal mb-4">
                            <MapPin size={18} />
                            <span className="text-xs font-black uppercase tracking-widest">Geolocation Tagging</span>
                        </div>
                        <p className="text-sm font-medium leading-relaxed opacity-80">Automatically capturing GPS coordinates for factory routing...</p>
                    </div>
                    <div className="bg-white/10 p-4 rounded-xl text-xs font-mono">
                        LAT: 30.0444° N<br/>
                        LNG: 31.2357° E
                    </div>
                 </div>
              </div>
            </div>
          )}

          <div className="mt-12 pt-10 border-t border-slate-50 flex justify-between">
            {step > 1 && (
              <button 
                onClick={prevStep}
                className="flex items-center gap-2 text-gray-400 font-bold hover:text-slate-grey transition-colors"
              >
                <ArrowLeft size={18} />
                BACK
              </button>
            )}
            <div className="ml-auto">
              {step < 3 ? (
                step !== 1 && (
                  <button 
                    onClick={nextStep}
                    className="bg-slate-grey text-white px-10 py-4 rounded-2xl font-black flex items-center gap-2 hover:bg-slate-800 transition-all shadow-xl"
                  >
                    CONTINUE
                    <ArrowRight size={18} />
                  </button>
                )
              ) : (
                <button 
                  onClick={nextStep}
                  className="bg-energetic-teal text-white px-10 py-4 rounded-2xl font-black flex items-center gap-2 hover:bg-energetic-teal/90 transition-all shadow-xl shadow-energetic-teal/20"
                >
                  FINISH LISTING
                  <CheckCircle2 size={18} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

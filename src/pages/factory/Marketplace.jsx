import React, { useState } from 'react';
import { Search, Filter, MapPin, Info, Tag, ArrowRight, Gavel, ShoppingCart, CheckCircle2, X, SlidersHorizontal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const WasteCard = ({ item, onAction }) => (
  <motion.div 
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.9 }}
    className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all overflow-hidden group"
  >
    <div className="relative h-48 overflow-hidden">
        <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-grey shadow-sm">
            {item.category}
        </div>
        <div className="absolute top-4 right-4 bg-energetic-teal text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
            {item.type === 'bidding' ? 'Bidding' : 'Fixed Price'}
        </div>
    </div>
    <div className="p-6">
        <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-black text-slate-grey uppercase tracking-tight">{item.title}</h3>
            <p className="text-xl font-black text-energetic-teal">${item.price.replace('$', '')}</p>
        </div>
        <div className="flex items-center gap-4 text-xs font-bold text-gray-400 mb-6">
            <div className="flex items-center gap-1">
                <MapPin size={14} className="text-energetic-teal" />
                <span>{item.distance} km away</span>
            </div>
            <div className="flex items-center gap-1">
                <Info size={14} className="text-energetic-teal" />
                <span>{item.quantity}</span>
            </div>
        </div>
        
        <div className="flex gap-2">
            {item.type === 'bidding' ? (
                <button 
                  onClick={() => onAction('bid', item)}
                  className="flex-grow bg-slate-grey text-white py-3 rounded-xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-slate-800 transition-all cursor-pointer"
                >
                    <Gavel size={16} />
                    Place Bid
                </button>
            ) : (
                <button 
                  onClick={() => onAction('buy', item)}
                  className="flex-grow bg-energetic-teal text-white py-3 rounded-xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-energetic-teal/90 transition-all cursor-pointer"
                >
                    <ShoppingCart size={16} />
                    Buy Now
                </button>
            )}
            <button className="bg-slate-50 text-slate-grey p-3 rounded-xl hover:bg-slate-100 transition-colors">
                <ArrowRight size={18} />
            </button>
        </div>
    </div>
  </motion.div>
);

const Notification = ({ message, onClose }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50, x: '-50%' }}
    animate={{ opacity: 1, y: 0, x: '-50%' }}
    exit={{ opacity: 0, y: 50, x: '-50%' }}
    className="fixed bottom-8 left-1/2 z-[100] bg-slate-grey text-white px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-4 min-w-[320px]"
  >
    <div className="bg-energetic-teal p-2 rounded-lg">
      <CheckCircle2 size={20} />
    </div>
    <p className="text-sm font-bold flex-grow uppercase tracking-widest">{message}</p>
    <button onClick={onClose} className="hover:text-energetic-teal transition-colors">
      <X size={20} />
    </button>
  </motion.div>
);

export default function Marketplace() {
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [notification, setNotification] = useState(null);
  
  // Advanced Filter States
  const [maxPrice, setMaxPrice] = useState(200);
  const [maxDistance, setMaxDistance] = useState(100);

  const handleAction = (type, item) => {
    const msg = type === 'bid' 
      ? `Bid placed on ${item.title}` 
      : `Purchase confirmed for ${item.title}`;
    
    setNotification(msg);
    setTimeout(() => setNotification(null), 4000);
  };

  const items = [
    { id: 1, title: 'Rice Husk Batch A', category: 'Rice Husk', price: '45.00', distance: 12, quantity: '500 kg', type: 'bidding', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80' },
    { id: 2, title: 'Premium Wheat Stalks', category: 'Wheat Stalks', price: '120.00', distance: 45, quantity: '1.2 Tons', type: 'fixed', image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80' },
    { id: 3, title: 'Corn Cobs High Yield', category: 'Corn Cobs', price: '30.00', distance: 8, quantity: '200 kg', type: 'bidding', image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80' },
    { id: 4, title: 'Organic Mulch Waste', category: 'Other', price: '85.00', distance: 22, quantity: '800 kg', type: 'fixed', image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80' },
  ];

  const filteredItems = items.filter(item => {
    const matchesCategory = categoryFilter === 'all' || item.category.toLowerCase().includes(categoryFilter.toLowerCase());
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = parseFloat(item.price) <= maxPrice;
    const matchesDistance = item.distance <= maxDistance;
    return matchesCategory && matchesSearch && matchesPrice && matchesDistance;
  });

  return (
    <div className="space-y-8 relative">
      <AnimatePresence>
        {notification && <Notification message={notification} onClose={() => setNotification(null)} />}
      </AnimatePresence>

      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-3xl font-black text-slate-grey uppercase tracking-tighter">Waste Marketplace</h1>
          <p className="text-gray-500 mt-1 font-medium">Source high-quality agricultural raw materials</p>
        </div>
        
        <div className="flex w-full md:w-auto gap-4">
            <div className="relative flex-grow md:w-64">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input 
                    type="text" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search materials..."
                    className="w-full pl-11 pr-4 py-3 bg-white border border-slate-100 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-energetic-teal/20 transition-all"
                />
            </div>
            <div className="relative">
                <button 
                    onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
                    className={`p-3 rounded-2xl border transition-all cursor-pointer ${
                        showAdvancedFilters ? 'bg-slate-grey text-white border-slate-grey' : 'bg-white text-slate-grey border-slate-100 hover:bg-slate-50'
                    }`}
                >
                    <SlidersHorizontal size={20} />
                </button>
                
                <AnimatePresence>
                    {showAdvancedFilters && (
                        <motion.div 
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            className="absolute right-0 mt-4 w-72 bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 z-50"
                        >
                            <h4 className="text-xs font-black text-slate-grey uppercase tracking-widest mb-6">Advanced Filters</h4>
                            
                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-gray-400">
                                        <span>Max Price</span>
                                        <span className="text-energetic-teal">${maxPrice}</span>
                                    </div>
                                    <input 
                                        type="range" 
                                        min="0" 
                                        max="500" 
                                        value={maxPrice}
                                        onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                                        className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-energetic-teal" 
                                    />
                                </div>

                                <div className="space-y-4">
                                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-gray-400">
                                        <span>Max Distance</span>
                                        <span className="text-energetic-teal">{maxDistance} km</span>
                                    </div>
                                    <input 
                                        type="range" 
                                        min="0" 
                                        max="500" 
                                        value={maxDistance}
                                        onChange={(e) => setMaxDistance(parseInt(e.target.value))}
                                        className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-energetic-teal" 
                                    />
                                </div>
                            </div>

                            <button 
                                onClick={() => { setMaxPrice(500); setMaxDistance(500); }}
                                className="w-full mt-8 py-3 rounded-xl border border-slate-100 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:bg-slate-50 transition-all"
                            >
                                Reset Filters
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
      </header>

      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {['All', 'Rice Husk', 'Wheat Stalks', 'Corn Cobs', 'Other'].map(cat => (
            <button 
                key={cat}
                onClick={() => setCategoryFilter(cat.toLowerCase())}
                className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest whitespace-nowrap transition-all cursor-pointer ${
                    (cat === 'All' && categoryFilter === 'all') || categoryFilter === cat.toLowerCase()
                    ? 'bg-slate-grey text-white shadow-lg' 
                    : 'bg-white text-gray-400 border border-slate-100 hover:border-slate-200'
                }`}
            >
                {cat}
            </button>
        ))}
      </div>

      {filteredItems.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
                {filteredItems.map(item => (
                    <WasteCard key={item.id} item={item} onAction={handleAction} />
                ))}
            </AnimatePresence>
        </div>
      ) : (
        <div className="py-20 text-center bg-white rounded-[3rem] border border-dashed border-slate-200">
            <div className="bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Search className="text-slate-300" />
            </div>
            <h3 className="text-lg font-black text-slate-grey uppercase tracking-tight">No results found</h3>
            <p className="text-gray-400 text-sm font-medium">Try adjusting your filters or search query.</p>
        </div>
      )}
    </div>
  );
}

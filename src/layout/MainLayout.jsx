import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      <main className="flex-grow container mx-auto p-4 lg:p-8">
        <Outlet />
      </main>
      <footer className="bg-slate-grey text-white/60 p-8 border-t border-slate-700">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">HASAD Ecosystem</h3>
            <p className="leading-relaxed">Revolutionizing agricultural waste management. Connecting farmers with industrial factories for a sustainable future.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-energetic-teal">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-energetic-teal">Terms of Service</a></li>
              <li><a href="#" className="hover:text-energetic-teal">Contact Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Impact</h4>
            <p>Empowering 10,000+ Farmers<br/>Offsetting 500k tons CO2<br/>Active in 12 Regions</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

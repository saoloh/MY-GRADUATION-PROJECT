import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import LandingPage from './pages/LandingPage';
import FarmerDashboard from './pages/farmer/FarmerDashboard';
import WasteIntakeForm from './pages/farmer/WasteIntakeForm';
import Marketplace from './pages/factory/Marketplace';
import ProcurementLedger from './pages/factory/ProcurementLedger';
import LogisticsDashboard from './pages/LogisticsDashboard';
import AdminDashboard from './pages/admin/AdminDashboard';
import Profile from './pages/Profile';
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
import ForgotPassword from './pages/auth/ForgotPassword';
import { AuthProvider, useAuth } from './utils/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? children : <Navigate to="/" replace />;
};

const RoleRoute = ({ children, allowedRoles }) => {
  const { user, isLoggedIn } = useAuth();
  if (!isLoggedIn) return <Navigate to="/" replace />;
  if (allowedRoles.includes(user?.role)) return children;
  
  // Default redirects if wrong role
  if (user?.role === 'admin') return <Navigate to="/admin" replace />;
  if (user?.role === 'factory') return <Navigate to="/factory" replace />;
  return <Navigate to="/farmer" replace />;
};

const Placeholder = ({ title }) => (
  <div className="flex items-center justify-center h-96 bg-white rounded-2xl border border-dashed border-slate-200">
    <div className="text-center">
      <h2 className="text-2xl font-black text-slate-grey mb-2">{title}</h2>
      <p className="text-gray-500">This module is currently under development.</p>
    </div>
  </div>
);

function AppRoutes() {
  const { isLoggedIn, user } = useAuth();

  const getDefaultRoute = () => {
    if (user?.role === 'admin') return "/admin";
    if (user?.role === 'factory') return "/factory";
    return "/farmer";
  };

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* Public Route */}
        <Route index element={isLoggedIn ? <Navigate to={getDefaultRoute()} /> : <LandingPage />} />
        
        {/* Auth Routes */}
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="forgot-password" element={<ForgotPassword />} />

        {/* Farmer Only Routes */}
        <Route path="farmer" element={
          <RoleRoute allowedRoles={['farmer']}><FarmerDashboard /></RoleRoute>
        } />
        <Route path="farmer/intake" element={
          <RoleRoute allowedRoles={['farmer']}><WasteIntakeForm /></RoleRoute>
        } />

        {/* Factory Only Routes */}
        <Route path="factory" element={
          <RoleRoute allowedRoles={['factory']}><Marketplace /></RoleRoute>
        } />
        <Route path="factory/ledger" element={
          <RoleRoute allowedRoles={['factory']}><ProcurementLedger /></RoleRoute>
        } />

        {/* Logistics Routes (Factory and Admin) */}
        <Route path="logistics" element={
          <RoleRoute allowedRoles={['admin', 'factory']}><LogisticsDashboard /></RoleRoute>
        } />
        
        {/* Admin Restricted Route */}
        <Route path="admin" element={
          <RoleRoute allowedRoles={['admin']}><AdminDashboard /></RoleRoute>
        } />

        {/* Shared Protected Route */}
        <Route path="profile" element={
          <ProtectedRoute><Profile /></ProtectedRoute>
        } />
      </Route>
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

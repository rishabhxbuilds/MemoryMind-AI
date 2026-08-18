import { Outlet } from 'react-router-dom';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const MainLayout = () => (
  <div className="min-h-screen bg-[#06040f] text-slate-100 selection:bg-purple-500 selection:text-white flex flex-col">
    <Navbar />
    <main className="flex-1">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default MainLayout;

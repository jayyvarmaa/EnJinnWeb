import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FrameBackground from '../ui/FrameBackground';
import { useLenisScroll } from '../../hooks/useLenisScroll';
import './Layout.css';

export default function Layout() {
  useLenisScroll();

  return (
    <div className="app-container">
      <FrameBackground />
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

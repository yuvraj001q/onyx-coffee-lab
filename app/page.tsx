'use client';

import { useState, useEffect, useCallback } from 'react';
import { AuthProvider, useAuth } from '@/hooks/useAuth';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Locations from '@/components/Locations';
import Champions from '@/components/Champions';
import Transparency from '@/components/Transparency';
import Footer from '@/components/Footer';
import AuthModal from '@/components/AuthModal';
import ReservationModal from '@/components/ReservationModal';

function App() {
  const { isLoggedIn } = useAuth();
  const [authOpen, setAuthOpen] = useState(false);
  const [reserveOpen, setReserveOpen] = useState(false);
  const [reserveLocation, setReserveLocation] = useState('');

  const handleReserve = useCallback((location?: string) => {
    if (!isLoggedIn) {
      setReserveLocation(location || '');
      setAuthOpen(true);
    } else {
      setReserveLocation(location || '');
      setReserveOpen(true);
    }
  }, [isLoggedIn]);

  const handleAuthSuccess = useCallback(() => {
    setAuthOpen(false);
    setReserveOpen(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelectorAll('[data-reveal]').forEach((el) => {
        if (!el.classList.contains('revealed')) {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight) {
            el.classList.add('revealed');
          }
        }
      });
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar onReserve={() => handleReserve()} onLogin={() => setAuthOpen(true)} />
      <Hero onReserve={() => handleReserve()} />
      <About />
      <Locations onReserve={handleReserve} />
      <Champions />
      <Transparency />
      <Footer />
      <AuthModal
        isOpen={authOpen}
        onClose={() => setAuthOpen(false)}
        onSuccess={handleAuthSuccess}
      />
      <ReservationModal
        isOpen={reserveOpen}
        onClose={() => setReserveOpen(false)}
        initialLocation={reserveLocation}
      />
    </>
  );
}

export default function Page() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}

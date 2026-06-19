'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';

interface NavbarProps {
  onReserve: () => void;
  onLogin: () => void;
}

export default function Navbar({ onReserve, onLogin }: NavbarProps) {
  const { isLoggedIn, user, logout } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#" className="navbar__logo">
          <span className="navbar__logo-mark">O</span>
          Onyx Coffee
        </a>

        <ul className={`navbar__links ${menuOpen ? 'active' : ''}`}>
          <li><a href="#about" className="navbar__link" onClick={() => setMenuOpen(false)}>Journey</a></li>
          <li><a href="#locations" className="navbar__link" onClick={() => setMenuOpen(false)}>Locations</a></li>
          <li><a href="#champions" className="navbar__link" onClick={() => setMenuOpen(false)}>Champions</a></li>
          <li>
            <button
              className="navbar__link"
              onClick={() => { setMenuOpen(false); onReserve(); }}
            >
              Reserve
            </button>
          </li>
        </ul>

        <div className="navbar__actions">
          {isLoggedIn ? (
            <div className="navbar__user">
              <span className="navbar__user-avatar">
                {user?.name?.charAt(0).toUpperCase()}
              </span>
              <span>{user?.name}</span>
              <button className="btn btn--ghost btn--sm" onClick={logout} style={{ marginLeft: 4 }}>
                Logout
              </button>
            </div>
          ) : (
            <button className="btn btn--outline btn--sm" onClick={onLogin}>
              Login
            </button>
          )}
          <button
            className="navbar__burger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </nav>
  );
}

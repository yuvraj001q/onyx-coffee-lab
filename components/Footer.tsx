export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <div className="footer__brand">Onyx Coffee Lab</div>
            <p className="footer__brand-text">
              World-class specialty coffee. Radical transparency.
              Founded in Northwest Arkansas, loved worldwide.
            </p>
          </div>
          <div className="footer__col">
            <h4 className="footer__col-title">Explore</h4>
            <ul>
              <li><a href="#about">Our Journey</a></li>
              <li><a href="#locations">Locations</a></li>
              <li><a href="#champions">Champions</a></li>
              <li><a href="#transparency">Transparency</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4 className="footer__col-title">Locations</h4>
            <ul>
              <li><a href="#locations">Rogers HQ</a></li>
              <li><a href="#locations">The Momentary</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4 className="footer__col-title">Connect</h4>
            <ul>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">YouTube</a></li>
              <li><a href="#">Newsletter</a></li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} Onyx Coffee Lab. All rights reserved.</p>
          <div className="footer__socials">
            <a href="#" className="footer__social" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
            </a>
            <a href="#" className="footer__social" aria-label="Twitter">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
            </a>
            <a href="#" className="footer__social" aria-label="YouTube">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75,15.02 15.5,11.75 9.75,8.48"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

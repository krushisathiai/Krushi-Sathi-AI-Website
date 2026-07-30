import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Phone, Send, Users, Instagram, Facebook, Linkedin, MessageCircle } from 'lucide-react';
import logoImg from '../assets/logo.png';
import './Footer.css';

export default function Footer() {
  const { t } = useTranslation();
  const [visitorCount, setVisitorCount] = useState(null);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        const hasVisited = localStorage.getItem('ks_visited_v2');
        const baseUrl = import.meta.env.VITE_API_URL || 'https://krushisathi-backend.onrender.com';
        
        const endpoint = hasVisited 
          ? `${baseUrl}/api/visits` 
          : `${baseUrl}/api/visits?increment=true`;
          
        const res = await fetch(endpoint);
        const data = await res.json();
        
        if (data && data.success && data.count !== undefined) {
          setVisitorCount(data.count);
          if (!hasVisited) {
            localStorage.setItem('ks_visited_v2', 'true');
          }
        }
      } catch (error) {
        console.error('Failed to fetch visitor count:', error);
      }
    };
    
    fetchVisitorCount();
  }, []);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__logo">
              <img src={logoImg} alt="Krushi Sathi Logo" className="footer__logo-img" />
              <span className="footer__logo-text">Krushi Sathi</span>
            </div>
            <p className="footer__desc">{t('footer.desc')}</p>
          </div>

          <div>
            <h4 className="footer__title">{t('footer.prod')}</h4>
            <div className="footer__links">
              <a href="/#features" className="footer__link">{t('footer.f1')}</a>
              <a href="/#how-it-works" className="footer__link">{t('footer.f2')}</a>
              <a href="/#diseases" className="footer__link">{t('footer.f3')}</a>
              <Link to="/pricing" className="footer__link">{t('footer.f4')}</Link>
            </div>
          </div>

          <div>
            <h4 className="footer__title">{t('footer.comp')}</h4>
            <div className="footer__links">
              <a href="/#about" className="footer__link">{t('footer.c1')}</a>
              <Link to="/contact" className="footer__link">{t('footer.c3')}</Link>
              <Link to="/privacy" className="footer__link">{t('footer.l1')}</Link>
              <Link to="/terms" className="footer__link">{t('footer.l2')}</Link>
            </div>
          </div>

          <div className="footer__newsletter">
            <h4 className="footer__title">Stay Updated</h4>
            <p className="footer__desc" style={{ marginBottom: 16 }}>Subscribe to get latest farming tips and updates.</p>
            <form className="footer__form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email address" required />
              <button type="submit" className="footer__submit-btn">
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">&copy; {new Date().getFullYear()} {t('footer.copy')}</p>
          
          <div className="footer__visitor-badge">
            <div className="pulse-dot"></div>
            <Users size={14} className="visitor-icon-small" />
            <span className="visitor-text">Total Visitors:</span>
            <span className="visitor-number-small">
              {visitorCount !== null ? visitorCount.toLocaleString() : '...'}
            </span>
          </div>

          <div className="footer__socials">
            <a href="https://www.instagram.com/krushisathiai?igsh=MTFtZGlhdjNnMDZ4cg==" target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="Instagram"><Instagram size={18} /></a>
            <a href="https://www.facebook.com/krushisathiai" target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="Facebook"><Facebook size={18} /></a>
            <a href="https://www.linkedin.com/in/krushi-sathi-915310426" target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="LinkedIn"><Linkedin size={18} /></a>
            <a href="https://wa.me/917498589218" target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="WhatsApp"><MessageCircle size={18} /></a>
            <a href="tel:7498589218" className="footer__social" aria-label="Phone"><Phone size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

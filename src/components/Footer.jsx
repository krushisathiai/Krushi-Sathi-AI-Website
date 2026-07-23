import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Globe, Mail, Phone, MapPin, Send } from 'lucide-react';
import logoImg from '../assets/logo.png';
import './Footer.css';

export default function Footer() {
  const { t } = useTranslation();

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
              <Link to="/about" className="footer__link">{t('footer.c1')}</Link>
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
          <div className="footer__socials">
            <a href="#" className="footer__social" aria-label="Website"><Globe size={18} /></a>
            <a href="#" className="footer__social" aria-label="Email"><Mail size={18} /></a>
            <a href="#" className="footer__social" aria-label="Phone"><Phone size={18} /></a>
            <a href="#" className="footer__social" aria-label="Location"><MapPin size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

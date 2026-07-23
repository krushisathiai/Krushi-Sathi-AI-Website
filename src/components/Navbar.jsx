import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Globe } from 'lucide-react';
import logoImg from '../assets/logo.png';
import './Navbar.css';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [activeLink, setActiveLink] = useState('#home');
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const navLinks = [
    { label: t('nav.home'),        href: '#home' },
    { label: t('nav.about'),       href: '#about' },
    { label: t('nav.features'),   href: '#features' },
    { label: t('nav.howItWorks'), href: '#how-it-works' },
    { label: t('nav.diseases'),   href: '#diseases' },
    { label: t('nav.testimonials'), href: '#testimonials' },
  ];

  useEffect(() => {
    // If we land on a page with a hash, try to scroll to it
    if (location.pathname === '/' && location.hash) {
      setTimeout(() => {
        const el = document.querySelector(location.hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location]);

  useEffect(() => {
    if (location.pathname !== '/') return;

    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      
      const sections = ['home', 'about', 'features', 'how-it-works', 'diseases', 'testimonials'];
      let current = '';
      
      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            current = `#${section}`;
          }
        }
      });
      
      if (current) {
        setActiveLink(current);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [location.pathname]);

  const handleNavClick = (href) => {
    setActiveLink(href);
    setMenuOpen(false);
    
    if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate(`/${href}`);
      } else {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // It's a page route (like 'about', 'pricing')
      navigate(`/${href}`);
    }
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLangMenuOpen(false);
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} role="banner">
      <div className="navbar__inner">
        {/* Logo */}
        <a className="navbar__logo" href="#home" onClick={() => handleNavClick('#home')}>
          <img src={logoImg} alt="Krushi Sathi Logo" className="navbar__logo-img" />
          <div className="navbar__logo-text">
            <span className="navbar__logo-name">Krushi Sathi</span>
            <span className="navbar__logo-sub">AI Farming</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <ul className="navbar__links" role="navigation">
          {navLinks.map(link => (
            <li key={link.href}>
              <button
                className={`navbar__link${activeLink === link.href ? ' active' : ''}`}
                onClick={() => handleNavClick(link.href)}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop Actions */}
        <div className="navbar__actions">
          {/* Language Switcher */}
          <div className="lang-switcher">
            <button className="lang-btn" onClick={() => setLangMenuOpen(!langMenuOpen)}>
              <Globe size={18} />
              <span>{i18n.language.toUpperCase()}</span>
            </button>
            {langMenuOpen && (
              <div className="lang-dropdown">
                <button onClick={() => changeLanguage('en')}>English</button>
                <button onClick={() => changeLanguage('hi')}>हिंदी</button>
                <button onClick={() => changeLanguage('mr')}>मराठी</button>
              </div>
            )}
          </div>

          <button className="navbar__btn navbar__btn--primary" onClick={() => handleNavClick('#download')}>
            {t('nav.download')}
          </button>
        </div>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile${menuOpen ? ' open' : ''}`} role="navigation">
        {navLinks.map(link => (
          <button
            key={link.href}
            className="navbar__mobile-link"
            onClick={() => handleNavClick(link.href)}
          >
            {link.label}
          </button>
        ))}
        
        {/* Mobile Language Switcher */}
        <div className="mobile-lang-switcher">
          <span className="mobile-lang-title"><Globe size={16}/> Language:</span>
          <div className="mobile-lang-opts">
            <button className={i18n.language === 'en' ? 'active' : ''} onClick={() => changeLanguage('en')}>EN</button>
            <button className={i18n.language === 'hi' ? 'active' : ''} onClick={() => changeLanguage('hi')}>HI</button>
            <button className={i18n.language === 'mr' ? 'active' : ''} onClick={() => changeLanguage('mr')}>MR</button>
          </div>
        </div>

        <div className="navbar__mobile-btns">
          <button className="navbar__mobile-btn navbar__mobile-btn--primary">{t('nav.download')}</button>
        </div>
      </div>
    </nav>
  );
}

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import logoImg from '../assets/logo.png';
import './LangWelcomeModal.css';

const LANG_KEY = 'ks_lang_selected';

const LANGUAGES = [
  {
    code: 'en',
    name: 'English',
    native: 'Continue in English',
  },
  {
    code: 'hi',
    name: 'हिंदी',
    native: 'हिंदी में जारी रखें',
  },
  {
    code: 'mr',
    name: 'मराठी',
    native: 'मराठीत सुरू ठेवा',
  },
];

export default function LangWelcomeModal() {
  const { i18n } = useTranslation();
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState('en');

  useEffect(() => {
    // Show modal only if user has never selected a language
    const saved = localStorage.getItem(LANG_KEY);
    if (!saved) {
      // Small delay for smooth page load
      const t = setTimeout(() => setVisible(true), 600);
      return () => clearTimeout(t);
    } else {
      // Restore saved language
      i18n.changeLanguage(saved);
    }
  }, []);

  const handleConfirm = () => {
    i18n.changeLanguage(selected);
    localStorage.setItem(LANG_KEY, selected);
    setVisible(false);
  };

  const handleSkip = () => {
    localStorage.setItem(LANG_KEY, 'en');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="lang-modal-overlay" role="dialog" aria-modal="true" aria-label="Select language">
      <div className="lang-modal">
        {/* Logo */}
        <div className="lang-modal__logo">
          <img src={logoImg} alt="Krushi Sathi Logo" />
          <span className="lang-modal__logo-name">Krushi Sathi</span>
        </div>

        {/* Welcome heading */}
        <h2 className="lang-modal__title">Welcome / स्वागत है / स्वागत आहे</h2>
        <p className="lang-modal__sub">
          Choose your preferred language to get the best experience.
          <br />
          <span style={{ fontSize: '12px', opacity: 0.7 }}>अपनी भाषा चुनें · आपली भाषा निवडा</span>
        </p>

        {/* Language Options */}
        <div className="lang-modal__options">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              className={`lang-modal__opt ${selected === lang.code ? 'selected' : ''}`}
              onClick={() => setSelected(lang.code)}
            >
              <span className="lang-modal__opt-info">
                <span className="lang-modal__opt-name">{lang.name}</span>
                <span className="lang-modal__opt-native">{lang.native}</span>
              </span>
              <span className="lang-modal__opt-check" />
            </button>
          ))}
        </div>

        {/* Confirm */}
        <button
          className="btn btn-primary btn-glow lang-modal__confirm"
          onClick={handleConfirm}
        >
          Continue →
        </button>

        {/* Skip */}
        <button className="lang-modal__skip" onClick={handleSkip}>
          Skip, use English
        </button>
      </div>
    </div>
  );
}

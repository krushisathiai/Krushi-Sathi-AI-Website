import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Users, Target, Leaf, Globe } from 'lucide-react';
import './AppShowcase.css';

const STATS = [
  {
    value: '50K+',
    label: 'Farmers using the app across India',
    icon: Users,
    color: '#22c55e',
    bg: 'rgba(34,197,94,0.12)',
  },
  {
    value: '98%',
    label: 'AI accuracy on crop disease detection',
    icon: Target,
    color: '#3b82f6',
    bg: 'rgba(59,130,246,0.12)',
  },
  {
    value: '30+',
    label: 'Crop types supported in the app',
    icon: Leaf,
    color: '#f97316',
    bg: 'rgba(249,115,22,0.12)',
  },
  {
    value: '3',
    label: 'Languages — English, Hindi, Marathi',
    icon: Globe,
    color: '#a855f7',
    bg: 'rgba(168,85,247,0.12)',
  },
];

// Android logo SVG inline
function AndroidIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.523 15.341a.72.72 0 0 1-.72-.72V9.722a.72.72 0 0 1 1.44 0v4.899a.72.72 0 0 1-.72.72zm-11.046 0a.72.72 0 0 1-.72-.72V9.722a.72.72 0 0 1 1.44 0v4.899a.72.72 0 0 1-.72.72zM8.11 6.668l-.906-1.698a.18.18 0 0 1 .065-.247.18.18 0 0 1 .247.065l.918 1.717a5.61 5.61 0 0 1 3.566 0l.918-1.717a.18.18 0 0 1 .247-.065.18.18 0 0 1 .065.247l-.906 1.698A5.558 5.558 0 0 1 15.997 9.3H8.003A5.558 5.558 0 0 1 8.11 6.668zM10.43 7.8a.36.36 0 1 0-.36-.36.36.36 0 0 0 .36.36zm3.14 0a.36.36 0 1 0-.36-.36.36.36 0 0 0 .36.36zM4.8 9.3h-.72a1.08 1.08 0 0 0-1.08 1.08v3.24A1.08 1.08 0 0 0 4.08 14.7h.72V9.3zm15.12 0h-.72v5.4h.72a1.08 1.08 0 0 0 1.08-1.08v-3.24A1.08 1.08 0 0 0 19.92 9.3zM8.28 15.06v3.168a.972.972 0 0 0 1.944 0V15.06H8.28zm5.496 0v3.168a.972.972 0 0 0 1.944 0V15.06H13.776z" />
    </svg>
  );
}

export default function AppShowcase() {
  const { t } = useTranslation();

  const features = [
    t('showcase.feature1'),
    t('showcase.feature2'),
    t('showcase.feature3'),
    t('showcase.feature4'),
  ];

  return (
    <section id="showcase" className="showcase section-wrapper">
      <div className="container showcase__inner">
        {/* Left — Content */}
        <motion.div
          className="showcase__content"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag">{t('showcase.tag')}</div>
          <h2 className="showcase__title">{t('showcase.title')}</h2>
          <p className="showcase__desc">{t('showcase.desc')}</p>

          <div className="showcase__features">
            {features.map((f, i) => (
              <div key={i} className="showcase__feat-pill">
                <span className="showcase__feat-pill-dot" />
                {f}
              </div>
            ))}
          </div>

          <div className="showcase__cta">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="showcase__android-btn"
            >
              <AndroidIcon />
              <span className="showcase__android-label">
                <small>Available on</small>
                {t('showcase.android')}
              </span>
            </a>
          </div>
        </motion.div>

        {/* Right — Stats Grid */}
        <motion.div
          className="showcase__stats"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {STATS.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                className="glass-card showcase-stat-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              >
                <div
                  className="showcase-stat-card__icon"
                  style={{ color: s.color, background: s.bg, borderColor: s.border }}
                >
                  <Icon size={22} className="icon-premium" />
                </div>
                <div className="showcase-stat-card__value" style={{ color: s.color }}>
                  {s.value}
                </div>
                <div className="showcase-stat-card__label">{s.label}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

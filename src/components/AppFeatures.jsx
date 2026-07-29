import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  Camera, BookOpen, FlaskConical, MessageCircle,
  CloudSun, Bell, ShoppingBag
} from 'lucide-react';
import './AppFeatures.css';

const blockVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const FEATURES = [
  {
    key: 'scan',
    icon: Camera,
    color: '#22c55e',
    bg: 'rgba(34,197,94,0.12)',
    border: 'rgba(34,197,94,0.3)',
    glow: 'rgba(34,197,94,0.3)',
    statColor: '#22c55e',
  },
  {
    key: 'diseaseGuide',
    icon: BookOpen,
    color: '#f97316',
    bg: 'rgba(249,115,22,0.12)',
    border: 'rgba(249,115,22,0.3)',
    glow: 'rgba(249,115,22,0.3)',
    statColor: '#f97316',
  },
  {
    key: 'fertilizer',
    icon: FlaskConical,
    color: '#a855f7',
    bg: 'rgba(168,85,247,0.12)',
    border: 'rgba(168,85,247,0.3)',
    glow: 'rgba(168,85,247,0.3)',
    statColor: '#a855f7',
  },
  {
    key: 'expert',
    icon: MessageCircle,
    color: '#14b8a6',
    bg: 'rgba(20,184,166,0.12)',
    border: 'rgba(20,184,166,0.3)',
    glow: 'rgba(20,184,166,0.3)',
    statColor: '#14b8a6',
  },
  {
    key: 'weather',
    icon: CloudSun,
    color: '#3b82f6',
    bg: 'rgba(59,130,246,0.12)',
    border: 'rgba(59,130,246,0.3)',
    glow: 'rgba(59,130,246,0.3)',
    statColor: '#3b82f6',
  },
  {
    key: 'alerts',
    icon: Bell,
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.12)',
    border: 'rgba(245,158,11,0.3)',
    glow: 'rgba(245,158,11,0.3)',
    statColor: '#f59e0b',
  },
  {
    key: 'shop',
    icon: ShoppingBag,
    color: '#ec4899',
    bg: 'rgba(236,72,153,0.12)',
    border: 'rgba(236,72,153,0.3)',
    glow: 'rgba(236,72,153,0.3)',
    statColor: '#ec4899',
  },
];

function FeatureVisualCard({ feat, t }) {
  const Icon = feat.icon;
  const d = t(`appFeatures.${feat.key}`, { returnObjects: true });

  return (
    <div className="feature-card-visual" style={{ '--card-glow': feat.glow }}>
      <div
        className="feature-card-visual__icon"
        style={{ background: feat.bg, borderColor: feat.border, color: feat.color }}
      >
        <Icon size={28} className="icon-premium" />
      </div>

      {/* Mini mockup bars */}
      <div className="feature-mock">
        <div className="feature-mock__row">
          <div className="feature-mock__dot" style={{ background: feat.color }} />
          <div className="feature-mock__bar feature-mock__bar--accent" style={{ background: feat.border }} />
        </div>
        <div className="feature-mock__bar feature-mock__bar--short" />
        <div className="feature-mock__bar" style={{ width: '80%' }} />
        <div className="feature-mock__row">
          <div className="feature-mock__dot" style={{ background: feat.color, opacity: 0.5 }} />
          <div className="feature-mock__bar" style={{ width: '55%', background: feat.border, opacity: 0.6 }} />
        </div>
      </div>

      <div className="feature-card-visual__stats">
        {['stat1', 'stat2', 'stat3'].map((sk) => (
          <div key={sk} className="feature-stat">
            <span className="feature-stat__value" style={{ color: feat.color }}>
              {d[sk]?.value}
            </span>
            <span className="feature-stat__label">{d[sk]?.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AppFeatures() {
  const { t } = useTranslation();

  return (
    <section id="app-features" className="app-features section-wrapper">
      <div className="container">
        <motion.div
          className="app-features__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-tag" style={{ justifyContent: 'center' }}>
            {t('appFeatures.tag')}
          </div>
          <h2 className="section-title">{t('appFeatures.title')}</h2>
          <p className="app-features__subtitle">{t('appFeatures.subtitle')}</p>
        </motion.div>

        {FEATURES.map((feat, idx) => {
          const isReverse = idx % 2 !== 0;
          const d = t(`appFeatures.${feat.key}`, { returnObjects: true });
          const points = Array.isArray(d.points) ? d.points : [];

          return (
            <div key={feat.key}>
              <motion.div
                className={`feature-block ${isReverse ? 'feature-block--reverse' : ''}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                variants={blockVariants}
              >
                {/* Text Side */}
                <div className="feature-block__text">
                  <div
                    className="feature-block__tag"
                    style={{
                      color: feat.color,
                      background: feat.bg,
                      borderColor: feat.border,
                    }}
                  >
                    <feat.icon size={13} />
                    {d.tag}
                  </div>
                  <h3 className="feature-block__title">{d.title}</h3>
                  <p className="feature-block__desc">{d.desc}</p>

                  <div className="feature-block__points">
                    {points.map((point, pi) => (
                      <div key={pi} className="feature-block__point">
                        {point}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual Card Side */}
                <div className="feature-block__visual">
                  <FeatureVisualCard feat={feat} t={t} />
                </div>
              </motion.div>

              {idx < FEATURES.length - 1 && (
                <div className="feature-block-divider" />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

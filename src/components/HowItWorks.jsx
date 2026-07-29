import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Download, MapPin, ScanFace, Camera, Sparkles, ShoppingCart } from 'lucide-react';
import './HowItWorks.css';

const STEP_ICONS = [Download, MapPin, ScanFace, Camera, Sparkles, ShoppingCart];

export default function HowItWorks() {
  const { t } = useTranslation();

  const steps = [
    { icon: STEP_ICONS[0], title: t('hiw.s1t'), desc: t('hiw.s1d') },
    { icon: STEP_ICONS[1], title: t('hiw.s2t'), desc: t('hiw.s2d') },
    { icon: STEP_ICONS[2], title: t('hiw.s3t'), desc: t('hiw.s3d') },
    { icon: STEP_ICONS[3], title: t('hiw.s4t'), desc: t('hiw.s4d') },
    { icon: STEP_ICONS[4], title: t('hiw.s5t'), desc: t('hiw.s5d') },
    { icon: STEP_ICONS[5], title: t('hiw.s6t'), desc: t('hiw.s6d') },
  ];

  return (
    <section id="how-it-works" className="section hiw">
      <div className="container">
        <motion.div
          className="hiw__header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-tag">{t('hiw.tag')}</div>
          <h2 className="section-title">{t('hiw.title')}</h2>
          <p className="section-subtitle">{t('hiw.desc')}</p>
        </motion.div>

        <div className="hiw__steps">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                className="hiw__step"
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <div className="hiw__step-num">{idx + 1}</div>
                <div className="hiw__step-icon">
                  <Icon size={24} className="icon-premium" />
                </div>
                <div className="hiw__step-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ScanFace, Camera, Sparkles, CheckCircle2 } from 'lucide-react';
import './HowItWorks.css';

export default function HowItWorks() {
  const { t } = useTranslation();

  const steps = [
    { icon: <ScanFace size={24} />, title: t('hiw.s1t'), desc: t('hiw.s1d') },
    { icon: <Camera size={24} />, title: t('hiw.s2t'), desc: t('hiw.s2d') },
    { icon: <Sparkles size={24} />, title: t('hiw.s3t'), desc: t('hiw.s3d') },
    { icon: <CheckCircle2 size={24} />, title: t('hiw.s4t'), desc: t('hiw.s4d') }
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
          {steps.map((step, idx) => (
            <motion.div 
              key={idx} 
              className="hiw__step"
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="hiw__step-num">{idx + 1}</div>
              <div className="hiw__step-icon">{step.icon}</div>
              <div className="hiw__step-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

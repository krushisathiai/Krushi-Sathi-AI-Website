import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import './CTA.css';

export default function CTA() {
  const { t } = useTranslation();

  return (
    <section className="section cta-section">
      <div className="container">
        <motion.div 
          className="cta-box glass-card"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="cta-content">
            <h2 className="cta-title">{t('cta.title')}</h2>
            <p className="cta-desc">{t('cta.desc')}</p>
            <div className="cta-actions">
              <button className="btn btn-primary btn-glow cta-btn">
                <Download size={20} />
                {t('cta.btn1')}
              </button>
              <button className="btn btn-outline cta-btn cta-btn--outline">
                {t('cta.btn2')}
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

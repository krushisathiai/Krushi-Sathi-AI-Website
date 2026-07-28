import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const sectionStyle = {
  marginBottom: '32px',
};

const headingStyle = {
  fontSize: 'clamp(17px, 2vw, 20px)',
  fontFamily: 'var(--font-heading)',
  color: 'var(--text-1)',
  marginBottom: '12px',
  fontWeight: '600',
  lineHeight: '1.4',
};

const paraStyle = {
  color: 'var(--text-sub)',
  lineHeight: '1.75',
  fontSize: '15px',
};

export default function Privacy() {
  const { t } = useTranslation();

  return (
    <div className="page-wrapper">
      <div className="container page-inner" style={{ maxWidth: '840px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '48px' }}
        >
          <div className="section-tag" style={{ justifyContent: 'center' }}>Legal</div>
          <h1 className="section-title">{t('privacy.title')}</h1>
        </motion.div>

        <motion.div
          className="glass-card"
          style={{ padding: 'clamp(24px, 5vw, 48px)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div style={sectionStyle}>
            <h3 style={headingStyle}>{t('privacy.d1')}</h3>
            <p style={paraStyle}>{t('privacy.p1')}</p>
          </div>

          <div style={sectionStyle}>
            <h3 style={headingStyle}>{t('privacy.d2')}</h3>
            <p style={paraStyle}>{t('privacy.p2')}</p>
          </div>

          <div>
            <h3 style={headingStyle}>{t('privacy.d3')}</h3>
            <p style={paraStyle}>{t('privacy.p3')}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

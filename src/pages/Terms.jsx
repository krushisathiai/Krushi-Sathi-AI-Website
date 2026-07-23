import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Terms() {
  const { t } = useTranslation();

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: 'var(--bg-1)' }}>
      <div className="container" style={{ paddingBottom: '80px', maxWidth: '800px' }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <div className="section-tag" style={{ justifyContent: 'center' }}>Legal</div>
          <h1 className="hero__title">{t('terms.title')}</h1>
        </motion.div>

        <div className="glass-card" style={{ padding: '48px' }}>
          <h3 style={{ fontSize: '20px', color: 'var(--text-1)', marginBottom: '12px' }}>{t('terms.t1')}</h3>
          <p style={{ color: 'var(--text-sub)', marginBottom: '32px', lineHeight: '1.6' }}>
            {t('terms.p1')}
          </p>

          <h3 style={{ fontSize: '20px', color: 'var(--text-1)', marginBottom: '12px' }}>{t('terms.t2')}</h3>
          <p style={{ color: 'var(--text-sub)', marginBottom: '32px', lineHeight: '1.6' }}>
            {t('terms.p2')}
          </p>

          <h3 style={{ fontSize: '20px', color: 'var(--text-1)', marginBottom: '12px' }}>{t('terms.t3')}</h3>
          <p style={{ color: 'var(--text-sub)', lineHeight: '1.6' }}>
            {t('terms.p3')}
          </p>
        </div>
      </div>
    </div>
  );
}

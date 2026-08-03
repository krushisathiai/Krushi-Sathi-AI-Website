import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const checkItemStyle = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '12px',
  color: 'var(--text-2)',
  fontSize: '14px',
  lineHeight: '1.5',
};

const checkIconStyle = {
  color: 'var(--primary)',
  background: 'var(--primary-glow)',
  padding: '3px',
  borderRadius: '50%',
  flexShrink: 0,
  marginTop: '2px',
};

export default function Pricing() {
  const { t } = useTranslation();

  return (
    <div className="page-wrapper">
      <SEO 
        title="Pricing" 
        description="Choose the right Krushi Sathi plan for your farming needs. Free basic features and premium Pro features available."
        url="/pricing"
      />
      <div className="container page-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 56px' }}
        >
          <div className="section-tag" style={{ justifyContent: 'center' }}>
            {t('pricing.tag')}
          </div>
          <h1 className="section-title" style={{ marginBottom: '16px' }}>{t('pricing.title')}</h1>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>{t('pricing.desc')}</p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '28px',
          maxWidth: '800px',
          margin: '0 auto',
        }}>
          {/* Free Plan */}
          <motion.div
            className="glass-card"
            style={{ padding: 'clamp(24px, 5vw, 44px)', position: 'relative' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 style={{ fontSize: '22px', fontFamily: 'var(--font-heading)', color: 'var(--text-1)', fontWeight: '700' }}>
              {t('pricing.basic.name')}
            </h3>
            <p style={{ color: 'var(--text-sub)', marginTop: '8px', marginBottom: '28px', fontSize: '14px', lineHeight: '1.6' }}>
              {t('pricing.basic.desc')}
            </p>
            <div style={{ marginBottom: '28px' }}>
              <span style={{ fontSize: '44px', fontWeight: '800', color: 'var(--text-1)', lineHeight: '1' }}>₹0</span>
              <span style={{ fontSize: '15px', color: 'var(--text-sub)', fontWeight: '400', marginLeft: '4px' }}>/mo</span>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 36px 0', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {['f1', 'f2', 'f3'].map((f, i) => (
                <li key={i} style={checkItemStyle}>
                  <div style={checkIconStyle}><Check size={15} /></div>
                  {t(`pricing.basic.${f}`)}
                </li>
              ))}
            </ul>
            <button className="btn btn-outline" style={{ width: '100%' }}>{t('pricing.basic.btn')}</button>
          </motion.div>

          {/* Pro Plan */}
          <motion.div
            className="glass-card"
            style={{
              padding: 'clamp(24px, 5vw, 44px)',
              position: 'relative',
              border: '1px solid var(--primary)',
              boxShadow: '0 0 30px rgba(34,197,94,0.12)',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div style={{
              position: 'absolute',
              top: '-14px',
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'var(--primary)',
              color: '#fff',
              padding: '4px 18px',
              borderRadius: '50px',
              fontSize: '11px',
              fontWeight: '700',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
            }}>
              {t('pricing.pro.rec')}
            </div>
            <h3 style={{ fontSize: '22px', fontFamily: 'var(--font-heading)', color: 'var(--text-1)', fontWeight: '700' }}>
              {t('pricing.pro.name')}
            </h3>
            <p style={{ color: 'var(--text-sub)', marginTop: '8px', marginBottom: '28px', fontSize: '14px', lineHeight: '1.6' }}>
              {t('pricing.pro.desc')}
            </p>
            <div style={{ marginBottom: '28px' }}>
              <span style={{ fontSize: '44px', fontWeight: '800', color: 'var(--text-1)', lineHeight: '1' }}>₹149</span>
              <span style={{ fontSize: '15px', color: 'var(--text-sub)', fontWeight: '400', marginLeft: '4px' }}>/mo</span>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 36px 0', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {['f1', 'f2', 'f3', 'f4'].map((f, i) => (
                <li key={i} style={checkItemStyle}>
                  <div style={checkIconStyle}><Check size={15} /></div>
                  {t(`pricing.pro.${f}`)}
                </li>
              ))}
            </ul>
            <button className="btn btn-primary" style={{ width: '100%' }}>{t('pricing.pro.btn')}</button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

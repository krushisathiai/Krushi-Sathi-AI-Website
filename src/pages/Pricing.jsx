import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Pricing() {
  const { t } = useTranslation();

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: 'var(--bg-1)' }}>
      <div className="container" style={{ paddingBottom: '80px' }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', marginBottom: '40px' }}
        >
          <div className="section-tag" style={{ justifyContent: 'center' }}>{t('pricing.tag')}</div>
          <h1 className="hero__title" style={{ marginBottom: '24px' }}>{t('pricing.title')}</h1>
          <p className="hero__desc">{t('pricing.desc')}</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', maxWidth: '900px', margin: '0 auto' }}>
          
          <div className="glass-card" style={{ padding: '48px', position: 'relative' }}>
            <h3 style={{ fontSize: '24px', fontFamily: 'var(--font-heading)', color: 'var(--text-1)' }}>{t('pricing.basic.name')}</h3>
            <p style={{ color: 'var(--text-sub)', marginTop: '8px', marginBottom: '32px' }}>{t('pricing.basic.desc')}</p>
            <div style={{ fontSize: '48px', fontWeight: '800', color: 'var(--text-1)', marginBottom: '32px' }}>
              ₹0 <span style={{ fontSize: '16px', color: 'var(--text-sub)', fontWeight: '400' }}>/mo</span>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px 0', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {['f1', 'f2', 'f3'].map((f, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-2)' }}>
                  <div style={{ color: 'var(--primary)', background: 'var(--primary-glow)', padding: '4px', borderRadius: '50%' }}>
                    <Check size={16} />
                  </div>
                  {t(`pricing.basic.${f}`)}
                </li>
              ))}
            </ul>
            <button className="btn btn-outline" style={{ width: '100%' }}>{t('pricing.basic.btn')}</button>
          </div>

          <div className="glass-card" style={{ padding: '48px', position: 'relative', border: '1px solid var(--primary)' }}>
            <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', background: 'var(--primary)', color: '#fff', padding: '4px 16px', borderRadius: '50px', fontSize: '12px', fontWeight: '700', letterSpacing: '1px' }}>
              {t('pricing.pro.rec')}
            </div>
            <h3 style={{ fontSize: '24px', fontFamily: 'var(--font-heading)', color: 'var(--text-1)' }}>{t('pricing.pro.name')}</h3>
            <p style={{ color: 'var(--text-sub)', marginTop: '8px', marginBottom: '32px' }}>{t('pricing.pro.desc')}</p>
            <div style={{ fontSize: '48px', fontWeight: '800', color: 'var(--text-1)', marginBottom: '32px' }}>
              ₹149 <span style={{ fontSize: '16px', color: 'var(--text-sub)', fontWeight: '400' }}>/mo</span>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px 0', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {['f1', 'f2', 'f3', 'f4'].map((f, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-2)' }}>
                  <div style={{ color: 'var(--primary)', background: 'var(--primary-glow)', padding: '4px', borderRadius: '50%' }}>
                    <Check size={16} />
                  </div>
                  {t(`pricing.pro.${f}`)}
                </li>
              ))}
            </ul>
            <button className="btn btn-primary" style={{ width: '100%' }}>{t('pricing.pro.btn')}</button>
          </div>

        </div>
      </div>
    </div>
  );
}

import { motion } from 'framer-motion';
import { Shield, Leaf, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  return (
    <main style={{ paddingTop: '100px', minHeight: '100vh', background: 'var(--bg-1)' }}>
      <div className="container" style={{ paddingBottom: '80px' }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}
        >
          <div className="section-tag" style={{ justifyContent: 'center' }}>{t('about.tag')}</div>
          <h1 className="hero__title" style={{ marginBottom: '24px' }}>{t('about.title')}</h1>
          <p className="hero__desc">
            {t('about.desc')}
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px', marginTop: '64px' }}>
          {[
            { icon: <Leaf size={32}/>, title: t('about.cards.0.title'), desc: t('about.cards.0.desc') },
            { icon: <Shield size={32}/>, title: t('about.cards.1.title'), desc: t('about.cards.1.desc') },
            { icon: <Users size={32}/>, title: t('about.cards.2.title'), desc: t('about.cards.2.desc') }
          ].map((item, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '32px', textAlign: 'center' }}>
              <div style={{ display: 'inline-flex', padding: '16px', background: 'var(--primary-glow)', color: 'var(--primary)', borderRadius: '16px', marginBottom: '24px' }}>
                {item.icon}
              </div>
              <h3 style={{ fontSize: '20px', marginBottom: '12px', fontFamily: 'var(--font-heading)' }}>{item.title}</h3>
              <p style={{ color: 'var(--text-sub)' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

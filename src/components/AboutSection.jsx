import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Leaf, Shield, Users } from 'lucide-react';

export default function AboutSection() {
  const { t } = useTranslation();

  return (
    <section id="about" style={{ padding: '100px 0', background: 'var(--bg-1)' }}>
      <div className="container" style={{ paddingBottom: '40px' }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}
        >
          <div className="section-tag" style={{ justifyContent: 'center' }}>{t('about.tag')}</div>
          <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-heading)', color: 'var(--text-1)', marginBottom: '24px' }}>{t('about.title')}</h2>
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
            <motion.div 
              key={idx} 
              className="glass-card" 
              style={{ padding: '32px', textAlign: 'center' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div style={{ display: 'inline-flex', padding: '16px', background: 'var(--primary-glow)', color: 'var(--primary)', borderRadius: '16px', marginBottom: '24px' }}>
                {item.icon}
              </div>
              <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-heading)', color: 'var(--text-1)', marginBottom: '12px' }}>{item.title}</h3>
              <p style={{ color: 'var(--text-sub)', lineHeight: '1.6' }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

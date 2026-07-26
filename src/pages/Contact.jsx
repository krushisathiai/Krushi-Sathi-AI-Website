import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div style={{ paddingTop: '96px', minHeight: '100vh', background: 'var(--bg-1)' }}>
      <div className="container" style={{ paddingBottom: '80px' }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', marginBottom: '40px' }}
        >
          <div className="section-tag" style={{ justifyContent: 'center' }}>{t('footer.c3')}</div>
          <h1 className="hero__title">{t('contact.title')}</h1>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
          <div className="glass-card" style={{ padding: 'clamp(20px, 4vw, 40px)' }}>
            <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-2)' }}>{t('contact.name')}</label>
                <input type="text" style={{ width: '100%', padding: '16px', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)', borderRadius: '12px', color: 'var(--text-1)' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-2)' }}>{t('contact.email')}</label>
                <input type="email" style={{ width: '100%', padding: '16px', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)', borderRadius: '12px', color: 'var(--text-1)' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-2)' }}>{t('contact.msg')}</label>
                <textarea rows="4" style={{ width: '100%', padding: '16px', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)', borderRadius: '12px', color: 'var(--text-1)', resize: 'vertical' }}></textarea>
              </div>
              <button type="submit" className="btn btn-primary">{t('contact.btn')}</button>
            </form>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {[
              { icon: <Mail />, title: 'Email', detail: 'support@krushisathi.com' },
              { icon: <Phone />, title: 'Phone', detail: '+91 98765 43210' },
              { icon: <MapPin />, title: 'Office', detail: 'Pune, Maharashtra, India' }
            ].map((item, i) => (
              <div key={i} className="glass-card" style={{ padding: '32px', display: 'flex', alignItems: 'center', gap: '24px' }}>
                <div style={{ padding: '16px', background: 'var(--primary-glow)', color: 'var(--primary)', borderRadius: '16px' }}>
                  {item.icon}
                </div>
                <div>
                  <h4 style={{ fontSize: '18px', color: 'var(--text-1)', marginBottom: '4px' }}>{item.title}</h4>
                  <p style={{ color: 'var(--text-sub)' }}>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

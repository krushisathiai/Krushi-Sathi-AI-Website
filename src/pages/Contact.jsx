import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const inputStyle = {
  width: '100%',
  padding: '14px 16px',
  background: 'rgba(255,255,255,0.03)',
  border: '1px solid var(--border)',
  borderRadius: '12px',
  color: 'var(--text-1)',
  fontFamily: 'var(--font-body)',
  fontSize: '15px',
  outline: 'none',
  transition: 'border-color 0.25s ease',
};

const labelStyle = {
  display: 'block',
  marginBottom: '8px',
  color: 'var(--text-2)',
  fontFamily: 'var(--font-body)',
  fontSize: '14px',
  fontWeight: '500',
};

const contactInfoItems = [
  { icon: <Mail size={22} />, title: 'Email', detail: 'support@krushisathi.com' },
  { icon: <Phone size={22} />, title: 'Phone', detail: '+91 98765 43210' },
  { icon: <MapPin size={22} />, title: 'Office', detail: 'Pune, Maharashtra, India' },
];

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className="page-wrapper">
      <SEO 
        title="Contact Us" 
        description="Get in touch with the Krushi Sathi team for support, business inquiries, or general questions about our AI farming assistant."
        url="/contact"
      />
      <div className="container page-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 52px' }}
        >
          <div className="section-tag" style={{ justifyContent: 'center' }}>
            {t('footer.c3')}
          </div>
          <h1 className="section-title">{t('contact.title')}</h1>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px',
          alignItems: 'start',
        }}>
          {/* Contact Form */}
          <motion.div
            className="glass-card"
            style={{ padding: 'clamp(24px, 5vw, 40px)' }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={labelStyle}>{t('contact.name')}</label>
                <input type="text" style={inputStyle} placeholder="Your full name" />
              </div>
              <div>
                <label style={labelStyle}>{t('contact.email')}</label>
                <input type="email" style={inputStyle} placeholder="you@example.com" />
              </div>
              <div>
                <label style={labelStyle}>{t('contact.msg')}</label>
                <textarea
                  rows="5"
                  style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                  placeholder="Tell us how we can help..."
                />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                {t('contact.btn')}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {contactInfoItems.map((item, i) => (
              <motion.div
                key={i}
                className="glass-card"
                style={{ padding: '28px 24px', display: 'flex', alignItems: 'center', gap: '20px' }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              >
                <div style={{
                  padding: '14px',
                  background: 'var(--primary-glow)',
                  color: 'var(--primary)',
                  borderRadius: '14px',
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  {item.icon}
                </div>
                <div style={{ minWidth: 0 }}>
                  <h4 style={{
                    fontSize: '16px',
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--text-1)',
                    marginBottom: '4px',
                    fontWeight: '600',
                  }}>
                    {item.title}
                  </h4>
                  <p style={{ color: 'var(--text-sub)', fontSize: '14px', wordBreak: 'break-word' }}>
                    {item.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Scan, MessageCircleQuestion, CloudSunRain, FlaskConical, BellRing, ShieldCheck } from 'lucide-react';
import './Features.css';

export default function Features() {
  const { t } = useTranslation();

  const featuresList = [
    { icon: <Scan size={28} />, title: t('features.items.scanTitle'), desc: t('features.items.scanDesc'), color: "var(--primary)" },
    { icon: <MessageCircleQuestion size={28} />, title: t('features.items.expertTitle'), desc: t('features.items.expertDesc'), color: "var(--amber)" },
    { icon: <CloudSunRain size={28} />, title: t('features.items.weatherTitle'), desc: t('features.items.weatherDesc'), color: "var(--blue)" },
    { icon: <FlaskConical size={28} />, title: t('features.items.fertTitle'), desc: t('features.items.fertDesc'), color: "var(--purple)" },
    { icon: <BellRing size={28} />, title: t('features.items.alertTitle'), desc: t('features.items.alertDesc'), color: "var(--red)" },
    { icon: <ShieldCheck size={28} />, title: t('features.items.secTitle'), desc: t('features.items.secDesc'), color: "var(--teal)" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="features" className="section features">
      <div className="container">
        <motion.div 
          className="features__header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-tag">{t('features.tag')}</div>
          <h2 className="section-title">{t('features.title')}</h2>
          <p className="section-subtitle">{t('features.desc')}</p>
        </motion.div>

        <motion.div 
          className="features__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featuresList.map((f, idx) => (
            <motion.div key={idx} className="glass-card feature-card" variants={itemVariants}>
              <div className="feature__icon-box" style={{ color: f.color }}>
                {f.icon}
                <div className="feature__icon-glow" style={{ background: f.color }}></div>
              </div>
              <h3 className="feature__title">{f.title}</h3>
              <p className="feature__desc">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

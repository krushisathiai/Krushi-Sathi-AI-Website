import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Leaf, Shield, Users } from 'lucide-react';
import './AboutSection.css';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12 }
  })
};

export default function AboutSection() {
  const { t } = useTranslation();

  const cards = [
    { icon: <Leaf size={30} className="icon-premium" />, title: t('about.cards.0.title'), desc: t('about.cards.0.desc') },
    { icon: <Shield size={30} className="icon-premium" />, title: t('about.cards.1.title'), desc: t('about.cards.1.desc') },
    { icon: <Users size={30} className="icon-premium" />, title: t('about.cards.2.title'), desc: t('about.cards.2.desc') },
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          className="about__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-tag about__tag">{t('about.tag')}</div>
          <h2 className="about__title">{t('about.title')}</h2>
          <p className="about__desc">{t('about.desc')}</p>
        </motion.div>

        <div className="about__grid">
          {cards.map((item, idx) => (
            <motion.div
              key={idx}
              className="glass-card about-card"
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <div className="about-card__icon">
                {item.icon}
              </div>
              <h3 className="about-card__title">{item.title}</h3>
              <p className="about-card__desc">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

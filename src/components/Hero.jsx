import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ShieldCheck, Leaf, Activity } from 'lucide-react';
import heroImg from '../assets/hero.png';
import './Hero.css';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="home" className="hero">
      <div className="container hero__container">
        <motion.div 
          className="hero__content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="hero__tag">{t('hero.tag')}</div>
          <h1 className="hero__title">
            {t('hero.title1')} <span className="hero__title-highlight">{t('hero.title2')}</span>
          </h1>
          <p className="hero__desc">{t('hero.desc')}</p>
          
          <div className="hero__actions">
            <button className="btn btn-primary">{t('hero.downloadBtn')}</button>
            <button className="btn btn-outline">{t('hero.learnBtn')}</button>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <ShieldCheck size={24} className="hero__stat-icon" />
              <div>
                <strong>50K+</strong>
                <span>{t('hero.stats.farmers')}</span>
              </div>
            </div>
            <div className="hero__stat">
              <Activity size={24} className="hero__stat-icon" />
              <div>
                <strong>98%</strong>
                <span>{t('hero.stats.accuracy')}</span>
              </div>
            </div>
            <div className="hero__stat">
              <Leaf size={24} className="hero__stat-icon" />
              <div>
                <strong>30+</strong>
                <span>{t('hero.stats.crops')}</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="hero__image-wrap">
            <div className="hero__image-slider">
              <img
                src={heroImg}
                alt="Farmer using Krushi Sathi"
                className="hero__image"
              />
            </div>
            <div className="hero__glow"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

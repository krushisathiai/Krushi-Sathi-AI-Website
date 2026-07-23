import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './Diseases.css';

export default function Diseases() {
  const { t } = useTranslation();

  const diseasesList = [
    { name: 'Tomato Early Blight', crop: 'Tomato', match: '98%', img: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&q=80&w=400' },
    { name: 'Wheat Rust', crop: 'Wheat', match: '95%', img: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&q=80&w=400' },
    { name: 'Cotton Bollworm', crop: 'Cotton', match: '92%', img: 'https://images.unsplash.com/photo-1506484381205-f7945653044d?auto=format&fit=crop&q=80&w=400' },
    { name: 'Potato Late Blight', crop: 'Potato', match: '97%', img: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&q=80&w=400' },
  ];

  return (
    <section id="diseases" className="section diseases">
      <div className="container">
        <motion.div 
          className="diseases__header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-tag">{t('diseases.tag')}</div>
          <h2 className="section-title">{t('diseases.title')}</h2>
          <p className="section-subtitle">{t('diseases.desc')}</p>
        </motion.div>

        <div className="diseases__grid">
          {diseasesList.map((disease, idx) => (
            <motion.div 
              key={idx} 
              className="disease-card glass-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <div className="disease__img-wrap">
                <img src={disease.img} alt={disease.name} className="disease__img" />
                <div className="disease__match">
                  <span className="dot"></span>
                  {disease.match} Match
                </div>
              </div>
              <div className="disease__info">
                <span className="disease__crop">{disease.crop}</span>
                <h3 className="disease__name">{disease.name}</h3>
                <button className="disease__btn">
                  {t('diseases.learn')} <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="diseases__footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <button className="btn btn-outline">{t('diseases.btn')}</button>
        </motion.div>
      </div>
    </section>
  );
}

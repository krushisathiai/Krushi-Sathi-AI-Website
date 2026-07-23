import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import './Testimonials.css';

export default function Testimonials() {
  const { t } = useTranslation();

  const reviews = t('testimonials.reviews', { returnObjects: true });

  const avatars = [
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150',
    'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?auto=format&fit=crop&q=80&w=150',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150'
  ];

  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <motion.div 
          className="testimonials__header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-tag">{t('testimonials.tag')}</div>
          <h2 className="section-title">{t('testimonials.title')}</h2>
          <p className="section-subtitle">{t('testimonials.desc')}</p>
        </motion.div>

        <div className="testimonials__grid">
          {reviews && Array.isArray(reviews) && reviews.map((review, idx) => (
            <motion.div 
              key={idx} 
              className="glass-card testimonial-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <div className="testimonial__rating">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="star-icon" fill="currentColor" />
                ))}
              </div>
              <p className="testimonial__text">"{review.text}"</p>
              <div className="testimonial__author">
                <img src={avatars[idx]} alt={review.name} className="testimonial__avatar" />
                <div className="testimonial__info">
                  <h4>{review.name}</h4>
                  <span>{review.loc}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

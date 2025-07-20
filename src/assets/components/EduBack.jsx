import React from 'react';
import { motion } from 'framer-motion';
import '../css/EduBack.css'; // Import the CSS file

const educationData = [
  {
    id: 1,
    type: 'school',
    image: 'https://raghavfoundation.org.in/wp-content/uploads/2023/05/school-image.jpg',
    title: 'Raghavendra English Medium School, Chirala',
    description: 'I completed my schooling at Raghavendra English Medium School, Chirala, where I steadfastly demonstrated academic excellence, graduating with an outstanding score of 97%.',
    initial: { x: -100, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
  },
  {
    id: 2,
    type: 'college',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbaCXX9dFYCSQrEtVX8TW1F_UvzxGxKiXutw&s',
    title: 'Sri Gowthami Junior College, Chirala',
    description: 'I completed my Higher Secondary education (Intermediate) at Sri Gowthami Junior College, Chirala, where I achieved an impressive score of 95%.',
    initial: { x: 100, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
  },
  {
    id: 3,
    type: 'university',
    image: 'https://cache.careers360.mobi/media/article_images/2024/6/27/lbrce-mylavaram-management-quota.jpg',
    title: 'Lakireddy Balireddy College of Engineering',
    description: 'I am currently pursuing my Bachelor of Technology (B.Tech) degree in Artificial Intelligence and Machine Learning, maintaining a strong CGPA of 8.71.',
    initial: { y: 100, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
  },
];

const EduBack = () => {
  return (
    <div className="edu-back-container">
      <div className="edu-content-wrapper">
        {educationData.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={edu.initial}
            whileInView={edu.whileInView}
            whileHover={{ scale: 1.03, boxShadow: '0 8px 32px 0 rgba(0,255,255,0.2)' }}
            transition={{ duration: 0.9, type: 'spring', bounce: 0.2, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className={`edu-card ${edu.type === 'college' ? 'edu-card-reverse' : ''}`}
          >
            <div className="edu-image-wrapper">
              <img src={edu.image} alt={`${edu.title} logo`} className="edu-image" />
            </div>
            <div className="edu-text-content">
              <h2 className={`edu-title-cyan`}>{edu.title}</h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.5 + index * 0.2 }}
                className="edu-description"
              >
                {edu.description}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EduBack;

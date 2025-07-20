import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  const fullText = `Hi, I'm Jakir Hussain —
   I’m a passionate and versatile Machine Learning Engineer and Full Stack Developer with a strong foundation in mathematics, software engineering, and data-driven problem-solving. I specialize in building intelligent systems that combine predictive analytics, deep learning, and robust full-stack architectures to deliver impactful solutions. From designing ML pipelines and training models to deploying scalable web applications, I thrive at the intersection of AI innovation and full-stack development. My goal is to create technology that not only performs but truly empowers users and businesses.


`;
  const [typedText, setTypedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  useEffect(() => {
    if (isInView && index < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + fullText.charAt(index));
        setIndex((prev) => prev + 1);
      }, 20); // typing speed (slower)
      return () => clearTimeout(timeout);
    }
  }, [index, isInView]);

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-black/90 text-white px-6 py-16"
    >
      <motion.div
        className="max-w-3xl text-center"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold mb-6 text-teal-400">About Me</h2>
        <p className="text-xl leading-relaxed font-mono">
          <span
            className="inline-block animate-pulse opacity-80"
            style={{ whiteSpace: 'pre-line' }}
          >
            {typedText}
            <span className="border-r-2 border-white ml-1 animate-pulse" />
          </span>
        </p>
        
      </motion.div>
    </section>
  );
};

export default AboutMe;

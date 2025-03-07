import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import About from '../components/About';
import Courses from '../components/Courses';
import NTACenter from '../components/NTACenter';
import Infrastructure from '../components/Infrastructure';
import Testimonials from '../components/Testimonials';
import { ArrowUpCircle } from 'lucide-react';

const HomePage = () => {
  const [showScrollTop, setShowScrollTop] = React.useState(false);
  const coursesRef = useRef(null); // Create a ref for the courses section

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToCourses = () => {
    if (coursesRef.current) {
      coursesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero scrollToCourses={scrollToCourses} />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={fadeInUpVariants}
      >
        <About />
      </motion.div>
      <motion.div
        ref={coursesRef} // Attach the ref to the Courses section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={fadeInUpVariants}
      >
        <Courses />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={fadeInUpVariants}
      >
        <NTACenter />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={fadeInUpVariants}
      >
        <Infrastructure />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={fadeInUpVariants}
      >
        <Testimonials />
      </motion.div>

      {/* Always Visible Contact Button */}
      <a href="/contact" className="fixed bottom-8 right-8 bg-green-600 text-white p-4 rounded-lg shadow-lg z-50">
        Contact Us
      </a>

      {/* Scroll to Top Button */}
      <motion.button
        className="fixed bottom-20 right-8 bg-blue-600 text-white p-2 rounded-full shadow-lg z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0,
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
      >
        <ArrowUpCircle className="h-6 w-6" />
      </motion.button>
    </motion.div>
  );
};

export default HomePage;

import React from 'react';
import { motion } from 'framer-motion';
import Courses from '../components/Courses';

const CoursesPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="pt-16"
    >
      <Courses />
    </motion.div>
  );
};

export default CoursesPage;
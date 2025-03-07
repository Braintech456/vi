import React from 'react';
import { motion } from 'framer-motion';
import Infrastructure from '../components/Infrastructure';

const InfrastructurePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="pt-16"
    >
      <Infrastructure />
    </motion.div>
  );
};

export default InfrastructurePage;
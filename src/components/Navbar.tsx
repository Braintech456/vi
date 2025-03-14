import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Courses', href: '/courses' },
    { name: 'NTA Center', href: '/nta-center' },
    { name: 'Infrastructure', href: '/infrastructure' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <Link to="/" className="flex items-center">
            {/* Logo Image Added */}
            <motion.img
              src="https://media-hosting.imagekit.io//79d453f53abd442a/logo.jpg?Expires=1836404000&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=xxN88jA3JdGj6PjkrRGxVO4k5PCQ9mU2Nt5A8D0Xuoo9pTwe76Om~AfeD0udt8uEoRBl8OyX4qIfLQKrCQmsYC3IMe473GPjSKc006K5Xe4LLUF9~cF4Aq7gJe8UqdnCxFhO5geUl859bR3Gg1XgqzTi7Y~0AGTmw0OYoLSki5~jCU8DzJK~P6ZfiGnhJzICnjW1U8IzEhbRdtyDr9YV2TaNDInLnehLHuYMI34xg4EjBie~atUBFx2Gwv4OheXAioSylMD5bY2ezV9byA4MLGEsyD4wtNmNM6OyFACUbPkN4HfSkDbdwXNpKRdGS2Ku3r41n9Gy3M2IVBM-nsueyA__"
              alt="Logo"
              className="h-16 w-16"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            />
            <span className="ml-2 text-xl font-bold text-gray-900">Vinovaa Institute</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium ${
                  location.pathname === item.href ? 'text-blue-600' : ''
                }`}
              >
                {location.pathname === item.href && (
                  <motion.div
                    layoutId="navbar-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                  />
                )}
                {item.name}
              </Link>
            ))}
            <Link to="/courses">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Enroll Now
              </motion.button>
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <motion.div
          initial={false}
          animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === item.href
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/courses">
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="btn-primary w-full mt-4"
              >
                Enroll Now
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;

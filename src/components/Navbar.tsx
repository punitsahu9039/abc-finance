import React from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center"
          >
            <span className="text-2xl font-bold text-blue-600">ABC Finance</span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden md:flex items-center space-x-8"
          >
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Personal Loan</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Business Loan</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Home Loan</a>
            <div className="flex items-center space-x-4">
              <a href="tel:1800-123-4567" className="flex items-center text-gray-700 hover:text-blue-600">
                <Phone className="h-4 w-4 mr-2" />
                <span>1800-123-4567</span>
              </a>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
              >
                Apply Now
              </motion.button>
            </div>
          </motion.div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">Personal Loan</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">Business Loan</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">Home Loan</a>
              <a href="tel:1800-123-4567" className="flex items-center px-3 py-2 text-gray-700 hover:text-blue-600">
                <Phone className="h-4 w-4 mr-2" />
                <span>1800-123-4567</span>
              </a>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full text-center bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
              >
                Apply Now
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
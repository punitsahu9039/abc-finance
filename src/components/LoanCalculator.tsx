import React, { useState, useEffect } from 'react';
import { Calculator } from 'lucide-react';
import { motion } from 'framer-motion';

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [tenure, setTenure] = useState(24);
  const [interestRate, setInterestRate] = useState(10.49);
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    calculateLoanDetails();
  }, [loanAmount, tenure, interestRate]);

  const calculateLoanDetails = () => {
    const principal = loanAmount;
    const ratePerMonth = interestRate / (12 * 100);
    const numberOfPayments = tenure;
    
    const emi = principal * ratePerMonth * Math.pow(1 + ratePerMonth, numberOfPayments) / 
                (Math.pow(1 + ratePerMonth, numberOfPayments) - 1);
    
    const totalAmount = emi * numberOfPayments;
    const totalInterest = totalAmount - principal;
    
    setEmi(Math.round(emi));
    setTotalInterest(Math.round(totalInterest));
    setTotalAmount(Math.round(totalAmount));
  };

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Personal Loan EMI Calculator</h2>
          <p className="text-gray-600">Calculate your monthly EMI and plan your loan better</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Loan Amount (₹)
                </label>
                <input
                  type="range"
                  min="50000"
                  max="2500000"
                  step="10000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="mt-2 text-lg font-semibold">₹{loanAmount.toLocaleString()}</div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tenure (Months)
                </label>
                <input
                  type="range"
                  min="12"
                  max="60"
                  step="12"
                  value={tenure}
                  onChange={(e) => setTenure(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="mt-2 text-lg font-semibold">{tenure} months</div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Interest Rate (% p.a.)
                </label>
                <input
                  type="range"
                  min="10.49"
                  max="24"
                  step="0.01"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="mt-2 text-lg font-semibold">{interestRate}%</div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-8 flex flex-col justify-center">
              <div className="text-center space-y-6">
                <div>
                  <p className="text-gray-600 mb-2">Your Monthly EMI</p>
                  <motion.h3 
                    key={emi}
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    className="text-4xl font-bold text-blue-600"
                  >
                    ₹{emi.toLocaleString()}
                  </motion.h3>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Total Interest</p>
                    <p className="font-semibold text-gray-800">₹{totalInterest.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Total Amount</p>
                    <p className="font-semibold text-gray-800">₹{totalAmount.toLocaleString()}</p>
                  </div>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors w-full"
                >
                  Apply Now
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoanCalculator;
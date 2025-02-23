import React from 'react';
import { Check } from 'lucide-react';

const EligibilitySection = () => {
  const eligibilityCriteria = [
    "Age between 21 to 60 years",
    "Minimum monthly income of ₹20,000",
    "Minimum work experience of 2 years",
    "Good credit score (700+)",
    "Indian citizen with valid ID proof",
    "Stable employment or business"
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Loan Eligibility Criteria</h2>
            <p className="text-gray-600 mb-8">
              Check if you're eligible for a personal loan before applying. Meeting these criteria increases your chances of approval.
            </p>
            <div className="space-y-4">
              {eligibilityCriteria.map((criteria, index) => (
                <div key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">{criteria}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-blue-50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Required Documents</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                  <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <div>
                  <h4 className="font-semibold text-gray-900">Identity Proof</h4>
                  <p className="text-gray-600">Aadhaar Card, PAN Card, Voter ID</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                  <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <div>
                  <h4 className="font-semibold text-gray-900">Income Proof</h4>
                  <p className="text-gray-600">Salary slips, Bank statements, ITR</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                  <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <div>
                  <h4 className="font-semibold text-gray-900">Address Proof</h4>
                  <p className="text-gray-600">Utility bills, Rental agreement</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EligibilitySection;
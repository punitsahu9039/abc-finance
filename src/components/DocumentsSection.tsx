import React from 'react';

const DocumentsSection = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple Documentation Process</h2>
          <p className="text-gray-600">Complete your loan application with these easy steps</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-blue-600">1</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Fill Application</h3>
            <p className="text-gray-600">Complete the online application form with your basic details</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-blue-600">2</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Upload Documents</h3>
            <p className="text-gray-600">Submit required documents online for verification</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-blue-600">3</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Get Approval</h3>
            <p className="text-gray-600">Receive loan approval and disbursement within 24 hours*</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
            Start Your Application
          </button>
          <p className="mt-4 text-sm text-gray-500">*Terms and conditions apply</p>
        </div>
      </div>
    </div>
  );
};

export default DocumentsSection;
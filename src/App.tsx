import React from 'react';
import { Calculator, ChevronRight, Clock, IndianRupee, Percent, ShieldCheck, Wallet } from 'lucide-react';
import LoanCalculator from './components/LoanCalculator';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import EligibilitySection from './components/EligibilitySection';
import DocumentsSection from './components/DocumentsSection';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <LoanCalculator />
      <Features />
      <EligibilitySection />
      <DocumentsSection />
    </div>
  );
}

export default App;
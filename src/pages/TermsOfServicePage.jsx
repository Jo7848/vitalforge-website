import React from 'react';

const TermsOfServicePage = () => {
  return (
    <div className="container mx-auto px-6 py-20 text-gray-300">
      <h1 className="text-4xl font-bold text-center text-purple-500 mb-12">Terms of Service</h1>
      
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
        <p className="mb-6">
          Welcome to VITALFORGE. These Terms of Service govern your use of our website and services. By accessing or using our services, you agree to be bound by these terms. If you do not agree with any part of the terms, you may not use our services.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Acceptance of Terms</h2>
        <p className="mb-6">
          By using our services, you confirm that you have read, understood, and agree to these Terms of Service. This agreement constitutes a legally binding contract between you and VITALFORGE.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Description of Services</h2>
        <p className="mb-6">
          VITALFORGE provides online fitness coaching, personalized workout plans, and nutritional guidance. All services are for informational purposes only and are not a substitute for professional medical advice.
        </p>
        
        <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. User Obligations</h2>
        <p className="mb-6">
          You agree to provide accurate and complete information when using our services. You are responsible for all activities that occur under your account. You also agree not to use the services for any illegal or unauthorized purpose.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Intellectual Property</h2>
        <p className="mb-6">
          All content on this website, including text, graphics, logos, and images, is the property of VITALFORGE or its content suppliers and is protected by intellectual property laws. You may not use, reproduce, or distribute any content without our prior written permission.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Limitation of Liability</h2>
        <p className="mb-6">
          VITALFORGE will not be liable for any damages, including but not limited to direct, indirect, incidental, punitive, and consequential damages, arising out of your use or inability to use our services.
        </p>
        
        <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Governing Law</h2>
        <p className="mb-6">
          These Terms of Service are governed by the laws of your local jurisdiction, without regard to its conflict of law provisions.
        </p>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <div className="container mx-auto px-6 py-20 text-gray-300">
      <h1 className="text-4xl font-bold text-center text-purple-500 mb-12">Privacy Policy</h1>

      <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
        <p className="mb-6">
          Your privacy is important to us. This Privacy Policy explains how VITALFORGE collects, uses, and protects your personal information when you use our website and services.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Information We Collect</h2>
        <p className="mb-6">
          We may collect personal information such as your name, email address, phone number, and fitness goals when you register for our services or contact us. We also collect non-personal information such as your browser type and IP address.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. How We Use Your Information</h2>
        <p className="mb-6">
          We use your information to provide and improve our services, to communicate with you about your account, and to send you promotional materials. We will not sell or share your personal information with third parties without your consent.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Data Security</h2>
        <p className="mb-6">
          We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Your Rights</h2>
        <p className="mb-6">
          You have the right to access, update, and delete your personal information. If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us.
        </p>
        
        <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Changes to This Policy</h2>
        <p className="mb-6">
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
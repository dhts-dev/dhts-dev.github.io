import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f3f5ed]">
      <Header />
      <main className="flex-1 w-full flex flex-col items-center">
        <div className="w-full max-w-4xl mx-auto px-4 py-8">
          <h1
            className="text-3xl md:text-4xl font-bold text-[#f7931e] mb-8 text-center sticky top-16 lg:top-20 z-30 bg-[#f3f5ed] py-4 shadow-sm"
            style={{ position: 'sticky' }}
          >
            Privacy Policy
          </h1>
          
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">1. Information We Collect</h2>
              <p className="text-gray-600 leading-relaxed">
                We collect information you provide directly to us, such as when you create an account, 
                post a job, apply for a position, or contact us. This may include your name, email address, 
                phone number, work history, and other relevant information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-600 leading-relaxed">
                We use the information we collect to provide, maintain, and improve our services, 
                communicate with you, and personalize your experience. We may also use your information 
                to send you updates about our services and relevant job opportunities.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">3. Information Sharing</h2>
              <p className="text-gray-600 leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this policy. We may share your information 
                with employers when you apply for jobs, or as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">4. Data Security</h2>
              <p className="text-gray-600 leading-relaxed">
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. However, no method of 
                transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">5. Your Rights</h2>
              <p className="text-gray-600 leading-relaxed">
                You have the right to access, update, or delete your personal information. You may also 
                opt out of certain communications from us. Contact us if you need assistance with any 
                of these requests.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">6. Cookies and Tracking</h2>
              <p className="text-gray-600 leading-relaxed">
                We use cookies and similar tracking technologies to enhance your experience on our website. 
                You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">7. Changes to This Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this privacy policy from time to time. We will notify you of any changes 
                by posting the new policy on this page and updating the effective date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">8. Contact Us</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about this privacy policy, please contact us at:
                <br />
                Email: privacy@sunvihitech.com
                <br />
                Phone: +91-XXXXXXXXXX
                <br />
                Address: Sunvi Hi-Tech, [Your Address]
              </p>
            </section>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy; 
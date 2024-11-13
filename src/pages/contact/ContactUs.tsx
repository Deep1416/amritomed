import React from 'react';

const ContactUs: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="text-gray-600 mb-4">
            <strong>Email:</strong> admin@amritomed.com
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Phone:</strong> +91-7703542919
          </p>
          <p className="text-gray-600">
            <strong>Address:</strong> Amritomed Pharmaceutical Pvt Ltd, H.N.
            54655, GALI NO. 5, BLOCK E VIKAS NAGAR NR UTTAM NAGAR NEAR SHYAMA
            DEEP SCHOOL, DELHI, Delhi
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

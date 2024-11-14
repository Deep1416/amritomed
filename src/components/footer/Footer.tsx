import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-center text-gray-600 w-full bg-slate-300 py-5">
      <div className="container mx-auto px-4 sm:px-6 md:px-10">
        <div className="rounded-lg p-8">
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
        <p>
          © 2024 Amritomed Pharmaceutical Private Limited. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

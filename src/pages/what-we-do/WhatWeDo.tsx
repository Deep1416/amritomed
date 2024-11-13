import React from 'react';
import Image from '../../components/image/Image';
import mission from '../../assets/mission.png';

const WhatWeDo: React.FC = () => {
  return (
    <div className="bg-white container mx-auto px-6 py-16 text-center">
      <h2 className="text-3xl font-bold text-center mb-5">WHAT WE DO</h2>
      <h2 className="text-xl font-medium text-center mb-5">Focus to care</h2>
      <div className="px-10">
        <p className="text-gray-600 leading-relaxed mb-10 text-lg">
          Amritomed Pharmaceuticals Pvt Ltd aim to build brands that people love
          because they believe elevating human connections is worth reaching
          for. Strong portfolio of brands supports steady organic revenue and
          earnings growth through the cycles. We believe to buried the art of
          spirits between business and humanity. Our aim to achieve goals with
          Competitive compensation good culture in organization for employee
          which develop good atmosphere between employee and management we also
          Celebrate milestones and special events.with team Companies that
          constantly create new products strategies workflows and Innovative
          ideas, encourage us to step up. sharing ideas from field make us
          innovative, As a result we aim to steps toward GOAL.the organization
          has more opportunities to grow.
        </p>

        <Image src={mission} alt="What we do image" />
      </div>
    </div>
  );
};

export default WhatWeDo;

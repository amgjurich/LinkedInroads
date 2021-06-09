import PieContainer from './PieContainer';
import EmployerProfileNav from './EmployerProfileNav';
import React from 'react';

const EmployerProfile = (props) => {
  return (
    <div className='EmployerProfile-Container'>
      <p> Employer Profile </p>
      <EmployerProfileNav />
      <PieContainer />
    </div>
  );
};

export default EmployerProfile;

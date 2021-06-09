import TextField from '@material-ui/core/TextField';
import EmployerProfile from './EmployerProfile';
import React from 'react';
const EmployerLogin = (props) => {
  return (
    <div>
      <div className='LoginComponent-Holder'>
        <TextField
          id='outlined-helperText'
          label='Username'
          // defaultValue='Default Value'
          // helperText='Some important text'
          variant='outlined'
        />
        <TextField
          id='outlined-password-input'
          label='Password'
          type='password'
          autoComplete='current-password'
          variant='outlined'
        />
        {/* onclick to send to the employer page */}
        <button>SUBMIT</button>
      </div>
      <div>
        {/* alter this when we have functionality to transition */}
        <EmployerProfile />
      </div>
    </div>
  );
};

export default EmployerLogin;

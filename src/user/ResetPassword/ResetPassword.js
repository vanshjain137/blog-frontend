import React, { useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import '../UserLogin/auth.css';

const ResetPassword = () => {
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email; // Get email from ForgotPassword page

  const handleReset = (e) => {
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_API_URL}/auth/user/reset-password`, { 
        email, 
        otp, 
        newPassword 
    })
    .then(res => {
      alert(res.data.msg);
      navigate('/login');
    })
    .catch(err => alert(err.response.data.msg));
  };

  return (
    <div className='auth-page-wrapper'>
      <div className='auth-container'>
        <div className='auth-header'>
          <h2>Verify Identity</h2>
          <p>Enter the code sent to {email}</p>
        </div>
        <form onSubmit={handleReset}>
          <div className='input-group'>
            <label>6-Digit OTP</label>
            <input className='auth-input' type="text" placeholder="123456" onChange={(e) => setOtp(e.target.value)} required />
          </div>

          <div className='input-group'>
            <label>New Password</label>
            <div className='password-field-wrapper'>
              <input 
                className='auth-input' 
                type={showPassword ? "text" : "password"} 
                placeholder="••••••••" 
                onChange={(e) => setNewPassword(e.target.value)} 
                required 
              />
              <button type="button" className='eye-btn' onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
              </button>
            </div>
          </div>
          <button type="submit" className='auth-btn'>Update Password</button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
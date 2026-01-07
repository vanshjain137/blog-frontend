import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import '../UserLogin/auth.css';

const UserSignup = () => {
  const [step, setStep] = useState(1); // 1: Details, 2: OTP
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const sendOtp = (e) => {
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_API_URL}/auth/user/signup-otp`, { email })
      .then(res => {
        alert(res.data.msg);
        setStep(2); // Move to OTP step
      })
      .catch(err => alert(err.response.data.msg));
  };

  const handleFinalSignup = (e) => {
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_API_URL}/auth/user/signup`, { fullName, email, password, otp })
      .then(() => {
        alert("Account verified and created!");
        navigate('/login');
      })
      .catch(err => alert(err.response.data.msg));
  };

  return (
    <div className='auth-page-wrapper'>
      <div className='auth-container'>
        <div className='auth-header'>
          <h2>{step === 1 ? "Create Account" : "Verify Email"}</h2>
          <p>{step === 1 ? "Join our community today" : `Enter the code sent to ${email}`}</p>
        </div>
        
        {step === 1 ? (
          <form onSubmit={sendOtp}>
            <div className='input-group'>
              <label>Full Name</label>
              <input className='auth-input' type="text" onChange={(e) => setFullName(e.target.value)} required />
            </div>
            <div className='input-group'>
              <label>Email</label>
              <input className='auth-input' type="email" onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className='input-group'>
              <label>Password</label>
              <div className='password-field-wrapper'>
                <input className='auth-input' type={showPassword ? "text" : "password"} onChange={(e) => setPassword(e.target.value)} required />
                <button type="button" className='eye-btn' onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                </button>
              </div>
            </div>
            <button type="submit" className='auth-btn'>Send Verification Code</button>
          </form>
        ) : (
          <form onSubmit={handleFinalSignup}>
            <div className='input-group'>
              <label>Enter 6-Digit OTP</label>
              <input className='auth-input' type="text" placeholder="123456" onChange={(e) => setOtp(e.target.value)} required />
            </div>
            <button type="submit" className='auth-btn'>Verify & Sign Up</button>
            <button type="button" onClick={() => setStep(1)} className='auth-link' style={{background:'none', border:'none', marginTop:'10px', cursor:'pointer'}}>
              Edit Details
            </button>
          </form>
        )}

        <div className='auth-switch'>
          Already have an account? <Link to="/login" className='auth-link'>Login</Link>
        </div>
      </div>
    </div>
  );
};

export default UserSignup;
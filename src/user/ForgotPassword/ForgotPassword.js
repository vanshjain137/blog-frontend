import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../UserLogin/auth.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleVerifyEmail = (e) => {
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_API_URL}/auth/user/forgot-password`, { email })
      .then(res => {
        alert(res.data.msg);
        navigate('/reset-password', { state: { userId: res.data.userId } });
      })
      .catch(err => alert(err.response.data.msg));
  };

  return (
    <div className='auth-page-wrapper'>
      <div className='auth-container'>
        <div className='auth-header'>
          <h2>Forgot Password</h2>
          <p>Enter your email to find your account.</p>
        </div>
        <form onSubmit={handleVerifyEmail}>
          <div className='input-group'>
            <label>Email Address</label>
            <input className='auth-input' type="email" placeholder="example@gmail.com" onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <button type="submit" className='auth-btn'>Verify Email</button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
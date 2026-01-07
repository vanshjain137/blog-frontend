import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import '../UserLogin/auth.css';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_API_URL}/auth/user/login`, { email, password })
      .then(res => {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('fullName', res.data.fullName);
        localStorage.setItem('email', res.data.email);
        navigate('/home');
        window.location.reload();
      })
      .catch(() => alert('Invalid credentials'));
  };

  return (
    <div className='auth-page-wrapper'>
      <div className='auth-container'>
        <div className='auth-header'>
          <h2>Welcome Back</h2>
          <p>Login to manage your account</p>
        </div>

        <form onSubmit={handleLogin}>
          <div className='input-group'>
            <label>Email Address</label>
            <input className='auth-input' type="email" placeholder="example@mail.com" onChange={(e) => setEmail(e.target.value)} required />
          </div>

          <div className='input-group'>
            <label>Password</label>
            <div className='password-field-wrapper'>
              <input
                className='auth-input'
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="button" className='eye-btn' onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
              </button>
            </div>
            <div style={{ textAlign: 'right', marginTop: '5px' }}>
              <Link to="/forgot-password" style={{ fontSize: '0.8rem', color: '#007bff' }}>Forgot Password?</Link>
            </div>
          </div>

          <button type="submit" className='auth-btn'>Sign In</button>
        </form>

        <div className='auth-switch'>
          New here? <Link to="/signup" className='auth-link'>Create account</Link>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
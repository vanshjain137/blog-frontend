import React, { useState } from 'react'
import '../Login/login.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

const Login = () => {
    
    const [userName,setUserName] = useState('');
    const [password,setPassword] = useState('');
    const [isLoading, setLoading] = useState(false);

    const navigate = useNavigate()

    const submitHandler = (event) => {
        event.preventDefault();
        setLoading(true);
        console.log(userName,password);
        axios.post(`${process.env.REACT_APP_API_URL}/auth/admin/login`,{
            userName:userName,
            password:password
        })
        .then(res=>{
            setLoading(false);
            console.log(res.data)
            localStorage.setItem('email',res.data.email);
            localStorage.setItem('fullName',res.data.fullName);
            localStorage.setItem('token',res.data.token);
            navigate('/admin/Dashboard');
        })
        .catch(err=>{
            console.log(err)
        })
    }

    return (
        <div className='loginContainer'>
            <form onSubmit={submitHandler} className='loginBox'>
                <h1 align="center">Blog App</h1>
                <input onChange={(e)=>{setUserName(e.target.value)}} placeholder='username' />
                <input onChange={(e)=>{setPassword(e.target.value)}} type='password' placeholder='password' />
                <button className='submitBtn'>{isLoading && <CircularProgress size={18} color="inherit" style={{marginRight:10}} />} <span>Submit</span></button>
            </form>
        </div>
    )
}

export default Login

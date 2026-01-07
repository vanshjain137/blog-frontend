import React from 'react'
import '../Dashboard/dashboard.css';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EditNoteIcon from '@mui/icons-material/EditNote';
import AddBoxIcon from '@mui/icons-material/AddBox';
import CategoryIcon from '@mui/icons-material/Category';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
// import LogoutIcon from '@mui/icons-material/Logout';
import CommentIcon from '@mui/icons-material/Comment';

const Dashboard = () => {

  const navigate = useNavigate();

  const logoutHandler = ()=>{
    localStorage.clear();
    navigate('/admin/login')
  }
  return (
    <div className='container'>
      <div className='sideNav'>
        <div className='logoContainer'>
          <img className='logo' src={require('../../assets/vanshpic.jpeg')} alt="logo" />
          <h1 className='logoHeading'>BLOG APP</h1>
          <button onClick={logoutHandler} style={{border:'none',padding:'5px',borderRadius:'5px'}}>Logout</button>
        </div>
        <Link to='/admin/dashboard' className='link'><DashboardIcon/><span style={{marginLeft:"8px"}}>Dashboard</span></Link>
        <Link to='/admin/dashboard/blog' className='link'><EditNoteIcon/><span style={{marginLeft:"8px"}}>Blog List</span></Link>
        <Link to='/admin/dashboard/add-blog' className='link'><AddBoxIcon/><span style={{marginLeft:"8px"}}>Add Blog</span></Link>
        <Link to='/admin/dashboard/category' className='link'><CategoryIcon/><span style={{marginLeft:"8px"}}>Category List</span></Link>
        <Link to='/admin/dashboard/add-category' className='link'><PlaylistAddIcon/><span style={{marginLeft:"8px"}}>Add Category</span></Link>
        <Link to='/admin/dashboard/comment' className='link'><CommentIcon/><span style={{marginLeft:"8px"}}>Comments</span></Link>
      </div>
      <div className='mainContent'>
        <Outlet/>
      </div>
    </div>
  )
}

export default Dashboard

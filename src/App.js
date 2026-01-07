import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AdminLayout from './admin/AdminLayout';
import Login from './admin/Login/Login';
import Dashboard from './admin/Dashboard/Dashboard';
import Home from './admin/Home/Home';
import BlogList from "./admin/BlogList/BlogList";
import AddNewBlog from './admin/AddBlog/AddNewBlog';
import CategoryList from './admin/CategoryList/CategoryList';
import AddCategory from './admin/AddCategory/AddCategory';
import CommentList from './admin/CommentList/CommentList';
import { isLogin } from './checkAuth';
import UserLayout from './user/UserLayout';
import UserHome from './user/UserHome/UserHome';
import About from './user/About/About';
import Contact from './user/Contact/Contact';
import Blog from './user/Blog/Blog';
import UserLogin from './user/UserLogin/UserLogin';
import BlogDetail from './user/BlogDetail/BlogDetail';
import UserSignup from './user/UserSignup/UserSignup';
import ForgotPassword from './user/ForgotPassword/ForgotPassword';
import ResetPassword from './user/ResetPassword/ResetPassword';

const router = createBrowserRouter([
  {
    path: '', element: <UserLayout />, children: [
      { path: '', element: <UserHome /> },
      { path: 'home', element: <UserHome /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'blog', element: <Blog /> },
      { path: 'blog-detail/:id', element: <BlogDetail /> },
      { path: 'login', element: <UserLogin /> },
      { path: 'signup', element: <UserSignup /> },
      { path: 'forgot-password', element: <ForgotPassword /> },
      { path: 'reset-password', element: <ResetPassword /> }
    ]
  },
  {
    path: 'admin', element: <AdminLayout />, children: [
      { path: 'login', element: <Login /> },
      {
        path: 'dashboard', loader: isLogin, element: <Dashboard />, children: [
          { path: '', element: <Home /> },
          { path: 'blog', element: <BlogList /> },
          { path: 'add-blog', element: <AddNewBlog key="add-blog" mode="add-blog" /> },
          { path: 'category', element: <CategoryList /> },
          { path: 'add-category', element: <AddCategory key="add" mode="add" /> },
          { path: 'comment', element: <CommentList /> },
          { path: 'edit-category', element: <AddCategory key="edit" mode="edit" /> },
          { path: 'edit-blog', element: <AddNewBlog key="edit-blog" mode="edit-blog" /> }
        ]
      }
    ]
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;

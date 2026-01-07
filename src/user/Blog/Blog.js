import React, { useEffect, useState } from 'react'
import '../Blog/blog.css'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'

const Blog = () => {
  const [category, setCategory] = useState([])
  const [blogs, setBlogs] = useState([])
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    getCategory();
    if (location.state && location.state.selectedCategory) {
      getBlogByCat(location.state.selectedCategory);
    } else {
      getBlog();
    }
  }, [location.state])

  const getCategory = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/category/latest-category/4`)
      .then(res => {
        console.log(res)
        setCategory(res.data.Category)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const getBlog = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/blog`)
      .then(res => {
        console.log(res)
        setBlogs(res.data.blog)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const getBlogByCat = (cat) => {
    axios.get(`${process.env.REACT_APP_API_URL}/blog/category/${cat}`)
      .then(res => {
        console.log('abc', res.data)
        setBlogs(res.data.blog)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div className='main-container'>

      <div className="mobile-category">
        <select onChange={(e) => {
          if (e.target.value === "all") {
            getBlog();
          } else {
            getBlogByCat(e.target.value);
          }
        }}>
          <option value="all">All Categories</option>
          {category.map(item => (
            <option key={item._id} value={item.name}>{item.name}</option>
          ))}
        </select>
      </div>

      <div className='b-container'>
        {blogs && blogs.length > 0 ? (
          blogs.map(data => (
            <div key={data._id} className='blog-box' onClick={() => { navigate('/blog-detail/' + data._id) }} style={{ cursor: 'pointer' }}>
              <img className='b-image' alt='blog' src={data.imageUrl} />
              <p className='b-category'>{data.category}</p>
              <h2 className='b-title'>{data.title}</h2>
            </div>
          ))
        ) : (
          <div className='no-blogs-ui'>
            <div className="no-blog-icon">🔍</div>
            <h2>No Blogs Found</h2>
            <p>We haven't posted any blogs in this category yet. Please check back later!</p>
            <button className='c-button' onClick={getBlog}>View All Blogs</button>
          </div>
        )}
      </div>

      <div className='c-container'>
        <h3>Category List</h3>
        <div className='categories'>
          <button className='c-button' onClick={getBlog}>All Categories</button>
          {category.map(data => (
            <div>
              <button onClick={() => { getBlogByCat(data.name) }} className='c-button'>{data.name}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog

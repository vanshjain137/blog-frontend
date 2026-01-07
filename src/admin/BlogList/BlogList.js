import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../CategoryList/category.css'
import { useNavigate } from 'react-router-dom';

const BlogList = () => {

  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getBlogs();
  }, [])

  const getBlogs = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/blog`)
      .then(res => {
        console.log(res.data.blog)
        setBlogs(res.data.blog.reverse())
      })
      .catch(err => {
        console.log(err)
      })
  }

  const deleteBlog = (id) => {
    if (window.confirm("Delete this blog ?")) {
      axios.delete(`${process.env.REACT_APP_API_URL}/blog/${id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem('token')
        }
      })
        .then(res => {
          console.log(res)
          getBlogs()
        })
        .catch(err => {
          console.log(err)
        })
    }
  }


  return (
    <div>
      {blogs && blogs.length > 0 ? (
        blogs.map((data) => (
          <div className='card' key={data._id}>
            <div style={{ width: '35%' }}>
              <p style={{ fontWeight: 'bold', color: '#333' }}>{data.title}</p>
            </div>
            <div style={{ width: '25%' }}>
              <img alt='blogs-img' className='cat-image' style={{ height: "100px" }} src={data.imageUrl} />
            </div>
            <div style={{ width: '20%' }}>
              <button onClick={() => { navigate('/admin/dashboard/edit-blog', { state: { myData: data } }) }} style={{ backgroundColor: 'rgb(30, 83, 176)' }} className='smBtn'>Edit</button>
            </div>
            <div style={{ width: '20%' }}>
              <button onClick={() => { deleteBlog(data._id) }} style={{ backgroundColor: 'red' }} className='smBtn'>Delete</button>
            </div>
          </div>
        ))) : (
        <tr>
          <td colSpan="4" style={{
            textAlign: 'center',
            padding: '40px',
            color: '#888',
            fontSize: '14px'
          }}>
            No blogs added yet.
          </td>
        </tr>

      )
      }
    </div>
  )
}

export default BlogList
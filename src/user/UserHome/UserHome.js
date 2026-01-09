import React, { useEffect, useState } from 'react'
import '../UserHome/userhome.css'
import axios from 'axios'
import Footer from '../Footer/Footer'
import { useNavigate } from 'react-router-dom'


const UserHome = () => {
  const [category, setCategory] = useState([])
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    Promise.all([getCategory(), getBlog()])
      .then(() => setLoading(false))
      .catch(err => {
        console.log(err)
        setLoading(false)
      });
  }, []);

  const getCategory = () => {
    return axios.get(`${process.env.REACT_APP_API_URL}/category/latest-category/4`)
      .then(res => {
        console.log(res)
        setCategory(res.data.Category)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const getBlog = () => {
    return axios.get(`${process.env.REACT_APP_API_URL}/blog/latest-post/4`)
      .then(res => {
        console.log(res)
        setBlogs(res.data.Blog)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div>
      {/*----------banner-----------*/}
      <div className='banner'>
        <div style={{ width: '50%' }}>
          <img className='developer-img' alt='developer' src={require('../../assets/developer.webp')} />
        </div>
        <div style={{ width: '50%' }}>
          <p className='welcome'>Welcome to </p>
          <h1 className='blog-heading'>Vansh Blog</h1>
        </div>
      </div>

      {/*----------top category-----------*/}
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
          <h2 className="loader-text">Waking up the server...</h2>
          <p className="loader-subtext">This might take a moment on the first load.</p>
        </div>
      ) : (
        <>
          <h1 className='heading'>Latest Category</h1>
          <div className='category-container'>
            {category.map(data => (
              <div key={data._id} onClick={() => navigate('/blog', { state: { selectedCategory: data.name } })} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <img className='category-image' alt={data.name} src={data.imageUrl} />
                <p className='category-title'>{data.name}</p>
              </div>
            ))}
          </div>

          {/*----------latest post-----------*/}
          <h1 className='heading'>Latest Blog</h1>
          <div className='blog-container'>
            {blogs.map(data => (
              <div key={data._id} className='blog' onClick={() => navigate('/blog-detail/' + data._id)} style={{ cursor: 'pointer' }}>
                <img className='blog-image' alt={data.title} src={data.imageUrl} />
                <p className='blog-category'>{data.category}</p>
                <h2 className='blog-title'>{data.title}</h2>
              </div>
            ))}
          </div>
        </>
      )}
      <Footer />
    </div>
  )
}

export default UserHome

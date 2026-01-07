import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../CategoryList/category.css'
import { useNavigate } from 'react-router-dom';

const CategoryList = () => {

  const [category, setCategory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getCategory();
  }, [])

  const getCategory = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/category`)
      .then(res => {
        console.log(res.data.category)
        setCategory(res.data.category)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const deleteCategory = (id) => {
    if (window.confirm("Delete this category ?")) {
      axios.delete(`${process.env.REACT_APP_API_URL}/category/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
        .then(res => {
          console.log(res)
          getCategory()
        })
        .catch(err => {
          console.log(err)
        })
    }
  }


  return (
    <div>
      {category.map(data => (
        <div className='card' key={data._id}>
          <div style={{ width: '25%' }}>
            <p>{data.name}</p>
          </div>
          <div style={{ width: '25%' }}>
            <img className='cat-image' style={{ height: "100px" }} src={data.imageUrl} alt='category' />
          </div>
          <div style={{ width: '25%' }}>
            <button onClick={() => { navigate('/admin/dashboard/edit-category', { state: { myData: data } }) }} style={{ backgroundColor: 'rgb(30, 83, 176)' }} className='smBtn'>Edit</button>
          </div>
          <div style={{ width: '25%' }}>
            <button onClick={() => { deleteCategory(data._id) }} style={{ backgroundColor: 'red' }} className='smBtn'>Delete</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CategoryList

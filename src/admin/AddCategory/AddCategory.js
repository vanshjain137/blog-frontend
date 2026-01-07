import React, { useEffect, useState } from 'react'
import '../AddCategory/addCategory.css';
import { uploadImageToCloudinary } from '../../cloudinaryConfig.js';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const AddCategory = () => {
  const [categoryName, setCategoryName] = useState('')
  const [file, setFile] = useState(null)
  const [imageUrl, setImageUrl] = useState(null)

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log(location.state)
    if (location.state != null) {
      setCategoryName(location.state.myData.name);
      setImageUrl(location.state.myData.imageUrl);
    }
  }, [location.state])

  const fileHandler = (e) => {
    setFile(e.target.files[0])
    setImageUrl(URL.createObjectURL(e.target.files[0]))
  }

  const submitHandler = async (event) => {

    event.preventDefault();

    if (location.state == null) {
      console.log(categoryName, file)
      const uploadResult = await uploadImageToCloudinary(file);
      const uploadedImageUrl = uploadResult.secure_url;
      const uploadedPublicId = uploadResult.public_id;
      console.log(uploadedImageUrl)

      axios.post(`${process.env.REACT_APP_API_URL}/category`, {
        name: categoryName,
        imageUrl: uploadedImageUrl,
        publicId: uploadedPublicId
      }, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem('token')
        }
      })
        .then(res => {
          console.log(res.data)
          navigate('/admin/Dashboard/category');
        })
        .catch(err => {
          console.log(err)
        })
    }
    else {
      if (file == null) {
        axios.put(`${process.env.REACT_APP_API_URL}/category/${location.state.myData._id}`, {
          name: categoryName,
          imageUrl: location.state.myData.imageUrl,
          publicId: location.state.myData.publicId
        }, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
          .then(res => {
            console.log(res.data)
            navigate('/admin/Dashboard/category');
          })
          .catch(err => {
            console.log(err)
          })
      }
      else {
        console.log(categoryName, file)
        const uploadResult = await uploadImageToCloudinary(file);
        const uploadedImageUrl = uploadResult.secure_url;
        const uploadedPublicId = uploadResult.public_id;
        console.log(uploadedImageUrl)

        axios.put(`${process.env.REACT_APP_API_URL}/category/${location.state.myData._id}`, {
          name: categoryName,
          imageUrl: uploadedImageUrl,
          publicId: uploadedPublicId
        }, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
          .then(res => {
            console.log(res.data)
            navigate('/admin/Dashboard/category');
          })
          .catch(err => {
            console.log(err)
          })
      }
    }

  }

  return (
    <div className='cat-container'>
      <p>add category</p>
      <form onSubmit={submitHandler} className='cat-form'>
        <input value={categoryName} onChange={(e) => { setCategoryName(e.target.value) }} type="text" placeholder='Category Name' />
        <input onChange={(e) => { fileHandler(e) }} type="file" />
        {imageUrl != null && <img alt='category' style={{ height: '100px' }} src={imageUrl} />}
        <button className='submit-btn' type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default AddCategory

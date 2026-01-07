import React, { useEffect, useState } from 'react'
import '../AddCategory/addCategory.css';
import { uploadImageToCloudinary } from '../../cloudinaryConfig.js';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import 'react-quill-new/dist/quill.snow.css';
import ReactQuill from 'react-quill-new';

const AddNewBlog = () => {
  const [blogName, setBlogName] = useState('')
  const [categoryName, setCategoryName] = useState('')
  const [blog, setBlog] = useState('')
  const [file, setFile] = useState(null)
  const [imageUrl, setImageUrl] = useState(null)
  const [categoryList, setCategoryList] = useState([])

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    getCategory();
    console.log(location.state)
    if (location.state != null) {
      setCategoryName(location.state.myData.category);
      setBlog(location.state.myData.description);
      setImageUrl(location.state.myData.imageUrl);
      setBlogName(location.state.myData.title);
    }
  }, [location.state])

  const getCategory = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/category`)
      .then(res => {
        console.log(res.data.category)
        setCategoryList(res.data.category)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const fileHandler = (e) => {
    setFile(e.target.files[0])
    setImageUrl(URL.createObjectURL(e.target.files[0]))
  }

  const handleBlog = (content,delta,source,editor)=>{
    console.log(content)
    setBlog(content)
  }

  const submitHandler = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem('token');
    const headers = { Authorization: "Bearer " + token };

    try {
      if (location.state == null) {
        const uploadResult = await uploadImageToCloudinary(file);
        const uploadedImageUrl = uploadResult.secure_url;

        await axios.post(`${process.env.REACT_APP_API_URL}/blog`, {
          title: blogName,
          category: categoryName,
          description: blog,
          imageUrl: uploadedImageUrl
        }, { headers: headers });
        
        navigate('/admin/Dashboard/blog');
      } 
      else {
        let finalImageUrl = location.state.myData.imageUrl;

        if (file != null) {
            const uploadResult = await uploadImageToCloudinary(file);
            finalImageUrl = uploadResult.secure_url;
        }

        await axios.put(`${process.env.REACT_APP_API_URL}/blog/${location.state.myData._id}`, {
          title: blogName,
          category: categoryName,
          description: blog,
          imageUrl: finalImageUrl
        }, { headers: headers });

        navigate('/admin/Dashboard/blog');
      }
    } catch (err) {
      console.log(err);
      alert("Something went wrong with the blog submission.");
    }
  }

  return (
    <div style={{height:'100vh',overflow:'scroll',padding:'20px'}}>
      <p>Add New Blog</p>
      <form onSubmit={submitHandler}>
        <input value={blogName} onChange={(e) => { setBlogName(e.target.value) }} type="text" placeholder='Blog Title' />
        <ReactQuill style={{marginTop:'10px',height:'500px',backgroundColor:'white'}}
        value={blog}
        onChange={handleBlog}
        />
        <select onChange={(e)=>{setCategoryName(e.target.value)}} value={categoryName} style={{width:'100%',height:'40px',marginTop:'50px',border:'none',borderRadius:'10px',padding:'10px'}}>
          <option>Select Category</option>
          {categoryList.map(data=>(
            <option key={data._id} value={data.name}>{data.name}</option>
          ))}
        </select>
        <input onChange={(e) => { fileHandler(e) }} type="file" />
        {imageUrl != null && <img alt='category' style={{ height: '100px' }} src={imageUrl} />}
        <button className='submit-btn' type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default AddNewBlog

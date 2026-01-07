import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../CommentList/comment.css'

const CommentList = () => {

  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComment();
  }, [])

  const getComment = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/comment`)
      .then(res => {
        console.log(res.data.comments)
        setComments(res.data.comments)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const deleteComment = (id) => {
    if (window.confirm("Delete this comment ?")) {
      axios.delete(`${process.env.REACT_APP_API_URL}/comment/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
        .then(res => {
          console.log(res)
          getComment()
        })
        .catch(err => {
          console.log(err)
        })
    }
  }


  return (
    <div className='comment-container'>
      {comments.map(data => (
        <div className='comment-card' key={data._id}>
          <div style={{ width: '25%' }}>
            <div style={{ width: '250px', height: '80px', alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}>
              <p style={{ width: '200px' }}>{data.email}</p>
              <button onClick={() => { deleteComment(data._id) }} style={{ border: 'none', padding: '5px', backgroundColor: 'red', color: 'white', borderRadius: '5px', cursor: 'pointer' }}>Delete</button>
            </div>
            <p style={{ width: '200px' }}>{data.commentText}</p>
            <p style={{ width: '200px' }}>{data.timestamp}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CommentList
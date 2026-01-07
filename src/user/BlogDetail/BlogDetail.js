import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import DOMPurify from 'dompurify';
import './blogdetail.css';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [comments, setComments] = useState([]);
  // Get email from localStorage instead of making user type it
  const [commentText, setCommentText] = useState('');
  const [showAll, setShowAll] = useState(false);

  const fetchComments = useCallback(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/comment/${id}`)
      .then(res => {
        const sorted = res.data.comments.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        setComments(sorted);
      })
      .catch(err => console.log(err));
  }, [id]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/blog/${id}`)
      .then(res => {
        const data = Array.isArray(res.data.blog) ? res.data.blog[0] : res.data.blog;
        setBlog(data);
      })
      .catch(err => {
        console.log("Error fetching blog:", err);
      });

    fetchComments();
  }, [id, fetchComments]);

  const handleDeleteComment = (commentId) => {
    if (window.confirm("Are you sure you want to delete this comment?")) {
      const token = localStorage.getItem('token');
      
      axios.delete(`${process.env.REACT_APP_API_URL}/comment/${commentId}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(() => {
        alert("Comment deleted!");
        setComments(comments.filter(c => c._id !== commentId));
      })
      .catch(err => {
        alert(err.response?.data?.message || "Error deleting comment");
      });
    }
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const userEmail = localStorage.getItem('email');

    if (!token) {
      alert("Please login to comment");
      return;
    }

    axios.post(`${process.env.REACT_APP_API_URL}/comment`, {
      email: userEmail,
      commentText,
      blogId: id
    }, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(() => {
      setCommentText('');
      fetchComments(); 
    })
    .catch(err => alert(err.response?.data?.message || "Failed to post comment"));
  };

  if (!blog) return <div className='loading-msg'>Loading...</div>;

  const displayedComments = showAll ? comments : comments.slice(0, 3);

  return (
    <div className='detail-main-container'>
      <article className='full-blog-content'>
        <img className='detail-image' src={blog.imageUrl} alt={blog.title} />
        <h1 className='detail-title'>{blog.title}</h1>
        <div className='detail-body' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(blog.description) }} />
      </article>
      <hr />

      <section className='comment-section'>
        <h3>Comments ({comments.length})</h3>

        {/* Comment List */}
        <div className='comment-list'>
          {displayedComments.map(c => (
            <div key={c._id} className='comment-item-box'>
              <div className='comment-header'>
                <span className='c-user'>{c.email}</span>
                <span className='c-timestamp'>
                   {new Date(c.timestamp).toLocaleDateString()} {new Date(c.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
              <p className='c-message'>{c.commentText}</p>
              {(localStorage.getItem('email') === c.email|| localStorage.getItem('userType') === 'admin') &&(
                <button
                  className="delete-comment-btn"
                  onClick={() => handleDeleteComment(c._id)}
                >
                  Delete
                </button>
              )}
            </div>
          ))}
        </div>

        {/* More/Less Button Logic */}
        {comments.length > 3 && (
          <button className='toggle-comments-btn' onClick={() => setShowAll(!showAll)}>
            {showAll ? 'Show Less' : `Show More (${comments.length - 3} more)`}
          </button>
        )}

        <br/>
        <br/>

        <h3>Add Comment</h3>

        {/* Comment Form */}
        <form onSubmit={handleCommentSubmit} className='comment-form'>
          
          <textarea 
            placeholder="Add to the conversation..." 
            value={commentText} 
            onChange={(e) => setCommentText(e.target.value)} 
            required 
          />
          <button type="submit" className='submit-btn'>Post Comment</button>
        </form>

      </section>
    </div>
  );
}

export default BlogDetail;
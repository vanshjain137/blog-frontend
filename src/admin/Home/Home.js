import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
  return (
    <div className="dashboard-home-container">
      {/* Top Welcome Section */}
      <div className="welcome-banner">
        <div className="banner-text">
          <h1>Welcome to Your Dashboard! 👋</h1>
          <p>You have full control over your blogs and categories here.</p>
        </div>
      </div>

      {/* Clickable Stats Grid */}
      <div className="stats-grid">
        <Link to="/admin/dashboard/blog" className="stat-card-link">
          <div className="stat-card">
            <div className="stat-icon-wrapper blog-icon">📝</div>
            <div className="stat-info">
              <h3>Manage Blogs</h3>
              <p>Edit or delete existing posts</p>
              <span className="card-action">View All →</span>
            </div>
          </div>
        </Link>

        <Link to="/admin/dashboard/category" className="stat-card-link">
          <div className="stat-card">
            <div className="stat-icon-wrapper category-icon">📂</div>
            <div className="stat-info">
              <h3>Categories</h3>
              <p>Organize your blog topics</p>
              <span className="card-action">Manage →</span>
            </div>
          </div>
        </Link>

        <Link to="/admin/dashboard/add-blog" className="stat-card-link">
          <div className="stat-card">
            <div className="stat-icon-wrapper add-icon">➕</div>
            <div className="stat-info">
              <h3>Quick Post</h3>
              <p>Share a new story today</p>
              <span className="card-action">Create Now →</span>
            </div>
          </div>
        </Link>
      </div>

      <div className="admin-notice">
        <h3>💡 Pro Tips for your Portfolio</h3>
        <ul>
          <li>Use <strong>Cloudinary</strong> to optimize your images for faster loading.</li>
          <li>Write clear <strong>meta descriptions</strong> to improve your blog's SEO.</li>
          <li>Always preview your blog post before hitting the submit button.</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
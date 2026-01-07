# 📝 Modern MERN Blog Application (Frontend)

A feature-rich, responsive Blog Application built with **React.js**. This project features a clean user interface for readers and a robust administrative dashboard for content management.

## 🚀 Key Features

### User Side
* **Dynamic Content:** Browse blogs by latest posts or specific categories.
* **Secure Authentication:** User signup/login system with **OTP verification** and **Password Reset** functionality.
* **Interactive Comments:** Registered users can post comments and manage their own activity.
* **Rich Text Rendering:** Beautifully rendered blog posts with support for images and formatting.

### Admin Side
* **Content Management:** Full CRUD (Create, Read, Update, Delete) for Blogs and Categories.
* **Security:** Protected dashboard routes with token-based authentication (JWT).
* **Image Handling:** Integrated with **Cloudinary** for high-performance image uploads and storage.
* **Rich Text Editor:** Integrated **ReactQuill** for professional content creation.

## 🛡️ Security & Best Practices
* **XSS Protection:** Implemented `DOMPurify` to sanitize HTML content before rendering, preventing Cross-Site Scripting attacks.
* **Environment Variables:** Sensitive data (API Keys, Cloudinary config) is managed through `.env` files for security.
* **Clean Code:** Zero ESLint warnings and fully accessible JSX (A11y compliant).

## 🛠️ Tech Stack
* **Frontend:** React.js, React Router v6
* **Styling:** Custom CSS3
* **State & Data:** Axios, React Hooks (useState, useEffect, useCallback)
* **Images:** Cloudinary API
* **Security:** DOMPurify

## ⚙️ Installation & Setup

1. **Clone the repository:**

   ```bash
   git clone <your-repository-link>
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure Environment Variables:** Create a file named `.env` in the root directory and add your credentials:


   ```env
   REACT_APP_CLOUD_NAME=dahb0xfsm
   REACT_APP_UPLOAD_PRESET=react_blog_upload
   REACT_APP_API_URL=http://localhost:3000
   ```

4. **Start the development server:**

   ```bash
   npm start
   ```

## 📦 Production Build

To create an optimized production build:

   ```bash
   npm run build
   ```

---

Developed by **Vansh Jain**
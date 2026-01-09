# 📝 Modern MERN Blog Application (Frontend)

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/vansh-jain-b955a23a1/)

A feature-rich, responsive Blog Application built with **React.js**. This project features a clean user interface for readers and a robust administrative dashboard for content management.

## 🔗 Project Links
* **Live Demo:** [https://vansh-blog-app.vercel.app/](https://vansh-blog-app.vercel.app/)
* **Backend Repository:** [View Backend Repository](https://github.com/vanshjain137/blog-backend)
* **Full Stack Architecture:** This repository contains the Frontend code. The Node.js/Express backend is managed in a separate repository to maintain clean architectural boundaries.

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
   REACT_APP_CLOUD_NAME="your cloud name"
   REACT_APP_UPLOAD_PRESET="your upload preset"
   REACT_APP_API_URL="hosting url"
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

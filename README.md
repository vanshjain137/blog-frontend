# 📝 Modern MERN Blog Application (Frontend)

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/vanshjain137)
[![Live Demo](https://img.shields.io/badge/Live_Demo-View_Website-blue?style=for-the-badge)](https://vansh-blog-app.vercel.app/)

> **⚠ NOTE: This is the Frontend repository.** 
> The backend architecture for this application was built completely from scratch without relying on BaaS (like Firebase). It features custom OTP-based authentication, secure password recovery, and Cloudinary media integration. 
> 
> 🔗 **[View the Backend Repository Here](https://github.com/vanshjain137/blog-backend)**

A feature-rich, responsive Blog Application built with **React.js**. This project features a clean user interface for readers and a robust administrative dashboard for content management.

## 🔗 Project Links
* **Live Demo:** [https://vansh-blog-app.vercel.app/](https://vansh-blog-app.vercel.app/)
* **Backend Repository:** [View Backend Repository](https://github.com/vanshjain137/blog-backend)
* **Full Stack Architecture:** This repository contains the Frontend code. The Node.js/Express backend is managed in a separate repository to maintain clean architectural boundaries.

## 🚀 Key Features

### User Side
* **Dynamic Content:** Browse blogs by latest posts or specific categories.
* **Secure Authentication:** User signup/login system with **OTP verification**, **Google reCAPTCHA v2** protection, and **Password Reset** functionality.
* **Interactive Comments:** Registered users can post comments and manage their own activity.
* **Rich Text Rendering:** Beautifully rendered blog posts with support for images and formatting.

### Admin Side
* **Content Management:** Full CRUD (Create, Read, Update, Delete) for Blogs and Categories.
* **Security:** Protected dashboard routes with token-based authentication (JWT).
* **Image Handling:** Integrated with **Cloudinary** for high-performance image uploads and storage.
* **Rich Text Editor:** Integrated **ReactQuill** for professional content creation.

## 🛡️ Security & Best Practices
* **Bot Protection:** Integrated **Google reCAPTCHA v2** on login and signup flows to prevent automated attacks.
* **XSS Protection:** Implemented `DOMPurify` to sanitize HTML content before rendering, preventing Cross-Site Scripting attacks.
* **Environment Variables:** Sensitive data (API Keys, Cloudinary config) is managed through `.env` files for security.
* **Clean Code:** Zero ESLint warnings and fully accessible JSX (A11y compliant).

## 🛠️ Tech Stack
* **Frontend:** React.js, React Router v6
* **Styling:** Custom CSS3
* **State & Data:** Axios, React Hooks (useState, useEffect, useCallback)
* **Images:** Cloudinary API
* **Security & Auth:** Google reCAPTCHA, JWT, DOMPurify

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
   REACT_APP_RECAPTCHA_SITE_KEY="your_google_recaptcha_site_key"
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

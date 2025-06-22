# Authentication System 🔒

A complete **MERN Stack Authentication System** that supports **User Registration, Login, Logout, and Protected Routes** with JWT.

This project was built with ❤️ by **Vansh**.

## 🚀 Features
- User Signup
- User Login
- Password Encryption using **bcrypt**
- JWT Authentication
- Protected Routes
- Frontend & Backend fully connected
- Responsive and modern UI with **React Toastify** notifications

---

## 🛠️ Tech Stack
- **MongoDB** (Database)
- **Express.js** (Backend Server)
- **React.js** (Frontend)
- **Node.js** (Runtime Environment)
- **JWT** (Authentication)
- **bcrypt** (Password Hashing)

---

## 📂 Project Structure
```plaintext
authentication-system/
│
├── backend/
│   ├── Models/
│   ├── Routes/
│   ├── Controllers/
│   ├── Middlewares/
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
└── README.md
⚙️ Setup Instructions
Backend
cd backend
npm install
npm start
Make sure to configure your .env:

env:--
Copy
Edit
MONGO_CONN=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
PORT=8080

Frontend
cd frontend
npm install
npm start

# WorkIndia Project

## 📌 Overview

This is a React-based authentication system that includes login functionality, token-based authentication, and routing using React Router.

## 🚀 Features

- User login with authentication
- Token-based session management
- Protected routes for authenticated users
- React Router for navigation

## 🛠️ Tech Stack

- React.js
- React Router
- React Hooks
- Fetch API (for backend calls)

---

## 📥 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/react-auth-app.git
   cd react-auth-app
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Start the development server**
   ```bash
   npm start
   ```

---

## 🔧 Configuration

### Backend API URL

Ensure your backend is running on `http://localhost:3000`. If needed, update API endpoints inside the `Login.js` file:

```js
fetch('http://localhost:3000/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(credentials)
})
```

---

## 🖥️ Usage

1. Open `http://localhost:3000` in your browser.
2. Enter valid credentials to log in.
3. Upon successful login, the app stores the token and redirects to a protected route.

---

## 🐞 Debugging Issues

### 1️⃣ White Screen (Blank Page)?

- Open Developer Tools (`F12` in Chrome) → Go to **Console** tab → Check for errors.
- Ensure all imports in `App.js`, `Login.js`, and other components are correct.
- Check that `react-router-dom` is installed:
  ```bash
  npm list react-router-dom
  ```
  If missing, install it:
  ```bash
  npm install react-router-dom
  ```

### 2️⃣ API Not Working?

- Ensure the backend is running (`http://localhost:3000`).
- Check Network tab (`F12` → Network) for failed requests.
- If using CORS, ensure the backend allows cross-origin requests.

### 3️⃣ React StrictMode Issues?

- Try removing `<React.StrictMode>` from `index.js`:
  ```jsx
  root.render(<App />);
  ```
- Restart the server:
  ```bash
  npm start
  ```
### 4 SQL?
You need to create a .env file in the root of your project with the following environment variables:

PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=irctc_db
JWT_SECRET=your_jwt_secret
API_KEY=your_admin_api_key


database = 

CREATE DATABASE irctc_db;
USE irctc_db;

CREATE TABLE users (
   id INT AUTO_INCREMENT PRIMARY KEY,
   name VARCHAR(255) NOT NULL,
   email VARCHAR(255) UNIQUE NOT NULL,
   password VARCHAR(255) NOT NULL,
   role ENUM('user', 'admin') DEFAULT 'user',
   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE trains (
   id INT AUTO_INCREMENT PRIMARY KEY,
   train_number VARCHAR(50) NOT NULL,
   source VARCHAR(255) NOT NULL,
   destination VARCHAR(255) NOT NULL,
   total_seats INT NOT NULL,
   available_seats INT NOT NULL,
   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE bookings (
   id INT AUTO_INCREMENT PRIMARY KEY,
   user_id INT,
   train_id INT,
   seats INT NOT NULL,
   FOREIGN KEY (user_id) REFERENCES users(id),
   FOREIGN KEY (train_id) REFERENCES trains(id)
);
---

## 📜 License

This project is licensed under the MIT License.



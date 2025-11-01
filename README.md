<div align="center"
  <h1>💰 MERN Expense Tracker</h1>
  <p>
    A full-stack personal expense tracking application built with the MERN stack (MongoDB, Express, React, Node.js).
  </p>
 
</div>

This project is a complete expense tracking application that allows users to register, log in, and manage their financial transactions. It features a React-based frontend and a robust Node.js/Express backend API that communicates with a MongoDB database.

## 📋 Table of Contents

*   [Features](#-features)
*   [Tech Stack](#-tech-stack)
*   [Project Structure](#-project-structure)
*   [Getting Started](#-getting-started)
    *   [Prerequisites](#prerequisites)
    *   [Installation & Setup](#-installation--setup)
*   [API Endpoints](#-api-endpoints)

## ✨ Features

*   **User Authentication:** Secure user registration and login using JSON Web Tokens (JWT).
*   **Transaction Management:** Full CRUD (Create, Read, Update, Delete) functionality for income and expense transactions.
*   **Category Management:** Users can create, view, update, and delete custom categories to organize their transactions.
*   **RESTful Backend API:** A clean, well-structured API for handling all data operations.
*   **Responsive Frontend:** A user-friendly interface built with React.

## 🛠️ Tech Stack

This project is built with the MERN stack and other modern technologies.

### Frontend
<p>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
</p>

### Backend
<p>
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js">
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB">
  <img src="https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white" alt="Mongoose">
  <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" alt="JWT">
</p>

## 📁 Project Structure

The repository is organized into two main directories: `frontend` and `backend`.

```
mern-expensetracker/
├── backend/
│   ├── controllers/      # Business logic for handling requests
│   ├── middlewares/      # Custom middleware (auth, error handling)
│   ├── models/           # Mongoose schemas and data models
│   ├── routes/           # API route definitions
│   ├── .env              # Environment variables for the backend
│   ├── app.js            # Express application entry point
│   ├── db.js             # Database connection logic
│   └── package.json
│
└── frontend/
    ├── public/           # Public assets and index.html
    ├── src/
    │   ├── components/   # Reusable React components
    │   ├── pages/        # Page components (e.g., Login, Dashboard)
    │   ├── App.js        # Main React app component
    │   └── index.js      # Frontend entry point
    └── package.json

```

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

Before you begin, ensure you have the following installed:

*   **Node.js:** v18 or newer recommended.
*   **npm:** Node Package Manager (comes with Node.js).
*   **MongoDB:** A running instance of MongoDB (local or a cloud service like MongoDB Atlas).

### 📦 Installation & Setup

1.  **Clone the Repository**

    ```sh
    git clone https://github.com/TejaNaik15/mern-expensetracker.git
    cd mern-expensetracker
    ```

2.  **Set Up the Backend**

    *   Navigate to the backend directory:
        ```sh
        cd backend
        ```
    *   Install backend dependencies:
        ```sh
        npm install
        ```
    *   Create a `.env` file in the `backend` directory and add your environment variables.
        ```env
        PORT=8000
        MONGO_URI=<your_mongodb_connection_string>
        JWT_SECRET=<your_super_secret_jwt_key>
        ```

3.  **Set Up the Frontend**

    *   Navigate to the frontend directory from the root folder:
        ```sh
        cd frontend
        ```
    *   Install frontend dependencies:
        ```sh
        npm install
        ```

4.  **Run the Application**

    You will need two separate terminal windows to run both the backend and frontend servers concurrently.

    *   **Terminal 1: Start the Backend Server**
        In the `backend` directory, run:
        ```sh
        npm start
        ```
        The API server will start on `http://localhost:8000` (or the port you specified in `.env`).

    *   **Terminal 2: Start the Frontend Development Server**
        In the `frontend` directory, run:
        ```sh
        npm start
        ```
        The React application will open in your browser at `http://localhost:3000`.

You should now have the full application running locally!

## 🔌 API Endpoints

The backend exposes the following RESTful API endpoints. All endpoints are prefixed with `/api/v1`.

> **Note:** Routes for categories and transactions are protected and require a valid JWT token in the `Authorization` header (`Bearer <token>`).

### Authentication (`/api/v1/users`)

*   `POST /register`: Register a new user.
    *   **Body:** `{ "fullname": "John Doe", "email": "john@example.com", "password": "password123" }`
*   `POST /login`: Authenticate a user and receive a JWT.
    *   **Body:** `{ "email": "john@example.com", "password": "password123" }`

### Categories (`/api/v1/categories`)

*   `POST /`: Create a new category. (Protected)
*   `GET /`: Get all categories created by the authenticated user. (Protected)
*   `GET /:id`: Get a single category by its ID. (Protected)
*   `PUT /:id`: Update a category's details. (Protected)
*   `DELETE /:id`: Delete a category. (Protected)

### Transactions (`/api/v1/transactions`)

*   `POST /`: Create a new transaction (income or expense). (Protected)
*   `GET /`: Get all transactions for the authenticated user. (Protected)
*   `GET /:id`: Get a single transaction by its ID. (Protected)
*   `PUT /:id`: Update a transaction's details. (Protected)
*   `DELETE /:id`: Delete a transaction. (Protected)

```

This README provides a complete picture of your project, making it much easier for new developers to get started.


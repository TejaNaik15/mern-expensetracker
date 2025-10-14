<div align="center">
  <h1>💰 ExpenseMate</h1>
  <p>
    A robust backend API for a personal expense tracking application, built with Node.js, Express, and MongoDB.
  </p>
  <p>
    <a href="https://github.com/TejaNaik15/mern-expensetracker/stargazers"><img src="https://img.shields.io/github/stars/TejaNaik15/mern-expensetracker?style=for-the-badge&logo=github&color=gold" alt="Stars"></a>
    <a href="https://github.com/TejaNaik15/mern-expensetracker/network/members"><img src="https://img.shields.io/github/forks/TejaNaik15/mern-expensetracker?style=for-the-badge&logo=github&color=blue" alt="Forks"></a>
    <a href="https://github.com/TejaNaik15/mern-expensetracker/issues"><img src="https://img.shields.io/github/issues/TejaNaik15/mern-expensetracker?style=for-the-badge&logo=github" alt="Issues"></a>
  </p>
</div>

This is the backend API for a personal expense tracking application. It provides endpoints for user authentication, managing financial transactions (income and expenses), and handling categories.

## 📋 Table of Contents

*   [Features](#-features)
*   [Tech Stack](#-tech-stack)
*   [Getting Started](#-getting-started)
    *   [Prerequisites](#prerequisites)
    *   [Installation & Setup](#-installation--setup)
*   [API Endpoints](#-api-endpoints)
*   [Project Structure](#-project-structure)

## ✨ Features

*   **User registration and login:** Secure user authentication using JSON Web Tokens (JWT) to manage user sessions.
*   **CRUD for Transactions:** Full Create, Read, Update, and Delete operations for financial transactions (income and expenses).
*   **CRUD for Categories:** Full Create, Read, Update, and Delete operations for organizing transactions into custom categories.
*   **RESTful API Design:** A clean, well-structured, and predictable API architecture.
*   **Error Handling:** Centralized error handling middleware for consistent and informative error responses.

## 🛠️ Tech Stack

<p>
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js">
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB">
  <img src="https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white" alt="Mongoose">
  <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" alt="JWT">
</p>

*   **[Node.js](https://nodejs.org/):** A JavaScript runtime environment to execute the server-side code.
*   **[Express.js](https://expressjs.com/):** A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
*   **[MongoDB](https://www.mongodb.com/):** A NoSQL, document-oriented database used to store user data, transactions, and categories.
*   **[Mongoose](https://mongoosejs.com/):** An Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.
*   **[JSON Web Tokens (JWT)](https://jwt.io/):** Used for creating access tokens for secure user authentication.
*   **[dotenv](https://www.npmjs.com/package/dotenv):** A zero-dependency module that loads environment variables from a `.env` file into `process.env`.
*   **cors:** A Node.js package for providing an Express middleware that enables Cross-Origin Resource Sharing (CORS).
*   **express-async-handler:** A simple middleware for handling exceptions inside of async Express routes and passing them to your Express error handlers.

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed on your system:

*   **Node.js:** Version 18 or newer is recommended. You can download it from nodejs.org.
*   **npm:** Node Package Manager, which comes bundled with Node.js.
*   **MongoDB:** A running instance of MongoDB. You can install it locally or use a cloud service like MongoDB Atlas for a free-tier cluster.

### 📦 Installation & Setup

1.  **Clone the Repository**

    ```sh
    git clone https://github.com/TejaNaik15/mern-expensetracker.git
    cd mern-expensetracker/backend
    ```

2.  **Install Dependencies**

    Run the following command to install all the necessary packages defined in `package.json`.

    ```sh
    npm install
    ```

3.  **Set Up Environment Variables**

    Create a new file named `.env` in the `backend` directory. This file will store your sensitive configuration details. Copy the contents of `.env.example` (if available) or use the template below.

    ```env
    PORT=8000
    MONGO_URI=<your_mongodb_connection_string>
    JWT_SECRET=<your_jwt_secret_key>
    ```
    *   `PORT`: The port on which the server will run (e.g., 8000).
    *   `MONGO_URI`: Your MongoDB connection string.
    *   `JWT_SECRET`: A secret key for signing JSON Web Tokens. You can generate a strong secret using an online generator.

4.  **Start the Server**

    Once the setup is complete, you can start the development server.

    ```sh
    npm start
    ```
    The server will start, and you should see a confirmation message in your console, typically:
    `Server is running on port 8000`

## 🔌 API Endpoints

All endpoints are prefixed with `/api/v1`. Routes for categories and transactions are protected and require a valid JWT token in the `Authorization` header (`Bearer <token>`).

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

## 📁 Project Structure

The project follows a standard and scalable structure to keep the codebase organized and maintainable.


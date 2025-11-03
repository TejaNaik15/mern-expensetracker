# 💰 MERN Expense Tracker (EXPENSE MATE)

<div align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js">
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB">
  <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" alt="JWT">
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
</div>

<p align="center">
  A full-stack personal expense tracking application built with the MERN stack featuring a stunning aurora-themed dark UI and comprehensive financial management capabilities.
</p>

## 🌟 Features

### 🔐 Authentication & Security
- **Secure User Registration & Login** with JWT authentication
- **Password Hashing** using bcryptjs for enhanced security
- **Protected Routes** with middleware authentication
- **Session Management** with 30-day token expiration

### 💸 Transaction Management
- **Full CRUD Operations** for income and expense transactions
- **Real-time Transaction Tracking** with instant updates
- **Category-based Organization** for better financial insights
- **Date-based Filtering** and transaction history

### 📊 Category Management
- **Custom Categories** creation and management
- **Income/Expense Classification** for organized tracking
- **Category-wise Analytics** for spending insights
- **Dynamic Category Assignment** to transactions

### 🎨 Modern UI/UX
- **Aurora-themed Dark Interface** with animated backgrounds
- **Responsive Design** optimized for all devices
- **Interactive 3D Elements** using React Three Fiber
- **Smooth Animations** with Framer Motion
- **Form Validation** with Formik and Yup

### 📈 Data Visualization
- **Interactive Charts** using Chart.js and React Chart.js 2
- **Financial Analytics** with visual spending patterns
- **Real-time Updates** with React Query
- **State Management** using Redux Toolkit

## 🛠️ Tech Stack

### Frontend
- **React 19** - Latest React with modern features
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Three Fiber** - 3D graphics and animations
- **Framer Motion** - Advanced animations and transitions
- **React Query** - Server state management
- **Redux Toolkit** - Global state management
- **React Router DOM** - Client-side routing
- **Formik & Yup** - Form handling and validation
- **Axios** - HTTP client for API requests
- **Chart.js** - Data visualization library

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database with Mongoose ODM
- **JWT** - JSON Web Token authentication
- **bcryptjs** - Password hashing library
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## 📁 Project Structure

```
mern-expense-tracker/
├── frontend/                 # React frontend application
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── components/      # Reusable React components
│   │   │   ├── Auth/        # Authentication components
│   │   │   ├── Category/    # Category management
│   │   │   ├── Transactions/# Transaction components
│   │   │   ├── Users/       # User-related components
│   │   │   ├── Navbar/      # Navigation components
│   │   │   └── ui/          # UI utility components
│   │   ├── services/        # API service functions
│   │   ├── redux/           # Redux store and slices
│   │   ├── utils/           # Utility functions
│   │   └── App.jsx          # Main application component
│   ├── package.json
│   └── vite.config.js       # Vite configuration
│
├── backend/                 # Node.js backend application
│   ├── controllers/         # Request handlers
│   ├── middlewares/         # Custom middleware functions
│   ├── model/              # Mongoose data models
│   ├── routes/             # API route definitions
│   ├── .env                # Environment variables
│   ├── app.js              # Express application setup
│   ├── db.js               # Database connection
│   └── package.json
│
└── README.md               # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or newer)
- **npm** or **yarn**
- **MongoDB Atlas** account or local MongoDB installation

### 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/TejaNaik15/mern-expensetracker.git
   cd mern-expensetracker
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```

3. **Environment Configuration**
   Create `.env` file in the backend directory:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_super_secret_jwt_key
   PORT=8000
   ```

4. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   ```

### 🏃‍♂️ Running the Application

1. **Start Backend Server**
   ```bash
   cd backend
   npm start
   # Server runs on http://localhost:8000
   ```

2. **Start Frontend Development Server**
   ```bash
   cd frontend
   npm run dev
   # Application opens at http://localhost:5173
   ```

## 🔌 API Endpoints

### Authentication
- `POST /api/v1/users/register` - User registration
- `POST /api/v1/users/login` - User authentication
- `GET /api/v1/users/profile` - Get user profile (Protected)
- `PUT /api/v1/users/update-profile` - Update user profile (Protected)
- `PUT /api/v1/users/change-password` - Change password (Protected)

### Categories
- `POST /api/v1/categories` - Create new category (Protected)
- `GET /api/v1/categories` - Get all user categories (Protected)
- `GET /api/v1/categories/:id` - Get single category (Protected)
- `PUT /api/v1/categories/:id` - Update category (Protected)
- `DELETE /api/v1/categories/:id` - Delete category (Protected)

### Transactions
- `POST /api/v1/transactions` - Create new transaction (Protected)
- `GET /api/v1/transactions` - Get all user transactions (Protected)
- `GET /api/v1/transactions/:id` - Get single transaction (Protected)
- `PUT /api/v1/transactions/:id` - Update transaction (Protected)
- `DELETE /api/v1/transactions/:id` - Delete transaction (Protected)

## 🎨 Key Features Showcase

### Aurora-themed Dark UI
- **Animated Background** with moving aurora effects
- **3D Star Field** using React Three Fiber
- **Gradient Animations** with Framer Motion
- **Glassmorphism Design** with backdrop blur effects

### Advanced Form Handling
- **Real-time Validation** with Yup schemas
- **Error Handling** with user-friendly messages
- **Loading States** with animated indicators
- **Success Notifications** with auto-dismiss

### State Management
- **Redux Toolkit** for global state
- **React Query** for server state caching
- **Optimistic Updates** for better UX
- **Error Boundaries** for graceful error handling

## 🔧 Configuration

### MongoDB Connection
The application uses MongoDB Atlas with robust connection handling:
- **Connection Pooling** for optimal performance
- **Automatic Reconnection** on connection loss
- **Buffering Prevention** to avoid timeout issues
- **Connection State Tracking** for reliable operations

### Environment Variables
```env
# Database
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/database

# Authentication
JWT_SECRET=your-256-bit-secret-key

# Server
PORT=8000
NODE_ENV=development
```

## 🚀 Deployment

### Frontend (Render/Vercel/Netlify)
```bash
npm run build
# Deploy the 'dist' folder
```

### Backend (Render/Railway/Heroku)
```bash
# Set environment variables in deployment platform
# Deploy with start command: npm start
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Teja Naik**
- GitHub: [@TejaNaik15](https://github.com/TejaNaik15)
- LinkedIn: [Teja Naik](https://www.linkedin.com/in/teja-naik-0b3021282/)

## 🙏 Acknowledgments

- **React Team** for the amazing React 19 features
- **MongoDB** for the robust database solution
- **Tailwind CSS** for the utility-first CSS framework
- **Three.js** community for 3D graphics capabilities

---

<div align="center">
  <p>Made with ❤️ by Teja Naik</p>
  <p>⭐ Star this repository if you found it helpful!</p>
</div>

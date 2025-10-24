const express = require("express");
const cors = require("cors");
const { db } = require("./db/db");

const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 8000;

// Middlewares
app.use(express.json());

// CORS Configuration
const corsOptions = {
  origin: (origin, callback) => {
    // Regex to allow all localhost ports during development
    const isDevelopment = /localhost:\d+$/.test(origin);
    // TODO: Add your deployed frontend URL to this check
    const isAllowed = isDevelopment || origin === "http://localhost:5173";

    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (!isAllowed) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
};

app.use(cors(corsOptions));

// TODO: Add your API routes here

const server = () => {
  db();
  app.listen(PORT, () => {
    console.log("listening to port:", PORT);
  });
};

server();

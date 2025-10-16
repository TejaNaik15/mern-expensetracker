const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const httpError = require("http-errors");

//@desc   Register user
//@route  POST /api/v1/users/register
//@access Public
const register = asyncHandler(async (req, res) => {
  const { fullname, email, password } = req.body;

  // Check if all fields are present
  if (!fullname || !email || !password) {
    throw httpError(400, "Please provide all required fields");
  }

  // Check if user already exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    throw httpError(409, "User with that email already exists");
  }

  // Hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create the user
  const user = await User.create({
    fullname,
    email,
    password: hashedPassword,
  });

  res.status(201).json({
    status: "success",
    message: "User registered successfully",
    data: {
      id: user._id,
      fullname: user.fullname,
      email: user.email,
    },
  });
});

//@desc   Login user
//@route  POST /api/v1/users/login
//@access Public
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Check if user with that email exists
  const userFound = await User.findOne({ email });
  if (!userFound) {
    throw httpError(401, "Invalid login credentials");
  }

  // Check if the password is correct
  const isPasswordMatch = await bcrypt.compare(password, userFound.password);
  if (!isPasswordMatch) {
    throw httpError(401, "Invalid login credentials");
  }

  // Generate a token
  const token = jwt.sign({ id: userFound._id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.json({
    status: "success",
    message: "Login successful",
    token,
    user: {
      fullname: userFound.fullname,
      email: userFound.email,
    },
  });
});

module.exports = { register, login };
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../model/User");

const usersController = {
  
  register: asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    
    try {
      // Force immediate execution without buffering
      const userExists = await User.findOne({ email }).setOptions({ bufferCommands: false }).exec();
      if (userExists) {
        return res.status(400).json({ message: "User already exists" });
      }
      
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      
      const userCreated = await User.create({
        email,
        username,
        password: hashedPassword,
      });
      
      res.status(201).json({
        message: "User registered successfully",
        username: userCreated.username,
        email: userCreated.email,
        id: userCreated._id,
      });
    } catch (error) {
      console.error('Registration error:', error);
      if (error.name === 'MongooseError' || error.message.includes('buffering') || error.message.includes('timeout')) {
        return res.status(503).json({ message: "Database timeout. Please try again." });
      }
      return res.status(500).json({ message: error.message || "Server error. Please try again later." });
    }
  }),
  
  login: asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }
    
    try {
      // Force immediate execution without buffering
      const user = await User.findOne({ email }).setOptions({ bufferCommands: false }).exec();
      if (!user) {
        return res.status(401).json({ message: "Invalid login credentials" });
      }
      
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: "Invalid login credentials" });
      }
      
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "30d",
      });
      
      res.json({
        message: "Login Success",
        token,
        id: user._id,
        email: user.email,
        username: user.username,
      });
    } catch (error) {
      console.error('Login error:', error);
      if (error.name === 'MongooseError' || error.message.includes('buffering') || error.message.includes('timeout')) {
        return res.status(503).json({ message: "Database timeout. Please try again." });
      }
      return res.status(500).json({ message: error.message || "Server error. Please try again later." });
    }
  }),

  profile: asyncHandler(async (req, res) => {
    console.log(req.user);
    const user = await User.findById(req.user);
    if (!user) {
      throw new Error("User not found");
    }
    res.json({ username: user.username, email: user.email });
  }),
  
  changeUserPassword: asyncHandler(async (req, res) => {
    const { newPassword } = req.body;
    //! Find the user
    const user = await User.findById(req.user);
    if (!user) {
      throw new Error("User not found");
    }
   
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);
    user.password = hashedPassword;

    await user.save({
      validateBeforeSave: false,
    });
    
    res.json({ message: "Password Changed successfully" });
  }),

  updateUserProfile: asyncHandler(async (req, res) => {
    const { email, username } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      req.user,
      {
        username,
        email,
      },
      {
        new: true,
      }
    );
    res.json({ message: "User profile updated successfully", updatedUser });
  }),
};

module.exports = usersController;
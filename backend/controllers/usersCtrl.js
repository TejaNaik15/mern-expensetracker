const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../model/User");


<<<<<<< HEAD
=======

>>>>>>> 1bad5074060df87a1b408861c32e16e0a51579b0
const usersController = {
  
  register: asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    
    if (!username || !email || !password) {
      throw new Error("Please all fields are required");
    }
    
    const userExists = await User.findOne({ email });
    if (userExists) {
      throw new Error("User already exists");
    }
    
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
<<<<<<< HEAD
    //! Create the user and save into db
=======
    
>>>>>>> 1bad5074060df87a1b408861c32e16e0a51579b0
    const userCreated = await User.create({
      email,
      username,
      password: hashedPassword,
    });
    

    res.json({
      username: userCreated.username,
      email: userCreated.email,
      id: userCreated._id,
    });
  }),
  
  login: asyncHandler(async (req, res) => {
    
    const { email, password } = req.body;
    
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("Invalid login credentials");
    }
    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error("Invalid login credentials");
    }
<<<<<<< HEAD

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
=======
    
    const token = jwt.sign({ id: user._id }, "masynctechKey", {
>>>>>>> 1bad5074060df87a1b408861c32e16e0a51579b0
      expiresIn: "30d",
    });
    
    res.json({
      message: "Login Success",
      token,
      id: user._id,
      email: user.email,
      username: user.username,
    });
  }),

<<<<<<< HEAD
  profile: asyncHandler(async (req, res) => {

=======
  
  profile: asyncHandler(async (req, res) => {
    
>>>>>>> 1bad5074060df87a1b408861c32e16e0a51579b0
    console.log(req.user);
    const user = await User.findById(req.user);
    if (!user) {
      throw new Error("User not found");
    }
<<<<<<< HEAD
    
=======
  
>>>>>>> 1bad5074060df87a1b408861c32e16e0a51579b0
    res.json({ username: user.username, email: user.email });
  }),
  
  changeUserPassword: asyncHandler(async (req, res) => {
    const { newPassword } = req.body;
<<<<<<< HEAD
    //! Find the user
=======
    
>>>>>>> 1bad5074060df87a1b408861c32e16e0a51579b0
    const user = await User.findById(req.user);
    if (!user) {
      throw new Error("User not found");
    }
<<<<<<< HEAD
   
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);
    user.password = hashedPassword;

=======
    
    
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);
    user.password = hashedPassword;
    
>>>>>>> 1bad5074060df87a1b408861c32e16e0a51579b0
    await user.save({
      validateBeforeSave: false,
    });
    
    res.json({ message: "Password Changed successfully" });
  }),
<<<<<<< HEAD

=======
  
>>>>>>> 1bad5074060df87a1b408861c32e16e0a51579b0
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
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js';

// Auth user/set token
// route POST /api/users/auth
// Public access
const authUser = asyncHandler(async(req, res) => {
  res.status(200).json({ message: 'Auth User'});
});

// Register User
// route POST /api/users/
// Public access
const registerUser = asyncHandler(async(req, res) => {
  console.log(req.body);
  res.status(200).json({ message: 'Register user'});
});

// Logout User
// route POST /api/users/logout
// Public access
const logoutUser = asyncHandler(async(req, res) => {
  res.status(200).json({ message: 'Logout user'});
});

// Get user profile
// route GET /api/users/profile
// Private 
const getUserProfile = asyncHandler(async(req, res) => {
  res.status(200).json({ message: 'User profile'});
});

// Update user profile
// route PUT /api/users/profile
// Private 
const updateUserProfile = asyncHandler(async(req, res) => {
  res.status(200).json({ message: 'Update user profile'});
});





export  {  
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile
};
import express from 'express';
import { 
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile
} from '../controllers/userController.js';

const router = express.Router();
//Setting routes & endpoints
router.post('/auth', authUser);
router.post('/', registerUser);
router.post('/logout', logoutUser);
router.route('/profile').get(getUserProfile).put(updateUserProfile)


export default router
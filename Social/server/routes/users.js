import express from 'express';
import {
    getUser,
    getUserFriends,
    addRemoveFriend,
} from '../controllers/users.js'
import { verifyToken } from '../middleware/auth.js'

const router = express.Router();

// Read - This routes allows you to call the user by grabbing their id. and get
// all user friends.
router.get("/:id", verifyToken, getUser);
router.get("/:id/friends", verifyToken, getUserFriends);

// Update - This is like Facebook where you can add or remove friends.
router.patch("/:id/:friendId", verifyToken, addRemoveFriend);

export default router;
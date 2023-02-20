import express from 'express';
import { getFeedPosts, getUserPosts, likePost } from '../controllers/posts.js'
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

// READ.....
// This route grabs the user feed when on the home page. This will
// show all the post in database. On a production level, this will
// be an algorithm.
router.get('/', verifyToken, getFeedPosts);
// This rtoue will grab the relvent user post. Bascically the post
// that will show up on their timeline as an example.
router.get('/:userId/posts', verifyToken, getUserPosts);

router.patch('/:id/like', verifyToken, likePost);

export default router;
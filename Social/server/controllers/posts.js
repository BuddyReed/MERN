import Post from '../models/Post.js';
import User from '../models/User.js';

// Create
// This is what the front end is going to send
export const createPost = async (req, res) => {
    try {
        // You are create a new POST then with the response returning 
        // the new post to the front end
        const { userId, description, picturePath } = req.body;
        const user = await User.findById(userId);
        const newPost = new Post({
            userId,
            firstName: user.firstName,
            lastName: user.lastName,
            location: user.location,
            description,
            userPicturePath: user.picturePath,
            picturePath,
            likes: {},
            comments: []
        })
        await newPost.save();

        const post = await Post.find();
        res.status(201).json(post);

    } catch (err) {
        res.status(409).json({ message: err.message });
    }
}

// Read

export const getFeedPosts = async (req, res) => {
    try {
        const post = await Post.find();
        res.status(200).json(post);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

export const getUserPosts = async (req, res) => {
    try {
        const { userId } = req.params;
        const post = await Post.find({ userId });
        res.status(200).json(post);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}


// Update
export const likePost = async (req, res) => {
    try {
        const { id } = req.params;
        const { userId } = req.body;
        // Grabbing the post information and if the user has liked the post or not
        const post = await Post.findById(id);
        const isliked = post.likes.get[userId];

        // if the post is liked you will delete the user as they already like post
        // if not like you will then set the users like.
        if (isliked) {
            post.likes.delete(userId);
        } else {
            post.likes.set(userId, true);
        }
        // This is where you update the post by finding the post first
        // then update the post like. 
        const updatedPost = await Post.findByIdAndUpdate(
            id,
            { likes: post.likes },
            { new: true }
        );
        // Then you pass in the updated post in order to pass it to the front end
        res.status(200).json(updatedPost);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}
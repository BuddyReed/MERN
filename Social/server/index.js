import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import multer from 'multer';
import helmet from 'helmet';
import morgan from 'morgan';
// The two below come with node so no need to install
// they allows us to properly set tha paths when confingured. 
import path from 'path';
import { fileURLToPath } from 'url';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';
import postRoutes from './routes/posts.js';
import { register } from "./controllers/auth.js";
import { createPost } from './controllers/posts.js'
import { verifyToken } from './middleware/auth.js';
import User from './models/User.js';
import Post from './models/Post.js';
import { users, posts } from './data/index.js'

// Configrations 
// Below allos you to grab the file URL. Specifaclly when you use module.
// Look at the package.json file. type:module.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }))
app.use(morgan('common '));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
// Set the directory where we keep the assets. REAL world you would
// waht to store within a cloud.
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

// FUle storage setup.. Which you are useing multer. 
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/assets");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});
const upload = multer({ storage });
// For above code the github break down. https://github.com/expressjs/multer 

// Routes with files that you wull call from the front end. This is 
// the middle ware use between the register logic... Placement in vid 27:19
app.post("/auth/register", upload.single("picture"), register);
// This route allows user to upload picture. Also, it grabs the picture property and upload.
// Front end must align with the property.
app.post('/posts', verifyToken, upload.single("picture"), createPost);

// Auth Routes
app.use('/auth', authRoutes);

// User Routes
app.use('/users', userRoutes);

// Post Routes
app.use('/posts', postRoutes);

// mongoose.set("strictQuery", false); 
mongoose.set("strictQuery", true);
// MONGOOSE CONNECTION
const PORT = process.env.PORT || 6001;
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    //Add this data one time, This is allowing you to add the dummy data from
    // the data folder to the database.
    // User.insertMany(users);
    // Post.insertMany(posts);
}).catch((error) => console.log(`${error} did not connect`));
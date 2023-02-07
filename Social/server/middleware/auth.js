import jwt from "jsonwebtoken";

// The middleware is used to check if the user is logged in or not. When 
// logged in, the user is able to do thing a none logged in user can't do. 
// Also you are verifying if the token is valid or not. 

export const verifyToken = async (req, res, next) => {
    try {
        // From the request from the frontend we are grabbing the token 
        // via the Authorization header. The frontend will be setting the 
        // token then the backend will gather the token info. 
        let token = req.header("Authorization");
        if (!token) {
            return res.status(403).send("Access Denied");
        }
        // This will set the token starting with BEARER(string)on the frontend. 
        // Then the token will start after the bearer...
        if (toke.startsWith("Bearer ")) {
            token = token.slice(7, token.length).trimLeft();
        }
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}
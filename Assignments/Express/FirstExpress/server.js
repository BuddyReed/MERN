const express = require("express");
const app = express();
const port = 8000;

// This 
app.use(express.json())

// req is shorthand for request
// res is shorthand for response
app.get("/", (req, res) => {
    res.json({ message: "Hello from index route" });
});

const apiCallback = (req, res) => {
    res.json({ message: "Hello World", });
}

// This route cals on the apiCallback function which passes through info from the function.
app.get("/api", apiCallback);


// Creating a POST rout

app.post("/api/cities", (req, res) => {
    console.log(req, body);
})

app.delete("/api/cities/:id", (req, res) => {
    console.log(req.params);

    return res.json({})
})




// this needs to be below the other code blocks
app.listen(port, () => console.log(`Listening on port: ${port}`));


// Below we added express then invoke that function then assign the localhost 
// access port
const express = require("express");
const app = express();
const port = 8000;

// This is allowing our app to recieve json data.
app.use(express.json())

// req is shorthand for request
// res is shorthand for response
app.get("/", (req, res) => {
    res.json({ message: "Hello from index route" });
});


const apiCallback = (req, res) => {
    res.json({
        message: "Hello World",
        secretNumber: 42,
        instructorNames: ["Max", "Robert"],
        myUser: {
            name: "Max R",
            job: "Instructor",
            hairColor: "brown",
            classesTaught: ["Python", "MERN", "C#"]
        }
    });
}
// This route calls on the apiCallback (named) function which passes through info from that function.
app.get("/api", apiCallback);

//  

app.get('/api/cities', (req, res) => {
    const cities = [
        {
            id: 1,
            name: 'Aogashima',
            population: 170,
        },
        {
            id: 2,
            name: 'Longyearbyen',
            population: 2144,
        },
        {
            id: 3,
            name: 'Kennedy Meadows',
            population: 28,
        },
    ];

    return res.json(cities);
});

app.post('/api/cities', (req, res) => {
    console.log(req.body);
    // req.body is the data the user is sending
    return res.json({
        status: 'success',
        city: req.body
    })
})


//the :id variable will come in through the params of the request, while the data sent by the user
//comes in through the req.body
app.delete('/api/cities/:id', (req, res) => {
    console.log(req.params);

    return res.json({
        status: 'success',
        msg: `Successfully deleted city with the id: ${req.params.id}`
    })
})

// This allows for update of data,
app.put('/api/cities/:id', (req, res) => {
    console.log(req.body);

    return res.json({
        status: "success",
        msg: `Updated city with id: ${req.params.id}`
    })
})

// Get one of something by the id
app.get('/api/cities/:id', (req, res) => {
    return res.json({
        id: req.params.id
    })
})




// this needs to be below the other code blocks
// this run the server on a specified PORT...
app.listen(port, () => console.log(`Listening on port: ${port}`));



// Reference video https://www.youtube.com/watch?v=kC5T5qPm0_g 


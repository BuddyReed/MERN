const express = require("express");
const app = express();
const port = 8000;

// This 
app.use(express.json())


const { faker } = require('@faker-js/faker');
// The first function create a newUser--------------
const createUser = () => {
    const newUser = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        _id: faker.datatype.uuid()
    };
    return newUser;
};

// const newUser = createUser();
// console.log(newUser);
// The second function create a newCompany--------------

const createCompany = () => {
    const newCompany = {
        _id: faker.datatype.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipeCode: faker.address.zipCode(),
            country: faker.address.country(),
        },
    };
    return newCompany;
};

// const newCompany = createCompany(); 
// console.log(newCompany);

// --------------- API Route ----------------//

app.get("/", (req, res) => {
    res.json({ message: "Hello from index route" });
});

app.get("/api/users/new", (req, res) => {
    const newUser = createUser();
    res.json({
        newUser
    })
})

app.get("/api/companies/new", (req, res) => {
    const newCompany = createCompany();
    res.json({
        newCompany
    })
})

app.get("/api/company", (req, res) => {
    const newCompany = createCompany();
    const newUser = createUser();
    res.json({
        newUser,
        newCompany
    })
})


// app.get("/api/compamies/new", newCompany)


// --------------- API Route ----------------//



// this needs to be below the other code blocks
app.listen(port, () => console.log(`Listening on port: ${port}`));
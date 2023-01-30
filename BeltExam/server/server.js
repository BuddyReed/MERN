const express = require('express');
const cors = require('cors');
const { petRouter } = require('./routes/pet.route');

const port = 8000;

require('./config/mongoose.config');

const app = express();

app.use(cors());


app.use(express.json());


app.use('/api/pets', petRouter);

app.listen(port, () =>
    console.log(`Listening on port ${port} for REQuests to RESpond to.`)
); 
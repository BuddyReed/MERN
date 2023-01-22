const JokeController = require('../controllers/joke.controller');

module.exports = app => {
    app.get('/api/joke', JokeController.findAllJoke);
    app.get('/api/joke/:id', JokeController.findOneSingleJoke);
    app.put('/api/joke/:id', JokeController.updateExistingJoke);
    app.post('/api/joke', JokeController.createNewJoke);
    app.delete('/api/joke/:id', JokeController.deleteAnExistingJoke);
}

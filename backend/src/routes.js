const express = require('express');

const MovieController = require('./constrollers/MovieController');

const routes = express.Router();

// List all movies registered
routes.get('/movies', MovieController.index)

// Create a new movie
routes.post('/movies', MovieController.create)

// Update a movie
routes.put('/movies/:id', MovieController.update)

// Delete a movie
routes.delete('/movies/:id', MovieController.delete);

module.exports = routes;
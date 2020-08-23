const express = require('express');

const routes = express.Router();

const movies = [
  {
    "id": 1,
    "title": "O Protetor 2",
    "gender": "Ação",
    "picture": "https://br.web.img3.acsta.net/pictures/18/06/19/13/51/0647704.jpg",
    "movieCode": "WgpqBkFFUVQ",
    "language": "dublado",
  },
  {
    "id": 2,
    "title": "Os vingadores",
    "gender": "Ação",
    "picture": "https://br.web.img3.acsta.net/r_1280_720/medias/nmedia/18/89/43/82/20072617.jpg",
    "movieCode": `4qRrM9IqZR0`,
    "language": "dublado",
  }
];

// List all movies registered
routes.get('/movies',(req, res) => {
  res.json(movies);
})

// Create a new movie
routes.post('/movies', (req, res) => {
  const { id, title, gender, picture, language, movieCode} = req.body;

  const newMovie = {
      id,
      title,
      gender,
      picture,
      language,
      movieCode,
  }
  movies.push(newMovie);
  
  res.json(newMovie);
})

// Update a movie
routes.put('/movies/:id', (req, res) => {
  const { id } = req.params;
  const { title, picture, language, gender, movieCode } = req.body;
  let currentMovie;

  movies.map((movie, index) => {
    if (movie.id == id) {
      currentMovie = Object.assign({}, movie, {})
      if (title) currentMovie.title = title;
      if (picture) currentMovie.picture = picture;
      if (language) currentMovie.language = language;
      if (gender) currentMovie.gender = gender;
      if (movieCode) currentMovie.movieCode = movieCode;
      
      movies[index] = currentMovie
    } else {
      res.status(400).send('This movie does not exists');
    }
  })
  res.json(currentMovie)
})

// Delete a movie
routes.delete('/movies/:id', (req, res) => {
  const { id } = req.params;

  const selectedMovie = movies.findIndex(movie => movie.id == id);

  if (selectedMovie > -1) {
    movies.splice(selectedMovie, 1)
  }
  else {
    res.status(400).send('This movie identifier does not exist');
  }

  res.status(200).send('Movie was deleted')
});

routes.get('/movies/:id', (req, res) => {
  const { id } = req.params;

  const selectedMovie = movies.find(movie => movie.id == id);

  if (!selectedMovie) {
    res.status(400).send('This movie does not exist')
  }
  res.json(selectedMovie);

})

module.exports = routes;
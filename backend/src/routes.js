import { Router } from 'express'

const routes = new Router()

const movies = [
  {
    "id": 1,
    "title": "O Protetor 1",
    "gender": "Ação",
    "picutre": "",
    "embedURL": "https://www.youtube.com/watch?v=WgpqBkFFUVQ&",
    "created_by": "Patryck Gratão",
  },
  {
    "id": 2,
    "title": "Os vingadores",
    "gender": "Ação",
    "picutre": "",
    "embedURL": "https://www.youtube.com/watch?v=WgpqBkFFUVQ&",
    "created_by": "Patryck Gratão",
  }
];

// List all movies registered
routes.get('/movies',(req, res) => {
  res.json(movies);
})

// Create a new movie
routes.post('/movies', (req, res) => {
  const { id, title, picture, gender, embedURL, created_by } = req.body;

  const newMovie = {
      id,
      title,
      gender,
      picture,
      embedURL,
      created_by,
  }
  movies.push(newMovie);
  
  res.json(newMovie);
})

// Update a movie
routes.put('/movies/:id', (req, res) => {
  const { id } = req.params;
  const { title, picture, gender, url, created_by } = req.body;
  let currentMovie;

  movies.map((movie, index) => {
    if (movie.id == id) {
      currentMovie = Object.assign({}, movie, {})
      if (title) currentMovie.title = title;
      if (picture) currentMovie.picture = picture;
      if (gender) currentMovie.gender = gender;
      if (url) currentMovie.url = url;
      if (created_by) currentMovie.created_by = created_by;
      
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

export default routes
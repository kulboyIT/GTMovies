import { Router } from 'express'

const routes = new Router()

const movies = [
  {
    "id": 123,
    "title": "O Protetor 1",
    "duration": "136 min",
    "url": "https://www.youtube.com/watch?v=WgpqBkFFUVQ&",
    "created_by": "Patryck Gratão"
  },
  {
    "id": 122,
    "title": "O Protetor 1",
    "duration": "136 min",
    "url": "https://www.youtube.com/watch?v=WgpqBkFFUVQ&",
    "created_by": "Patryck Gratão"
  }
]

routes.get('/', (req, res) => {
  res.json({message: "Homepage"})
})

// List all movies registered
routes.get('/movies',(req, res) => {
  res.json(movies);
})

// Create a new movie
routes.post('/movies', (req, res) => {
  const { id, title, duration, url, created_by } = req.body;

  const newMovie = {
      id,
      title,
      duration,
      url,
      created_by,
  }
  movies.push(newMovie);
  
  res.json(newMovie);
})

routes.put('/movies/:id', (req, res) => {
  const { id } = req.params;
  const { title, duration, url, created_by } = req.body;
  let currentMovie;

  movies.map((movie, index) => {
    if (movie.id == id) {
      currentMovie = Object.assign({}, movie, {})
      if (title) currentMovie.title = title;
      if (duration) currentMovie.duration = duration;
      if (url) currentMovie.url = url;
      if (created_by) currentMovie.created_by = created_by;
      
      movies[index] = currentMovie
    }
  })
  console.log(movies)
  // console.log(currentMovie)

  res.json('feito')
})

routes.delete('/movies/:id', (req, res) => {
  const { id } = req.params;

  const selectedMovie = movies.findIndex(movie => movie.id == id);

  if (selectedMovie > -1) {
    movies.splice(selectedMovie, 1)
  }
  else {
    res.status(400).send('ID não encontrado');
  }

  res.json(movies)
})

export default routes
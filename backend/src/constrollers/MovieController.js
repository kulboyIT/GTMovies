const connection = require('../database/connection')

module.exports = {
  async index (request, response) {
    const movies = await connection('movies').select('*')

    return response.json(movies)
  },

  async create (request, response) {
    const {title, gender, picture, language, movieCode} = request.body;

    const [id] = await connection('movies').insert({
      title,
      gender,
      picture,
      language,
      movieCode,
    })

    return response.status(204).send()
  },

  async delete (request, response) {
    const { id } = request.params

    const movie = await connection('movies')
      .where('id', id)
      .first()

    await connection('movies').where('id', id).delete()

    return response.status(204).send()
  },

  async update (request, response) {
    const { id } = request.params
    const {title, gender, picture, language, movieCode} = request.body;

    const movie = await connection('movies')
      .where('id', id)
      .first()

    await connection('movies').where('id', id).update({
      title,
      gender,
      picture,
      language,
      movieCode
    })

    return response.status(204).send()
  }
}
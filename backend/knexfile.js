module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'moviesRepo_test'
    },
    pool: { min:0, max: 7 },
    migrations: {
      directory: 'src/database/migrations',
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: 'src/database/seeds',
    },
  },

}
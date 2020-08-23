const Sequelize = require('sequelize');
const sequelize = new Sequelize('moviesRepo', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize.authenticate().then(function() {
  console.log("Conectado com sucesso!");
}).catch(function (err) {
  console.log("Falha ao se conectar: "+err);
})

// Criação do Módulo de Filmes
const Movies = sequelize.define('movies', {
  title: {
    type: Sequelize.STRING
  },
  gender: {
    type: Sequelize.STRING
  },
  picture: {
    type: Sequelize.STRING
  },
  language: {
    type: Sequelize.STRING
  },
  movieCode: {
    type: Sequelize.STRING
  }
})



const Users = sequelize.define('users', {
  name: {
    type: Sequelize.STRING
  },

  email: {
    type: Sequelize.STRING
  },

  password: {
    type: Sequelize.STRING
  }
})

// Sincroniza o banco com o sequelize
Movies.sync({force: true})
Users.sync({force: true})
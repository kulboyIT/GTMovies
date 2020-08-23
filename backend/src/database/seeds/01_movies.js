
exports.seed = function(knex) {
  return knex('movies').del()
    .then(function () {
      return knex('movies').insert([
        {
          id: 1,
          title: "Estrada para Perdição",
          gender: "Ação",
          picture: "https://br.web.img3.acsta.net/medias/nmedia/18/87/08/35/19871844.jpg",
          language: "Dublado",
          movieCode: "S4zjMy7G17c",
        },
        {
          id: 2,
          title: "Tropa de Elite",
          gender: "Ação",
          picture: "https://br.web.img3.acsta.net/medias/nmedia/18/87/22/38/19873277.jpg",
          language: "Dublado",
          movieCode: "JsNa1baPQvQ",
        },
        {
          id: 3,
          title: "O Protetor 2",
          gender: "Ação",
          picture: "https://br.web.img3.acsta.net/pictures/18/06/19/13/51/0647704.jpg",
          language: "Dublado",
          movieCode: "WgpqBkFFUVQ",
        },
        {
          id: 4,
          title: "Código de Conduta",
          gender: "Ação",
          picture: "https://cinemaeargumento.files.wordpress.com/2010/01/lawabidingposter.jpg?w=584",
          language: "Dublado",
          movieCode: "wOzDjrQYNjo",
        },
      ]);
    });
};

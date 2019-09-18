
var getPessoas = function() {
    var posts = [
      {
        id: 1,
        nome: 'Patrick Gusmão',
        foto: 'Pessoa1.jpg',
        cargo: 'Consultor Tecnico de Projetos',
        linkedin: 'https://www.linkedin.com/in/patrick-gusm%C3%A3o-55385b137/'
      },
      {
        id: 2,
        nome: 'Alexandre Baldan',
        foto: 'pessoa2.jpg',
        cargo: 'Consultor Tecnico de Projetos',
        linkedin: 'https://www.linkedin.com/in/alexandrebfaust/'
      },
      {
        id: 3,
        nome: 'Henrique Hänsch Stepic',
        foto: 'pessoa3.jpg',
        cargo: 'Assistente Tecnico Comercial',
        linkedin: 'https://www.linkedin.com/in/henrique-h%C3%A4nsch-stepic-663a39152/'
      },
      {
        id: 4,
        nome: 'Lucas G. Ferreira',
        foto: 'pessoa4.jpg',
        cargo: 'MGerente de Projetos',
        linkedin: 'https://www.linkedin.com/in/lucasgferreira/'
      },
      {
        id: 5,
        nome: 'Maicon Gian Mayer',
        foto: 'pessoa5.jpg',
        cargo: 'Lider do time de Serviços',
        linkedin: 'https://www.linkedin.com/in/maiconmayer/'
      },
     
      {
        id: 6,
        nome: 'Rodrigo Sell Cruz',
        foto: 'pessoa6.jpg',
        cargo: 'Consultor',
        linkedin: 'https://www.linkedin.com/in/rodrigosellcruz/'
      },
    ];
  
    return posts;
  }
  
  module.exports = {
    getPessoas: getPessoas
  }
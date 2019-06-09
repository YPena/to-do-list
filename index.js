var submit = $('.submit-btn');
var cards = $('.name-cards');

submit.on('click', addPerson);

function addPerson(e) {
  e.preventDefault();
  var name = $('.name-input').val();
  var sign = $('.sign-input').val();

  cards.append(`
    <article class="card">
      <h2>${name} is a ${sign}</h2>
    </article>
  `);

  $('.name-input').val("");
  $('.sign-input').val("");
}

var allPeople = []
var submit = $('.submit-btn');
var cards = $('.name-cards');

var submit = $('.submit-btn');
var cards = $('.name-cards');

submit.on('click', addPerson);

function addPerson(e) {
  e.preventDefault();
  var number = $('.number-input').val();
  var todo = $('.todo-input').val();

  cards.append(`
    <article class="card">
      <h2>${number} I have to ${todo}</h2>
    </article>
  `);

  $('.number-input').val("");
  $('.todo-input').val("");

  allPeople.push({ number: number, todo: todo });
  console.log(allPeople);

}

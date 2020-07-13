
var quotes = [
  {text: "Hello Earth!", author: "Me"}, {text: "Hello Mars!", author: "You"}, {text: "Hello Pluto", author: "Dunno"},
  {text: "Hello Jupiter!", author: "Fiddo"}, {text: "Hello Uranus!", author: "Bozo"}, {text: "Hello Venus!", author: "Mom"}
];

var colors = ['ghostwhite', 'skyblue', 'orange', 'pink', 'yellow', 'hotpink', 'lightgrey'];

var button = document.querySelector("button");

window.onload = function(event) {
  var next_card = document.getElementById("next_card");
  var main_card = document.getElementById("main_card");

  [next_card, main_card].forEach(function(card) {
      create_quote(card);
  });
};

function create_quote(card) {
  // style the card with quote
  card.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
  var selected_quote = quotes[Math.floor(Math.random() * quotes.length)];

  var card_attrs = Array.prototype.slice.call(card.children);
  card_attrs.forEach(function(attr) {
    attr.innerText = selected_quote[attr.id.replace("_", "")];
  });
  return card;
}

function shift_quote(event) {
  event.preventDefault();
  var next_card = document.getElementById("next_card");
  var main_card = document.getElementById("main_card");

  // style next_card for pending click event
  // create_quote(next_card);
  //shift quotes_wrapper down to simulate sliding transition upon click event
  // var quotes_wrapper = document.querySelector(".quote-box");
  main_card.style.transform = "translateY(300px)";
  // quotes_wrapper.style.transform = "translateY(0)";
  // next_card is displayed to the user

  var updated_main_card = next_card.cloneNode(true);
  updated_main_card.children.forEach(function(child) {
    child.id = child.id.replace("_", "");
  })
  updated_main_card.id = "main_card";

  next_card.parentElement.replaceChild(updated_main_card, main_card);
  //reset CSS transition for next click event
  // quotes_wrapper.style.transform = "translateY(-300px)";
  // generate a new quote for the next_card
  for (var i = 0; i < 2; i++) {
    create_quote(next_card);
  }
  main_card.syle.transform = translateY(0);
}

button.addEventListener("click", shift_quote);

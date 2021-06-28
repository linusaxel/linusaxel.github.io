var text = `{
  "name": "Linus Eriksson",
  "profession": "Software Engineer",
  "years_of_experience": 2,
  "isNinja": true,
  "hobbies": ["Coding", "Guitar", "Cats"],
  "contact": {
    "e-mail": "linusaxel@gmail.com",
    "github": "link",
    "linkedin": "link",
    "twitter": "link"
  }
}`;

window.onload = (event) => {
  //setClickListeners();
};

function minimizeMain() {
  var button = document.getElementById("main-minimizable-button");
  var parentElement = document.getElementById("parent-element");

  if (button.classList.contains("fa-plus-square")) {
    button.classList.remove("fa-plus-square");
    button.classList.add("fa-minus-square");
    parentElement.innerHTML =
      '{ <button type="button" id="main-minimizable-button" onclick="minimizeMain()" class="far fa-minus-square json-button"></button>';
    displayElements("minimizable");
    
  } else if (button.classList.contains("fa-minus-square")) {
    button.classList.remove("fa-minus-square");
    button.classList.add("fa-plus-square");
    parentElement.innerHTML =
      '{ <button type="button" id="main-minimizable-button" onclick="minimizeMain()" class="far fa-plus-square json-button"></button> }';
    minimizeElements("minimizable");
  }
}

function minimizeHobbies() {
  var button = document.getElementById("hobbies-minimizable-button");
  var parentElement = document.getElementById("hobbies-element");

  if (button.classList.contains("fa-plus-square")) {
    button.classList.remove("fa-plus-square");
    button.classList.add("fa-minus-square");
    parentElement.innerHTML =
      '"hobbies": [ <button type="button" id="hobbies-minimizable-button" onclick="minimizeHobbies()" class="far fa-minus-square json-button"></button>';
    displayElements("minimizable-hobbies");
  } else if (button.classList.contains("fa-minus-square")) {
    button.classList.remove("fa-minus-square");
    button.classList.add("fa-plus-square");
    parentElement.innerHTML =
      '"hobbies": [ <button type="button" id="hobbies-minimizable-button" onclick="minimizeHobbies()" class="far fa-plus-square json-button"></button> ],';
    minimizeElements("minimizable-hobbies");
  }
}

function minimizeContacts() {
  var button = document.getElementById("contacts-minimizable-button");
  var parentElement = document.getElementById("contacts-element");

  if (button.classList.contains("fa-plus-square")) {
    button.classList.remove("fa-plus-square");
    button.classList.add("fa-minus-square");
    parentElement.innerHTML =
      '"contacts": { <button type="button" id="contacts-minimizable-button" onclick="minimizeContacts()" class="far fa-minus-square json-button"></button>';
    displayElements("minimizable-contacts");
  } else if (button.classList.contains("fa-minus-square")) {
    button.classList.remove("fa-minus-square");
    button.classList.add("fa-plus-square");
    parentElement.innerHTML =
      '"contacts": { <button type="button" id="contacts-minimizable-button" onclick="minimizeContacts()" class="far fa-plus-square json-button"></button> }';
    minimizeElements("minimizable-contacts");
  }
}

function minimizeElements(className) {
  var elements = document.getElementsByClassName(className);
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.display = "none";
  }
}

function displayElements(className) {
  var elements = document.getElementsByClassName(className);
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.display = "block";
  }
}

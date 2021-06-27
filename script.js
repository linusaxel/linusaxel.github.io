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

var resume = JSON.parse(this.text);

window.onload = (event) => {
  var content = document.getElementById('content');
  for (let [key, value] of Object.entries(this.resume)) {
    var innerDiv = document.createElement("div");
    innerDiv.textContent = key + ': ' + value + ',';
    content.appendChild(innerDiv);
    console.log(`${key}: ${value}`);
  }

  //setClickListeners();
};

function setClickListeners() {
  const clickableElements = document.getElementsByClassName("clickable");
  Array.from(clickableElements).forEach((el) => {
    el.onclick = () => {
      const node = el.nextSibling;
      if (node.style && node.style.display == "none") {
        node.style.display = "block";
        el.innerText = " -";
      } else if (node.style && node.style.display == "block") {
        node.style.display = "none";
        el.innerText = "+";
      }
    };
  });
}
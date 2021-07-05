var linusJSON = `{
  "name": "Linus Eriksson",
  "profession": "Software Engineer",
  "alive": true,
  "hobbies": ["Coding", "Guitar", "Cats"],
  "contact": {
      "e-mail": "linusaxel@gmail.com",
      "github": "https://github.com/linusaxel",
      "linkedin": "https://www.linkedin.com/in/linusaxel/",
      "twitter": "https://twitter.com/l3nnybob"
  }
}`;
parsedJSON = JSON.parse(linusJSON);

renderjson.set_icons('+', '-')
  .set_show_to_level(1)
  .set_collapse_msg(() => {
      return '';
  });
document.getElementById("json-container").appendChild(
  renderjson(parsedJSON)
);
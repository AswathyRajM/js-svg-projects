const projects = [
  {
    heading: "Birds and Flower",
    subHeading: "HTML,JS and CSS",
    description: "Birds rotate towards the mouse movement",
    page: "birdFlower/birdFlower.html",
  },
  {
    heading: "Image as border",
    subHeading: "HTML and CSS",
    description: "Border of the div is an image",
    page: "borderImage/borderImage.html",
  },
  {
    heading: "Random tree generator",
    subHeading: "HTML and JS ",
    description: "Random H-Tree Fractal gernerator based on recursion",
    page: "hTreeFractal/index.html",
  },
  {
    heading: "Fibinocci Flower Generator",
    subHeading: "HTML and JS",
    description:
      "Using HTML Canvas and JavaScript and recursion, it generates flower shaped circles ",
    page: "fibinocciFlower/fibinocciFlower.html",
  },
  {
    heading: "Flappy Bird",
    subHeading: "HTML and JS",
    description: "Simple flappy Bird using HTML canvas",
    page: "flappyBird/flappyBird.html",
  },
];

var container = document.querySelector(".container");

for (let i = 0; i < projects.length; i++) {
  var divItem = document.createElement("a");
  var heading = document.createElement("h2");
  var subHeading = document.createElement("h3");
  var paragraph = document.createElement("p");
  var description = document.createTextNode(projects[i].description);
  var headingText = document.createTextNode(projects[i].heading);
  var subHeadingText = document.createTextNode(projects[i].subHeading);

  divItem.setAttribute("class", "item");
  divItem.setAttribute("href", projects[i].page);
  paragraph.setAttribute("class", "paragraph");

  heading.appendChild(headingText);
  subHeading.appendChild(subHeadingText);
  paragraph.appendChild(description);

  divItem.appendChild(heading);
  divItem.appendChild(subHeading);
  divItem.appendChild(paragraph);

  container.appendChild(divItem);
}

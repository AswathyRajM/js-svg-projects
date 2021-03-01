const projects = [
  {
    heading: "Birds and Flower",
    description: "Birds rotate towards the mouse movement",
    page: "birdFlower/birdFlower.html",
  },
  {
    heading: "Image as boreder",
    description: "Border of the div is an image",
    page: "borderImage/borderImage.html",
  },
  {
    heading: "Random tree generator",
    description: "Random H-Tree Fractal gernerator based on recursion",
    page: "hTreeFractal/index.html",
  },
];

var container = document.querySelector(".container");

for (let i = 0; i < projects.length; i++) {
  var divItem = document.createElement("a");
  var heading = document.createElement("h2");
  var paragraph = document.createElement("p");
  var description = document.createTextNode(projects[i].description);
  var headingText = document.createTextNode(projects[i].heading);

  divItem.setAttribute("class", "item");
  divItem.setAttribute("href", projects[i].page);
  paragraph.setAttribute("class", "paragraph");

  heading.appendChild(headingText);
  paragraph.appendChild(description);
  divItem.appendChild(heading);
  divItem.appendChild(paragraph);
  container.appendChild(divItem);
}

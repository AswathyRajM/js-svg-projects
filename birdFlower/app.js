for (let i = 0; i < 30; i++) {
  var x = document.createElement("IMG");
  x.setAttribute("src", "img/hummingbird.png");
  x.setAttribute("alt", "hummingbird");
  x.setAttribute("class", "bird");
  document.body.appendChild(x);
  console.log(x);
}

// Random bird image size function
function randomSize() {
  min = Math.ceil(40);
  max = Math.ceil(150);
  return Math.floor(Math.random() * (max - min)) + min;
}

let birds = document.querySelectorAll(".bird");

for (let i = 0; i < birds.length; i++) {
  birds[i].style.left = Math.floor(Math.random() * 99) + "vw";
  birds[i].style.top = Math.floor(Math.random() * 99) + "vh";
  birds[i].style.width = randomSize() + "px";
}

function rotateBird() {
  birds.forEach((bird) => {
    let x = 0;
    let y = 0;
    let radian = 0;
    let rot = 0;
    // The Element.getBoundingClientRect() method returns a DOMRect object providing information about the size of an element and its position relative to the viewport.
    x = bird.getBoundingClientRect().left + bird.clientWidth / 2;
    y = bird.getBoundingClientRect().top + bird.clientHeight / 2;
    // atan2 returns an angle betwern x y
    //event.pagex and event.pagey returns thr x y cordinates of clicks
    radian = Math.atan2(event.pageX - x, event.pageY - y);
    rot = radian * (180 / Math.PI) * -1 + 270;
    bird.style.transform = "rotate(" + rot + "deg)";
  });
}
const body = document.body;
body.addEventListener("mousemove", rotateBird);

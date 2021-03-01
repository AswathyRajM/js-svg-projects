const canvas = document.getElementById("canvas1");
//2apis 2d webgl(3d) webgl can acces hardware
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// ctx.fillRect(x1,y1,x2,y2)

let number = 0;
let scale = 10;

function drawFlower() {
  //   let positionX = canvas.width / 2 - 50;
  //   let positionY = canvas.height / 2;

  let angle = number * 1;
  let radius = scale * Math.sqrt(number);

  // sin transfers the angle between the range of -1 to +1
  let positionX = radius * Math.sin(angle) + canvas.width / 2;

  //cos transfers the angle between the range of +1 to -1
  let positionY = radius * Math.cos(angle) + canvas.height / 2;

  ctx.fillStyle = "lightgreen";
  ctx.strokeStyle = "blue";
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.arc(positionX, positionY, 20, 0, Math.PI * 2); //360deg
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  number++;
}

function animate() {
  //   ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawFlower();
  requestAnimationFrame(animate); //calls the function given as the parametere
}

animate();

const canvas = document.getElementById("canvas1");
//2apis 2d webgl(3d) webgl can acces hardware
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.globalCompositeOperation = "destination-over";

let number = 0;
let scale = 10;
let hue = Math.random() * 360;

function drawFlower() {
  let angle = number * 3.3;
  let radius = scale * Math.sqrt(number);

  // sin transfers the angle between the range of -1 to +1
  let positionX = radius * Math.sin(angle) + canvas.width / 2;

  //cos transfers the angle between the range of +1 to -1
  let positionY = radius * Math.cos(angle) + canvas.height / 2;

  ctx.fillStyle = "hsl(" + hue + ",100%,50%)";
  ctx.strokeStyle = "black";
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.arc(positionX, positionY, 15, 0, Math.PI * 2); //360deg
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  number++;
  hue++;
}

function animate() {
  // can also use setInterval, but this method is better beacause it automatically
  // adjust to the device refresh rate

  //   ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (number > 550) return;
  drawFlower();
  requestAnimationFrame(animate);
}
animate();

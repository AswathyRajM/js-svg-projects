const canvas = document.querySelector("canvas");
const generateButton = document.querySelector(".generate-button");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");
let curve = 10;

function drawTree(
  startX,
  startY,
  len,
  angle,
  branchWidth,
  branchColor,
  leafColor
) {
  ctx.beginPath();
  ctx.save();
  ctx.strokeStyle = branchColor;
  ctx.fillStyle = leafColor;
  ctx.lineWidth = branchWidth;
  ctx.translate(startX, startY);
  ctx.rotate((angle * Math.PI) / 180); //equation to convert degree to radian
  ctx.moveTo(0, 0);

  //curve of the branches
  if (angle > 0) {
    ctx.bezierCurveTo(curve, -len / 2, 10, -len / 2, 0, -len);
  } else {
    ctx.bezierCurveTo(curve, -len / 2, -10, -len / 2, 0, -len);
  }
  ctx.stroke();

  if (len < 5) {
    //leafs
    ctx.beginPath();
    ctx.arc(0, -len, 10, 0, Math.PI / 2);
    ctx.fill();
    ctx.restore();
    return;
  }

  drawTree(0, -len, len * 0.75, angle + curve, branchWidth * 0.6);
  drawTree(0, -len, len * 0.75, angle - curve, branchWidth * 0.6);

  ctx.restore();
}
drawTree(canvas.width / 2, canvas.height - 80, 130, 0, 25, "blue", "pink");

function generateRandomTree() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  let centerPointx = canvas.width / 2;
  let len = Math.floor(Math.random() * 20) + 100;
  let angle = 0;
  let branchWidth = Math.random() * 70 + 1;

  let r = Math.random() * 255;
  let g = Math.random() * 255;
  let b = Math.random() * 255;
  let branchColor = "rgb(" + r + "," + g + "," + b + ")";

  r = Math.random() * 255;
  g = Math.random() * 255;
  b = Math.random() * 255;
  let leafColor = "rgb(" + r + "," + g + "," + b + ")";
  curve = Math.random() * 20 + 2;
  drawTree(
    centerPointx,
    canvas.height - 80,
    len,
    angle,
    branchWidth,
    branchColor,
    leafColor
  );
  generateButton.style.background = branchColor;
}

generateButton.addEventListener("click", generateRandomTree);

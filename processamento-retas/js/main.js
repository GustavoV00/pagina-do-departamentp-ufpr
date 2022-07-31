function drawBoard(canvas) {
  canvas.width = window.innerWidth / 1.1;
  canvas.height = window.innerHeight / 1.3;
  return canvas;
}

function drawMainLine(
  startX = 0,
  startY = 0,
  rowSize,
  lines,
  size = 5,
  lineCap = "round"
) {
  let ctx = canvas.getContext("2d");
  ctx.lineWidth = size;

  const line = new Path2D();

  line.moveTo(startX - 50, startY);
  line.lineTo(startX + 100, startY);

  ctx.stroke(line);
  console.log(line);

  const pressing = false;
  lines.push({ line, startX, startY, rowSize, pressing, ctx });
}

function mouseDownEventHandler(e) {
  lines.forEach((line) => {
    if (line && line.ctx.isPointInStroke(line.line, e.offsetX, e.offsetY)) {
      const rect = canvas.getBoundingClientRect();
      const x = Math.round(e.clientX - rect.left);
      const y = Math.round(e.clientY - rect.top);

      if (x >= line.startX && x <= line.startX + 10) {
        console.log(x, y);
        console.log("cliquei na ponta esquerda");
        line.pressing = true;
        line.left = true;
      } else if (
        x <= line.startX + line.rowSize &&
        x >= line.startX + line.rowSize - 10
      ) {
        console.log("cliquei na ponta direita");
        line.pressing = true;
        line.right = true;
      }
    }
  });
}

function mouseMoveEventHandler(e) {
  lines.forEach((line) => {
    if (line.pressing) {
      console.log("mousemove");
      // const rect = canvas.getBoundingClientRect();
      // x = e.clientX - rect.left;
      // y = e.clientY - rect.top;
      // console.log("ESTOU MOVENDO O MOUSE para:\n x: ", x, " y: ", y);
      // // ctx.clearRect(line.startX, line.startY - 3, line.rowSize + 1, 5);
      // line.ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  });
  detectMousePosition(e);
}

function mouseUpEventHandler(e) {
  lines.forEach((line) => {
    if (line.pressing) {
      line.pressing = false;
      console.log("mouseup");
    }
  });
}

const lines = [];
const size = 5;
function main(e) {
  let canvas = document.querySelector("canvas");
  let ctx = canvas.getContext("2d");
  canvas = drawBoard(canvas);

  centerX = canvas.width / 2;
  centerY = canvas.height / 2;

  const rowSize = 100;
  drawMainLine(centerX, centerY, rowSize, lines);
}

function detectMousePosition(e) {
  let canvas = document.querySelector("canvas");
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  console.log();
  document.getElementById("coordenadas").innerHTML = `${x}:${y}`;
}

function clearTheBoard() {
  const canvas = document.querySelector("canvas");
  lines.forEach((line) => {
    line.ctx.clearRect(0, 0, canvas.width, canvas.height);
  });
}

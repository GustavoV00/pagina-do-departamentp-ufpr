const rowSize = 100;
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
  ctx.lineWidth = size + 2;

  const line = new Path2D();

  line.moveTo(startX, startY);
  line.lineTo(startX + rowSize, startY);

  ctx.stroke(line);
  console.log(line);

  const pressing = false;
  const k = 0;
  const endX = startX + rowSize;
  const endY = startY;
  lines.push({ line, startX, startY, endX, endY, rowSize, pressing, ctx, k });
}

let xRowSize, yRowSize;
function possibleEvents(canvas) {
  let endX, endY, startX, startY;
  for (let i = 0; i < lines.length; i++) {
    canvas.addEventListener("mousedown", (e) => {
      if (
        lines[i] &&
        lines[i].ctx.isPointInStroke(lines[i].line, e.offsetX, e.offsetY)
      ) {
        const rect = canvas.getBoundingClientRect();
        const x = Math.round(e.clientX - rect.left);
        const y = Math.round(e.clientY - rect.top);

        console.log("ESTOU ENTRANDO AQUI: ", x, y);
        console.log(lines[i].startX, " e ", lines[i].startY);
        if (x >= lines[i].startX && x <= lines[i].startX + 20) {
          console.log("cliquei na ponta esquerda");
          lines[i].pressing = true;
          lines[i].left = true;
          xRowSize = lines[i].startX + lines[i].rowSize;
          yRowSize = lines[i].startY + lines[i].rowSize;
        } else if (x <= lines[i].endX && x >= lines[i].endX - 20) {
          console.log("cliquei na ponta direita");
          lines[i].pressing = true;
          lines[i].right = true;
          xRowSize = lines[i].startX + lines[i].rowSize;
          yRowSize = lines[i].startY + lines[i].rowSize;
        }
      }
    });

    canvas.addEventListener("mousemove", (e) => {
      if (lines[i].pressing) {
        let canvas = document.querySelector("canvas");
        const ctx = canvas.getContext("2d");

        const rect = canvas.getBoundingClientRect();
        const x = Math.round(e.clientX - rect.left);
        const y = Math.round(e.clientY - rect.top);

        ctx.lineWidth = size + 2;

        const line = new Path2D();

        if (lines[i].right) {
          line.moveTo(lines[i].startX, lines[i].startY);
          line.lineTo(x, y);
          startX = lines[i].startX;
          startY = lines[i].startY;
          endX = x;
          endY = y;
        } else if (lines[i].left) {
          line.moveTo(x, y);
          line.lineTo(lines[i].endX, lines[i].endY);
          startX = x;
          startY = y;
          endX = lines[i].endX;
          endY = lines[i].endY;
        }

        clearTheBoard();

        ctx.stroke(line);

        const pressing = false;
        lines.push({
          line,
          startX,
          startY,
          endX,
          endY,
          pressing,
          ctx,
        });
        console.log("mousemove");
      }

      detectMousePosition(e);
    });

    canvas.addEventListener("mouseup", () => {
      if (lines[i].pressing) {
        lines[i].pressing = false;
        lines[i].right = false;
        lines[i].left = false;
        lines.splice(0, lines.length - 1);
        console.log(lines);
      }
    });
  }
}

function mouseUpEventHandler(e) {
  lines.forEach((line) => {
    if (line.pressing) {
      line.pressing = false;
      console.log("mouseup");
    }
  });
}

let lines = [];
const size = 5;
function main(e) {
  let canvas = document.querySelector("canvas");
  let ctx = canvas.getContext("2d");
  canvas = drawBoard(canvas);

  centerX = canvas.width / 2;
  centerY = canvas.height / 2;

  const rowSize = 100;
  drawMainLine(centerX, centerY, rowSize, lines);
  possibleEvents(canvas);
}

function detectMousePosition(e) {
  let canvas = document.querySelector("canvas");
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  console.log();
  document.getElementById("coordenadas").innerHTML = `${Math.round(
    x
  )}:${Math.round(y)}`;
}

function clearTheBoard() {
  const canvas = document.querySelector("canvas");
  lines.forEach((line) => {
    line.ctx.clearRect(0, 0, canvas.width, canvas.height);
  });
}

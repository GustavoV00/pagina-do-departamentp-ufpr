const GAP = 10;
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

  const pressing = false;
  const k = 0;
  const endX = startX + rowSize;
  const endY = startY;
  lines[0].push({
    line,
    startX,
    startY,
    endX,
    endY,
    pressing,
    ctx,
    k,
  });
}

let xRowSize, yRowSize;
function possibleEvents(canvas) {
  let endX, endY, startX, startY;
  for (let i = 0; i < lines.length; i++) {
    for (let j = 0; j < lines[i].length; j++) {
      console.log(lines[i][j]);
      canvas.addEventListener("mousedown", (e) => {
        console.log("TO AQUI: ", lines[i][j]);
        console.log(e);
        if (
          lines[i][j] &&
          lines[i][j].ctx.isPointInStroke(
            lines[i][j].line,
            e.offsetX,
            e.offsetY
          )
        ) {
          const rect = canvas.getBoundingClientRect();
          const x = Math.round(e.clientX - rect.left);
          const y = Math.round(e.clientY - rect.top);

          console.log(lines[i][j].startX, " e ", lines[i][j].startY);
          if (x >= lines[i][j].startX && x <= lines[i][j].startX + GAP) {
            console.log("ENTREI NO MOUSEDOWN");
            console.log("cliquei na ponta esquerda");
            lines[i][j].pressing = true;
            lines[i][j].left = true;
          } else if (x <= lines[i][j].endX && x >= lines[i][j].endX - GAP) {
            console.log("ENTREI NO MOUSEDOWN");
            console.log("cliquei na ponta direita");
            lines[i][j].pressing = true;
            lines[i][j].right = true;
          }
        }
      });

      canvas.addEventListener("mousemove", (e) => {
        if (lines[i][j].pressing) {
          console.log("ENTREI NO MOUSEMOVE");
          let canvas = document.querySelector("canvas");
          const ctx = canvas.getContext("2d");

          const rect = canvas.getBoundingClientRect();
          const x = Math.round(e.clientX - rect.left);
          const y = Math.round(e.clientY - rect.top);

          ctx.lineWidth = size + 2;

          const line = new Path2D();

          if (lines[i][j].right) {
            line.moveTo(lines[i][j].startX, lines[i][j].startY);
            line.lineTo(x, y);
            startX = lines[i][j].startX;
            startY = lines[i][j].startY;
            endX = x;
            endY = y;
          } else if (lines[i][j].left) {
            line.moveTo(x, y);
            line.lineTo(lines[i][j].endX, lines[i][j].endY);
            startX = x;
            startY = y;
            endX = lines[i][j].endX;
            endY = lines[i][j].endY;
          }

          clearTheBoard();
          drawNonUsedLines(i, ctx);

          ctx.stroke(line);

          const pressing = false;
          lines[i].push({
            line,
            startX,
            startY,
            endX,
            endY,
            pressing,
            ctx,
          });
          console.log(lines);
        }

        detectMousePosition(e);
      });

      canvas.addEventListener("mouseup", () => {
        if (lines[i][j].pressing) {
          console.log("ENTREI NO MOUSEUP");
          lines[i][j].pressing = false;
          lines[i][j].right = false;
          lines[i][j].left = false;
          lines[i].splice(0, lines[i].length - 1);
          console.log(lines);
        }
      });

      canvas.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        if (
          lines[i][j] &&
          lines[i][j].ctx.isPointInStroke(
            lines[i][j].line,
            e.offsetX,
            e.offsetY
          )
        ) {
          const rect = canvas.getBoundingClientRect();
          const x = Math.round(e.clientX - rect.left);
          const y = Math.round(e.clientY - rect.top);

          const half = (lines[i][j].endX - lines[i][j].startX) / 2;
          console.log(half);
          if (
            (x >= lines[i][j].startX + half &&
              x <= lines[i][j].startX + half + GAP) ||
            (x >= lines[i][j].startX + half &&
              x <= lines[i][j].startX + half - GAP)
          ) {
            console.log("ENTREI NO BOTÃO DIREITO");
            let ctx = canvas.getContext("2d");

            const pressing = false;
            let line = new Path2D();

            clearTheBoard();
            drawNonUsedLines(i, ctx);

            line.moveTo(lines[i][j].startX, lines[i][j].startY);
            line.lineTo(lines[i][j].startX + half, lines[i][j].startY);

            ctx.strokeStyle = "#FF0000";
            ctx.stroke(line);

            startX = lines[i][j].startX;
            startY = lines[i][j].startY;

            endX = lines[i][j].startX + half;
            endY = lines[i][j].startY;

            lines[i].push({
              line,
              startX,
              startY,
              endX,
              endY,
              pressing,
              ctx,
            });
            ctx = canvas.getContext("2d");

            line = new Path2D();
            console.log("HALF: ", half);

            line.moveTo(lines[i][j].startX + half, lines[i][j].startY);
            line.lineTo(lines[i][j].endX, lines[i][j].endY);

            ctx.strokeStyle = "#000000";
            ctx.stroke(line);

            startX = lines[i][j].startX + half;
            startY = lines[i][j].startY;

            endX = lines[i][j].endX;
            endY = lines[i][j].endY;

            lines.push([
              {
                line,
                startX,
                startY,
                endX,
                endY,
                pressing,
                ctx,
              },
            ]);
            lines[i].shift();
            console.log(lines);
          }
        }
      });
    }
  }
}

let lines = [[]];
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

function clearTheBoard(i) {
  const canvas = document.querySelector("canvas");
  lines[0][0].ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawNonUsedLines(movedI, ctx) {
  for (let i = 0; i < lines.length; i++) {
    for (let j = 0; j < lines[i].length; j++) {
      if (i != movedI) {
        console.log("I: ", i);
        lines[i][j].line.moveTo(lines[i][j].startX, lines[i][j].startY);
        lines[i][j].line.moveTo(lines[i][j].endX, lines[i][j].endY);

        ctx.stroke(lines[i][j].line);
        console.log("ESTOU ENTRANDO AQUI TOMA NOCU PORRA");
      }
    }
  }
}

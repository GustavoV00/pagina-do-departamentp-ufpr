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

  // startX -= rowSize;

  ctx.stroke(line);
  console.log(line);

  const pressing = false;
  lines.push({ line, startX, startY, rowSize, pressing, ctx });
}

function possibleEvents(canvas) {
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
        if (x >= lines[i].startX && x <= lines[i].startX + 10) {
          console.log("cliquei na ponta esquerda");
          lines[i].pressing = true;
          lines[i].left = true;
        } else if (
          x <= lines[i].startX + lines[i].rowSize &&
          x >= lines[i].startX + lines[i].rowSize - 10
        ) {
          console.log("cliquei na ponta direita");
          lines[i].pressing = true;
          lines[i].right = true;
        }
      }
    });
    canvas.addEventListener("mousemove", (e) => {
      if (lines[i].pressing) {
        console.log("Estou entrando aquiJK");
        let canvas = document.querySelector("canvas");
        const removedLine = lines.splice(i, i);

        const rect = canvas.getBoundingClientRect();
        const x = Math.round(e.clientX - rect.left);
        const y = Math.round(e.clientY - rect.top);

        let ctx = canvas.getContext("2d");
        ctx.lineWidth = size + 2;

        const newLine = new Path2D();

        // clearTheBoard();

        newLine.moveTo(removedLine.startX, removedLine.startY);
        newLine.lineTo(x, y);

        ctx.stroke(newLine);

        const pressing = true;
        lines.push({ newLine, x, y, rowSize, pressing, ctx });
      }
    });
    canvas.addEventListener("mouseup", () => {
      if (lines[i].pressing) {
        lines[i].pressing = false;
        console.log("mouseup");
      }
    });
  }
}

// function mouseDownEventHandler(e) {
//   lines.forEach((line) => {
//     if (line && line.ctx.isPointInStroke(line.line, e.offsetX, e.offsetY)) {
//       const rect = canvas.getBoundingClientRect();
//       const x = Math.round(e.clientX - rect.left);
//       const y = Math.round(e.clientY - rect.top);

//       console.log("ESTOU ENTRANDO AQUI: ", x, y);
//       console.log(line.startX, " e ", line.startY);
//       if (x >= line.startX && x <= line.startX + 10) {
//         console.log("cliquei na ponta esquerda");
//         line.pressing = true;
//         line.left = true;
//       } else if (
//         x <= line.startX + line.rowSize &&
//         x >= line.startX + line.rowSize - 10
//       ) {
//         console.log("cliquei na ponta direita");
//         line.pressing = true;
//         line.right = true;
//       }
//     }
//   });
// }

function mouseMoveEventHandler(e) {
  for (let i = 0; i < lines.length; i++) {
    // if (lines[i].pressing) {
    //   console.log("Estou entrando aquiJK");
    //   let canvas = document.querySelector("canvas");
    //   const removedLine = lines.splice(i, i);
    //   const rect = canvas.getBoundingClientRect();
    //   const x = Math.round(e.clientX - rect.left);
    //   const y = Math.round(e.clientY - rect.top);
    //   let ctx = canvas.getContext("2d");
    //   ctx.lineWidth = size + 2;
    //   const newLine = new Path2D();
    //   // clearTheBoard();
    //   newLine.moveTo(removedLine.startX, removedLine.startY);
    //   newLine.lineTo(x, y);
    //   ctx.stroke(newLine);
    //   const pressing = true;
    //   lines.push({ newLine, x, y, rowSize, pressing, ctx });
    // }
  }
  // lines.forEach((line) => {
  //   if (line.pressing) {
  //   }
  // });
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

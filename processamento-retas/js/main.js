const GAPX = 20;
const GAPY = 1;
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
  size = 0,
  lineCap = "round"
) {
  let ctx = canvas.getContext("2d");
  ctx.lineWidth = size + 2;

  const line = new Path2D();

  line.moveTo(startX, startY);
  line.lineTo(startX + rowSize, startY);

  ctx.stroke(line);

  const pressing = false;
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
  });
}

function onMouseDownEventHandler(e) {
  for (let i = 0; i < lines.length; i++) {
    for (let j = 0; j < lines[i].length; j++) {
      console.log(lines);
      if (
        lines[i][j] &&
        lines[i][j].ctx.isPointInStroke(lines[i][j].line, e.offsetX, e.offsetY)
      ) {
        const rect = canvas.getBoundingClientRect();
        const x = Math.round(e.clientX - rect.left);
        const y = Math.round(e.clientY - rect.top);
        const halfX = (lines[i][j].endX - lines[i][j].startX) / 2;
        const halfY = (lines[i][j].endY - lines[i][j].startY) / 2;

        if (
          (x >= lines[i][j].startX && x <= lines[i][j].startX + GAPX) ||
          (x <= lines[i][j].startX && x >= lines[i][j].startX - GAPX)
        ) {
          console.log("ENTREI NO MOUSEDOWN");
          console.log("cliquei na ponta esquerda");
          lines[i][j].pressing = true;
          lines[i][j].left = true;
        } else if (
          (x <= lines[i][j].endX && x >= lines[i][j].endX - GAPX) ||
          (x >= lines[i][j].endX && x <= lines[i][j].endX + GAPX)
        ) {
          console.log("ENTREI NO MOUSEDOWN");
          console.log("cliquei na ponta direita");
          lines[i][j].pressing = true;
          lines[i][j].right = true;
        } else if (
          (x >= lines[i][j].startX + halfX &&
            lines[i][j].startX + halfX + GAPX) ||
          (x >= lines[i][j].startX + halfX &&
            x <= lines[i][j].startX + halfX - GAPX)
        ) {
          lines[i][j].pressing = true;
          lines[i][j].center = true;
        }
      }
    }
  }
}

function onMouseMoveEventHandler(e) {
  for (let i = 0; i < lines.length; i++) {
    for (let j = 0; j < lines[i].length; j++) {
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
        } else if (lines[i][j].center) {
          const sizeX = lines[i][j].startX - lines[i][j].endX;
          const sizeY = lines[i][j].startY - lines[i][j].endY;
          line.moveTo(x, y);
          line.lineTo(x + sizeX, y + sizeY);

          startX = x;
          startY = y;
          endX = x + sizeX;
          endY = y + sizeY;
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
    }
  }
  detectMousePosition(e);
}

function onMouseUpEventHandler(e) {
  for (let i = 0; i < lines.length; i++) {
    for (let j = 0; j < lines[i].length; j++) {
      if (lines[i][j].pressing) {
        console.log("ENTREI NO MOUSEUP");
        lines[i][j].pressing = false;
        lines[i][j].right = false;
        lines[i][j].left = false;
        lines[i][j].center = false;
        lines[i].splice(0, lines[i].length - 1);
        console.log(lines);
      }
    }
  }
}

function onContextMenuEventHandler(e) {
  e.preventDefault();
  for (let i = 0; i < lines.length; i++) {
    for (let j = 0; j < lines[i].length; j++) {
      if (
        lines[i][j] &&
        lines[i][j].ctx.isPointInStroke(lines[i][j].line, e.offsetX, e.offsetY)
      ) {
        const rect = canvas.getBoundingClientRect();
        const x = Math.round(e.clientX - rect.left);
        const y = Math.round(e.clientY - rect.top);

        const halfX = (lines[i][j].endX - lines[i][j].startX) / 2;
        const halfY = (lines[i][j].endY - lines[i][j].startY) / 2;

        // Este meio indica o meio da linha
        if (
          (x >= lines[i][j].startX + halfX &&
            lines[i][j].startX + halfX + GAPX) ||
          (x >= lines[i][j].startX + halfX &&
            x <= lines[i][j].startX + halfX - GAPX)
        ) {
          console.log("ENTREI NO BOTÃO DIREITO");
          let ctx = canvas.getContext("2d");

          const pressing = false;
          let line = new Path2D();

          clearTheBoard();
          drawNonUsedLines(i, ctx);

          line.moveTo(lines[i][j].startX, lines[i][j].startY);
          line.lineTo(lines[i][j].startX + halfX, lines[i][j].startY + halfY);

          ctx.strokeStyle = "#FF0000";
          ctx.stroke(line);

          startX = lines[i][j].startX;
          startY = lines[i][j].startY;

          endX = lines[i][j].startX + halfX;
          endY = lines[i][j].startY + halfY;

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
          console.log("halfX: ", halfX);

          line.moveTo(lines[i][j].startX + halfX, lines[i][j].startY + halfY);
          line.lineTo(lines[i][j].endX, lines[i][j].endY);

          ctx.strokeStyle = "#000000";
          ctx.stroke(line);

          startX = lines[i][j].startX + halfX;
          startY = lines[i][j].startY + halfY;

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
    }
  }
}

let lines = [[]];
let endX, endY, startX, startY;
const size = 5;

function main(e) {
  let canvas = document.querySelector("canvas");
  let ctx = canvas.getContext("2d");
  canvas = drawBoard(canvas);

  const rect = canvas.getBoundingClientRect();
  const centerX = Math.round(canvas.width / 2);
  const centerY = Math.round(canvas.height / 2);

  const rowSize = 100;
  drawMainLine(centerX, centerY, rowSize, lines, size);
  // possibleEvents(canvas);
}

function detectMousePosition(e) {
  let canvas = document.querySelector("canvas");
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  console.log();
  document.getElementById("coordenadas").innerHTML = `x:${Math.round(
    x
  )}:y${Math.round(y)}`;
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
        console.log("ESQUECI DE TROCAR O CONOLSE.LOG, FOI MAL PELO COMMIT");
      }
    }
  }
}

function deleteOlderLines() {
  for (let i = 0; i < lines.length; i++) {
    lines[i].splice(0, lines[i].length);
  }
  lines = [[]];
}

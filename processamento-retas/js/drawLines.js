function insereInArrayLines(
  flag,
  lines,
  line,
  startX,
  startY,
  endX,
  endY,
  pressing,
  ctx
) {
  if (flag == 0) {
    lines[0].push({
      line,
      startX,
      startY,
      endX,
      endY,
      pressing,
      ctx,
    });
  } else {
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
  }
}

function drawOneLine() {
  console.log("ENTREI NO DRAWONELINE");
  if (lines.length > 0) {
    clearTheBoard();
    deleteOlderLines();
  }
  let ctx = canvas.getContext("2d");
  ctx.lineWidth = size + 2;

  startX = canvas.width / 2;
  startY = canvas.height / 2;
  const rowSize = 100;

  const line = new Path2D();

  line.moveTo(startX, startY);
  line.lineTo(startX + rowSize, startY);

  ctx.stroke(line);

  const pressing = false;
  endX = startX + rowSize;
  endY = startY;

  insereInArrayLines(0, lines, line, startX, startY, endX, endY, pressing, ctx);
  console.log(lines);
}

/* DRAW THE AMOUNT OF LINES */
function drawThreeLines() {
  if (lines.length > 0) {
    clearTheBoard();
    deleteOlderLines();
  }
  let ctx = canvas.getContext("2d");
  const pressing = false;
  ctx.lineWidth = size + 2;

  const startXOrig = canvas.width / 2;
  const startYOrig = canvas.height / 2;
  const rowSize = 100;

  let line = new Path2D();

  line.moveTo(startXOrig - rowSize, startYOrig);
  line.lineTo(startXOrig + rowSize, startYOrig);

  endX = startXOrig + rowSize;
  endY = startYOrig;

  startX = startXOrig - rowSize;
  startY = startYOrig;

  ctx.stroke(line);
  insereInArrayLines(0, lines, line, startX, startY, endX, endY, pressing, ctx);

  line = new Path2D();

  line.moveTo(startXOrig + rowSize, startYOrig);
  line.lineTo(startXOrig, startYOrig - rowSize);

  endX = startXOrig + rowSize;
  endY = startYOrig;

  startX = startXOrig;
  startY = startYOrig - rowSize;

  ctx.stroke(line);
  insereInArrayLines(1, lines, line, startX, startY, endX, endY, pressing, ctx);

  line = new Path2D();

  line.moveTo(startXOrig, startYOrig - rowSize);
  line.lineTo(startXOrig - rowSize, startYOrig);

  endX = startXOrig - rowSize;
  endY = startYOrig;

  startX = startXOrig;
  startY = startYOrig - rowSize;

  ctx.stroke(line);
  insereInArrayLines(1, lines, line, startX, startY, endX, endY, pressing, ctx);
}

function drawFourLines() {
  if (lines.length > 0) {
    clearTheBoard();
    deleteOlderLines();
  }
  console.log(lines);
  let ctx = canvas.getContext("2d");
  ctx.lineWidth = size + 2;

  const startXOrig = canvas.width / 2;
  const startYOrig = canvas.height / 2;
  const rowSize = 100;
  const pressing = false;

  let line = new Path2D();

  line.moveTo(startXOrig - rowSize, startYOrig);
  line.lineTo(startXOrig + rowSize, startYOrig);

  endX = startXOrig + rowSize;
  endY = startYOrig;

  startX = startXOrig - rowSize;
  startY = startYOrig;

  ctx.stroke(line);
  insereInArrayLines(0, lines, line, startX, startY, endX, endY, pressing, ctx);

  line = new Path2D();

  line.moveTo(startXOrig - rowSize, startYOrig);
  line.lineTo(startXOrig - rowSize, startYOrig - rowSize);

  endX = startXOrig - rowSize;
  endY = startYOrig - rowSize;

  startX = startXOrig - rowSize;
  startY = startYOrig;

  ctx.stroke(line);
  insereInArrayLines(1, lines, line, startX, startY, endX, endY, pressing, ctx);

  line = new Path2D();

  line.moveTo(startXOrig + rowSize, startYOrig);
  line.lineTo(startXOrig + rowSize, startYOrig - rowSize);

  endX = startXOrig + rowSize;
  endY = startYOrig - rowSize;

  startX = startXOrig + rowSize;
  startY = startYOrig;

  ctx.stroke(line);
  insereInArrayLines(1, lines, line, startX, startY, endX, endY, pressing, ctx);
  line = new Path2D();

  line.moveTo(startXOrig + rowSize, startYOrig - rowSize);
  line.lineTo(startXOrig - rowSize, startYOrig - rowSize);

  endX = startXOrig - rowSize;
  endY = startYOrig - rowSize;

  startX = startXOrig + rowSize;
  startY = startYOrig - rowSize;

  ctx.stroke(line);
  insereInArrayLines(1, lines, line, startX, startY, endX, endY, pressing, ctx);
}

function drawFiveLines() {
  if (lines.length > 0) {
    clearTheBoard();
    deleteOlderLines();
  }
  let ctx = canvas.getContext("2d");
  ctx.lineWidth = size + 2;
  const pressing = false;

  const startXOrig = canvas.width / 2;
  const startYOrig = canvas.height / 2;
  const rowSize = 100;

  let line = new Path2D();

  line.moveTo(startXOrig - rowSize, startYOrig);
  line.lineTo(startXOrig, startYOrig - rowSize);

  endX = startXOrig;
  endY = startYOrig - rowSize;

  startX = startXOrig - rowSize;
  startY = startYOrig;

  ctx.stroke(line);
  insereInArrayLines(0, lines, line, startX, startY, endX, endY, pressing, ctx);

  line = new Path2D();

  line.moveTo(startXOrig, startYOrig - rowSize);
  line.lineTo(startXOrig + rowSize, startYOrig - rowSize);

  endX = startXOrig + rowSize;
  endY = startYOrig - rowSize;

  startX = startXOrig;
  startY = startYOrig - rowSize;

  ctx.stroke(line);
  insereInArrayLines(1, lines, line, startX, startY, endX, endY, pressing, ctx);

  line = new Path2D();

  line.moveTo(startXOrig + rowSize, startYOrig - rowSize);
  line.lineTo(startXOrig + rowSize + rowSize, startYOrig);

  endX = startXOrig + rowSize + rowSize;
  endY = startYOrig;

  startX = startXOrig + rowSize;
  startY = startYOrig - rowSize;

  ctx.stroke(line);
  insereInArrayLines(1, lines, line, startX, startY, endX, endY, pressing, ctx);

  line = new Path2D();

  line.moveTo(startXOrig + rowSize / 2, startYOrig + rowSize + rowSize);
  line.lineTo(startXOrig + rowSize + rowSize, startYOrig);

  endX = startXOrig + rowSize + rowSize;
  endY = startYOrig;

  startX = startXOrig + rowSize / 2;
  startY = startYOrig + rowSize + rowSize;

  ctx.stroke(line);
  insereInArrayLines(1, lines, line, startX, startY, endX, endY, pressing, ctx);

  line = new Path2D();

  line.moveTo(startXOrig - rowSize, startYOrig);
  line.lineTo(startXOrig + rowSize / 2, startYOrig + rowSize + rowSize);

  endX = startXOrig + rowSize / 2;
  endY = startYOrig + rowSize + rowSize;

  startX = startXOrig - rowSize;
  startY = startYOrig;

  ctx.stroke(line);
  insereInArrayLines(1, lines, line, startX, startY, endX, endY, pressing, ctx);
}

function drawSixLines() {
  if (lines.length > 0) {
    clearTheBoard();
    deleteOlderLines();
  }

  let ctx = canvas.getContext("2d");
  ctx.lineWidth = size + 2;

  const startXOrig = canvas.width / 2;
  const startYOrig = canvas.height / 2;
  const rowSize = 100;
  const pressing = false;

  let line = new Path2D();

  line.moveTo(startXOrig - rowSize, startYOrig);
  line.lineTo(startXOrig, startYOrig - rowSize);

  endX = startXOrig;
  endY = startYOrig - rowSize;

  startX = startXOrig - rowSize;
  startY = startYOrig;

  ctx.stroke(line);
  insereInArrayLines(0, lines, line, startX, startY, endX, endY, pressing, ctx);

  line = new Path2D();

  line.moveTo(startXOrig, startYOrig - rowSize);
  line.lineTo(startXOrig + rowSize, startYOrig - rowSize);

  endX = startXOrig + rowSize;
  endY = startYOrig - rowSize;

  startX = startXOrig;
  startY = startYOrig - rowSize;

  ctx.stroke(line);
  insereInArrayLines(1, lines, line, startX, startY, endX, endY, pressing, ctx);

  line = new Path2D();

  line.moveTo(startXOrig + rowSize, startYOrig - rowSize);
  line.lineTo(startXOrig + rowSize + rowSize, startYOrig);

  endX = startXOrig + rowSize + rowSize;
  endY = startYOrig;

  startX = startXOrig + rowSize;
  startY = startYOrig - rowSize;

  ctx.stroke(line);
  insereInArrayLines(1, lines, line, startX, startY, endX, endY, pressing, ctx);

  line = new Path2D();

  line.moveTo(startXOrig + rowSize + rowSize, startYOrig);
  line.lineTo(startXOrig + rowSize, startYOrig + rowSize);

  endX = startXOrig + rowSize;
  endY = startYOrig + rowSize;

  startX = startXOrig + rowSize + rowSize;
  startY = startYOrig;

  ctx.stroke(line);
  insereInArrayLines(1, lines, line, startX, startY, endX, endY, pressing, ctx);

  line = new Path2D();

  line.moveTo(startXOrig + rowSize, startYOrig + rowSize);
  line.lineTo(startXOrig, startYOrig + rowSize);

  endX = startXOrig;
  endY = startYOrig + rowSize;

  startX = startXOrig + rowSize;
  startY = startYOrig + rowSize;

  ctx.stroke(line);
  insereInArrayLines(1, lines, line, startX, startY, endX, endY, pressing, ctx);

  line = new Path2D();

  line.moveTo(startXOrig, startYOrig + rowSize);
  line.lineTo(startXOrig - rowSize, startYOrig);

  endX = startXOrig - rowSize;
  endY = startYOrig;

  startX = startXOrig;
  startY = startYOrig + rowSize;

  ctx.stroke(line);
  insereInArrayLines(1, lines, line, startX, startY, endX, endY, pressing, ctx);
}

function drawSevenLines() {
  if (lines.length > 0) {
    clearTheBoard();
    deleteOlderLines();
  }

  let ctx = canvas.getContext("2d");
  ctx.lineWidth = size + 2;

  const startXOrig = canvas.width / 2;
  const startYOrig = canvas.height / 2;
  const rowSize = 100;
  const pressing = false;

  let line = new Path2D();

  line.moveTo(startXOrig - rowSize, startYOrig);
  line.lineTo(startXOrig, startYOrig - rowSize);

  endX = startXOrig;
  endY = startYOrig - rowSize;

  startX = startXOrig - rowSize;
  startY = startYOrig;

  ctx.stroke(line);
  insereInArrayLines(0, lines, line, startX, startY, endX, endY, pressing, ctx);

  line = new Path2D();

  line.moveTo(startXOrig, startYOrig - rowSize);
  line.lineTo(startXOrig + rowSize, startYOrig - rowSize);

  endX = startXOrig + rowSize;
  endY = startYOrig - rowSize;

  startX = startXOrig;
  startY = startYOrig - rowSize;

  ctx.stroke(line);
  insereInArrayLines(1, lines, line, startX, startY, endX, endY, pressing, ctx);

  line = new Path2D();

  line.moveTo(startXOrig + rowSize, startYOrig - rowSize);
  line.lineTo(startXOrig + rowSize + rowSize, startYOrig);

  endX = startXOrig + rowSize + rowSize;
  endY = startYOrig;

  startX = startXOrig + rowSize;
  startY = startYOrig - rowSize;

  ctx.stroke(line);
  insereInArrayLines(1, lines, line, startX, startY, endX, endY, pressing, ctx);

  line = new Path2D();

  line.moveTo(startXOrig + rowSize + rowSize, startYOrig);
  line.lineTo(startXOrig + rowSize + rowSize / 2, startYOrig + rowSize);

  endX = startXOrig + rowSize + rowSize / 2;
  endY = startYOrig + rowSize;

  startX = startXOrig + rowSize + rowSize;
  startY = startYOrig;

  ctx.stroke(line);
  insereInArrayLines(1, lines, line, startX, startY, endX, endY, pressing, ctx);

  line = new Path2D();

  line.moveTo(startXOrig + rowSize + rowSize / 2, startYOrig + rowSize);
  line.lineTo(startXOrig + rowSize / 2, startY + rowSize + rowSize / 2);

  endX = startXOrig + rowSize / 2;
  endY = startYOrig + rowSize + rowSize / 2;

  startX = startXOrig + rowSize + rowSize / 2;
  startY = startYOrig + rowSize;

  ctx.stroke(line);
  insereInArrayLines(1, lines, line, startX, startY, endX, endY, pressing, ctx);

  line = new Path2D();

  line.moveTo(startXOrig + rowSize / 2, startYOrig + rowSize + rowSize / 2);
  line.lineTo(startXOrig - rowSize / 2, startYOrig + rowSize);

  endX = startXOrig - rowSize / 2;
  endY = startYOrig + rowSize;

  startX = startXOrig + rowSize / 2;
  startY = startYOrig + rowSize + rowSize / 2;

  ctx.stroke(line);
  insereInArrayLines(1, lines, line, startX, startY, endX, endY, pressing, ctx);

  line = new Path2D();

  line.moveTo(startXOrig - rowSize / 2, startYOrig + rowSize);
  line.lineTo(startXOrig - rowSize, startYOrig);

  endX = startXOrig - rowSize;
  endY = startYOrig;

  startX = startXOrig - rowSize / 2;
  startY = startYOrig + rowSize;

  ctx.stroke(line);
  insereInArrayLines(1, lines, line, startX, startY, endX, endY, pressing, ctx);
}

function drawEightLines() {
  if (lines.length > 0) {
    clearTheBoard();
    deleteOlderLines();
  }

  let ctx = canvas.getContext("2d");
  ctx.lineWidth = size + 2;

  const startXOrig = canvas.width / 2;
  const startYOrig = canvas.height / 2;
  const rowSize = 100;
  const pressing = false;

  let line = new Path2D();

  line.moveTo(startXOrig - rowSize, startYOrig);
  line.lineTo(startXOrig - rowSize / 2, startYOrig - rowSize);

  endX = startXOrig - rowSize / 2;
  endY = startYOrig - rowSize;

  startX = startXOrig - rowSize;
  startY = startYOrig;

  ctx.stroke(line);
  insereInArrayLines(0, lines, line, startX, startY, endX, endY, pressing, ctx);

  line = new Path2D();

  line.moveTo(startXOrig - rowSize / 2, startYOrig - rowSize);
  line.lineTo(
    startXOrig + rowSize - rowSize / 2,
    startYOrig - rowSize - rowSize / 2
  );

  endX = startXOrig + rowSize - rowSize / 2;
  endY = startYOrig - rowSize - rowSize / 2;

  startX = startXOrig - rowSize / 2;
  startY = startYOrig - rowSize;

  ctx.stroke(line);
  insereInArrayLines(1, lines, line, startX, startY, endX, endY, pressing, ctx);

  line = new Path2D();

  line.moveTo(
    startXOrig + rowSize - rowSize / 2,
    startYOrig - rowSize - rowSize / 2
  );
  line.lineTo(startXOrig + rowSize + rowSize / 2, startYOrig - rowSize);

  endX = startXOrig + rowSize + rowSize / 2;
  endY = startYOrig - rowSize;

  startX = startXOrig + rowSize - rowSize / 2;
  startY = startYOrig - rowSize - rowSize / 2;

  ctx.stroke(line);
  insereInArrayLines(1, lines, line, startX, startY, endX, endY, pressing, ctx);

  line = new Path2D();

  line.moveTo(startXOrig + rowSize + rowSize / 2, startYOrig - rowSize);
  line.lineTo(startXOrig + rowSize + rowSize, startYOrig);

  endX = startXOrig + rowSize + rowSize;
  endY = startYOrig;

  startX = startXOrig + rowSize + rowSize / 2;
  startY = startYOrig - rowSize;

  ctx.stroke(line);
  insereInArrayLines(1, lines, line, startX, startY, endX, endY, pressing, ctx);

  line = new Path2D();

  line.moveTo(startXOrig + rowSize + rowSize, startYOrig);
  line.lineTo(startXOrig + rowSize + rowSize / 2, startYOrig + rowSize);

  endX = startXOrig + rowSize + rowSize / 2;
  endY = startYOrig + rowSize;

  startX = startXOrig + rowSize + rowSize;
  startY = startYOrig;

  ctx.stroke(line);
  insereInArrayLines(1, lines, line, startX, startY, endX, endY, pressing, ctx);

  line = new Path2D();

  line.moveTo(startXOrig + rowSize + rowSize / 2, startYOrig + rowSize);
  line.lineTo(startXOrig + rowSize / 2, startYOrig + rowSize + rowSize / 2);

  endX = startXOrig + rowSize / 2;
  endY = startYOrig + rowSize + rowSize / 2;

  startX = startXOrig + rowSize + rowSize / 2;
  startY = startYOrig + rowSize;

  ctx.stroke(line);
  insereInArrayLines(1, lines, line, startX, startY, endX, endY, pressing, ctx);

  line = new Path2D();

  line.moveTo(startXOrig + rowSize / 2, startYOrig + rowSize + rowSize / 2);
  line.lineTo(startXOrig - rowSize / 2, startYOrig + rowSize);

  endX = startXOrig - rowSize / 2;
  endY = startYOrig + rowSize;

  startX = startXOrig + rowSize / 2;
  startY = startYOrig + rowSize + rowSize / 2;

  ctx.stroke(line);
  insereInArrayLines(1, lines, line, startX, startY, endX, endY, pressing, ctx);

  line = new Path2D();

  line.moveTo(startXOrig - rowSize / 2, startYOrig + rowSize);
  line.lineTo(startXOrig - rowSize, startYOrig);

  endX = startXOrig - rowSize;
  endY = startYOrig;

  startX = startXOrig - rowSize / 2;
  startY = startYOrig + rowSize;

  ctx.stroke(line);
  insereInArrayLines(1, lines, line, startX, startY, endX, endY, pressing, ctx);
}

function drawOneLine() {
  if (lines) clearTheBoard();
  let ctx = canvas.getContext("2d");
  ctx.lineWidth = size;

  startX = canvas.width / 2;
  startY = canvas.height / 2;
  const rowSize = 100;

  const line = new Path2D();

  line.moveTo(startX - 50, startY);
  line.lineTo(startX + rowSize, startY);

  ctx.stroke(line);

  const pressing = false;
  lines.push({ line, startX, startY, rowSize, pressing, ctx });
}

/* DRAW THE AMOUNT OF LINES */
function drawThreeLines() {
  if (lines) clearTheBoard();
  let ctx = canvas.getContext("2d");
  ctx.lineWidth = size;

  startX = canvas.width / 2;
  startY = canvas.height / 2;
  const rowSize = 100;

  const line = new Path2D();

  line.moveTo(startX - rowSize, startY);
  line.lineTo(startX + rowSize, startY);

  line.moveTo(startX - rowSize, startY);
  line.lineTo(startX, startY - rowSize);

  line.moveTo(startX + rowSize, startY);
  line.lineTo(startX, startY - rowSize);

  ctx.stroke(line);

  const pressing = false;
  lines.push({ line, startX, startY, rowSize, pressing, ctx });
}

function drawFourLines() {
  if (lines) clearTheBoard();
  let ctx = canvas.getContext("2d");
  ctx.lineWidth = size;

  startX = canvas.width / 2;
  startY = canvas.height / 2;
  const rowSize = 100;

  const line = new Path2D();

  line.moveTo(startX - rowSize, startY);
  line.lineTo(startX + rowSize, startY);

  line.moveTo(startX - rowSize, startY);
  line.lineTo(startX - rowSize, startY - rowSize);

  line.moveTo(startX + rowSize, startY);
  line.lineTo(startX + rowSize, startY - rowSize);

  line.moveTo(startX - rowSize, startY - rowSize);
  line.lineTo(startX + rowSize, startY - rowSize);

  ctx.stroke(line);

  const pressing = false;
  lines.push({ line, startX, startY, rowSize, pressing, ctx });
}

function drawFiveLines() {
  if (lines) clearTheBoard();
  let ctx = canvas.getContext("2d");
  ctx.lineWidth = size;

  startX = canvas.width / 2;
  startY = canvas.height / 2;
  const rowSize = 100;

  const line = new Path2D();

  line.moveTo(startX - rowSize, startY);
  line.lineTo(startX, startY - rowSize);

  line.moveTo(startX, startY - rowSize);
  line.lineTo(startX + rowSize, startY - rowSize);

  line.moveTo(startX + rowSize, startY - rowSize);
  line.lineTo(startX + rowSize + rowSize, startY);

  line.moveTo(startX + rowSize + rowSize, startY);
  line.lineTo(startX + rowSize / 2, startY + rowSize + rowSize);

  line.moveTo(startX + rowSize / 2, startY + rowSize + rowSize);
  line.lineTo(startX - rowSize, startY);

  ctx.stroke(line);

  const pressing = false;
  lines.push({ line, startX, startY, rowSize, pressing, ctx });
}

function drawSixLines() {
  if (lines) clearTheBoard();
  let ctx = canvas.getContext("2d");
  ctx.lineWidth = size;

  startX = canvas.width / 2;
  startY = canvas.height / 2;
  const rowSize = 100;

  const line = new Path2D();

  line.moveTo(startX - rowSize, startY);
  line.lineTo(startX, startY - rowSize);

  line.moveTo(startX, startY - rowSize);
  line.lineTo(startX + rowSize, startY - rowSize);

  line.moveTo(startX + rowSize, startY - rowSize);
  line.lineTo(startX + rowSize + rowSize, startY);

  line.moveTo(startX + rowSize + rowSize, startY);
  line.lineTo(startX + rowSize, startY + rowSize);

  line.moveTo(startX + rowSize, startY + rowSize);
  line.lineTo(startX, startY + rowSize);

  line.moveTo(startX, startY + rowSize);
  line.lineTo(startX - rowSize, startY);

  ctx.stroke(line);

  const pressing = false;
  lines.push({ line, startX, startY, rowSize, pressing, ctx });
}

function drawSevenLines() {
  if (lines) clearTheBoard();

  let ctx = canvas.getContext("2d");
  ctx.lineWidth = size;

  startX = canvas.width / 2;
  startY = canvas.height / 2;
  const rowSize = 100;

  const line = new Path2D();

  line.moveTo(startX - rowSize, startY);
  line.lineTo(startX, startY - rowSize);

  line.moveTo(startX, startY - rowSize);
  line.lineTo(startX + rowSize, startY - rowSize);

  line.moveTo(startX + rowSize, startY - rowSize);
  line.lineTo(startX + rowSize + rowSize, startY);

  line.moveTo(startX + rowSize + rowSize, startY);
  line.lineTo(startX + rowSize + rowSize / 2, startY + rowSize);

  line.moveTo(startX + rowSize + rowSize / 2, startY + rowSize);
  line.lineTo(startX + rowSize / 2, startY + rowSize + rowSize / 2);

  line.moveTo(startX + rowSize / 2, startY + rowSize + rowSize / 2);
  line.lineTo(startX - rowSize / 2, startY + rowSize);

  line.moveTo(startX - rowSize / 2, startY + rowSize);
  line.lineTo(startX - rowSize, startY);

  ctx.stroke(line);

  const pressing = false;
  lines.push({ line, startX, startY, rowSize, pressing, ctx });
}

function drawEightLines() {
  if (lines) clearTheBoard();

  let ctx = canvas.getContext("2d");
  ctx.lineWidth = size;

  startX = canvas.width / 2;
  startY = canvas.height / 2;
  const rowSize = 100;

  const line = new Path2D();

  line.moveTo(startX - rowSize, startY);
  line.lineTo(startX - rowSize / 2, startY - rowSize);

  line.moveTo(startX - rowSize / 2, startY - rowSize);
  line.lineTo(startX + rowSize - rowSize / 2, startY - rowSize - rowSize / 2);

  line.moveTo(startX + rowSize - rowSize / 2, startY - rowSize - rowSize / 2);
  line.lineTo(startX + rowSize + rowSize / 2, startY - rowSize);

  line.moveTo(startX + rowSize + rowSize / 2, startY - rowSize);
  line.lineTo(startX + rowSize + rowSize, startY);

  line.moveTo(startX + rowSize + rowSize, startY);
  line.lineTo(startX + rowSize + rowSize / 2, startY + rowSize);

  line.moveTo(startX + rowSize + rowSize / 2, startY + rowSize);
  line.lineTo(startX + rowSize / 2, startY + rowSize + rowSize / 2);

  line.moveTo(startX + rowSize / 2, startY + rowSize + rowSize / 2);
  line.lineTo(startX - rowSize / 2, startY + rowSize);

  line.moveTo(startX - rowSize / 2, startY + rowSize);
  line.lineTo(startX - rowSize, startY);

  ctx.stroke(line);

  const pressing = false;
  lines.push({ line, startX, startY, rowSize, pressing, ctx });
}

function clearTheBoard() {
  const canvas = document.querySelector("canvas");
  lines.forEach((line) => {
    line.ctx.clearRect(0, 0, canvas.width, canvas.height);
  });
}

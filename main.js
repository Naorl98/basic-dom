const ball = document.getElementById("ball")

const moveRight = function () {
  const current = parseInt(ball.style.left) || 0
  ball.style.left = (current + 15) + "px"
}

const moveLeft = function () {
  const current = parseInt(ball.style.left) || 0
  ball.style.left = (current - 15) + "px"
}

const moveUp = function () {
  const current = parseInt(ball.style.top) || 0
  ball.style.top = (current - 15) + "px"
}

const moveDown = function () {
  const current = parseInt(ball.style.top) || 0
  ball.style.top = (current + 15) + "px"
}

document.getElementById("right").onclick = moveRight
document.getElementById("left").onclick = moveLeft
document.getElementById("up").onclick = moveUp
document.getElementById("down").onclick = moveDown



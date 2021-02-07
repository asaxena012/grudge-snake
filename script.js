import {
  update as updateSnake,
  draw as drawSnake,
  snakeSpeed,
  getSnakeHead,
  intersection,
} from "./snake.js";

import { update as updateFood, draw as drawFood } from "./food.js";

const gridSize = 11;
let lastRender = 0;
const gameBoard = document.querySelector(".board");
let gameOver = false;

function main(currentTime) {
  if (gameOver) {
    if (confirm("Self grudge is not good, press OK to restart")) {
      window.location = "./";
    }
    return;
  }

  window.requestAnimationFrame(main);
  let timeSinceLastRender = (currentTime - lastRender) / 1000;

  if (timeSinceLastRender < 1 / snakeSpeed) return;

  lastRender = currentTime;
  console.log("rendering");

  update();
  draw();
  checkDefeat();
}

window.requestAnimationFrame(main);

function update() {
  updateSnake();
  updateFood();
}

function draw() {
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
  drawFood(gameBoard);
}

function checkDefeat() {
  gameOver = outsideGrid(getSnakeHead()) || intersection();
}

function outsideGrid(pos) {
  return pos.x > gridSize || pos.x < 1 || pos.y > gridSize || pos.y < 1;
}

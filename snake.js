import { getInputDirection } from "./input.js";

export const snakeSpeed = 7;

let snakeBody = [{ x: 11, y: 11 }];

export function update() {
  const inputDirection = getInputDirection();

  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
  }

  snakeBody[0].x += inputDirection.x;
  snakeBody[0].y += inputDirection.y;
}

export function draw(gameBoard) {
  snakeBody.forEach((segment) => {
    const snakeEl = document.createElement("div");
    snakeEl.style.gridRowStart = segment.y;
    snakeEl.style.gridColumnStart = segment.x;
    snakeEl.classList.add("snake");
    gameBoard.appendChild(snakeEl);
  });
}

export function onSnake(food) {
  //Check if head of snake is on food
  return snakeBody.some((currentEl, index) => {
    return currentEl.x == food.x && currentEl.y == food.y;
  });
}

export function expandSnake() {
  snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
}

export function getSnakeHead() {
  return snakeBody[0];
}

export function intersection() {
  if (snakeBody.length < 3) return false;
  let pos = snakeBody[0];

  for (let i = 1; i < snakeBody.length; i++) {
    if (pos.x == snakeBody[i].x && pos.y == snakeBody[i].y) return true;
  }
}

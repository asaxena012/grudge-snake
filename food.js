import { onSnake, expandSnake } from "./snake.js";
const gridSize = 11;
let food = getRandomPos();

export function update() {
  if (onSnake(food)) {
    food = getRandomPos();
    expandSnake();
  }
}

export function draw(gameBoard) {
  const foodEl = document.createElement("div");
  foodEl.style.gridColumnStart = food.x;
  foodEl.style.gridRowStart = food.y;
  foodEl.classList.add("food");
  gameBoard.appendChild(foodEl);
}

function getRandomPos() {
  let newPos;
  while (newPos == null || onSnake(newPos)) {
    newPos = randomGridPos();
  }

  return newPos;
}

function randomGridPos() {
  return {
    x: Math.floor(Math.random() * gridSize) + 1,
    y: Math.floor(Math.random() * gridSize) + 1,
  };
}

let inputDirection = { x: 0, y: 0 };
let prevInputDirection = { x: 0, y: 0 };

window.addEventListener("keydown", (ev) => {
  switch (ev.key) {
    case "ArrowUp":
      if (prevInputDirection.y !== 0) return;
      inputDirection = { x: 0, y: -1 };
      break;

    case "ArrowDown":
      if (prevInputDirection.y !== 0) return;
      inputDirection = { x: 0, y: 1 };
      break;

    case "ArrowLeft":
      if (prevInputDirection.x !== 0) return;
      inputDirection = { x: -1, y: 0 };
      break;

    case "ArrowRight":
      if (prevInputDirection.x !== 0) return;
      inputDirection = { x: 1, y: 0 };
  }
});

export function getInputDirection() {
  prevInputDirection = inputDirection;
  return inputDirection;
}

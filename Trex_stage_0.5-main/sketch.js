
// Initialize Matter.js
const { Engine, Render, Runner, World, Bodies, Body, Events } = Matter;

// Create an engine
const engine = Engine.create();

// Configure rendering
const render = Render.create({
  element: document.getElementById('gameCanvas'),
  engine: engine,
  options: {
    width: window.innerWidth,
    height: window.innerHeight,
    wireframes: false
  }
});

// Create a runner
const runner = Runner.create();

// Add the renderer to the page
Render.run(render);

// Add the runner to the engine
Runner.run(runner, engine);

// Create walls
const walls = [
  Bodies.rectangle(window.innerWidth / 2, 0, window.innerWidth, 20, { isStatic: true }), // top
  Bodies.rectangle(window.innerWidth / 2, window.innerHeight, window.innerWidth, 20, { isStatic: true }), // bottom
  Bodies.rectangle(0, window.innerHeight / 2, 20, window.innerHeight, { isStatic: true }), // left
  Bodies.rectangle(window.innerWidth, window.innerHeight / 2, 20, window.innerHeight, { isStatic: true }) // right
];

// Add walls to the world
World.add(engine.world, walls);

// Create a ball
const ball = Bodies.circle(100, 100, 20, { restitution: 0.5 });
World.add(engine.world, ball);

// Add key press event listener
document.addEventListener('keydown', event => {
  const { x, y } = ball.velocity;

  switch (event.keyCode) {
    case 38: // up arrow
      Body.setVelocity(ball, { x, y: y - 5 });
      break;
    case 40: // down arrow
      Body.setVelocity(ball, { x, y: y + 5 });
      break;
    case 37: // left arrow
      Body.setVelocity(ball, { x: x - 5, y });
      break;
    case 39: // right arrow
      Body.setVelocity(ball, { x: x + 5, y });
      break;
  }
});
//Copoyright 2024 By Kush Verma
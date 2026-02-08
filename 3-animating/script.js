const canvas = document.querySelector("canvas");
const paintbrush = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Circle {
  constructor(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
  }

  draw() {
    paintbrush.beginPath();
    paintbrush.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    paintbrush.strokeStyle = "black";
    paintbrush.stroke();
  }

  update() {
    // bounce on X axis
    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }

    // bounce on Y axis
    if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  }
}

// create circles
const circleArray = [];

for (let i = 0; i < 20; i++) {
  const radius = 30;
  const x = Math.random() * (canvas.width - radius * 2) + radius;
  const y = Math.random() * (canvas.height - radius * 2) + radius;
  const dx = (Math.random() - 0.5) * 5;
  const dy = (Math.random() - 0.5) * 5;

  circleArray.push(new Circle(x, y, dx, dy, radius));
}

function animate() {
  requestAnimationFrame(animate);
  paintbrush.clearRect(0, 0, canvas.width, canvas.height);

  circleArray.forEach(circle => circle.update());
}

animate();

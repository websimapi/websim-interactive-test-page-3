const colors = ['#4CAF50', '#2196F3', '#F44336', '#FFC107', '#9C27B0'];
let colorIndex = 0;

const shapes = document.querySelectorAll('.shape');
const colorBtn = document.getElementById('colorBtn');
const shapeBtn = document.getElementById('shapeBtn');

colorBtn.addEventListener('click', () => {
  colorIndex = (colorIndex + 1) % colors.length;
  shapes.forEach(shape => {
    shape.style.fill = colors[colorIndex];
  });
});

shapeBtn.addEventListener('click', () => {
  shapes.forEach(shape => {
    shape.classList.toggle('animated');
  });
});

// Add initial animation delay to create wave effect
shapes.forEach((shape, index) => {
  shape.style.animationDelay = `${index * 0.2}s`;
});
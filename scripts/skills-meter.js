document.addEventListener("DOMContentLoaded", function () {
  const circles = document.querySelectorAll(".meter-container .circle");

  circles.forEach(function (circle) {
    const value = circle.getAttribute("data-value");
    const meter = circle.previousElementSibling;
    const meterWidth = meter.offsetWidth;
    const circlePosition = (value / 100) * meterWidth - 10;

    circle.style.left = `${circlePosition}px`;
  });
});

const circles = document.querySelectorAll(".skills-item .circle");

function updateCirclePosition() {
  circles.forEach(function (circle) {
    const value = circle.getAttribute("data-value");
    const meter = circle.previousElementSibling;
    const meterWidth = meter.offsetWidth;
    const circlePosition = (value / 100) * meterWidth - 10;

    circle.style.left = `${circlePosition}px`;
  });
}

// Initial position update
updateCirclePosition();

// Update position on window resize
window.addEventListener("resize", updateCirclePosition);

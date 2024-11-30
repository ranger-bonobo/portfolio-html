document.addEventListener("DOMContentLoaded", function () {
  const circles = document.querySelectorAll(".meter-container .circle");

  circles.forEach(function (circle) {
    const value = circle.getAttribute("data-value");
    const meter = circle.previousElementSibling;
    const meterWidth = meter.offsetWidth;
    const circlePosition = (value / 100) * meterWidth;

    circle.style.left = `${circlePosition - 10}px`;
  });
});

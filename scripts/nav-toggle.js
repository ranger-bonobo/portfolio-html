document.addEventListener("DOMContentLoaded", function () {
  const navButton = document.querySelector(".nav-button");
  const navList = document.querySelector(".nav-list");
  const header = document.querySelector(".header");
  const navItems = document.querySelectorAll(".nav-item a");

  navButton.addEventListener("click", function () {
    if (navList.classList.contains("active")) {
      navList.style.height = "0";
      navList.addEventListener(
        "transitionend",
        function () {
          navList.classList.remove("active");
        },
        { once: true }
      );
    } else {
      navList.classList.add("active");
      navList.style.height = navList.scrollHeight + "px";
    }
    navButton.classList.toggle("cross");
  });

  document.addEventListener("click", function (event) {
    if (
      !header.contains(event.target) &&
      !navList.contains(event.target) &&
      navList.classList.contains("active")
    ) {
      navList.style.height = "0";
      navList.addEventListener(
        "transitionend",
        function () {
          navList.classList.remove("active");
        },
        { once: true }
      );
      navButton.classList.toggle("cross");
    }
  });

  navItems.forEach(function (item) {
    item.addEventListener("click", function () {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      targetElement.scrollIntoView({ behavior: "smooth" });
      navList.style.height = "0";
      navList.addEventListener(
        "transitionend",
        function () {
          navList.classList.remove("active");
        },
        { once: true }
      );
      navButton.classList.remove("cross");
    });
  });
});

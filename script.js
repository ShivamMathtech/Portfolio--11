// Optional: Smooth scrolling effect
document.querySelectorAll(".sidebar a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

var typed = new Typed("#element", {
  strings: ["FRONT-END DEVELOPER", "BACKEND DEVELOPER", "MERN STACK DEVELOPER"],
  typeSpeed: 50,
  loop: true,
});

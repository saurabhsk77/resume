var icon = document.getElementById("icon");
icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "images/sun.png";
  } else {
    icon.src = "images/moon.png";
  }
};

var typed = new Typed("#typed_text", {
  strings: ["Software Engineer", "ReactJS Developer", "Front-End Developer"],
  smartBackspace: true,
  backSpeed: 50,
  typeSpeed: 50,
  loop: true,
  startDelay: 1000,
  cursorChar: "",
});

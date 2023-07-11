document.addEventListener("DOMContentLoaded", function () {
  
  var entrada = document.querySelector(".entrada")
  var body = document.querySelector("body")
  var general = document.querySelector(".general")
  var header = document.querySelector(".header")
  var iconomenu = document.querySelector(".icono-menu")
  var barralateral = document.querySelector(".barra-lateral")
  
  function Aparecer() {
    entrada.remove();
    body.style.background = "white";
    general.style.opacity = 1;
  }

  function encender() {
    setTimeout(() => {
      Aparecer();
    }, 1);
  }
  window.onload = encender;
});


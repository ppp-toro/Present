document.addEventListener("DOMContentLoaded", function () {
  // Declarar la variable booleana
  var encendido = false;

  // Función para encender la variable booleana
  function encender() {
    setTimeout(() => {
      Aparecer();
    }, 5000);
  }

  function Aparecer() {
    document.querySelector(".entrada").remove();
    document.querySelector("body").style.background = "white";
    document.querySelector(".general").style.opacity = 1;
  }

  // Asignar la función al evento onload
  window.onload = encender;
});

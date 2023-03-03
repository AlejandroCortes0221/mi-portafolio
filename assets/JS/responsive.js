const link = document.querySelectorAll(".navegacion__apartado__link");
const lista = document.querySelector("#check");
const boton = document.querySelector("[data-download]");
link.forEach((element) => {
  element.addEventListener("click", () => {
    lista.checked = false;
  });
});

boton.addEventListener("click", () => {
  lista.checked = false;
});

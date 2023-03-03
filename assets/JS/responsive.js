const link = document.querySelectorAll(".navegacion__apartado__link");
const lista = document.querySelector("#check");
link.forEach((element) => {
  element.addEventListener("click", () => {
    lista.checked = false;
  });
});

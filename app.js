const li = document.getElementById("li");
const load = window.addEventListener("DOMContentLoaded", async function () {
  console.log("inicio");

  mostrarDatos(cargarData());
});
const cargarData = async () => {
  const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await respuesta.json();
  console.log(data);
  return data;
};

const mostrarDatos = async (data = []) => {
  const data_ = await data;

  const listHtml = data_
    .map(function (element) {
      return `<li> ${element.name} </li>`;
    })
    .join("");

  li.innerHTML = listHtml;
};

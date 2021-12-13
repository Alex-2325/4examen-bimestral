let form = document.getElementById("form");
let contenido = document.getElementById("contenido");

let figuras = [];

form.addEventListener("submit", (event) => {
event.preventDefault();
let data = new FormData(form); 
figuras.push({
nombre: data.get("nombre"),
figura: data.get("figura"),
color: data.get("color"),
});

pintar_figuras();
});

const pintar_figuras = () => {
contenido.innerHTML = "";
figuras.forEach((e) => {
contenido.insertAdjacentHTML(
"beforeend",
<div
class="${e. figura}" 
style="background:$(e.color;"
>
${e.nombre}
</div>
);
});
};
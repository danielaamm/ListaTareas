const btnAgregar = document.querySelector(".btnAgregar");
const inputTarea = document.querySelector(".tarea");
const lista = document.querySelector(".lista");

// Mostrar tareas guardadas
const guardadas = localStorage.getItem("tareas");
if (guardadas != "" && guardadas != null) {
  lista.innerHTML = guardadas;
}

// Función para agregar tarea
btnAgregar.addEventListener("click", function() {
  const texto = inputTarea.value;
  if (texto != "") {
    lista.innerHTML += '<p onclick="completar(this)">' + texto + '</p>';
    localStorage.setItem("tareas", lista.innerHTML);
    inputTarea.value = "";
  }
});

// Función para marcar completada
function completar(elemento) {
  if (elemento.style.textDecoration === "line-through") {
    elemento.style.textDecoration = "none";
    elemento.style.color = "black";
  } else {
    elemento.style.textDecoration = "line-through";
    elemento.style.color = "gray";
  }
  localStorage.setItem("tareas", lista.innerHTML);
}

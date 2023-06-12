const valorGeneralEntrada = 200;

let estudiante = 0.80;
let trainee = 0.50;
let junior = 0.15;

const cantidad = document.querySelector('#cantidad');
const categoria = document.querySelector('#categoria');
const resumen = document.querySelector('#resumen');
const borrar = document.querySelector('#borrar');
const total = document.querySelector('#totalApagar');

function totalPagar() {
    let totalTicket = parseInt(cantidad.value) * valorGeneralEntrada;

    if (categoria.value == 1){
        totalTicket = totalTicket - (totalTicket * estudiante)
    }
    else if (categoria.value == 2){
        totalTicket = totalTicket - (totalTicket * trainee)
    }
    else if (categoria.value == 3){
        totalTicket = totalTicket - (totalTicket * junior)
    }
    else {
        totalTicket = totalTicket
    }

    total.innerHTML = `Total a pagar : $${totalTicket}`;
}

resumen.addEventListener('click', (event) => {
  event.preventDefault();
  totalPagar();
});


borrar.addEventListener('click',() => parrafo.innerHTML = "Total a pagar :")

const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const correo = document.querySelector('#correo');



function DatosInválidos(){

    if (nombre.value === "") {
      alert('Falta completar Nombre');
      nombre.classList.add("is-invalid");
      nombre.focus();
      return;
    }
    if (apellido.value === "") {
      alert('Falta completar Apellido');
      apellido.classList.add("is-invalid");
      apellido.focus();
      return;
    }
    if (correo.value === "") {
      alert('Falta completar email');
      correo.classList.add("is-invalid");
      correo.focus();
      return;
    }
  }

resumen.addEventListener('clik', (event) => {
  event.preventDefault();
  CompletarDatos();
});








const baseDeDatos = [
    {
      id: 1,
      nombre: "Habitación Superior con cama King size",
      precio: 12500,
      imagen: "../../assets/img/Galeria de fotos/HabsySuits/Hab10.jpg"
    },
    {
      id: 2,
      nombre: "Habitación Deluxe con cama king size y balcón privado",
      precio: 14250,
      imagen: "../../assets/img/Galeria de fotos/HabsySuits/Hab2.jpg"
    },
    {
      id: 3,
      nombre: "Executive Room con cama king size, balcón privado y sofá cama",
      precio: 16500,
      imagen: "../../assets/img/Galeria de fotos/HabsySuits/Hab7.jpg"
    },
    {
      id: 4,
      nombre: "Executive Room con 2 camas queen size y balcón privado",
      precio: 18000,
      imagen: "../../assets/img/Galeria de fotos/HabsySuits/Hab4.jpg"
    },
    {
      id: 5,
      nombre: "Deluxe Suite con cama king size, balcón privado y sofá cama",
      precio: 20000,
      imagen: "../../assets/img/Galeria de fotos/HabsySuits/Hab16.jpg"
    },
    {
      id: 6,
      nombre: "Deluxe Suite con 2 camas queen size y balcón privado",
      precio: 22000,
      imagen: "../../assets/img/Galeria de fotos/HabsySuits/Hab14.jpg"
    },
    {
        id: 7,
        nombre: "Executive Suite con cama king size y exclusiva vista de la ciudad",
        precio: 30000,
        imagen: "../../assets/img/Galeria de fotos/HabsySuits/Hab19.jpg"
    }
];
let reserva = [];
const divisa = "$";
const DOMitems = document.querySelector("#items");
const miReserva = document.querySelector("#reserva");
const DOMtotal = document.querySelector("#total");
const DOMbotonVaciar = document.querySelector("#boton-vaciar");
const miLocalStorage = window.localStorage;
  
  
// Funciones

function renderizarHabitaciones() {
    baseDeDatos.forEach((info) => {
        //Estructura
        const misHabitaciones = document.createElement("div");
        misHabitaciones.classList.add("card", "col-sm-4");

        //Body
        const misHabitacionesCardBody = document.createElement("div");
        misHabitacionesCardBody.classList.add("card-body");
        
        //Titulo
        const misHabitacionesTitle = document.createElement("h5");
        misHabitacionesTitle.classList.add("card-title");
        misHabitacionesTitle.textContent = info.nombre;
        
        //Imagen
        const misHabitacionesImagen = document.createElement("img");
        misHabitacionesImagen.classList.add("img-fluid");
        misHabitacionesImagen.setAttribute("src", info.imagen);
        
        //Precio
        const misHabitacionesPrecio = document.createElement("p");
        misHabitacionesPrecio.classList.add("card-text");
        misHabitaciones.textContent = `${info.precio}${divisa}`;

        //Boton
        const misHabitacionesBoton = document.createElement("button");
        misHabitacionesBoton.classList.add("btn", "btn-primary");
        misHabitacionesBoton.textContent = "+ 1 noche";
        misHabitacionesBoton.setAttribute("marcador", info.id);
        misHabitacionesBoton.addEventListener("click", añadirProductoALaReserva);

        //Insertamos
        misHabitacionesCardBody.appendChild(misHabitacionesImagen);
        misHabitacionesCardBody.appendChild(misHabitacionesTitle);
        misHabitacionesCardBody.appendChild(misHabitacionesPrecio);
        misHabitacionesCardBody.appendChild(misHabitacionesBoton);
        misHabitaciones.appendChild(misHabitacionesCardBody);
        DOMitems.appendChild(misHabitaciones);
    });
}

/*
//ME LO PASO ANDRES
function renderizarHabitaciones() {

    baseDeDatos.forEach((_info_) => {
  
      const habitacion = document.createElement("div");
  
      habitacion.innerHTML = `<div class="card-body"><img class="img-fluid" src="${_info_.imagen}"><h5 class="card-title">${_info_.nombre}</h5><p class="card-text">$${_info_.precio}</p><button class="btn btn-primary" marcador=${_info_.id}>+</button></div>`;
  
      habitacion.classList.add("card", "col-sm-4");
  
      DOMitems.appendChild(habitacion);
  
    });
  
}
*/
 
// Evento para añadir una habitacion a la reserva
  
function añadirProductoALaReserva(evento) {
    reserva.push(evento.target.getAttribute("marcador"))
    renderizarReserva();
    guardarReservaEnLocalStorage();
}
  
// Todos las habitaciones guardadas en la reserva
  
function renderizarReserva() {
    miReserva.textContent = "";
    const reservaSinDuplicados = [...new Set(reserva)];
    reservaSinDuplicados.forEach((item) => {
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        const numeroUnidadesItem = reserva.reduce((total, itemId) => {
            return itemId === item ? total += 1 : total;
        }, 0);
        const misHabitaciones = document.createElement("li");
        misHabitaciones.classList.add("list-group-item", "text-right", "mx-2");
        misHabitaciones.textContent = `${numeroUnidadesItem} noches en la ${miItem[0].nombre} - ${divisa}${miItem[0].precio}`;
  
  
        // Boton de borrar
        const miBoton = document.createElement("button");
        miBoton.classList.add("btn", "btn-danger", "mx-5");
        miBoton.textContent = "X";
        miBoton.style.marginLeft = "1rem";
        miBoton.dataset.item = item;
        miBoton.addEventListener("click", borrarItemReserva);
  
        misHabitaciones.appendChild(miBoton);
        miReserva.appendChild(misHabitaciones);
    });
    // Mostrar el precio
    DOMtotal.textContent = calcularTotal();
}


//Boton Pagar
const botonPagar =document.querySelector("#boton-pagar")
botonPagar.addEventListener("click", () =>{
    Swal.fire(
        '¡Reserva realizada!',
        '¡Lo esperamos en el Hotel!',
        'success'
      )
})
//Boton vaciar
const botonVaciar = document.querySelector("#boton-vaciar")
botonVaciar.addEventListener("click", () => {
    Swal.fire({
        icon: 'error',
        title: '¡Reserva cancelada!',
        text: '¡Tu reserva ha sido cancelada!'
      })
})

// Evento para borrar un elemento de la reserva
  
function borrarItemReserva(evento) {
    const id = evento.target.dataset.item;
    reserva = reserva.filter((reservaId) => {
        return reservaId !== id;
    });
    renderizarReserva();
    guardarReservaEnLocalStorage();
}

// Se calcula el total de la reserva
  
function calcularTotal() {
    return reserva.reduce((total, item) => {
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        return total + miItem[0].precio;
    }, 0).toFixed(2);
}

// Vaciar la reserva
  
function vaciarReserva() {
    reserva = [];
    renderizarReserva();
    localStorage.clear();
}
function guardarReservaEnLocalStorage () {
    miLocalStorage.setItem("reserva", JSON.stringify(reserva));
}

function cargarReservaDeLocalStorage () {
    // ¿Existe un carrito previo guardado en LocalStorage?
    if (miLocalStorage.getItem("reserva") !== null) {
        // Carga la información
        reserva = JSON.parse(miLocalStorage.getItem("reserva"));
    }
}
  
// Eventos
  
DOMbotonVaciar.addEventListener("click", vaciarReserva);
  
// Inicio
cargarReservaDeLocalStorage();
renderizarHabitaciones();
renderizarReserva();




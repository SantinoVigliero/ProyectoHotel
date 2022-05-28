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
        misHabitacionesBoton.textContent = "+";
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






















/*
//Se crea la class
class Opcion {
    constructor (habitacion, hotel , tipo, precio, id) {
        this.habitacion = habitacion;
        this.hotel = hotel;
        this.tipo = tipo;
        this.precio = precio;
        this.id = id;
    }
  }
  let habitacionId;
  //array carrito
  let carrito = [];
  //Se crean los productos
  const opcion1 = new Opcion ("Habitación Superior" , "Hotel Palladio" , " una cama king size", "250US$", 1)
  const opcion2 = new Opcion ("Habitación Deluxe" , "Hotel Palladio" , "una cama king size y balcón privado", "260US$", 2)
  const opcion3 = new Opcion ("Executive Room" , "Hotel Palladio" , "una cama king size, balcón privado y sofá cama", "300US$", 3)
  const opcion4 = new Opcion ("Executive Room" , "Hotel Palladio" , "2 camas queen size y balcón privado", "260US$", 4)
  const opcion5 = new Opcion ("Deluxe Suite" , "Hotel Palladio" , "una cama king size, balcón privado y sofá cama", "280US$", 5)
  const opcion6 = new Opcion ("Deluxe Suite" , "Hotel Palladio" , "2 camas queen size y balcón privado", "280US$", 6)
  const opcion7 = new Opcion ("Executive Suite" , "Hotel Palladio" , "una cama king size y exclusiva vista de la ciudad", "1000US$", 7)
  //array habitaciones
  const habitaciones = [opcion1, opcion2, opcion3, opcion4, opcion5, opcion6, opcion7];
  
  
  const saludar = () => {
      let nombreSaludo = prompt(" Bienvenido a la pagina del Hotel Paladio, ingrese su nombre");
      while (nombreSaludo === "") {
          nombreSaludo = prompt (" Bienvenido a La pagina del Hotel Paladio, ingrese su nombre");
      }
      return nombreSaludo;
  };
  
  
  
  
  
  const mostrarHabitaciones = () => {
      let tipoPregunta = ""
      habitaciones.forEach(element=>{
          tipoPregunta += `${element.id} ${element.habitacion}\n`;
      });
      let solicitud = parseInt (prompt(`Desea solicitar una reserva de habitación tipo: \n${tipoPregunta}Si solo estas observando presiona la tecla ESC` ));
      
      if (solicitud === 1 || solicitud === 2 || solicitud ===3 || solicitud === 4 || solicitud ===4 || solicitud ===5 || solicitud ===6 || solicitud ===7) {
          switch (solicitud) {
              case 1:
                  alert("Ha seleccionado una habitacion para " + opcion1.habitacion + " en el " + opcion1.hotel);
                  console.log(opcion1);
                  tipoPregunta = prompt ("Desea conocer su tipo? (SI o NO)")
                  if (tipoPregunta === "SI" || tipoPregunta === "Si" || tipoPregunta === "si") {
                      alert ("La habitación contiene " + opcion1.tipo)
                  }
                  alert ("El precio de la habitaciones de " + opcion1.precio + " por noche.")
                  break;
                  
              case 2:
                  alert("Ha seleccionado una habitacion para " + opcion2.habitacion + " en el " + opcion2.hotel);
                  console.log(opcion2);
                  tipoPregunta = prompt ("Desea conocer su tipo? (SI o NO)")
                  if (tipoPregunta === "SI" || tipoPregunta === "Si" || tipoPregunta === "si") {
                      alert ("La habitación contiene " + opcion2.tipo)
                  }
                  alert ("El precio de la habitaciones de " + opcion2.precio + " por noche.")
                  break;
                     
              case 3:
                  alert("Ha seleccionado una habitacion para " + opcion3.habitacion + " en el " + opcion3.hotel);
                  console.log(opcion3);
                  tipoPregunta = prompt ("Desea conocer su tipo? (SI o NO)")
                  if (tipoPregunta === "SI" || tipoPregunta === "Si" || tipoPregunta === "si") {
                      alert ("La habitación contiene " + opcion3.tipo)
                  }
                  alert ("El precio de la habitaciones de " + opcion3.precio + " por noche.")
                  break;
              case 4:
                  alert("Ha seleccionado una habitacion para " + opcion4.habitacion + " en el " + opcion4.hotel);
                  console.log(opcion4);
                  tipoPregunta = prompt ("Desea conocer su tipo? (SI o NO)")
                  if (tipoPregunta === "SI" || tipoPregunta === "Si" || tipoPregunta === "si") {
                      alert ("La habitación contiene " + opcion4.tipo)
                  }
                  alert ("El precio de la habitaciones de " + opcion4.precio + " por noche.")
                  break;    
              case 5:
                  alert("Ha seleccionado una habitacion para " + opcion5.habitacion + " en el " + opcion5.hotel);
                  console.log(opcion5);
                  tipoPregunta = prompt ("Desea conocer su tipo? (SI o NO)")
                  if (tipoPregunta === "SI" || tipoPregunta === "Si" || tipoPregunta === "si") {
                      alert ("La habitación contiene " + opcion5.tipo)
                  }
                  alert ("El precio de la habitaciones de " + opcion5.precio + " por noche.")
                  break;           
              case 6:
                  alert("Ha seleccionado una habitacion para " + opcion6.habitacion + " en el " + opcion6.hotel);
                  console.log(opcion6);
                  tipoPregunta = prompt ("Desea conocer su tipo? (SI o NO)")
                  if (tipoPregunta === "SI" || tipoPregunta === "Si" || tipoPregunta === "si") {
                      alert ("La habitación contiene " + opcion6.tipo)
                  }
                  alert ("El precio de la habitaciones de " + opcion6.precio + " por noche.")
                  break;
              case 7:
                  alert("Ha seleccionado una habitacion para " + opcion7.habitacion + " en el " + opcion7.hotel);
                  console.log(opcion7);
                  tipoPregunta = prompt ("Desea conocer su tipo? (SI o NO)")
                  if (tipoPregunta === "SI" || tipoPregunta === "Si" || tipoPregunta === "si") {
                      alert ("La habitación contiene " + opcion7.tipo)
                  }
                  alert ("El precio de la habitaciones de " + opcion7.precio + " por noche.");
                  
                  break; 
              default: 
                  break;
          }
          let reserva = prompt ("Ingrese la cantidad de noches de su reserva");
          carrito.push (reserva + " noches");
          
          console.log("Se a reservado una habitacion para " + reserva + " noches");
          while (reserva != "CONTINUAR") {    
              reserva = prompt ("Si ingreso correctamente Escriba CONTINUAR, sino repita sus datos")  ;
          }
      }
      return solicitud;
  };
  
  const habitacionSeleccionada = (id) => {
      console.log(id);
  
      let habitacionFind = habitaciones.find((element)=> element.id === id);
      carrito.push(habitacionFind );
  
  };
  
  
  
  const seleccionReserva = () => {
      let fecha = prompt("Ingrese fecha y mes que estaria interesado para realizar su reserva")
      while (fecha == "") {
          console.log("Se ah agendado una reserva para el " + fecha);
          fecha = prompt("Ingrese fecha y mes de la reserva")
      }
      console.log("Se ah agendado una reserva para el " + fecha);
      
      return reserva;
  }
  
  
  saludar();
  habitacionId = mostrarHabitaciones ();
  habitacionSeleccionada (habitacionId);
  let reservaSelect = seleccionReserva()
let reservaFinal = "Ha seleccionado un reserva de habitacion por " + reservaSelect + " noches.";
*/
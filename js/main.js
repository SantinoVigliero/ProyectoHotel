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

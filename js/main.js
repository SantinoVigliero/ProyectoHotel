class Opcion {
    constructor (habitacion, hotel , tipo, precio, id) {
        this.habitacion = habitacion;
        this.hotel = hotel;
        this.tipo = tipo;
        this.precio = precio;
        this.id = id;
    }
  }
  
  const opcion1 = new Opcion ("Habitación Superior" , "Hotel Palladio" , " una cama king size", "250US$", 1)
  const opcion2 = new Opcion ("Habitación Deluxe" , "Hotel Palladio" , "una cama king size y balcón privado", "260US$", 2)
  const opcion3 = new Opcion ("Executive Room" , "Hotel Palladio" , "una cama king size, balcón privado y sofá cama", "300US$", 3)
  const opcion4 = new Opcion ("Executive Room" , "Hotel Palladio" , "2 camas queen size y balcón privado", "260US$", 4)
  const opcion5 = new Opcion ("Deluxe Suite" , "Hotel Palladio" , "una cama king size, balcón privado y sofá cama", "280US$", 5)
  const opcion6 = new Opcion ("Deluxe Suite" , "Hotel Palladio" , "2 camas queen size y balcón privado", "280US$", 6)
  const opcion7 = new Opcion ("Executive Suite" , "Hotel Palladio" , "una cama king size y exclusiva vista de la ciudad", "1000US$", 7)
  
  
  
  
  let tipoPregunta = ""
  let solicitud = parseInt (prompt("Desea solicitar una reserva de habitación tipo: \n\t 1 - Habitación Superior 250US$ \n\t 2 - Habitación Deluxe 260US$ \n\t 3 - Executive Room con cama king size 300US$ \n\t 4 - Executive Room con 2 camas queen size 260US$ \n\t 5 - Deluxe Suite con cama king size 280US$  \n\t 6 - Deluxe Suite con 2 camas queen size 280US$ \n\t 7 - Executive Suite 1000US$ \n\t Si solo estas observando presiona la tecla ESC " ))
  console.log ("Se registro una solicitud de reserva de una " + solicitud );
  
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
    let reserva = prompt ("Ingrese la cantidad de noches de su reserva")
    
    console.log("Se a reservado una habitacion para " + reserva + " noches");
    while (reserva != "CONTINUAR") {    
        reserva = prompt ("Si ingreso correctamente Escriba CONTINUAR, sino repita sus datos")  
    }
  
  }
  const seleccionReserva = () => {
    let reserva = prompt("Ingrese fecha y mes que estaria interesado para realizar su reserva")
    while (reserva == "") {
        console.log("Se ah agendado una reserva para el " + reserva);
        reserva = prompt("Ingrese fecha y mes de la reserva")
    }
    console.log("Se ah agendado una reserva para el " + reserva);
    return reserva;
  }
    let interes = 5
    let pregunta = prompt ("Desea pagar su reserva en cuotas? (Si o No)")
    if (pregunta === "SI" || pregunta === "Si" || pregunta === "si") {
            
        let cuotas = parseInt (prompt ("En cuantas cuotas desea pagar su Reserva"))
        console.log("Se pagara la reserva en " + cuotas+ " cuotas");
  
        if (solicitud === 1) {
            alert("La noche en esta habitacion cuesta "+ opcion1.precio +" con un interes del " + interes * cuotas + "% en " + cuotas + " cuotas.")
        } else if (solicitud === 2) {
            alert("La noche en esta habitacion cuesta "+ opcion2.precio +" con un interes del " + interes * cuotas + "% en " + cuotas + " cuotas.")
        } else if (solicitud === 3) {
            alert("La noche en esta habitacion cuesta "+ opcion3.precio +" con un interes del " + interes * cuotas + "% en " + cuotas + " cuotas.")
        } else if (solicitud === 4) {
            alert("La noche en esta habitacion cuesta "+ opcion4.precio +" con un interes del " + interes * cuotas + "% en " + cuotas + " cuotas.")
        } else if (solicitud === 5) {
            alert("La noche en esta habitacion cuesta "+ opcion5.precio +" con un interes del " + interes * cuotas + "% en " + cuotas + " cuotas.")
        } else if (solicitud === 6) {
            alert("La noche en esta habitacion cuesta "+ opcion6.precio +" con un interes del " + interes * cuotas + "% en " + cuotas + " cuotas.")
        } else if (solicitud === 7) {
            alert("La noche en esta habitacion cuesta "+ opcion7.precio +" con un interes del " + interes * cuotas + "% en " + cuotas + " cuotas.")
        }
            
        console.log("En " + cuotas + " cuotas, el interes es del  " + interes * cuotas + " %")
    }
    else {
        if (solicitud === 1) {
            alert("La noche en esta habitacion cuesta "+ opcion1.precio + " por noche.")
        } else if (solicitud === 2) {
            alert("La noche en esta habitacion cuesta "+ opcion2.precio + " por noche.")
        } else if (solicitud === 3) {
            alert("La noche en esta habitacion cuesta "+ opcion3.precio + " por noche.")
        } else if (solicitud === 4) {
            alert("La noche en esta habitacion cuesta "+ opcion4.precio + " por noche.")
        } else if (solicitud === 5) {
            alert("La noche en esta habitacion cuesta "+ opcion5.precio + " por noche.")
        } else if (solicitud === 6) {
            alert("La noche en esta habitacion cuesta "+ opcion6.precio + " por noche.")
        } else if (solicitud === 7) {
            alert("La noche en esta habitacion cuesta "+ opcion7.precio + " por noche.")
        }
    }
    if (solicitud === 1) {
        alert("Fue agendado su reserva de "+ opcion1.habitacion +" en el " + opcion1.hotel + ", Muchas gracias por su tiempo")
    } else if (solicitud === 2) {
        alert("Fue agendado su reserva de "+ opcion2.habitacion +" en el " + opcion2.hotel + ", Muchas gracias por su tiempo")
    } else if (solicitud === 3) {
            alert("Fue agendado su reserva de "+ opcion3.habitacion +" en el " + opcion3.hotel + ", Muchas gracias por su tiempo")
    } else if (solicitud === 4) {
            alert("Fue agendado su reserva de "+ opcion4.habitacion +" en el " + opcion4.hotel + ", Muchas gracias por su tiempo")
    } else if (solicitud === 5) {
        alert("Fue agendado su reserva de "+ opcion5.habitacion +" en el " + opcion5.hotel + ", Muchas gracias por su tiempo")
    } else if (solicitud === 6) {
        alert("Fue agendado su reserva de "+ opcion6.habitacion +" en el " + opcion6.hotel + ", Muchas gracias por su tiempo")
    } else if (solicitud === 7) {
        alert("Fue agendado su reserva de "+ opcion7.habitacion +" en el " + opcion7.hotel + ", Muchas gracias por su tiempo")
    }
  
  else if (solicitud <1 || solicitud >7 ){
    alert("La opcion ingresada no es valida, intente mas tarde")
  }
  else {
    alert ("Lo esperamos nuevamente")
  }
  let reservaSelect = seleccionReserva()
  let reservaFinal = "Ha seleccionado un reserva de habitacion por " + reservaSelect + " noches.";
  


document.addEventListener("DOMContentLoaded", function(){
    const formulario = document.getElementById("formulario");
    const mensajeError = document.getElementById("mensajeError");

    formulario.addEventListener("submit", function(evento){
        evento.preventDefault(); //Previene el envio del formulario

        let id = document.getElementById("Id").value;
        let nombre = document.getElementById("Nombre").value;
        let edad =  document.getElementById("Edad").value;
        let email = document.getElementById("Email").value;
        
        // Validar si el formulario esta vacio
        if(id.trim() === "" && nombre.trim() === "" && edad.trim() === "" && email.trim() === ""){
            alert("Por favor ingrese los datos requeridos en el formulario de registro");
            return;
        }

        // Si todos los campos son invalidos
        if(!/^\d{10}$/.test(id) || !/^[A-Z][a-záéíóúüñ]+(?: [A-Z][a-záéíóúüñ]+)*$/.test(nombre) || !/^\d+$/.test(edad) || parseInt(edad) < 1 || parseInt(edad) > 120 || /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            alert("Por favor ingrese datos validos");
            return;
        }

        //Validacion de los datos
        if(id.trim() === "" || !/^\d{10}$/.test(id)){
            mensajeError.innerText = "El campo número de documento(Id) no es valido, intentelo de nuevo" ;
            return;
        }

        if(nombre.trim() === "" || !/^[A-Z][a-záéíóúüñ]+(?: [A-Z][a-záéíóúüñ]+)*$/.test(nombre)){
            mensajeError.innerText = "El campo nombre no es valido, intentelo de nuevo";
            return;
        }

        if(edad.trim() === "" || !/^\d+$/.test(edad) || parseInt(edad) < 1 || parseInt(edad) > 120){
            mensajeError.innerText = "El campo edad no es valido solo numeros enteros 1 a 120, intentelo de nuevo";
            return;
        }

        if(!validarEmail(email) || /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            mensajeError.innerText = "El campo email no es valido, intentelo de nuevo";
            return;
        }

        if(isNaN(edad) || edad <= 17){
            alert("Eres menor de edad, no es posible continuar");
            return;
        }

        // Si todo esta bien
        mensajeError.innerText = "";
        alert("Registro exitoso");
        formulario.submit();
    });

    function validarEmail(email){
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
});

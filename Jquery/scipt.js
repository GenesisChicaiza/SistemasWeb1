$(document).ready(function() {
    
    $("#btnValidar").click(function() {
        $(".error").text("");
        $("#mensaje-exito").hide().text("");
        
        let esValido = true;

        const nombre = $("#nombre").val().trim();
        const regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+(\s+[a-zA-ZáéíóúÁÉÍÓÚñÑ]+)+$/;

        if (nombre === "") {
            $("#error-nombre").text("El nombre es obligatorio.");
            esValido = false;
        } else if (!regexNombre.test(nombre)) {
            $("#error-nombre").text("Debe contener al menos dos palabras y solo letras.");
            esValido = false;
        }

        const email = $("#email").val().trim();
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === "") {
            $("#error-email").text("El email es obligatorio.");
            esValido = false;
        } else if (!regexEmail.test(email)) {
            $("#error-email").text("Formato de email no válido.");
            esValido = false;
        }

        const telefono = $("#telefono").val().trim();
        const regexTelefono = /^[0-9]+$/;

        if (telefono === "") {
            $("#error-telefono").text("El teléfono es obligatorio.");
            esValido = false;
        } else if (!regexTelefono.test(telefono)) {
            $("#error-telefono").text("Solo se permiten números (sin espacios).");
            esValido = false;
        }

        const password = $("#password").val();
        const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

        if (password === "") {
            $("#error-password").text("La contraseña es obligatoria.");
            esValido = false;
        } else if (!regexPassword.test(password)) {
            $("#error-password").text("Debe tener 8+ caracteres, 1 mayúscula, 1 minúscula y 1 número.");
            esValido = false;
        }

        if (esValido) {
            $("#mensaje-exito").text("¡Todo es válido! Formulario enviado correctamente.").fadeIn();
        }
    });
});
$("#Email").addMethod("formEmail", function (value, element) {
    var pattern = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
    return this.optional(element) || pattern.test(value);
 }, "Formato del email incorrecto");

 $("#NombreR").addMethod("lettersonly", function (value, element) {
    return this.optional(element) || /^[a-z]+$/i.test(value);
}, "Letters only please"); 

$(".formulario__register").validate({

    rules:{
        nombreR:{
            required:true
            
        },
        apP:{
            required:true

        },
        apM:{
            required:true

        },
        usuarioR:{
            required:true,
            minlength:4
        },
        PasswordR:{
            required:true,
            minlength:8
        },
        Password2R:{
            required:true,
            minlength:8
        }
    },
    messages:{
        usuarioR:{
            required: "El usuario es requerido",
            minlength: "Se necesitan 4 caracteres"

        },
        PasswordR:{
            required:"La contraseña es requerida",
            minlength: "Se necesitan 8 caracteres"

        },
        Password2R:{
            required:"La contraseña es requerida",
            minlength: "Se necesitan 8 caracteres"

        },
    }

});

$("#Registrar").click(function () { 
    var nombreR=$("#NombreR").val();
    var apP=$("#ApPaterno").val();
    var apM=$("#ApMaterno").val();
    var FN=$("#Fecha de nacimiento").val();
    var usuarioR=$("#UsuarioR").val();
    var Email=$("#Email").val();
    var password=$("#PasswordR").val();
    var password=$("#Password2R").val();
    
});
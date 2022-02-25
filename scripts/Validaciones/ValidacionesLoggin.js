$(".formulario__login").validate({

    rules:{
        UsuarioL:{
            required:true,
            minlength:4
        },
        PasswordL:{
            required:true,
            minlength:8
        }
    },
    messages:{
        UsuarioL:{
            required: "El usuario es requerido",
            minlength: "Se necesitan 4 caracteres"

        },
        PasswordL:{
            required:"La contraseña es requerida",
            minlength: "Se necesitan 8 caracteres"

        }
    }

});

$("#Loggin").click(function () { 
    var usuario=$("#UsuarioL").val();
    var password=$("#PasswordL").val();
});

/*alert("HOLA MUNDO");*/
//window.onload=function(){
//    document.getElementById("btn_Registrarse").onclick=register;
//}

/*variables*/
var contenedor_login_register= document.querySelector(".contenedor__login-register");
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");

document.getElementById("btn_Registrars").onclick=register;
document.getElementById("btn_IniciarSesion").onclick=login;

function register(){

   
    formulario_register.style.display = "block";
    contenedor_login_register.style.left="425px";
    formulario_login.style.display="none";
    caja_trasera_register.style.opacity="0";
    caja_trasera_login.style.opacity="2";
    //alert("Hola");
}

function login(){
    formulario_register.style.display = "none";
    contenedor_login_register.style.left="-9px";
    formulario_login.style.display="block";
    caja_trasera_register.style.opacity="1";
    caja_trasera_login.style.opacity="0";
}
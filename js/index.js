document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
});

document.addEventListener("DOMContentLoaded", function(){
let usuario = localStorage.getItem("user");

if (usuario == null){
    alert ("Primero tenes que hacer login");
    location.href = "login.html";
}
})

document.getElementById("boton-cerrar-sesion").addEventListener("click", function()
{
    localStorage.removeItem("user");
}
)

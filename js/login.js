function iniciar(){
    let email = document.getElementById("email").value;
    let contra = document.getElementById("contra").value;
    
    if(email === "" || contra === ""){
       alert ("Debe llenar todos los campos")
       }
       else {
         sessionStorage.setItem('user', email);
         location.href = "index.html";}

    }

    let boton = document.getElementById("boton");

    boton.addEventListener("click", function(){
       iniciar();
      
    })


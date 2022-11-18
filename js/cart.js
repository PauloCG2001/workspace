(function () {
    'use strict'
  
   
    var forms = document.querySelectorAll('.needs-validation')
  
   
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
          
        
          
          
     


        }, false)
        
      })

      
  })()










function agregarAlCarrito(producto){
    let contenidoCarrito = "";
    contenidoCarrito += `
    <div id="divCarrito">
    <h4 id = "tituloCarrito">Carrito de compras</h4>
    
    <br>
    <h5>Articulos a comprar</h5>

    <table id="tabladatosCarrito"> 
    <tr>
    <th></th>
    <th>Nombre</th>
    <th>Costo</th>
    <th>Cantidad</th>
    <th>Subtotal</th>
    </tr>
<tr class="fila">
<th><img id="imgProductoCarrito" src ="${producto.image}"></img></th>
<th>${producto.name}</th>
<th > ${producto.currency} <p id="preciounidad">${producto.unitCost}</p></th>
<th><input id="precioinicial" min="1" type="number" required></input></th>
<th >${producto.currency} <p id="subtotal1"></p></th>
</tr>
    </table>
<hr>
    



    
    
    
    </div> 
    
    ` 
    document.getElementById('carrito').innerHTML = contenidoCarrito;
    
    document.getElementById("precioinicial").addEventListener("change", function(){
        multiplicar();
    
})
}
 

function agregarCostos(producto){
    let contenidoCostos = "";
    contenidoCostos += `
    <div class="izquierda border">  <div class="float-iz"> <h6>Subtotal</h6> <p>Costo unitario del producto por cantidad</p> </div>  <div class="float-der d-flex">${producto.currency}&nbsp <div id="subTotal"></div></div></div>
    <div class="izquierda border">  <div class="float-iz"> <h6>Costo de envío</h6> <p>Según el tipo de envío</div>  <div class="float-der d-flex">${producto.currency} &nbsp<div id="envio"> </div></div> </div>
    <div class="izquierda border">  <div class="float-iz"> <h6>Total ($)</h6> </div>  <div class="float-der d-flex"><b> ${producto.currency} </b> &nbsp <div id="total"><b>${producto.unitCost}</b> </div></div>
    ` 
    document.getElementById('calculoCostos').innerHTML = contenidoCostos;
    
  
       
        
}

function multiplicar(){
    document.getElementById("subtotal1").innerHTML = parseInt(document.getElementById("precioinicial").value)*parseInt(document.getElementById('preciounidad').textContent);
    document.getElementById("subTotal").innerHTML = parseInt(document.getElementById("precioinicial").value)*parseInt(document.getElementById('preciounidad').textContent)
}


function porcentaje15(){ 
document.getElementById("envio").innerHTML = document.getElementById("subtotal")*0,15
}


document.addEventListener("DOMContentLoaded", function(){
    getJSONData(CART_INFO_URL + 25801 + EXT_TYPE).then(function(resultObj){
        if (resultObj.status = "ok")
        {
           agregarAlCarrito(resultObj.data.articles[0]);
           agregarCostos(resultObj.data.articles[0]); 
        }
    })
    
})

function deshabilitarTarjeta(){
    document.getElementById("numTarjeta").disabled = true
    document.getElementById("codigoSeg").disabled = true
    document.getElementById("vencimiento").disabled = true
}

function habilitarTarjeta(){
    document.getElementById("numTarjeta").disabled = false
    document.getElementById("codigoSeg").disabled = false
    document.getElementById("vencimiento").disabled = false
}

function deshabilitarTransferencia(){
    document.getElementById("numCuenta").disabled = true
}

function habilitarTransferencia(){
    document.getElementById("numCuenta").disabled = false
}

document.getElementById("checkTarj").addEventListener("change", function(){
    deshabilitarTransferencia();
    habilitarTarjeta();
document.getElementById("seleccionado").innerHTML = "Tarjeta de crédito"
})

document.getElementById("checkTrans").addEventListener("change", function(){
    deshabilitarTarjeta();
    habilitarTransferencia();
        document.getElementById("seleccionado").innerHTML = "Transferencia bancaria"
})


function quince(){
 return parseInt(document.getElementById("subTotal").textContent)*0.15
}

function siete(){
 return parseInt(document.getElementById("subTotal").textContent)*0.07
}

function cinco(){
 return parseInt(document.getElementById("subTotal").textContent)*0.05
}

document.getElementById("quince").addEventListener("change", function(){
   document.getElementById("envio").innerHTML = quince();
   document.getElementById("total").innerHTML = parseInt(document.getElementById("subTotal").textContent) + quince();
})

document.getElementById("siete").addEventListener("change", function(){
    document.getElementById("envio").innerHTML = parseInt(siete());
    document.getElementById("total").innerHTML = parseInt(document.getElementById("subTotal").textContent) + siete();
 })

 document.getElementById("cinco").addEventListener("change", function(){
    document.getElementById("envio").innerHTML = cinco();
    document.getElementById("total").innerHTML = parseInt(document.getElementById("subTotal").textContent) + cinco();
 })

 function total(){
if(document.getElementById("envio").textContent !== " ")

   {return parseInt(document.getElementById("subTotal").textContent) + parseInt(document.getElementById("envio").textContent)} 
   else{return parseInt(document.getElementById("subTotal").textContent)}
 }

let tarjeta = document.getElementById("checkTarj")
let transferencia = document.getElementById("checkTrans")
let finalizar = document.getElementById("finalizar")
 function metodoCheckeado(){
    if (!tarjeta.checked && !transferencia.checked) {
      
      document.getElementById("boton-seleccionar").style.display = "inline";
  } else {
      
      document.getElementById("boton-seleccionar").style.display = "none";
  }
  }

 

  finalizar.addEventListener("click", function(event){
    metodoCheckeado();
    login();
        event.stopPropagation();
        
    
  })

  tarjeta.addEventListener("change", function(){
    metodoCheckeado();
  })
  transferencia.addEventListener("change", function(){
    metodoCheckeado();
  })

















  function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
    document.getElementById("alert-success").classList.remove("show");
}

function login() { 
    let calle = document.getElementById("ponerCalle").value 
    let numero= document.getElementById("ponerNum").value
    let esquina= document.getElementById("ponerEsq").value
    let envio1= document.getElementById("quince")
    let envio2= document.getElementById("siete")
    let envio3= document.getElementById("cinco")
    let cantidad= document.getElementById("precioinicial").value
    let numTarjeta= document.getElementById("numTarjeta").value
    let codigoSeg=document.getElementById("codigoSeg").value
    let vencimiento=document.getElementById("vencimiento").value
    let numCuenta=document.getElementById("numCuenta").value

    
if (calle!=="" && numero!=="" && esquina!=="" && (envio1.checked || envio2.checked || envio3.checked) && cantidad!=="" && (tarjeta.checked && numTarjeta!=="" && codigoSeg!=="" && vencimiento!==""|| transferencia.checked && numCuenta!=="")  ){ 
        showAlertSuccess()
        
    } }
 
 
  

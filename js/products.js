
let categoriesArray = [];


function setProdID(id) {
    localStorage.setItem("prodID", id);
    window.location = "products-info.html"
}


function showCategoriesList(array){
    let htmlContentToAppend = "";
    for(let i = 0; i < array.length; i++){ 
        let product = array[i];
        htmlContentToAppend += `
        <div class="list-group-item list-group-item-action">
            <div class="row">
                
                <div class="col-3">
                    <a onclick="setProdID(${product.id})" href="product-info.html"><img src="` + product.image + `" alt="product image" class="img-thumbnail">
                </a>
                </div>  
                
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <div class="mb-1">
                        <h4>`+ product.name + " - " + product.currency + " " + product.cost +`</h4> 
                        <p> `+ product.description +`</p> 
                        </div>
                        <small class="text-muted">` + product.soldCount + ` vendidos</small> 
                    </div>

                </div>
            </div>
        </div>
        `
        document.getElementById("lista-productos").innerHTML = htmlContentToAppend;
    }
}

let numeroCategoria = localStorage.getItem("catID")
document.addEventListener("DOMContentLoaded", function( ){
        getJSONData(PRODUCTS_URL + numeroCategoria + EXT_TYPE ).then(function(resultObj){
            if (resultObj.status === "ok")
            {
                
                categoriesArray = resultObj.data.products;
                showCategoriesList(categoriesArray);
                
            }
        });
});



function filtrar(array){
    let desde = parseInt(document.getElementById("desde").value)
    let hasta = parseInt(document.getElementById("hasta").value)

    let listafiltrada= array.filter(product => product.cost >= desde && product.cost <= hasta)
    showCategoriesList(listafiltrada)
}

let botonfiltro = document.getElementById("boton-filtro")

botonfiltro.addEventListener("click", function(){
    filtrar(categoriesArray);
   
 }) 

 let botonasc = document.getElementById("boton-asc")
 
 botonasc.addEventListener("click",function(){
    categoriesArray.sort((men,may)=>men.cost-may.cost); 
showCategoriesList(categoriesArray)
 })

 
 let botondesc = document.getElementById("boton-desc")
 
 botondesc.addEventListener("click",function(){
    categoriesArray.sort((men,may)=>may.cost-men.cost); 
showCategoriesList(categoriesArray)
 })

 
 let botonrel = document.getElementById("boton-desc-rel")
 
 botonrel.addEventListener("click",function(){
    categoriesArray.sort((men,may)=>may.soldCount-men.soldCount); 
showCategoriesList(categoriesArray)
 })



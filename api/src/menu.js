let boton = document.querySelector('.boton-menu2')

let menu  = document.querySelector(".navegacion");

boton.addEventListener('click',function(e){

	menu.classList.add("active")
})


let botonesNavegacion = menu.children


for(i=0;i<botonesNavegacion.length;i++){

	
        
    botonesNavegacion[i].addEventListener('click',function(){

    	menu.classList.remove("active")
    })
	 
        
}


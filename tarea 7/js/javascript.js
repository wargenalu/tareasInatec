let mensajeBienvenida = document.getElementById("mensaje-bienvenida")
let botonSaludar = document.getElementById("saludar")
let botonCerrar = document.getElementById("boton-cerrar")


botonSaludar.addEventListener("click", mostrarBienvenida)
botonCerrar.addEventListener("click", cerrarBienvenida)


function mostrarBienvenida(){
    mensajeBienvenida.style.display = "block"

    
}

function cerrarBienvenida(){
  mensajeBienvenida.style.display = "none"
    

}

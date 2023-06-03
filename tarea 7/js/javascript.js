
var mensajeBienvenida = document.getElementById("mensaje-bienvenida")
var seccionBienvenida = document.getElementById("bienvenida")
var seccionFormulario = document.getElementById("formulario")
var botonFormulario = document.getElementById("boton-formulario")
var botonSaludar = document.getElementById("saludar")
var botonCerrar = document.getElementById("boton-cerrar")
var botonInicio = document.getElementById("boton-inicio")

botonSaludar.addEventListener("click", mostrarBienvenida)
botonCerrar.addEventListener("click", cerrarBienvenida)
botonInicio.addEventListener("click", inicio)
botonFormulario.addEventListener("click", formulario)

function mostrarBienvenida(){
  mensajeBienvenida.style.display = "block"
}

function cerrarBienvenida(){

  mensajeBienvenida.style.display = "none"
}

function inicio(){

  seccionBienvenida.style.display="block"
  seccionFormulario.style.display="none"
}

function formulario(){
  seccionBienvenida.style.display="none"
  seccionFormulario.style.display="block"
}
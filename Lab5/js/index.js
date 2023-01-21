$("#BotonAgregar").on("click", AgregarElemento)

function AgregarElemento(e){
    //Evitar que se dispare el evento del formulario, recargar página
    e.preventDefault()
    //Recuperar el elemento escrito
    let Elemento = $("#newText").val()
    //Crear espacio de lista para el elemento
    $("#ListaElementos").append(`<div class="NuevoElemento"> <li class="first">${Elemento}</li><br><button id="BotonCheck"> check </button> <button id="BotonDelete"> delete </button></div>`)
}

$("#ListaElementos").on("click", "#BotonCheck", function(){

    //Botón presionado, busca clase first y cambia clase
    $(this).siblings(".first").toggleClass("NuevoElementoTachado")
})

$("#ListaElementos").on("click", "#BotonDelete", function(){

    //Borra hasta el div
    $(this).parent().remove()
})
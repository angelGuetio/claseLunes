$(document).ready(function(){

    // Funcion para mostrar texto    
    function mostrarText(){
        $("#text").fadeIn();
       // alert("Función mostrar text")
    }
    function ocultar(){
        $("#text").fadeOut();
        //alert("Función ocultar")
    }
    function cambiarColor(){
        const randmColor='#'+Math.floor(Math.random()*16777215).toString(16);
        $("#text").css("color",randmColor);
        //alert("Cambiar Color")
    }
    // Asignar las fucniones a los eventos de los botones

    $("#show-text").click(mostrarText);
    $("#hide-text").click(ocultar);
    $("#change-color").click(cambiarColor);

});
"use strict";
class Ejercicio7{
    constructor(){
    }
    ocultar(){
        // tarea 1: ocultar algunos elementos html
        $("p").hide();
    }
    mostrar(){
        // tarea 1: mostrar algunos elementos html
        $("p").show();
    }
    modificar(){
        // tarea 2: modificar algunos elementos html
        $("h2").css({color:'black'});
    }
    añadir(){
        $("#append").append(". Elemento añadido con append() ");
    }
    eliminar(){
        $("h3").remove();
    }
    recorrer(){
        $("*", document.body).each(function() {
            var etiquetaPadre = $(this).parent().get(0).tagName;
            $(this).prepend(document.createTextNode( "Etiqueta padre : <"  + etiquetaPadre + "> elemento : <" + $(this).get(0).tagName +"> valor: "));
        });
    }
    sumarFilasColumnas(){
        var sumaFilas = 0;
        $("table tr td").each(function(){
            sumaFilas += parseInt($(this).text());
        });
        $("#tabla").append("Suma de las filas y columnas de la tabla = " + sumaFilas.toString());
    }
}
var ejercicio7 = new Ejercicio7();
"use strict";
class Calculadora{
    constructor(){
        this.udFamiliar = "";
        this.ducha = "";
        this.baño = "";
        this.dientes = "";
        this.cara = "";
        this.cisterna = "";
        this.grifo = "";
        this.cocinar = "";
        this.lavadora = "";
        this.lavavajillas = "";
        this.platos = "";
        this.suelo = "";
    }
    consumoAgua(){
        this.udFamiliar = document.getElementById("udFamiliar").value;
        this.ducha = document.getElementById("ducha").value;
        this.baño = document.getElementById("baño").value;
        this.dientes = document.getElementById("dientes").value;
        this.cara = document.getElementById("cara").value;
        this.cisterna = document.getElementById("cisterna").value;
        this.grifo = document.getElementById("grifo").value;
        this.cocinar = document.getElementById("cocinar").value;
        this.lavadora = document.getElementById("lavadora").value;
        this.lavavajillas = document.getElementById("lavavajillas").value;
        this.platos = document.getElementById("platos").value;
        this.suelo = document.getElementById("suelo").value;

        if (isNaN(this.udFamiliar) || this.udFamiliar == "" || this.udFamiliar.charAt(0) == "."){
            alert("Personas/unidad familiar no introducida correctamente.");
            return;
        }
        if (isNaN(this.ducha) || this.ducha == "" || this.ducha.charAt(0) == "."){
            alert("Ducha no introducida correctamente.");
            return;
        }
        if (isNaN(this.baño) || this.baño == "" || this.baño.charAt(0) == "."){
            alert("Baño no introducida correctamente.");
            return;
        }
        if (isNaN(this.dientes) || this.dientes == "" || this.dientes.charAt(0) == "."){
            alert("Lavar dientes no introducida correctamente.");
            return;
        }
        if (isNaN(this.cara) || this.cara == "" || this.cara.charAt(0) == "."){
            alert("Lavar cara no introducida correctamente.");
            return;
        }
        if (isNaN(this.cisterna) || this.cisterna == "" || this.cisterna.charAt(0) == "."){
            alert("Descargas cisterna no introducida correctamente.");
            return;
        }
        if (isNaN(this.grifo) || this.grifo == "" || this.grifo.charAt(0) == "."){
            alert("Beber del grifo no introducida correctamente.");
            return;
        }
        if (isNaN(this.cocinar) || this.cocinar == "" || this.cocinar.charAt(0) == "."){
            alert("Agua para cocinar no introducida correctamente.");
            return;
        }
        if (isNaN(this.lavadora) || this.lavadora == "" || this.lavadora.charAt(0) == "."){
            alert("Lavadora no introducida correctamente.");
            return;
        }
        if (isNaN(this.lavavajillas) || this.lavavajillas == "" || this.lavavajillas.charAt(0) == "."){
            alert("Lavavajillas no introducida correctamente.");
            return;
        }
        if (isNaN(this.platos) || this.platos == "" || this.platos.charAt(0) == "."){
            alert("Fregar platos no introducida correctamente.");
            return;
        }
        if (isNaN(this.suelo) || this.suelo == "" || this.suelo.charAt(0) == "."){
            alert("Fregar suelo no introducida correctamente.");
            return;
        }

        // make result visible
        document.getElementById("contenedorResultado").style.display = "block";

        var udFamiliar = parseInt(this.udFamiliar);
        var ducha = parseInt(this.ducha);
        var baño = parseInt(this.baño);
        var dientes = parseInt(this.dientes);
        var cara = parseInt(this.cara);
        var cisterna = parseInt(this.cisterna);
        var grifo = parseInt(this.grifo);
        var cocinar = parseInt(this.cocinar);
        var lavadora = parseInt(this.lavadora);
        var lavavajillas = parseInt(this.lavavajillas);
        var platos = parseInt(this.platos);
        var suelo = parseInt(this.suelo);

        var res = Math.round((ducha * 95 * udFamiliar) + (baño * 200 * udFamiliar) + (dientes * 20 * udFamiliar) + (cara * 20 * udFamiliar) + (cisterna * 11 * udFamiliar) + (grifo * udFamiliar) + (cocinar) + (lavadora * 40) + (lavavajillas * 20) + (platos * 100) + (suelo * 8));

        document.getElementById("personas").innerHTML = udFamiliar;
        document.getElementById("resultado").innerHTML = res;
    }
}
var calculadora = new Calculadora();
"use strict";
class Calculadora {
    constructor() {
        this.operation = "";
        this.showedOperation = "";
        this.memory = "";
        this.solved = false;
    }
    refrescar(){
        document.getElementById("resultado").textContent = this.showedOperation;
    }
    digitos(numero) {
        if(this.solved) {
            document.getElementById("resultado").textContent = "";
            this.solved = false;
        } 
        this.operation += numero;
        this.showedOperation += numero;
        this.refrescar();
    }
    punto() {
        this.operation += ".";
        this.showedOperation += ".";
        this.refrescar();
    }
    suma() {
        this.operation += "+";
        this.showedOperation += "+";
        this.refrescar();
    }
    resta() {
        this.operation += "-";
        this.showedOperation += "-";
        this.refrescar();
    }
    multiplicacion() {
        this.operation += "*";
        this.showedOperation += "*";
        this.refrescar();
    }
    division() {
        this.operation += "/";
        this.showedOperation += "/";
        this.refrescar();
    }
    mrc() {
        var result = this.memory;
        document.getElementById("resultado").textContent = result;
        this.operation = result;
        this.showedOperation = result;
        this.memory = "";
    }
    mMenos() {
        if(!isNaN(document.getElementById("resultado").textContent)){
            this.memory = eval(this.memory + "-" + document.getElementById("resultado").textContent);
        }
    }
    mMas() {
        if(!isNaN(document.getElementById("resultado").textContent)){
            this.memory = eval(this.memory + "+" + document.getElementById("resultado").textContent);
        }
    }
    borrar() {
        document.getElementById("resultado").textContent = "";
        this.operation = "";
        this.showedOperation = "";
    }
    igual() {
        this.operation = eval(this.operation);
        this.showedOperation = eval(this.operation);
        this.refrescar();
        this.solved = false;
    }
}
var calculadora = new Calculadora();
"use strict";
class Calculadora {
    constructor() {
        this.operation = "";
        this.showedOperation = "";
        this.memory = "";
        this.solved = false;
    }
    refrescar(){
        // refrescar la pantalla con los cambios
        document.getElementById("resultado").textContent = this.showedOperation;
    }
    deg(){
        // convertir a grados
        var radianes = document.getElementById("resultado").textContent;
        var grados = radianes * (180 / Math.PI);
        this.operation = grados;
        this.showedOperation = grados;
        this.refrescar();
    }
    rad(){
        // convertir a radianes
        var grados = document.getElementById("resultado").textContent;
        var radianes = (grados * Math.PI) / 180;
        this.operation = radianes;
        this.showedOperation = radianes;
        this.refrescar();
    }
    mc(){
        // memory clear: elimina cualquier número almacenado en memoria
        this.memory = "";
    }
    mr(){
        // memory recall: recupera el número almacenado en memoria. el número permanece en memoria
        var result = this.memory;
        this.operation = result;
        this.showedOperation = result;
        this.refrescar();
    }
    mMas() {
        // suma el número mostrado a otro número que se encuentre en memoria pero no muestra la suma de estos números
        if(!isNaN(document.getElementById("resultado").textContent)){
            this.memory = eval(this.memory + "+" + document.getElementById("resultado").textContent);
        }
    }
    mMenos() {
        // resta el número mostrado a otro número que se encuentre en memoria pero no muestra la resta de estos números
        if(!isNaN(document.getElementById("resultado").textContent)){
            this.memory = eval(this.memory + "-" + document.getElementById("resultado").textContent);
        }
    }
    ms(){
        // memory storage: almacena en memoria el número mostrado
        this.memory = document.getElementById("resultado").textContent;
    }
    potenciaCuadrado(){
        // nº elevado al cuadrado
        this.operation = Math.pow(document.getElementById("resultado").textContent, 2);
        this.showedOperation = Math.pow(document.getElementById("resultado").textContent, 2); 
        this.refrescar();
    }
    fraccion(){
        // operacion 1/x
        var numero = document.getElementById("resultado").textContent;
        var resultado = 1 / numero;
        this.operation = resultado;
        this.showedOperation = resultado;
        this.refrescar();        
    }
    seno(){
        // seno
        this.operation = Math.sin(document.getElementById("resultado").textContent);
        this.showedOperation = Math.sin(document.getElementById("resultado").textContent); 
        this.refrescar();
    }
    coseno(){
        // coseno
        this.operation = Math.cos(document.getElementById("resultado").textContent);
        this.showedOperation = Math.cos(document.getElementById("resultado").textContent); 
        this.refrescar();
    }
    tangente(){
        // tangente
        this.operation = Math.tan(document.getElementById("resultado").textContent);
        this.showedOperation = Math.tan(document.getElementById("resultado").textContent); 
        this.refrescar();
    }
    raiz(){
        // raiz cuadrada
        this.operation = Math.sqrt(document.getElementById("resultado").textContent);
        this.showedOperation = Math.sqrt(document.getElementById("resultado").textContent); 
        this.refrescar();
    }
    potenciaDiez(){
        // 10 elevado a exponente
        this.operation = Math.pow(10, document.getElementById("resultado").textContent);
        this.showedOperation = Math.pow(10, document.getElementById("resultado").textContent); 
        this.refrescar();
    }
    log10(){
        // logaritmo en base 0
        this.operation = Math.log10(document.getElementById("resultado").textContent);
        this.showedOperation = Math.log10(document.getElementById("resultado").textContent);
        this.refrescar();
    }
    exp(){
        // nº de euler elevado al valor de la pnatalla
        this.operation = Math.exp(document.getElementById("resultado").textContent);
        this.showedOperation = Math.exp(document.getElementById("resultado").textContent);
        this.refrescar();
    }
    mod(){
        // valor absoluto
        this.operation = Math.abs(document.getElementById("resultado").textContent);
        this.showedOperation = Math.abs(document.getElementById("resultado").textContent);
        this.refrescar();
    }
    ce(){
        // clear error: elimina el número mostrado. se utiliza para cuando se comete un error en el ingreso de datos pero sin eliminar todo el cálculo que se encuentra realizando
        this.showedOperation = "";
        this.refrescar();
    }
    c() {
        // elimina todo el cálculo actual
        this.operation = "";
        this.showedOperation = "";
        this.refrescar();
    }
    del(){
        // borrar ultimo caracter en pantalla
        var pantalla = document.getElementById("resultado").textContent;
        
        pantalla = pantalla.slice(0, pantalla.length-1);

        this.operation = pantalla;
        this.showedOperation = pantalla;
        this.refrescar();
    }
    division() {
        // operacion division
        this.operation += "/";
        this.showedOperation += "/";
        this.refrescar();
    }
    digitos(numero) {
        // introducir numeros en pantalla (incluye PI)
        if(this.solved) {
            document.getElementById("resultado").textContent = "";
            this.solved = false;
        } 
        this.operation += numero;
        this.showedOperation += numero;
        this.refrescar();
    }
    multiplicacion() {
        // operacion multiplicacion
        this.operation += "*";
        this.showedOperation += "*";
        this.refrescar();
    }
    factorial(){
        // factorial del nº en pantalla
        var num = document.getElementById("resultado").textContent;
        var fact = 1;
        while (num > 1){
            fact *= num;
            num--;
        }
        this.operation = fact;
        this.showedOperation = fact;
        this.refrescar();
    }
    resta() {
        // operacion resta
        this.operation += "-";
        this.showedOperation += "-";
        this.refrescar();
    }
    masMenos(){
        // cambiar el signo
        var pantalla = document.getElementById("resultado").textContent;         
        if (!pantalla.startsWith("-")) {
            // numero positivo -> convertir a negativo
            pantalla = "-" + pantalla;
        } else {
            // numero negativo -> convertir a positivo
            pantalla = pantalla.replace("-", "");
        }
        this.operation = pantalla;
        this.showedOperation = pantalla;
        this.refrescar();
    }
    suma() {
        // operacion suma
        this.operation += "+";
        this.showedOperation += "+";
        this.refrescar();
    }
    parentesisIz(){
        // introducir parentesis izdo
        this.operation += "(";
        this.showedOperation += "(";
        this.refrescar();
    }
    parentesisDer(){
        // introducir parentesis dcho
        this.operation += ")";
        this.showedOperation += ")";
        this.refrescar();
    }
    punto() {
        // introducir .
        this.operation += ".";
        this.showedOperation += ".";
        this.refrescar();
    }
    igual() {
        // resultado operacion
        this.operation = eval(this.operation);
        this.showedOperation = eval(this.operation);
        this.refrescar();
        this.solved = false;
    }
}
var calculadora = new Calculadora();
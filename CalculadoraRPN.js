"use strict";
class Calculadora{
    constructor(){
        this.display = "";
        this.memory = "";
        this.stack = new Array();
    }
    repaintStack(){
        document.getElementById("display").value="";
        for(let i=0; i< this.stack.length; i++){
            document.getElementById("stack").value+=this.stack[i]+"\t";
        }
    }
    refresh(){
        document.getElementById("display").value=this.display;
    }
    digitos(number){
        this.display += number;
        document.getElementById("display").value=this.display;
    }
    punto(){
        this.display+=".";
        document.getElementById("display").value=this.display;
    }
    suma(){
        if(this.stack.length>=2){
            var op1=this.stack.pop();
            var op2=this.stack.pop();
            var suma = op1+op2;
            this.stack.push(suma);
            this.repaintStack();
        }
    }
    resta(){
        if(this.stack.length>=2){
            var op1=this.stack.pop();
            var op2=this.stack.pop();
            var resta = op2-op1;
            this.stack.push(resta);
            this.repaintStack();
        }
    }
    multiplicacion(){
        if(this.stack.length>=2){
            var op1=this.stack.pop();
            var op2=this.stack.pop();
            var mul = op1*op2;
            this.stack.push(mul);
            this.repaintStack();
        }
    }
    division(){
        if(this.stack.length>=2){
            var op1=this.stack.pop();
            var op2=this.stack.pop();
            var div = op2/op1;
            this.stack.push(div);
            this.repaintStack();
        }
    }
    sin(){
        if(this.stack.length>=1){
            var op = this.stack.pop();
            var sin=Math.sin(op);
            this.stack.push(sin);
            this.repaintStack();
        }
    }
    cos(){
        if(this.stack.length>=1){
            var op = this.stack.pop();
            var cos=Math.cos(op);
            this.stack.push(cos);
            this.repaintStack();
        }
    }
    tan(){
        if(this.stack.length>=1){
            var op = this.stack.pop();
            var tan=Math.tan(op);
            this.stack.push(tan);
            this.repaintStack();
        }
    }
    raiz(){
        if(this.stack.length>=1){
            var op = this.stack.pop();
            var raiz=Math.sqrt(op);
            this.stack.push(raiz);
            if(isNaN(raiz)){
                alert("Math error");
            }else{
                this.repaintStack();
            }
        }
    }
    potenciaCuadrado(){
        if(this.stack.length>=1){
            var op = this.stack.pop();
            var cuadrado=Math.pow(op, 2);
            this.stack.push(cuadrado);
            this.repaintStack();
        }
    }
    potencia(){
        if(this.stack.length>=1){
            var op1 = this.stack.pop();
            var op2 = this.stack.pop();
            var potencia=Math.pow(op2, op1);
            this.stack.push(potencia);
            this.repaintStack();
        }
    }
    factorial(){
        if(this.stack.length>=1){
            var op = this.stack.pop();
            var fact = 1;
            while (op > 1){
                fact *= op;
                op--;
            }
            this.stack.push(fact);
            this.repaintStack();
        }
    }
    fraccion(){
        if(this.stack.length>=1){
            var op = this.stack.pop();
            var fraccion = 1/op;
            this.stack.push(fraccion);
            this.repaintStack();
        }
    }
    ce(){
        this.memory="";
    }
    c(){
        this.memory="";
        this.display="";
        this.stack=[];
        this.repaintStack();
        this.refresh();
    }
    del(){
        this.stack.pop();
        this.repaintStack();
    }
    ln(){
        if(this.stack.length>=1){
            var op = this.stack.pop();
            var ln=Math.log(op);
            this.stack.push(ln);
            if(isNaN(ln)){
                alert("Math error");
            }else{
                this.repaintStack();
            }
        }
    }
    log10(){
        if(this.stack.length>=1){
            var op = this.stack.pop();
            var log10=Math.log10(op);
            this.stack.push(log10);
            if(isNaN(ln)){
                alert("Math error");
            }else{
                this.repaintStack();
            }
        }
    }
    parentesisIz(){
        this.display+="(";
    }
    parentesisDer(){
        this.display+=")";
    }
    euler(){
        if(this.stack.length>=1){
            var op = this.stack.pop();
            var euler = Math.exp(op);
            this.stack.push(euler);
            this.repaintStack();
        }
    }
    enter(){
        var display=document.getElementById("display").value;
        if(isNaN(display) || display=="" || display.charAt(0)=="."){
            alert("NaN");
            this.display="";
            this.refresh();
        }else{
            this.stack.push(parseFloat(display));
            this.display="";
            this.refresh();
            document.getElementById("stack").value += display+"\t";
        }
    }
    coma(){
        this.display+=",";
    }
    potenciaDiez(){
        if(this.stack.length>=1){
            var op = this.stack.pop();
            var potDiez = Math.pow(10,op);
            this.stack.push(potDiez);
            this.repaintStack();
        }
    }
    mod(){
        if(this.stack.length>=1){
            var op = this.stack.pop();
            var abs = Math.abs(op);
            this.stack.push(abs);
            this.repaintStack();
        }
    }
    aprox(){
        if(this.stack.length>=1){
            var op = this.stack.pop();
            var aprox = Math.round(op);
            this.stack.push(aprox);
            this.repaintStack();
        }
    }
}
var calculadora = new Calculadora();
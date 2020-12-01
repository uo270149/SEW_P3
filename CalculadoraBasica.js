"use strict";
class Calculator{
    constructor(){
        this.stack=0;
    }
    calculate(){
        try{
        document.getElementById('screen').value = eval(document.getElementById('screen').value);
        }catch(err){ 
        document.getElementById('screen').value = "ERROR";
        }
    }
    show(digit){
        var last = document.getElementById('screen').value;
        document.getElementById('screen').value = last.concat(digit);
    }
    clearScreen(){
        document.getElementById('screen').value = null;
    } 
    
    showLast(){
        document.getElementById('screen').value = this.stack;
    }
    
    mAdd(){
        this.stack += parseInt(document.getElementById('screen').value);
    }
    mSub(){
        this.stack -= parseInt(document.getElementById('screen').value);
    }
}


var calculator = new Calculator();
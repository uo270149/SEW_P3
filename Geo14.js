"use strict";
class Geo {
    constructor() {
        navigator.geolocation.getCurrentPosition(this.getPosicion.bind(this), this.mostrarErrores.bind(this));
    }

    getPosicion(posicion) {
        this.longitud = posicion.coords.longitude;
        this.latitud = posicion.coords.latitude;
        this.precision = posicion.coords.accuracy;
        this.altitud = posicion.coords.altitude;
        this.precisionAltitud = posicion.coords.altitudeAccuracy;
        this.rumbo = posicion.coords.heading;
        this.velocidad = posicion.coords.speed;
    }

    mostrarErrores(error) {
        if (error.code == 1) {
            alert("Acceso denegado");
        } else if (err.code == 2) {
            alert("Posición no disponible");
        } else if (err.code == 3) {
            alert("La petición ha caducado");
        }
    }

    mapaEstatico(donde) {
        var canvas = document.getElementById('canvas');
        var canvasContext = canvas.getContext('2d');

        canvasContext.font = 'italic 40px sans-serif';
        canvasContext.strokeStyle = "rgba(255, 0, 0, 1)";
        canvasContext.strokeText("¡Este es tu mapa estático!", 30, 40);

        var ubicacion = document.getElementById("ubicacion");

        var apikey = "&key=AIzaSyC6j4mF6blrc4kZ54S6vYZ2_FpMY9VzyRU";
        var url = "https://maps.googleapis.com/maps/api/staticmap?";
        var center = "center=" + this.latitud + "," + this.longitud;
        var zoom = "&zoom=15";
        var size = "&size=800x600";
        var marker = "&markers=color:red%7Clabel:S%7C" + this.latitud + "," + this.longitud;
        var sensor = "&sensor=false";

        this.imgMap = url + center + zoom + size + marker + sensor + apikey;
        ubicacion.innerHTML = "<img src='" + this.imgMap + "'/>";
    }
}
var geo = new Geo();
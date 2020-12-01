"use strict";
class GeoLocalizacion {
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

    getLongitud() {
        return this.longitud;
    }
    getLatitud() {
        return this.latitud;
    }
    getAltitud() {
        return this.altitud;
    }
    mostrar(donde) {
        var ubicacion = document.getElementById(donde);
        var datos = "<ul>";

        datos += "<li>Longitud: " + this.longitud + " grados</li>";
        datos += "<li>Latitud: " + this.latitud + " grados</li>";
        datos += "<li>Precisión de la latitud y la longitud: " + this.precision + " metros</li>";
        datos += "<li>Altitud: " + this.altitud + " metros</li>";
        datos += "<li>Precisión de la altitud: " + this.precisionAltitud + " metros</li>";
        datos += "<li>Rumbo: " + this.rumbo + " grados</li>";
        datos += "<li>Velocidad: " + this.velocidad + " m/s</li>";
        datos += "</ul>"

        ubicacion.innerHTML = datos;
    }
    mapaEstatico(donde) {
        var ubicacion = document.getElementById("ubicacion");

        var apikey = "&key=AIzaSyC6j4mF6blrc4kZ54S6vYZ2_FpMY9VzyRU";
        var url = "https://maps.googleapis.com/maps/api/staticmap?";
        var center = "center=" + this.latitud + "," + this.longitud;
        var zoom = "&zoom=15";
        var size = "&size=800x600";
        var marker = "&markers=color:red%7Clabel:S%7C" + this.latitud + "," + this.longitud;
        var sensor = "&sensor=false";
        var alt = "alt=\"Mapa\"";

        this.imgMap = url + center + zoom + size + marker + sensor + apikey;
        ubicacion.innerHTML = "<img src='" + this.imgMap + "' " + alt + "/>";
    }
}
var geo = new GeoLocalizacion();
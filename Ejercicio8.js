"use strict";
class Meteo {
    constructor(apikey, ciudad, unidades, idioma) {
        this.apikey = apikey;
        this.unidades = unidades;
        this.ciudad = ciudad;
        this.idioma = idioma;
        this.url = "http://api.openweathermap.org/data/2.5/weather?q=" + this.ciudad + this.unidades + this.idioma + "&appid=" + this.apikey;
        this.error = "<h2>¡Problema! No se puede obtener información de <a href='http://openweathermap.org'>OpenWeatherMap</a></h2>";
    }

    cargarDatos() {
        $.ajax({
            dataType: "json",
            url: this.url,
            method: 'GET',
            success: function (data) {
                this.datos = data;

                // ver JSON
                /* $("#meteo").append("<h2>Datos en JSON de " + this.datos.name + " desde <a href='http://openweathermap.org'>OpenWeatherMap</a></h2>");
                var strCadiz = JSON.stringify(data, null, 2);
                $("#meteo").append(strCadiz); */

                // ver datos
                var strIcon = "<img src=\"https://openweathermap.org/img/wn/" + this.datos.weather[0].icon + "@2x.png\" class=\"weather-icon\"></img>"


                $("#meteo").append("<h2>" + strIcon + " El Tiempo en " + this.datos.name + "</h2>");

                $("#meteo").append("<p>Ciudad: " + this.datos.name + "</p>");
                $("#meteo").append("<p>País: " + this.datos.sys.country + "</p>");
                $("#meteo").append("<p>Latitud: " + this.datos.coord.lat + " grados</p>");
                $("#meteo").append("<p>Longitud: " + this.datos.coord.lon + " grados</p>");
                $("#meteo").append("<p>Temperatura: " + this.datos.main.temp + " grados Celsius</p>");
                $("#meteo").append("<p>Temperatura máxima: " + this.datos.main.temp_max + " grados Celsius</p>");
                $("#meteo").append("<p>Temperatura mínima: " + this.datos.main.temp_min + " grados Celsius</p>");
                $("#meteo").append("<p>Presión: " + this.datos.main.pressure + " milímetros</p>");
                $("#meteo").append("<p>Humedad: " + this.datos.main.humidity + "%</p>");
                $("#meteo").append("<p>Amanece a las: " + new Date(this.datos.sys.sunrise * 1000).toLocaleTimeString() + "</p>");
                $("#meteo").append("<p>Oscurece a las: " + new Date(this.datos.sys.sunset * 1000).toLocaleTimeString() + "</p>");
                $("#meteo").append("<p>Dirección del viento: " + this.datos.wind.deg + "  grados</p>");
                $("#meteo").append("<p>Velocidad del viento: " + this.datos.wind.speed + " metros/segundo</p>");
                $("#meteo").append("<p>Hora de la medida: " + new Date(this.datos.dt * 1000).toLocaleTimeString() + "</p>");
                $("#meteo").append("<p>Fecha de la medida: " + new Date(this.datos.dt * 1000).toLocaleDateString() + "</p>");
                $("#meteo").append("<p>Descripción: " + this.datos.weather[0].description + "</p>");
                $("#meteo").append("<p>Visibilidad: " + this.datos.visibility + " metros</p>");
                $("#meteo").append("<p>Nubosidad: " + this.datos.clouds.all + " %</p>");
            },
            error: function () {
                $("#meteo").append(this.error);
            }
        });
    }
}
var cadiz = new Meteo("948320e77fef6386fd97f1f505ed677c", "Cádiz", "&units=metric", "&lang=es");
var llanes = new Meteo("948320e77fef6386fd97f1f505ed677c", "Llanes", "&units=metric", "&lang=es");
var ronda = new Meteo("948320e77fef6386fd97f1f505ed677c", "Ronda", "&units=metric", "&lang=es");
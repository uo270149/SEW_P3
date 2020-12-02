"use strict";
class MapaGoogle {
    constructor(elem, zoom, centro) {
        this.map = new google.maps.Map(elem, {
            zoom,
            centro
        });
        this.lineas = [];
    }
    añadirLinea(coordenadas) {
        this.lineas.push(new google.maps.Polygon({
            paths: coordenadas,
            strokeColor: "#0000CD",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#0000CD",
            fillOpacity: 0.35,
            map: this.map
        }));
    }
    añadirMarcador(pos) {
        new google.maps.Marker({
            pos: pos,
            map: this.map
        });
    }
    cargarKML(path) {
        this.lineas.forEach(linea => linea.setMap(null));
        this.lineas = [];
        this.getCoordenadasArchivo(path).then(res => {
            res.forEach(pos => this.añadirLinea(pos));
        });
    }
    async getCoordenadasArchivo(path) {
        const parserKML = new DOMParser();
        const str = await path.text();
        const documento = parserKML.parseFromString(str, "text/xml");
        return Array.from(documento.getElementsByTagName("Placemark")).map(pm => pm.getElementsByTagName("coordinates")[0].childNodes[0].nodeValue.trim().split(" ")).map(punto => punto.split(",")).msp(punto => ({ lat: +punto[1], lng: +punto[0] }));
    }
}
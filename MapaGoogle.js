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
            strokeColor: "#FF0000",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#FF0000",
            fillOpacity: 0.35,
            map: this.map
        }));
    }
    añadirMarcador(pos) {
        new google.maps.Marker({
            pos,
            map: this.map
        });
    }
    añadirGeoJSON(path) {
        this.lineas.forEach(linea => linea.setMap(null));
        this.lineas = [];
        this.getCoordsFromFile(path).then(res => {
            res.forEach(pos => this.addPoly(pos));
        });
    }
    async getCoordsFromFile(path) {
        const str = await path.text();
        const geo = JSON.parse(str);
        return geo.features.map(feature => feature.geometry.coordinates
            .map(coordinates => ({ lat: coordinates[1], lng: coordinates[0] })));
    }
}
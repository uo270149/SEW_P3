var geojson = new Object();
let helper;
class MapaGeoJSON {
    constructor(map, buscadorArchivo) {
        this.map = map;
        this.buscadorArchivo = buscadorArchivo;
    }
    cargarGeoJSON() {
        this.map.añadirGeoJSON(this.buscadorArchivo.files[0]);
    }
}
geojson.help = function () {
    navigator.geolocation.getCurrentPosition(pos => {
        const pG = { lat: pos.coords.latitude, lng: pos.coords.longitude };
        helper = new MapaGeoJSON(new MapaGoogle(document.getElementById('mapa'), 8, pG), document.getElementById('archivoTexto'));
    });
}
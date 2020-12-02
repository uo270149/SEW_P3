var kml = new Object();
let helper;
class MapaKML {
    constructor(map, buscador) {
        this.map = map;
        this.buscadorArchivos = buscador;
    }
    initMap() {
        this.map.cargarKML(this.buscadorArchivos.files[0]);
    }
}
kml.help = function () {
    navigator.geolocation.getCurrentPosition(pos => {
        const p = { lat: pos.coords.latitude, lng: pos.coords.longitude };
        helper = new MapaKML(new MapaGoogle(document.getElementById("mapa"), 8, p), document.getElementById("archivoTexto"));
    });
};


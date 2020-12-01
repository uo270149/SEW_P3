"use strict";
class Imagenes {
    constructor() { }

    cargarImagenes() {
        var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

        $.getJSON(flickrAPI,
            {
                tags: "bird",
                tagmode: "any",
                format: "json"
            })
            .done(function (data) {
                $.each(data.items, function (i, item) {
                    $("<img>").attr("src", item.media.m).appendTo("#imagenes");
                    
                    if (i === 20) {
                        return false;
                    }
                });
            });
    }
}
var imagenes = new Imagenes();
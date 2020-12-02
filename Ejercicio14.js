var full = new Object();

full.fullScreen = function () {
    if (document.fullscreenEnabled) {
        var button = document.getElementById("fullScreen");
        
        button.addEventListener('click', function (event) {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen();
            } else {
                document.exitFullscreen();
            }
        }, false);

        document.addEventListener('fullscreenchange', function (event) {
            console.log(event);
            if (!document.fullscreenElement) {
                button.innerText = "Ver en pantalla completa";
            } else {
                button.innerText = "Salir de pantalla completa";
            }
        });

        document.addEventListener('fullscreenerror', function (event) {
            console.log(event);
        });
    }
}

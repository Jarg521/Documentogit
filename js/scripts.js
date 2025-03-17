/*!
* Start Bootstrap - One Page Wonder v6.0.6 (https://startbootstrap.com/theme/one-page-wonder)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-one-page-wonder/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("filtro-categoria").addEventListener("change", function () {
        let categoria = this.value;
        let seccion = document.getElementById(categoria);

        if (categoria !== "todas" && seccion) {
            seccion.scrollIntoView({ behavior: "smooth" });
        }
    });
});



function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

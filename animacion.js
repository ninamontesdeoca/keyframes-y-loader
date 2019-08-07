// animacion.js


document.addEventListener("DOMContentLoaded", () => {    
    window.addEventListener("load", () => {
        //si todo termino de cargar hago esto
        console.log("termino de cargar :)");
        let cont = document.getElementById("super").contentDocument;
        console.log(cont);
        let cerdito = cont.getElementById("cerdito");
        console.log("Acá está mi:", cerdito);
        let luz = cont.getElementById("luz");
        console.log("acá está la light:", luz);
        let ufo = cont.getElementById("ufo");
        console.log("acá está el ovni:", ufo); 

        let linea = new TimelineLite ();
        linea.set(ufo, {x: -1000, y: -100});
        linea.set(luz, {opacity: 0});
        linea.to(ufo, 2, {x:0, y:0})
             .to(luz, 1, {opacity:1})
             .to(cerdito, 1, {rotation:-720, transformOrigin: "center center", scale: 0.2, y:-270})
             .to(cerdito, 0, {opacity: 0})
             .to(luz, 0.5, {opacity: 0})
             .to(ufo, 3, {x: 1000, y: -200});
             


        // linea.from(luz, {opacity:0})
        //     .to(luz, 2, {opacity:1});
            

        // TweenMax.to(cerdito, 4, {delay: 0.5, x: 200});
        // TweenMax.to(cerdito, 4, {delay: 0.5, y: -200});
        // TweenMax.to(luz, 4, {x: 200});
        // TweenMax.to(ufo, 4, {x: 200});
        // TweenMax.set(luz, 1, {opacity: 0});
        // TweenMax.to(luz, 2, {opacity: 1});
       



    })
});
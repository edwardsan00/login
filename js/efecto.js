(function(){
    let btn = document.querySelector("#btn");
    let dibujar = function(e){
        let div = document.createElement("div");
            div.classList.add('circle');
            div.style.left = (e.layerX - 10) + "px";
            div.style.top = (e.layerY - 10) + "px";
            btn.appendChild(div);
    }
    btn.addEventListener("mousedown", dibujar);
})();
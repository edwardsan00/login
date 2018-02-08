(function(){
    //Vars
    let btn = document.querySelector("#btn"),
        canvas = document.getElementById("canvas"),
        ctx = canvas.getContext("2d");
    
    //Functions
    let dibujar = function(e){
        let div = document.createElement("div");
            div.classList.add('circle');
            div.style.left = (e.layerX - 10) + "px";
            div.style.top = (e.layerY - 10) + "px";
            btn.appendChild(div);
    }
   
    //TODO    
    if(ctx){
        //Variables          
        let lFina = 4,
            lGruesa = 4,
            middleH = canvas.height/2,
            middleW = canvas.width/2;   
        //Definicion
        ctx.lineWidth = lFina;
        ctx.strokeStyle = "#FE5D3C";

        //Arco 360°
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, (canvas.width / 2) - 5 , 0, 2*Math.PI);
        ctx.stroke();

        //SemiCirculo Izquierdo
        ctx.beginPath()
        ctx.arc(middleW/2+6 ,middleH-5, 5, .5*Math.PI, 1.6*Math.PI);
        ctx.stroke();
        // //SemiCirculo Derecho
        ctx.beginPath()
        ctx.arc(middleW+middleW/2-6 ,middleH+5, 5, .6*Math.PI, 1.4*Math.PI, true);
        ctx.stroke();

        //Lineas horizontales
        //top
        ctx.beginPath();
        ctx.moveTo(middleW/2+4, middleH-10);
        ctx.lineTo(middleW+middleW/2, middleH-10);
        ctx.stroke();
        //middle
        ctx.beginPath();
        ctx.moveTo(middleW/2+4, middleH);
        ctx.lineTo(middleW+middleW/2-4, middleH);
        ctx.stroke();
        //bot
        ctx.beginPath();
        ctx.moveTo(middleW/2, middleH+10);
        ctx.lineTo(middleW+middleW/2-4, middleH+10);
        ctx.stroke();

        //Linea Blanca Izquierda
        ctx.strokeStyle = "white";
        ctx.lineWidth = lGruesa;
        ctx.beginPath();
        ctx.moveTo(middleW-1.5, middleH);
        ctx.lineTo(middleW-10, middleH);
        ctx.stroke();
        //Linea Blanca Derecha
        ctx.beginPath();
        ctx.moveTo(middleW+1.5, middleH);
        ctx.lineTo(middleW+10, middleH);
        ctx.stroke();

        //Linea Vertical
        ctx.strokeStyle = "#FE5D3C";
        ctx.lineWidth = lFina;
        ctx.beginPath();
        ctx.moveTo(middleW,middleH+1.5);
        ctx.lineTo(middleW,middleH-10);
        ctx.stroke();
    }else{
        console.log("fallo canvas");
}
    //Handlers
    btn.addEventListener("mousedown", dibujar);
})();
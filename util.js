function create2DArray(height, width){
    var array = new Array(height);
    for(var i = 0; i < array.length; i++){
        array[i] = new Array(width);
    }
    return array;
}

function createArray(size){
    var array = new Array(size);
    return array;
}

function createCanvas(height, width){
    var canvas = document.createElement("canvas");
    canvas.id = "canvas";
    canvas.width = width;
    canvas.height = height;
    canvas.style = "border: 1px solid black";
    return canvas;
}

function line(x1, y1, x2, y2, context, color="black"){
    context.strokeStyle = color;
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
}

function randHex(){
    var vals = "0123456789abcdef";
    var color = "#";
    for(var i = 0; i < 8; i++){
        color += vals[Math.floor(Math.random() * vals.length)];
    }
    return color;
}
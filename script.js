var c = createCanvas(500, 1000);
document.getElementsByTagName('body')[0].appendChild(c);
var context = c.getContext('2d');
const xOff = canvas.width / 2;
const yOff = canvas.height / 2
context.translate(xOff, canvas.height);


function line(x1, y1, x2, y2, color){
    context.strokeStyle = "#" + color;
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
}

function hexColor(){
    var chars = "456789abcdef";
    var color = "";
    for(var i = 0; i < 8; i++){
        color += chars[Math.floor(Math.random() * chars.length)];
    }
    return color;
}

function randUp(){
    return (Math.random() * 50) + 1;
}

function randOut(){
    return (Math.random() * 20) + 1;
}

function drawPlant(x, y, limit, color){
    var xd, yd;
    if(limit != 4){
        var numTimes = Math.floor(Math.random() * 3) + 1;
        for(var i = 0; i < numTimes; i++){
            xd = randOut();
            yd = randUp();
            line(x, y, x + xd, y - yd, color);
            drawPlant(x + xd, y - yd, limit + 1);

            xd = randOut();
            yd = randUp();
            line(x, y, x - xd, y - yd, color);
            drawPlant(x - xd, y - yd, limit + 1);
        }

        
    }
}

for(var i = -400; i <= 400; i+=200){
    color = hexColor();
    drawPlant(i, 0, 0, color);
}

/*
    DNA squencing CGAT...
    contrust trees based on a sequence, allows for mutation + natural selection
    simulation

*/
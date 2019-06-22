var canvas = createCanvas(500, 1200);
document.getElementsByTagName('body')[0].appendChild(canvas);
var ctx = canvas.getContext('2d');
//ctx.translate(canvas.width / 2, canvas.height)
ctx.transform(1, 0, 0, -1, 0, canvas.height);
/*
 -----------------------
 |                     |
 |                     |
 |        origin       |
 -----------*-----------
*/


var trees = []
for(var x = 200; x < 1200; x += 200){
    trees.push(new Tree(x, 0, 10, 4));
}

for(var i = 0; i < trees.length; i++){
    trees[i].gen();
    //trees[i].draw(ctx);
    trees[i].walk(ctx);
}

function Leaf(x, y, lightLevel=1, prev = null){
    this.xPos = x;
    this.yPos = y;
    this.lightLevel = lightLevel;
    this.next = null;  //always set to null (leafs end a branch)
    this.prev = prev;

    Leaf.prototype.getPos = function(){
        return {
            x: this.xPos,
            y: this.yPos
        }
    }

    Leaf.prototype.getLightLvl = function(){
        return this.lightLevel;
    }

    Leaf.prototype.getNext = function(){
        return this.next;
    }

    Leaf.prototype.getPrev = function(){
        return this.prev;
    }

    Leaf.prototype.setPos = function(x, y){
        this.xPos = x;
        this.yPos = y;
    }

    Leaf.prototype.setLightLvl = function(lvl){
        this.lightLevel = lvl;
    }

    Leaf.prototype.setPrev = function(prev){
        this.prev = prev;
    }

    Leaf.prototype.draw = function(context){
        context.fillStyle = '#38bc1c';
        context.beginPath();
        context.arc(this.xPos, this.yPos, 5, 0, 2 * Math.PI);
        context.fill();
        context.fillStyle = '#000000';
    }
}
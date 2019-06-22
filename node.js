function Node(xPos, yPos, next=[], angles=[], prev=null){
    this.xPos = xPos;
    this.yPos = yPos;
    this.next = next;
    this.angles = angles;

    this.prev = prev;

    //Public functions
    Node.prototype.getPrev = function(){
        return this.prev;
    }

    Node.prototype.getNext = function(index){
        return this.next[index];
    }

    Node.prototype.setPrev = function(newPrev){
        this.prev = newPrev;
    }

    Node.prototype.setNext = function(newNext){
        this.next.push(newNext);
    }


    Node.prototype.getPos = function(){
        return{
            x: this.xPos,
            y: this.yPos
        }
    }

    Node.prototype.setPos = function(x, y){
        this.xPos = x;
        this.yPos = y;
    }
}
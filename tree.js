
/* Left off:
 * Trying to implement an angle and length to each node to determine where next node is located
 * This will work better for mutations and simulations in the future
 * Running into the problem of determining :: given an angle, point and a length, find a point
 * This section will require an overhaul or removal of the addLeaf and addBranch functions
 *   
 * Left off:
 * Attmpting to make the generate private function recursive in order to build tree, sudo-code
 * is written down on paper -- will require each node to have an array of a random size within
 * maxx branching limit
 * This section will require an overhaul of the generate function
*/
function Tree(xPos=0, yPos=0, layers=0, maxBranches){
    this.xPos = xPos;
    this.yPos = yPos;
    this.numLayers = layers;
    this.maxBranches = maxBranches;
    this.root = new Node(this.xPos, this.yPos, [], [], null);

    //Public Functions
    Tree.prototype.getPos = function(){
        return this.root.getPos();
    }

    Tree.prototype.getRoot = function(){
        return this.root;
    }

    Tree.prototype.getNumLayers = function(){
        return this.numLayers;
    }

    Tree.prototype.getMaxBranchesPerNode = function(){
        return this.maxBranches;
    }

    Tree.prototype.draw = function(context){
        var nodePtr = this.root;
        var pos, nextPos;
        var counter = 1;
        while(nodePtr.constructor.name == "Node"){
            pos = nodePtr.getPos();
            nextPos = nodePtr.getNext().getPos();
            /* for drawing each individiual node
            context.beginPath();
            context.arc(pos.x, -pos.y, 5, 0, 2 * Math.PI);
            context.fill();
            */
            line(pos.x, pos.y, nextPos.x, nextPos.y, context);
            context.fillText(counter, pos.x + 10, pos.y);

            nodePtr = nodePtr.getNext();
            counter++;
        }
        pos = nodePtr.getPos();
        nodePtr.draw(context);
        context.fillText(counter, pos.x + 10, pos.y);
        context.fillStyle = '#654321';
    }

    Tree.prototype.walk = function(context){
       //console.log(this.root);
        walk(this.root, context);
    }

    Tree.prototype.gen = function(){
        generate(this.root, this.numLayers, this.maxBranches, 1);
    }

    //Private Functions

    function generate(root, numLayers, maxBranches, layer){
        var numBranches = Math.floor(Math.random() * maxBranches);
        var angle, rad, distance, x, y, pos;
        if(layer != numLayers && numBranches != 0){
            for(var i = 0; i < numBranches; i++){
                pos = root.getPos();
                if(layer < 2){
                    angle = (Math.random() * (100 - 80) + 80);
                }else{
                    angle = Math.random() * 180;
                   // angle = (Math.random() * (120 - 60) + 60);
                }
                
                rad = angle * (Math.PI / 180);
                distance = (Math.random() * 30) + 5;
                var x = distance * Math.cos(rad);
                var y = distance * Math.sin(rad); 

                root.next.push(new Node(pos.x + x, pos.y + y, [], [], root));
                root.angles.push(angle);
            }

            for(var i = 0; i < root.next.length; i++){
                generate(root.getNext(i), numLayers, maxBranches, layer + 1);
            }
        }else{
            for(var i = 0; i < numBranches; i++){
                pos = root.getPos();
                angle = Math.random() * 180;
                rad = angle * (Math.PI / 180);
                distance = (Math.random() * 30) + 5;
                var x = distance * Math.cos(rad);
                var y = distance * Math.sin(rad); 

                root.next.push(new Leaf(pos.x + x, pos.y + y, 1, root));
                root.angles.push(angle);
            }
        }
    }

    function walk(root, context){
        var pos = root.getPos();
        var nextPos;
        if(root.constructor.name == "Node"){
            for(var i = 0; i < root.next.length; i++){
                nextPos = root.getNext(i).getPos();
                //drawNode(pos.x, pos.y, context);
                line(pos.x, pos.y, nextPos.x, nextPos.y, context);
                //console.log(root.getNext(i));
                walk(root.getNext(i), context);
            }
        }else{
            drawLeaf(pos.x, pos.y, context);
        }
    }

    /*
    function generate(root, numLayers, maxBranches){
        var currentLayer = 1;
        var rootPtr = root;
        while(currentLayer != numLayers){
            addBranch(rootPtr);
            rootPtr = rootPtr.getNext();
            currentLayer++;
        }
        addLeaf(rootPtr);
    }
    function addBranch(root){
        var pos = root.getPos();
        var angle = Math.random() * 136;
        var rad = angle * (Math.PI / 180);
        var distance = (Math.random() * 46) + 5;
        var x = distance * Math.cos(rad);
        var y = distance * Math.sin(rad);    
        
        /*
        var xd = (Math.random() * (10 - -10) + -10);
        var yd = (Math.random() * 50) + 1;
        

        //alert(x + ", " + y);
        root.setNext(new Node(x + pos.x, y + pos.y, null, root));
    }

    function addLeaf(root){
        var pos = root.getPos();
        var xd = (Math.random() * (10 - -10) + -10);
        var yd = (Math.random() * 50) + 1;

        root.setNext(new Leaf(pos.x + xd, pos.y + yd, 1, root));
    }
*/
    
    function line(x1, y1, x2, y2, context){
        context.fillStyle = '#654321';
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.stroke();
    }

    function drawNode(x, y, context){
        context.beginPath();
        context.arc(x, y, 5, 0, 2 * Math.PI);
        context.fill();
    }

    function drawLeaf(x, y, context){
        context.fillStyle = '#38bc1c';
        context.beginPath();
        context.arc(x, y, 3, 0, 2 * Math.PI);
        context.fill();
        context.fillStyle = '#654321';
    }
}
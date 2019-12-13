const r=40
const separation=80
let state=false
let searchVal=8
let stack=[]
class Node{
    constructor(n){
        this.value=n
        this.x=null
        this.y=null
        this.left=null
        this.right=null
        this.color="white"
    }
    addValue(someNode){
        if(someNode.value<this.value){
            if(this.left){
                this.left.addValue(someNode)
            }
            else{
                someNode.x=this.x-separation
                someNode.y=this.y+separation
                this.left=someNode
            }
        }
        else if(someNode.value>this.value){
            if(this.right){
                this.right.addValue(someNode)
            }
            else{
                someNode.x=this.x+separation
                someNode.y=this.y+separation
                this.right=someNode
            }
        }
    }
}
class Tree{
    constructor(){
        this.root=null
    }
    addNode(n){
        const newNode=new Node(n)
        if(this.root==null){
            newNode.x=300
            newNode.y=50
            this.root=newNode
        }
        else{
            this.root.addValue(newNode)
        }
    }
}
let tree
let myCanvas
function setup(){
    myCanvas=createCanvas(600,600)
    //myCanvas.position(displayWidth/2-300,displayHeight/2-200)
    myCanvas.background("darkgrey")
    stroke('white')
    tree=new Tree()
    tree.addNode(3)
    tree.addNode(2)
    tree.addNode(4)
    tree.addNode(6)
    tree.addNode(3.5)
    tree.addNode(1)
    tree.addNode(5)
    tree.addNode(8)
    tree.addNode(0)
    tree.addNode(1.5)
    tree.addNode(1.7)
    tree.addNode(1.6)
    tree.addNode(1.8)
    tree.addNode(0.25)
    tree.addNode(5.5)
    tree.addNode(1.75)
    tree.addNode(5.75)
    tree.addNode(5.6)
    tree.addNode(0.1)
    tree.addNode(0.15)
    console.log(tree)
    drawNodes()
}
function restrictedDraw(){
    state=false
    stack.push(tree.root)
    searchDraw(searchVal)
    drawNodes()
    if(!state){
        myCanvas.background('red')
        drawNodes()
        document.body.style.background="red"
    }
    else{
        myCanvas.background('lightgreen')
        drawNodes()
        document.body.style.background="lightgreen"
    }
    console.log(state)
}



function traverse(someNode){
    fill(someNode.color)
    ellipse(someNode.x,someNode.y,r,r)
    fill('black')
    text(someNode.value,someNode.x-4,someNode.y)
    if(someNode.left){
        line(someNode.x,someNode.y,someNode.left.x,someNode.left.y)
    }
    if(someNode.right){
        line(someNode.x,someNode.y,someNode.right.x,someNode.right.y)
    }
    if(someNode.left){
        traverse(someNode.left)
    }
    if(someNode.right){
        traverse(someNode.right)
    }
}
function searchDraw(someValue){
    /*if(!state){
        if(someNode.value===someValue){
            someNode.color="green"
            state=true
        }
        else{
            someNode.color="yellow"
        }
        if(someNode.left && someNode.value>someValue){
            searchDraw(someNode.left,someValue)
        }
        if(someNode.right && someNode.value<someValue){
            searchDraw(someNode.right,someValue)
        }
    }*/
    if(!state){
        while(stack.length!=0 && !state){
            let currentNode=stack.pop()
            if(currentNode.value===someValue){
                currentNode.color="green"
                state=true
            }else{
                currentNode.color="yellow"
                if(currentNode.right){
                    stack.push(currentNode.right)
                }
                if(currentNode.left){
                    stack.push(currentNode.left)
                }
            }
        }
    }
}
function drawNodes(){
    if(tree.root!=null){
        traverse(tree.root)
    }
}
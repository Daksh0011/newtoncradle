class rope {

constructor(bodyA,bodyB,offsetX,offsetY){
 var options={

     pointB:{ x:this.offsetX,y:this.offsetY }
 }

this.rope= Constraint.create(options)
World.add(world,this.chain)
}
display()
{

var pointA=this.rope.position.body.x
var pointB=this.rope.position.body.y

var Anchor1X=pointA.x
var Anchor1Y=pointA.y

var Anchor2X=pointB.x+this.offsetX
var Anchor2Y=pointAB.y+this.offsetY

line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y)

}


}




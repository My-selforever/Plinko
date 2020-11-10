class Plinko
{
    constructor(x,y,r)
    {
        this.radius = r
        var object_options=
        {
            isStatic:false,
            friction: 1
        }
        this.body = Bodies.circle(x,y,r,object_options);
        World.add(world,this.body);

    }
    display ()
    {
        for(i = 0; i<darr.length;i++)
        {
           var  arr = [c,d]
           darr.push(arr)
           for(var i = 0; i<darr.length; i++)
           {
            push();
            translate (this.body.position.x,this.body.position.y);
            rotate(this.body.angle);
            ellipseMode(CENTER);
            ellipse(0,0,this.radius);
            pop();
           }
   
            
        }
    }

}
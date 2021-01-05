class Pendulum
{
    constructor(x,y,color)
    {
        var options =
        {
            restitution:1,
            friction:0,
            frictionAir:0.0,
            slop:1,
            inertia:Infinity
        }

        this.width = 40;
        this.height = 40;
        this.color = color;

        this.body = Bodies.rectangle(x,y,this.width,this.height,options);
        World.add(world,this.body);
    }

    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        noStroke();
        fill(this.color);
        ellipseMode(CENTER);
        ellipse(0,0,60,60);
        pop();
    }
}
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint  = Matter.MouseConstraint;

var world,engine;


function preload()
{

}

function setup()
{
    canvas = createCanvas(windowWidth/ 2,windowHeight/2);
    engine = Engine.create();
    world = engine.world;

    let canvasMouse = Mouse.create(canvas.elt);
    canvasMouse.pixelRatio = pixelDensity();
    let options = 
    {
        mouse:canvasMouse
    }

    mConstraint = MouseConstraint.create(engine,options)
    World.add(world,mConstraint);


    pendulum1 = new Pendulum(240,height/2,"white");
    pendulum2 = new Pendulum(260,height/2,"white");
    pendulum3 = new Pendulum(280,height/2,"white");
    pendulum4 = new Pendulum(300,height/2,"white");
    pendulum5 = new Pendulum(320,height/2,"white");


    

    sling1  = new Sling({x:240,y:180},pendulum1.body);
    sling2  = new Sling({x:260,y:180},pendulum2.body);
    sling3  = new Sling({x:280,y:180},pendulum3.body);
    sling4  = new Sling({x:300,y:180},pendulum4.body);
    sling5  = new Sling({x:320,y:180},pendulum5.body);


}

function draw()
{
    background("black");

    Engine.update(engine);

    pendulum1.display();
    pendulum2.display();
    pendulum3.display();
    pendulum4.display();
    pendulum5.display();

    

    sling1.display();
    sling2.display();
    sling3.display();
    sling4.display();
    sling5.display();
  





}


function mouseDragged()
{
    Matter.Body.setPosition(pendulum1.body,{x:mouseX,y:mouseY})
}











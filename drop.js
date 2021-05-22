class Drop{
    constructor(x, y) {
        var droptions = {
            restitution: 0.7,
            friction: 0,
            density: 10
        }

        this.radius = 10;
        this.body = Bodies.circle(x, y, this.radius, droptions);
        
        this.image = loadImage("others/drop1.png")

        World.add(world, this.body);
    }
    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(RADIUS);
        image(this.image,0,0,20,20);
        pop();
    }
}
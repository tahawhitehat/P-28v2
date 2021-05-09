class Stone extends BaseClass {

	constructor(x,y){
	  super(x,y,50,50);
	  this.image = loadImage("images/stone.png");
	}
  
	display() {
	 // this.body.position.x = mouseX;
	  //this.body.position.y = mouseY;
	  super.display();
	}
  }

  
/*



{
    constructor(x,y,width,height)
	{
		var options={
			isStatic:true,
            restitution:0,
            friction:1,
            density:1.2			
			}
//		this.x=x;
//		this.y=y;

		this.body=Bodies.rectangle(x, y, width,   height , options);
		this.width = width
		this.height = height
		


		this.image =loadImage("images/stone.png")
		
 		World.add(world, this.body);

	}
	display()
	{
			var stonePos=this.body.position;		
			push()
			translate(stonePos.x, stonePos.y);
			resizeTo(0.5,0.5)
			rectMode(CENTER)
			image(this.image, 0, 0,  this.width, this.height);

			//image(this.image,0)
			pop()
			
	}

}

*/
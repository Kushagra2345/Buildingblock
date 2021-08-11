class Box{

    constructor(x,y)
    {
      var options={
        isStatic:false,
        mass:1,
        inertia:0.0001
      }
     this.body=Bodies.rectangle(x,y,50,20,options)
     World.add(world,this.body)
      
    
     rand=Math.round(random(1,4))
     
    }
    display()
    {
        push ()

       

        imageMode(CENTER)

        switch(rand){
          case 1:
            image(brick1Img,this.body.position.x,this.body.position.y,100,40);
           break;
   
          case 2:image(brick2Img,this.body.position.x,this.body.position.y,100,40);
          break;
        
   
   
          case 3:image(brick3Img,this.body.position.x,this.body.position.y,150,30);
          break;
   
          case 4:image(brick4Img,this.body.position.x,this.body.position.y,200,25);
          break;
        }
     
     pop ()
  
    }

   
  
  }
  
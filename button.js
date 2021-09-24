class Button{
    constructor(){

        this.paradise=createButton("Paradise")
        this.hell=createButton("Hell")
    }
    display(){
        this.paradise.position(displayWidth/2-180,50);
        this.hell.position(displayWidth/2+200,50);

        this.paradise.mousePressed(()=>{
            this.paradise.hide();
            this.hell.hide();
          dog1.visible = false;
            dog2.visible = false;
         //   background(Pbackground1);
        
         gameState = 1;
          
        
        })

        this.hell.mousePressed(()=>{
            this.paradise.hide();
            this.hell.hide();
          //  dog1.visible = false;
            dog1.visible = false;
            background(hellbgimg);
            console.log("working")
        })
    }
}
class Form {
  constructor() {
    this.input=createInput("").attribute("placeholder","Enter your name")
  this.playButtion=createButton("Play")
this.titleImg=createImg("./assets/title.png","game title")
this.greating=createElement("h2")


  }
hide(){
this.playButtion.height
this.input.hide();
this.greating.hide();


}

handleMousePreassed(){
  this.playButtion.mousePressed(()=>{
    this.input.hide()
    this.playButtion.hide()
   var message=`
   Hello ${this.input.value()}
   </br> wait for another player to join...
    `
   this.greating.html(message)






  })
}


setElementsPosition(){
this.titleImg.position(120,50)
this.input.position(width/2-110,height/2-80);
this.playButtion.position(width/2-100,height/2-20)
this.greating.position(width/2-300,height/2)
}

display(){
this.setElementsPosition();
this.handleMousePreassed()





}


}





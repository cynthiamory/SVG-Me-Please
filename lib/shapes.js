//CONSTRUCTOR FOR THE SHAPE CLASS TO CONTRUCT THE COLOUR PARAMETERS
class Shape {
    constructor() {
      this.color = "";
    }

 //FUNCTION TO SET THE COLOUR   
    setColor(colorVar) {
      this.color = colorVar;
    }
  }
  
//EXTEND THE SQUARE CLASS TO CONTRUCT THE COLOUR PARAMETERS
  class Square extends Shape {
    render() {
      //METHOD TO TAKE THE PARAMETERS AND CREATE THE SQUARE FROM THE INPUT
      return `<rect x="50" y="50" width="200" height="100" fill="${this.colour}" />`;
    }
  }
  
//EXTEND THE CIRCLE CLASS TO CONTRUCT THE COLOUR PARAMETERS
  class Circle extends Shape {
    render() {
      //METHOD TO TAKE THE PARAMETERS AND CREATE THE CIRCLE FROM THE INPUT
      return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
    }
  }

//EXTEND THE TRIANGLE CLASS TO CONTRUCT THE COLOUR PARAMETERS
   class Triangle extends Shape {
     render() {
        //METHOD TO TAKE THE PARAMETERS AND CREATE THE TRIANGLE FROM THE INPUT
        return `<polygon points="150,20 20,180 280,180" style="fill:${this.colour}" />`;
     }
  }  

//EXPORT SHAPES CLASSES
  module.exports = { Square, Circle, Triangle };
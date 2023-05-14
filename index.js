//CONSTANT VARIABLE TO IMPORT THE INQUIRER MODEULE.
const inquirer = require('inquirer');

//IMPORT THE FILE SYSTEM MODULE AS A CONSTANT VARIABLE.
const fs = require('fs');

//CONSTANT VARIABLES FOR IMPORTING THE SHAPE CLASSES IN LOCAL LIB FOLDER
const { Square, Circle, Triangle } = require('./lib/shapes');

//INQUIRER PROMPT THAT WILL RETURN A PROMISE FROM AN ARRAY OF QUESTIONS AND USERS REPOSONSES.
inquirer
    .prompt([ 

//LOGO TEXT QUESTION
        {
            type: 'input',
            name: 'text',
            message: 'What would you like your logo to show? (Max. 3 Characters):',
    //A FUNCTION TO VALIDATE THAT THE INPUT IS NO MORE THAN 3 CHARACTERS.            
            validate: (input) => {
                const validLength = input.length <= 3;
                const validInput = input.trim() !== '';
                if (!validLength) {
                  return 'Please enter up to three characters only.';
                }
                if (!validInput) {
                  return 'You must enter a max. 3 characters, please try again';
                }
                return true;
            },
        },
//CHARACTER COLOUR QUESTION
        {
        type: 'input',
        name: 'textColour',
        message: 'Choose your text color (Enter a color keyword OR the hexcode):',   
        },
// SELECTING SHAPE QUESTION
       {
        type: "list",
        name: "shape",
        message: "What shape would you like to use for your logo?:",
        choices: ["square", "circle", "triangle"],        
        },
//SELECTING THE CCOLOUR OF THE SHAPE QUESTION
       {
        type: "input",
        name: "shapeColour",
        message:"Choose shapes color (Enter color keyword OR the hexcode):", 
        },
      ])
//FUNCTION TO THEN PUSH ANSWERS TO THE SHAPES FROM USER RESPONSES
   .then((answers) => {
    let shape;
    switch (answers.shape) {
        case 'square':
            shape = new Square(answers.shapeColour);
            break;
        case 'circle':
            shape = new Circle(answers.shapeColour);
            break;
        case 'triangle':
            shape = new Triangle(answers.shapeColour);
            break;
        default:
            throw new Error(`Invalid shape: ${answers.shape}`);
    }
//A CONSTANT TO PASS THE USERS SHAPE OPTION FOR THE TEXT AND ITS TEXT'S COLOUR.
    const svg = shape.toSVG(answers.text, answers.textColour);

//A FUNCTION TO CALL TO WRITE FILE SO IT CAN GENERATE THE SVG FILE.    
          writeToFile("logo.svg", answers);
        }
      );
  
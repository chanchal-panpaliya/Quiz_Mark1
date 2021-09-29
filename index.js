
//----------------------level1------------------

var listOfQues_level1 = [
    {   
      question:"Key prop helps React identify which items have changed, are added, or are removed ?",
        options:["TRUE" , "FALSE"],
        correctAnswer:"A",
        description:" A)TRUE \n\n"
    },
    {
      question:"How can you access the state of a component from inside of a member function ?",
      options:["this.getState()" , "this.prototype.stateValue" , "this.state", "this.values"],
      correctAnswer:"D",
      description:" D)this.values \n\n"
    },
    {
      question:"A class is a type of function, but instead of using the keyword function to initiate it, we use the keyword?",
      options:["constructor" , "class" , "object", "dataObject"],
      correctAnswer:"B",
      description:" B)class \n Explanation: A class is a type of function, but instead of using the keyword function to initiate it, we use the keyword class. \n\n"
    },
    {
      question:" Consider following example:-\nvar Helloword=(props)=>\n{\nreturn(\n<div>\nhello world 1\n</div>\n<div>\nHello world 2\n</div>\n);\n\nReactDOM.render(<Helloworld/>,mountNode)\n",
      options:["Hello world 1" , "Hello world 2" , "Hello world 1 Hello world 2", "Error"],
      correctAnswer:"D",
      description:" D)Error \n Explanation: Two adjecent element in JSX should be wrapped in an element so this program will result an error. \n\n"
    },
    {   
      question:"props in react can __________ ",
        options:["Be changed inside the component" , "Not be changed in the component","Be changed in side other component","None of above"],
        correctAnswer:"B",
        description:" B)Not be changed in the component \n Explanation: props can not be changed in the component \n\n"
    }
  ];

  //----------------------level2------------------

var listOfQues_Level2 = [
    {   
      question:"Which code is Correct?",
        options:["this.setState({\ncounter: this.state.counter + this.props.increment\n});\n\n" , 
        "this.setState((state, props) => ({\ncounter: state.counter + props.increment\n}));"],
        correctAnswer:"B",
        description:"B)this.setState((state, props) => ({\ncounter: state.counter + props.increment\n}));\nExplanation:Because this.props and this.state may be updated asynchronously, you should not rely on their values for calculating the next state. To fix it, use a second form of setState() that accepts a function rather than an object. That function will receive the previous state as the first argument, and the props at the time the update is applied as the second argument\n\n"
    },
    {
      question:"What is equivalent of the following using React.createElement? \nconst element = (\n<h1 className='greeting'>\n Hello, world!\n</h1>\n);",
      options:["const element = React.createElement(\n'h1',\n{className: 'greeting'},\n'Hello, world!'\n);\n", 
      "return React.createElement(\n'h1',\n{className: 'greeting'},\n'Hello, world!'\n);\n" , 
      "ReactDOM.render(React.createElement(\n'h1',\n{className: 'greeting'},\n'Hello, world!'\n),document.getElementById('root')\n);\n", 
      "None of the above\n"],
      correctAnswer:"A",
      description:" A)const element = React.createElement(\n'h1',\n{className: 'greeting'},\n'Hello, world!'\n); \n\n"
    },
    {
      question:"What will happen if you render an input element with disabled = {false}?",
      options:["It will be rendered as disabled" , "It will not be rendered at all" , "It will be rendered as enabled", "You cannot set it false."],
      correctAnswer:"C",
      description:" C)It will be rendered as enabled \n Explanation:If you render an input element with disabled = {false}, it will be rendered as enabled. \n\n"
    }
  ];

    //----------------------level3------------------

var listOfQues_Level3 = [
    {   
      question:"How does React handle Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA) standard ?",
        options:["aria-* HTML attributes are fully supported in JSX. Where most DOM properties and attributes in React are camelCased, these attributes should be lowercased" , 
        "aria-* attributes should be converted to camelCase like other attributes eg. className, onChange and so on",
        "React processes aria-* attributes separately and update the DOM for accessibility if the user requires it",
        "React is yet to support WAI-ARIA standard"],
        correctAnswer:"D",
        description:" D)React is yet to support WAI-ARIA standard \n\n"
    }
  ];

  //-------------------------------------------------

const chalk = require('chalk');

var readline = require('readline-sync');
var userName = readline.question('May I have your name?');
console.log('\n \n \n Hello ' + chalk.blue.bold(userName ));

if (readline.keyInYNStrict('Do you want to test your React knowledge?')) {

      if (readline.keyInYNStrict('\n\n\nInstructions:\n\n 1] This is a multiple types questions set. \n\nif your answer is Correct then SCORE will be '+chalk.red.bold('+1')+' , there is '+chalk.red.bold('NO NEGATIVE')+' marking at all.\n\n 2] FOR '+chalk.blue.bold('LEVEL 1')+':: You should be score atlist '+chalk.red.bold('4')+' out of '+chalk.green.bold('5')+' then you are qualified for next "LEVEL 2". \n\n 3] FOR '+chalk.blue.bold('LEVEL 2')+' :: You should be score atlist '+chalk.red.bold('2')+' out of '+chalk.green.bold('3')+' then you are qualified for next Last level. \n\n 4] FOR '+chalk.red.bold('LAST LEVEL')+': Last Level have only one quention \n\n At the '+chalk.blue.bold('End')+' you know your '+chalk.blue.bold('score and Answerlist with questions and description')+' \n\n Do you want to start??\n\n')){
   
       MainFunction("level1");

      }

}else{
    console.log("Thank you for vesting "+userName+". Have a nice day");
}





//----------functions

function MainFunction(level){
         var GetAns = AskQue(level);
          var CorrectAns = CorrectAnswerList(level);
          compareAns(GetAns,CorrectAns,level);
}

//------------------------------------------------------

function HeighestScrore(Score,userName,level){

   if(level == "level1"){
   var ListOfScore = [{ Name:"ABC", Score: 5},
                      { Name:"PQR", Score: 5}
                     ];
   }else if(level == "level2"){
     var ListOfScore = [{ Name:"XYZ", Score: 3},
                      { Name:"NMO", Score: 3}
                     ];
   }else if(level == "level3"){
     var ListOfScore = [{ Name:"LMN", Score: 2},
                      { Name:"IFG", Score: 2}
                     ];
   }
     
   for(i=0; i<=ListOfScore.length-1; i++){
     if(ListOfScore[i].Score<=Score){
       if(i==1) break;
       console.log("\ncongratulation!!!! you broke records \n send a screenshot");
     }
   }
}


//--------------------------------------
function compareAns(getans,CorrectAns,level){
    var readline = require('readline-sync');
    var Score = 0;
      for(i=0 ; i<=CorrectAns.length -1 ; i++){
           if(getans[i].toUpperCase() === CorrectAns[i]){
              Score++;
            }
      }
     
     PrintListOfRightAnswers(level);
     HeighestScrore(Score,userName,level);

      console.log("\nAccuracy of "+chalk.blue.bold(level)+" is : "+Math.round((Score/CorrectAns.length)*100)+"% \n\nAnd Your Score is : "+chalk.red.bold(Score)+"/"+CorrectAns.length+"\n "+chalk.green.bold("Above")+" check Correct answer with some explanation.");
       
     
        //level2
      if(Score>=4 && level==="level1"){
          console.log("\n "+chalk.green.bold("congratulation")+" you are qualified for "+chalk.red.bold("LEVEL2"));
           if (readline.keyInYNStrict('Do you want to continue this test?')) {

                  if (readline.keyInYNStrict('\n\n\nInstructions:\n\n This is '+chalk.blue.bold("coding based")+' 3 question and sloved 2 out of 3 then you enter in level3 \n\n Do you want to start??\n\n')){


                    console.log("-------------------------------------------------")
                    console.log(chalk.yellow.bold("\n\nWelcome to the LEVEL2\n\n"))
                    console.log("-------------------------------------------------")

                    MainFunction("level2");

                  }

            }else{
                  console.log("Dear "+chalk.blue.bold(userName)+"you are not interested for level2 \n Thank You .");
                 // break;
            }
      
     }else if(Score>=2 && level==="level2"){
           console.log("\n "+chalk.green.bold("congratulation")+" you are qualified for "+chalk.red.bold("LEVEL3"));
                if (readline.keyInYNStrict('Do you want to continue this test?')) {

                  if (readline.keyInYNStrict('\n\n\nInstructions:\n\n This is a react handle web based 1 question. \n\n Do you want to start??\n\n')){

                      console.log("-------------------------------------------------")
                      console.log(chalk.yellow.bold("\n\nWelcome to the Last Level\n\n"))
                      console.log("-------------------------------------------------")

                      MainFunction("level3");

                    }

                 }else{
                  console.log("Dear "+chalk.blue.bold(userName)+" you are not interested for level3 \n Thank You ");
                 // break;
                }
       
        }else{
          if(level==="level3"){
              console.log("Thank you so much. come again.")
          }else{
          console.log("Your score is "+chalk.red.bold("too low")+" for the next level , try it next time . Best Luck")
          }
        }
}



//-----------------------------------------------------



function CorrectAnswerList(level){
  var CorrectAnsList = new Array();
  var listOfQues = Check_Level(level);
  for(i=0;i<=listOfQues.length-1;i++){
          CorrectAnsList.push(listOfQues[i].correctAnswer);
     } 
 return CorrectAnsList;
}



//--------------------------------------------


function AskQue(level){
  var listOfQues = Check_Level(level); 
  var ListofAnsByUser = new Array();
  var ansByUser , quecount=1;
  for(i=0;i<=listOfQues.length-1;i++){
      console.log("--------------------------------------------------------------------------------")
      console.log("\n"+quecount+"] "+chalk.blue.bold(listOfQues[i].question))
      console.log("\n\nOptions are :- \n")
           for(j=0,k=65;j<=listOfQues[i].options.length-1;j++,k++){
                console.log("["+String.fromCharCode(k)+"]"+listOfQues[i].options[j]);
        }
           if(listOfQues[i].options.length === 4){
                ansByUser = readline.keyIn('Hit A...D key: ', {limit: '$<A-D>'});
            }else{
                ansByUser = readline.keyIn('Hit A...B key: ', {limit: '$<A-B>'});
         }

         ListofAnsByUser.push(ansByUser);
         quecount++;
     } 
     
 return ListofAnsByUser;
}


//---------------------------


function Check_Level(level){
     if(level === "level1"){
          var listOfQues = listOfQues_level1;
      }else if(level === "level2"){
          var listOfQues = listOfQues_Level2;
      }else if(level === "level3"){
          var listOfQues = listOfQues_Level3;
      }

      return listOfQues;
}


//---------------------------


function PrintListOfRightAnswers(level){
  var que = 1;
  var listOfQues = Check_Level(level);
  console.log("-------------------------Correct Answers List-------------------------------------------");
    for(i=0;i<=listOfQues.length-1;i++){   
      console.log(que+"] "+chalk.blue.bold(listOfQues[i].question+"\n"));
      console.log("Answer:-"+chalk.red.bold(listOfQues[i].description));
    que++;
    }
console.log("----------------------------------------------------------------------");
}
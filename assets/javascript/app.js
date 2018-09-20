

var count = 0;
var countDown = 10;
var isCountDownEnded = false;
var resetTime;
var choices;
var numCorrect=0;
var numWrong =0;
var numUnanswered=0;
// variable to keep tract of the number of  questions
var totalQuestions = 0;
var clickStart=false;
var gameEnded =false;

var Trivia = [
    {
        q: "Which country won the last FIFA world cup?",
        a: "France",
        answerChoices: ["England", "Belgium", "France", "Brazil"],
    },
    {
        q: "Which team won the 2017-2018 UEFA Champion League?",
        a: "Real Madrid",
        answerChoices: ["Manchester United", "Real Madrid", "Barcelona", "Bayern Munich"],

    },

    {
        q: "Which NBA team won the 2017-2018 finals?",
        a: "Warriors",
        answerChoices: ["Warriors", "Rockets", "Calviers", "Celtics"]
    },

    {
        q: "Which team won the 2018 Super Bowl?",
        a: "Eagles",
        answerChoices: ["Cowboys", "Packers", "Eagles", "Panthers"]

    },

    {
        q: "How many seconds are there in 1 hour?",
        a: "3600",
        answerChoices: ["3600", "365", "5000", "860"]
    }

]

var InterValid ;
// create function to display questions and answer choices
function display(count) {
    totalQuestions++;
   

    //   console.log(Trivia[count].answerChoices);
    console.log(Trivia[count].q);

    var questions = $("<h3>");
    questions.text(Trivia[count].q);
    $("#questions ").append(questions);
    for (var j = 0; j < Trivia[count].answerChoices.length; j++) {
        choices = $("<button>").text(Trivia[count].answerChoices[j]);
        choices.css("background", "blue");
        // choices.hover("background", "yellow")

        $("#choices").append(choices);
        console.log(Trivia[count].answerChoices[j])

    }
    // finishGame(totalQuestions);
    // start the countdown when you click the start button
     InterValid =  setInterval(decrement, 1000);
     
    $("#choices button ").on("click", function () {
        console.log($(this).text());
        console.log(Trivia[count].a);


        var x = Trivia[count].a;
        var y = $(this).text();
        if ((countDown !== 0) || (countDown > 0)) {
            if (x === y) {
                numCorrect++;
                console.log("you are a winner");
                $("#outcome").append("Congratulations , You got it right");

                $("#questions ").empty();
                $("#choices").empty();
               resetTime();
                clearInterval(InterValid);
              if(totalQuestions===Trivia.length){
                  finishGame(totalQuestions);
              }
              else{  setTimeout(nextQuestion, 2000);}
                

            }
            if (x !== y) {
                numWrong++;
                $("#outcome").append("Sorry, you got it worng. The correct anwser is " + x);
                $("#questions ").empty();
                $("#choices").empty();
                   resetTime();
                clearInterval(InterValid);
                if(totalQuestions===Trivia.length){
                    finishGame(totalQuestions);
                }
                else{  setTimeout(nextQuestion, 2000);}
                
            }

        }
       
    })

}




// reset time
function resetTime() {
    countDown = 10;
    
    $("#countDown").text(countDown);
}

// decrement function to countdown time 
function decrement() {
       countDown--;
    if (!isCountDownEnded) {
       

        $("#countDown").text(countDown);
        if  (countDown===0) {
            numUnanswered++
            $("#outcome").append(" Out of Time. The correct anwser is " + Trivia[count].a);
            $("#questions ").empty();
            $("#choices").empty();
               clearInterval(InterValid);
                resetTime();
                if(totalQuestions===Trivia.length){
                    finishGame(totalQuestions);
                }
                else{  setTimeout(nextQuestion, 2000);}  

        } 

    }

}


function start() {
    if(!clickStart){
    display(count);
   
    clickStart=true;
   }
    
}

// start the game by clicking start button
$(".button").click(start)


// function to display next question
function nextQuestion() {
    count++;
   
//    finishGame(totalQuestions);
    display(count);       
    $("#outcome").empty();

}

function finishGame (totalQuestions){
      var results =$("<h3>").append("Correct :  "+ numCorrect);
      var incorrect = $("<h3>").append("Incorrect :  "+ numWrong);
      var unattemped =$("<h3>").append("Unanswered :  "+ numUnanswered);
      results.append(incorrect,unattemped);
      
    console.log(totalQuestions);
    console.log(Trivia.length);
    if(!gameEnded){
    if(totalQuestions===Trivia.length){ 
        console.log("game ended")
        clearInterval(InterValid);
       
       $(".results").append(results);
        gameEnded;
    }
    }
}














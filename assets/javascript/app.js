

var count = 0;
var countDown = 10;
var isCountDownEnded = false;
var resetTime;
var choices;
var numCorrect = 0;
var numWrong = 0;
var numUnanswered = 0;
// variable to keep tract of the number of  questions
var totalQuestions = 0;
var clickStart = false;
var gameEnded = false;

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
    },
    {
        q: "What is the probabilty of getting a heart suit ia 52 deck of cards?",
        a: "1/4",
        answerChoices: ["1/2", "2/5", "1/13", "1/4"]
    }
]

var InterValid;
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
        choices.addClass(" btn btn-info m-2");
       
        $("#choices").append(choices);
        console.log(Trivia[count].answerChoices[j])

    }
    
    // start the countdown when you click the start button
    InterValid = setInterval(decrement, 1000);

    $("#choices button ").on("click", function () {
        console.log($(this).text());
        console.log(Trivia[count].a);


        var x = Trivia[count].a;
        var y = $(this).text();
        if ((countDown !== 0) || (countDown > 0)) {
            if (x === y) {
                numCorrect++;
                console.log("you are a winner");
                var giphy = $("<img>").attr("src","https://static.raru.co.za/cover/2017/02/10/5488866-l.jpg?v=1486736058");
                    giphy.css({"width":"100px","height":"100px"});
                $("#outcome").append(giphy);
                $("#outcome").append("Congratulations , You got it right");

                $("#questions ").empty();
                $("#choices").empty();
                resetTime();
                clearInterval(InterValid);
                if (totalQuestions === Trivia.length) {
                //    $("#outcome").empty();
                    finishGame(totalQuestions);

                }
                else { setTimeout(nextQuestion, 3000); }


            }
            if (x !== y) {
                numWrong++;
                var sad = $("<img>").attr("src","https://lh5.googleusercontent.com/-3dJnvJSY4tU/TYO-hs_TpEI/AAAAAAAAAS0/OY3i6DSriRU/s1600/S01E14b-+Crazy+sad.png");
                    sad.css({"width":"100px","height":"100px"});
                    $("#outcome").append(sad);  
                $("#outcome").append("Sorry, you got it wrong. The correct anwser is " + x);
                $("#questions ").empty();
                $("#choices").empty();
                resetTime();
                clearInterval(InterValid);
                if (totalQuestions === Trivia.length) {
                    finishGame(totalQuestions);
                }
                else { setTimeout(nextQuestion, 3000); }

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
        if (countDown === 0) {
            numUnanswered++;
            var timesUp = $("<img>").attr("src","http://www.successconnections.com/wp-content/uploads/2013/10/outoftime.jpg");
             timesUp.css({"width":"100px","height":"100px"});
              $("#outcome").append(timesUp);  
            $("#outcome").append("  The correct anwser is " + Trivia[count].a);
            $("#questions").empty();
            $("#choices").empty();
            clearInterval(InterValid);
            resetTime();
            if (totalQuestions === Trivia.length) {
                finishGame(totalQuestions);
            }
            else { setTimeout(nextQuestion, 3000); }

        }

    }

}


function start() {
    if (!clickStart) {
        display(count);

        clickStart = true;
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

function finishGame(totalQuestions) {
    var endOfGame =$("<img>").attr("src","https://gifer.com/i/3dnq.gif");
       endOfGame.css({"width":"200px","height":"100px"});
    var results = $("<h3>").append("Correct :  " + numCorrect);
    var incorrect = $("<h3>").append("Incorrect :  " + numWrong);
    var unattemped = $("<h3>").append("Unanswered :  " + numUnanswered);
    results.append(incorrect, unattemped);
     $("#outcome").empty();
    console.log(totalQuestions);
    console.log(Trivia.length);
    if (!gameEnded) {
        if (totalQuestions === Trivia.length) {
            console.log("game ended")
            clearInterval(InterValid);
            $("#outcome").append(endOfGame);
            $(".results").append(results);
            gameEnded;
        }
    }
}














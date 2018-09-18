

var count = 0;
var countDown = 10;
var isCountDownEnded = false;
var resetTime;
var choices
var totalQuestions = 0;

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

// create function to display questions and answer choices
function display(count) {
    //   console.log(Trivia[count].answerChoices);
    console.log(Trivia[count].q);

    var questions = $("<h3>");
    questions.text(Trivia[count].q);
    $("#questions ").append(questions);
    for (var j = 0; j < Trivia[count].answerChoices.length; j++) {
        choices = $("<button>").text(Trivia[count].answerChoices[j]);
        $("#choices").append(choices);
        console.log(Trivia[count].answerChoices[j])

    }

    $("#choices button").on("click", function () {
        console.log($(this).text());
        console.log(Trivia[count].a);


        var x = Trivia[count].a;
        var y = $(this).text();
        if ((countDown !== 0) || (countDown > 0)) {
            if (x === y) {
                console.log("you are a winner");
                $("#outcome").append("Congratulations , You got it right");

                $("#questions ").empty();
                $("#choices").empty();
                reset();
                setTimeout(nextQuestion, 2000);
            }
            if (x !== y) {
                $("#outcome").append("Sorry, you got it worng. The correct anwser is " + x);
                $("#questions ").empty();
                $("#choices").empty();
                reset();
                setTimeout(nextQuestion, 2000);
            }

        }

    })

}



// reset time
function reset() {
    countDown = 10;
}

// decrement function to countdown time 
function decrement() {

    if (!isCountDownEnded) {
        countDown--
        $("#countDown").text(countDown)
        if (countDown === 0) {
            //  count++;
            $("#outcome").append(" Out of Time. The correct anwser is " + Trivia[count].a);
            $("#questions ").empty();
            $("#choices").empty();
            reset();
            setTimeout(nextQuestion, 2000);

        }


    }
    // if(totalQuestions===Trivia.length){
    //     $("#outcome").append(" You have come to the end. There are no more questions")
    //     isCountDownEnded=true
    // }

}

function start() {
    display(count);
    if (!isCountDownEnded) {
        setInterval(decrement, 1000);

    }

}

// start the game by clicking start button
$(".button").click(start)


// function to display next question
var nextQuestion = function () {
    count++;
    totalQuestions++
    reset();
    display(count);
    $("#outcome").empty();
   


}











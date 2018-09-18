

var count = 0;
var countDown = 10;
var isCountDownEnded = false;
var resetTime;
var choices

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
   $("#choices button").on("click",function(){
        console.log($(this).text());
        console.log(Trivia[count].a);

          var x = Trivia[count].a; 
          var y = $(this).text();
        if(x ===y){
        console.log("you are a winner");
        $("#questions ").empty();
        $("#choices").empty();
          setTimeout(nextQuestion,2000);  
         }  
    
})
    
}


 
// reset time
function reset(){
    countDown=10;   
}

// decrement function to countdown time 
function decrement() {
   
    if (!isCountDownEnded) {
        countDown--
        $("#countDown").text(countDown)
        if(countDown===0){ 
         count++;
         isCountDownEnded=true
   
        }
    
        //  setInterval ( nextQuestion,5000);
    }

}

function start(){
       display(count);
        if(!isCountDownEnded){
        setInterval(decrement, 1000);

       
       } 
    
}

// start the game by clicking start button
$(".button").click(start) 


// function to display next question
var nextQuestion= function() {
       count++;
        reset();
        display(count);      
        
    }

   






// for(var i=0;i<Trivia.length;i++){

//    var questions = $("<h3>");

//     questions.text(Trivia[i].q);
// $(".questions div").append(questions);


// for(var j=0;j<Trivia[i].answerChoices.length;j++){
//     var choices =$("<span>").text(Trivia[j].answerChoices[j]);
//     var input =$('<input type="radio" name="radio_name">')

//     $(".questions div").append(input,choices);
// }


// }





// var questionsArray = [
// "Which country won the last FIFA world cup?",
// "Which team won the 2017-2018 UEFA Champion League?",
// "Which NBA team won the 2017-2018 finals?",
// "Which team won the 2018 Super Bowl?",
// "How many seconds are there in 1 hour?"]

// var answerChoices=[
// {q1 : ["England","Belgium","France","Brazil"]},
// {q2:["Manchester United","Real Madrid","Barcelona", "Bayern Munich"]},
// {q3:["Warriors","Rockets", "Calviers","Celtics"]},
// {q4: ["Cowboys","Packers","Eagles","Panthers"]},
// {q5: ["3600","365","5000","860"]}

// 





var Trivia = [
    {
        q: "Which country won the last FIFA world cup?",
        a: " France",
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

for(var i=0;i<Trivia.length;i++){
    console.log(Trivia[i].q);
    console.log(Trivia[i].answerChoices);
   var questions = $("<h3>");
   
    questions.text(Trivia[i].q);
$(".questions div").append(questions);


for(var j=0;j<Trivia[i].answerChoices.length;j++){
    var choices =$("<span>").text(Trivia[j].answerChoices[j]);
    var input =$('<input type="radio" name="radio_name">')
   
    $(".questions div").append(input,choices);
}

    
}







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

// ]

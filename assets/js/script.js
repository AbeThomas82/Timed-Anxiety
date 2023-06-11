const questAnnoying = [
    //https://quizlet.com/779286477/javascript-fundamentals-flash-cards/
    {
        question: "Which is not a primitive data type in JavaScript?",
        answers: [
            {text: "Strings", accurate: false},
            {text: "Numbers", accurate: false},
            {text: "Booleans", accurate: false},
            {text: "Functions", accurate: true},
            {text: "Symbols", accurate: false},
        ]
    },
    {
        question: "Suppose 'object' is a variable array. How would that be displayed on the console?",
        answers: [
            {text: "console.log(object.length);", accurate: true},
            {text: "object.length;", accurate: false},
            {text: "array.length;", accurate: false},
            {text: "function{variable.object.length};", accurate: false},
            {text: "Undefined.", accurate: false},
        ]
    },
    {
        question: "Which characteristics are in a 'for' loop?",
        answers: [
            {text: "Starting point", accurate: false},
            {text: "Limit", accurate: false},
            {text: "Increment", accurate: false},
            {text: "None of the above.", accurate: false},
            {text: "All of the above", accurate: true},
        ]
    },
    {
        question: "The operator '===' means that comparative objects are ___.",
        answers: [
            {text: "Equal in type", accurate: false},
            {text: "Equal in value", accurate: false},
            {text: "Equal in type and value", accurate: true},
            {text: "Cheeseburgers", accurate: false},
            {text: "This is twisted math type stuff.", accurate: false},
        ]
    },
    {
        question: "Who invented JavaScript?",
        answers: [
            {text: "Spencer Sokol", accurate: false},
            {text: "Brendan Eich", accurate: true},
            {text: "William H. Gates III", accurate: false},
            {text: "Mick Foley", accurate: false},
            {text: "Donald Trump", accurate: false},
        ]
    },
]

var getElement = document.getElementById("begin-quiz");

//function{
//    if (document.setElementByID("click",questAnnoying){

//    }
//}

for(var i=0; i < questAnnoying.length; i++){
    console.log("Correct!");
    }else {
    console.log("Wrong answer, homeboy.");
}


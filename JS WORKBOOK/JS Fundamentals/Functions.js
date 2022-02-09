function showMessage() { //Function declaration
    console.log('Hello everyone');
    return 5;
}

showMessage();


let sendMessage = function() { // Function expression
    console.log("It's me message");
};
sendMessage();

//console.log(showMessage);


//callback

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }

// function showOk() {
//     alert("You agreed.");
// }

// function showCancel() {
//     alert("You canceled the execution.");
// }

// usage: functions showOk, showCancel are passed as arguments to ask
// ask("Do you agree?", showOk, showCancel);


let goodNews = () => console.log("I ate cake");

goodNews();

let sum = (a, b) => a + b;

let sum = (a, b) => { // the curly brace opens a multiline function
    let result = a + b;
    return result; // if we use curly braces, then we need an explicit "return"
};
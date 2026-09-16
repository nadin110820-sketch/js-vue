// let num = 1;
// while (num <= 5){
//     console.log(num);
//     num ++;
// }

// let userNumber = prompt("Enter your number");
// while(userNumber < 1 || userNumber > 10){
//     userNumber = +prompt("Error. Enter your number");
// }
// console.log(userNumber);

// Number()
// String()
// isNan()
// console.log(Number("7"));
// console.log(Number("hello"));

// let age = +prompt("Enter age number");
// while (Number.isNaN(age) || age <= 0 age >= 100){
//     age = +prompt("Enter age number");
// }
// console.log(age);

// const correctPin: number = 1234;
// let pin: number = +prompt('Enter a valid pin');
// let attempt: number = 1;
// while (attempt < 3 && pin !== correctPin) {
//     pin = +prompt('Enter a valid pin');
//     attempt++;
// }
// if (pin === correctPin) {
//     console.log("ok");
// }
// else {
//     console.log("blocked")
// }

// let attempt = 1, password = 1234;
// while (attempt <= 3){
//     let userPAssword = +prompt("Enter your password");
//     if(password === userPAssword){
//         console.log("Ok");
//         break;
//     }
//     console.log("No");
//     attempt++;
// }

// let attempt = 1, password = 1234;
// while (attempt <= 3){
//     let userPAssword = +prompt("Enter your password");
//     if(password === userPAssword){
//         console.log("Ok");
//         break;
//     }
//     console.log(`Wrong password. Attempts left: ${3-attempt}`);
//     attempt++;
// }

// let menuChoice;
// do{
//     menuChoice = +prompt("What is your choice:\n" +
//     "1 - Profile\n" + "2 - Settings \n" + "0 - Leave");
//     if (menuChoice === 1){
//         alert("Open Profile");
//     }else if(menuChoice === 2){
//         alert("Open Settings");
//     }else if(menuChoice === 0){
//         alert("Leave");
//     }else {
//         alert("Unknown Choice");
//     }
// }
// while (menuChoice !== 0);

// let menuChoice;
// do{
//     menuChoice = +prompt("What is your choice:\n" + "1 - Profile\n" + "2 - Settings \n" + "3 - News\n" + "4 - Cool facts\n" + "0 - Leave");
//     switch(menuChoice){
//         case 1:
//             alert("Open Profile");
//             break;
//         case 2:
//             alert("Open Settings");
//             break;
//         case 3:
//             alert("Open News");
//             break;
//         case 4:
//             alert("Open Cool facts");
//             break;
//         case 0:
//             alert("Leave");
//             break;
//         default:
//             alert("Unknown Choice");
//     }
// }
// while(menuChoice !== 0)

// let count = 0, sum = 0;
// while(count < 5){
//     let currentGrade = +prompt(`enter mark ${count + 1}`);
//     if (currentGrade < 1 || currentGrade > 12 || Number.isNaN(currentGrade)){
//         alert("nekorektna mark");
//         continue;
//     }
//     sum += currentGrade;
//     count++;
// }
// console.log(sum);
// console.log(sum/5);

// let questionsNum = 1;
// let score = 0;
// while(questionsNum <= 5) {
//     let questions = "", answers = "";
//     switch (questionsNum) {
//         case 1:
//             questions = "How to create a variable?";
//             answers = "let";
//             break;
//         case 2:
//             questions = "What is the operator of strict equality?";
//             answers = "===";
//             break;
//         case 3:
//             questions = "What id the operator of *and*?"
//             answers = "&&";
//             break;
//         case 4:
//             questions = "How to end the cycle?";
//             answers = "break";
//             break;
//         case 5:
//             questions = "How to write increment";
//             answers = "++";
//             break;
//     }
//     let answer = prompt(Question №${questionsNum} out of 5\n${questions});
//     if (answer === "") {
//         console.log("The answer cannot be blank");
//         continue;
//     }
//     if (answer === answers) {
//         alert("Ok")
//         score++;
//     }else{
//         alert("No")
//     }
//     questionsNum++;
// }
// if (score === 5){
//     alert("Excellent score")
// }else if(score >= 3){
//     alert("Norm")
// }else{
//     alert("Loshara")
// }

//------------------------HW
const pin = 4321;
let tries = 0;
let userAge = +prompt("Enter your age");
while (userAge < 12 || userAge > 90) {
    alert("Invalid age");
    userAge = +prompt("Enter your age");
}
while (tries < 3) {
    let enteredPIN = +prompt("Enter PIN");
    if (enteredPIN === pin) {
        let choice;
        do {
            choice = +prompt("Choose an option:\n" + "1 - Profile\n" + "2 - Messages\n" + "3 - Settings\n" + "0 - Exit");
            switch (choice) {
                case 1:
                    alert("Profile opened");
                    break;
                case 2:
                    alert("Messages opened");
                    break;
                case 3:
                    alert("Settings opened");
                    break;
                case 0:
                    alert("Exit");
                    break;
                default:
                    alert("Unknown option");
            }
        } while (choice !== 0);
        break;
    } else {
        tries++;
        alert("Wrong PIN. Attempts left: " + (3 - tries));
    }
}
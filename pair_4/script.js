// for(let i = 10; i >= 1; i--){
//     console.log(i)
// }
//Задом наперед

//Тільки парні
// for(let i = 10; i >= 1; i -=2){
//     console.log(i)
// }

// let sum = 0;
// for(let i = 0; i < 30; i++){
//     sum +=1;
// }
// console.log(sum);

//____________________________________________1
// let sum = 0;
// for(let i = 0; i <= 50; i+=2){
//     sum +=1;
// }
// console.log(sum);


// let count = 0;
// for (let i = 1; i<= 100; i++){
//     if(i % 3 === 0){
//         count++;
//     }
// }
// console.log(count);

// for(let i = 1; i<= 100; i++){
//     if(i > 20 && i % 4 === 0 && i % 6 === 0){
//         console.log(i);
//         break;
//     }
// }

// for(let i = 1; i<= 30; i++){
//     if(i % 5 === 0){
//         continue;
//     }
//     console.log(i);
// }

// let studentCount = +prompt("Enter student count");
// if(studentCount > 0){
//     let sum = 0, highLevel = 0, others = 0;
//     for(let i = 1; i <= studentCount; i++){
//         let garde = +prompt("Enter student garde");
//         if(!(grade >= 1 && grade <= 12)){
//             alert("Error");
//             i--;
//             continue;
//         }
//         if(grade >= 7){
//             highLevel += 1
//         }
//         else{
//             others ++
//         }
//         sum += grade;
//     }
//     console.log(sum);
//     console.log(sum/ studentCount);
//     console.log(highLevel);
//     console.log(others);
// }

//____________________________________________2
let studentCount = +prompt("Enter count");
if (studentCount > 0) {
    let total = 0;
    let good = 0;
    let average = 0;
    let bad = 0;
    let biggest = 0;
    let smallest = 100;
    let first100 = 0;
    for (let i = 1; i <= studentCount; i++) {
        let result = +prompt("Enter result");
        if (result < 0 || result > 100) {
            alert("Wrong value");
            i--;
            continue;
        }
        total += result;
        if (result > biggest) {
            biggest = result;
        }
        if (result < smallest) {
            smallest = result;
        }
        if (result >= 90) {
            good++;
        } else if (result >= 60) {
            average++;
        } else {
            bad++;
        }
        if (result === 100 && first100 === 0) {
            first100 = i;
        }
    }
    console.log("Average: " + total / n);
    console.log("90-100: " + good);
    console.log("60-89: " + average);
    console.log("Below 60: " + bad);
    console.log("Max: " + biggest);
    console.log("Min: " + smallest);
    console.log("First 100: " + first100);
}

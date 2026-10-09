// let names = ["Ann", "Nadiia", "Vania"];
// // console.log(names.length)
// names.push("NAdia");
// //push adds element in the end of a list
// names.pop();
// //deletes element
// names.unshift("NAADIA");
// //Adds in the beginning
// names.shift();
// //Deletes in the beginning
// let names2 = name.slice(1, 3);
// console.log(names);
// console.log(names2);

// let names = ["Ann", "Nadiia", "Vania"];
// let deleted = names.splice(2, 1)
// console.log(deleted)
// names.splice(1, 0, "NADIAAA")
// names.splice(0, 1, "Nadinka", "Nadi")
// console.log(names)

// function register(name){
//     if(name.trim() === ""){
//         alert("Please enter your name");
//         return;
//     }
//     let exists = false;
//     for(let i = 0; i < name.length; i++){
//         if(event[i] === name){
//             exists = true;
//         }
//     }
//     if (exists){
//         alert("Already registered" + name);
//         return;
//     }
//     event.push(name)
//     alert(`Registered ${name}`);
// }
// function remove(name){
//     let index = -1;
//     for(let i = 0; i < event.length; i++){
//         if(event[i] === name){
//             index = i;
//             break;
//         }
//     }
//     if (index === -1){
//         alert("No uchasnik")
//     }
//     else{
//         event.splice(index, 1);
//         alert("deleted")
//     }
// }
// function count(){
//     alert(`In total ${event.length}`);
// }
// let event = ["Ann", "Nadiia", "Vania"];
// register("NADIA")
// register("Nadiia")
// remove("Ann")
// count()

// let names = ["Ann", "Nadiia", "Vania"];

// for(let i = 0; i < names.length; i++){
//     console.log(names[i]);
// }

// for(let name of names){
//     console.log(name);
// }

// names.forEach(function (name, index  ){
//     console.log(name, index);
// })


let event = +prompt("Choose event:\n1 - Cinema\n2 - Theatre\n3 - Concert");
while (event < 1 || event > 3) {
    event = +prompt("Choose event:\n1 - Cinema\n2 - Theatre\n3 - Concert");
}
let eventName = "";
let price = 0;
switch (event) {
    case 1:
        eventName = "Cinema";
        price = 150;
        break;
    case 2:
        eventName = "Theatre";
        price = 220;
        break;
    case 3:
        eventName = "Concert";
        price = 350;
        break;
}
let day = +prompt("Choose day:\n1 - Weekday\n2 - Weekend");
while (day < 1 || day > 2) {
    day = +prompt("Choose day:\n1 - Weekday\n2 - Weekend");
}
if (day === 2) {
    price = price * 1.15;
}
let tickets = +prompt("Enter number of tickets from 1 to 6");
while (tickets < 1 || tickets > 6) {
    tickets = +prompt("Enter number of tickets from 1 to 6");
}
let total = 0;
let processed = 0;
let free = 0;
let discounted = 0;
let full = 0;
for (let i = 1; i <= tickets; i++) {
    let age = +prompt("Enter age");
    if (age === -1) {
        break;
    }
    while (age < 0 || age > 100) {
        age = +prompt("Enter age");
        if (age === -1) {
            break;
        }
    }
    if (age === -1) {
        break;
    }
    processed++;
    let ticketPrice = price;
    if (age >= 0 && age <= 5) {
        free++;
        continue;
    } else if (age >= 6 && age <= 12) {
        ticketPrice = ticketPrice * 0.5;
        discounted++;
    } else if (age >= 13 && age <= 17) {
        ticketPrice = ticketPrice * 0.8;
        discounted++;
    } else if (age >= 18 && age <= 25) {
        let student = +prompt("Do you have a student card?\n1 - Yes\n2 - No");
        while (student < 1 || student > 2) {
            student = +prompt("Do you have a student card?\n1 - Yes\n2 - No");
        }
        if (student === 1) {
            ticketPrice = ticketPrice * 0.9;
            discounted++;
        } else {
            full++;
        }
    } else if (age >= 26 && age <= 59) {
        full++;
    } else if (age >= 60 && age <= 100) {
        ticketPrice = ticketPrice * 0.75;
        discounted++;
    }
    total += ticketPrice;
}
if (total > 1000) {
    total = total * 0.95;
}
console.log("Event: " + eventName);
console.log("Processed tickets: " + processed);
console.log("Free tickets: " + free);
console.log("Discounted tickets: " + discounted);
console.log("Full price tickets: " + full);
console.log("Total price: " + total);
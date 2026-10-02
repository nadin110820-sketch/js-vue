// function name(argument){
//     code
// }

// function showMessage() {
//     alert("Hello World!");
// }
// showMessage();

// function showInfo(){
//     console.log("В гостях у Надійки");
//     console.log("Магазин працює з 18:00 до 18:00");
// }
// function showProducts(name, price, count){
//     console.log("Nadiia sell", name);
//     console.log("Price", price);
//     console.log("Total sell", price * count);
// }
// showInfo();
// showProducts("Soap",800, 3);

// function calculateTotal(price, count){
//     return price * count;
// }
// let total = calculateTotal(800, 3)
// console.log(total)

// function discount(total){
//     if (total >= 5000){
//         return 10;
//     }
//     else{
//         return 0;
//     }
// }
// let discount1 = discount(1000);
// let discount2 = discount(6000);
// console.log(discount1);
// console.log(discount2);

// function getProductTotal(price, count){
//     return price * count;
// }
// function getDiscount(total){
//     if (total >= 10000){
//         return 15;
//     }
//     else if (total >= 5000){
//         return 10;
//     }
//     else if (total >= 2000){
//         return 5;
//     }
//     else {
//         return 0;
//     }
// }
// function getDiscountValue(total, percent){
//     return total * percent / 100;
// }
//
// function getFinalPrice(total, discount){
//     return total - discount;
// }
// let productName = prompt("name");
// let productPrice = +prompt("price");
// let productCount = +prompt("count");
// let productTotal = getProductTotal(productPrice, productCount);
// let productDiscountPercent = getDiscount(productTotal);
// let productDiscountValue = getDiscountValue(productTotal, productDiscountPercent);
// let productFinalPrice = getFinalPrice(productTotal, productDiscountValue);
// console.log(productName);
// console.log(productPrice);
// console.log(productCount);
// console.log(productTotal);
// console.log(productDiscountPercent);
// console.log(productDiscountValue);
// console.log(produfunction getProductTotal(price, count){
// //     return price * count;
// // }
// // function getDiscount(total){
// //     if (total >= 10000){
// //         return 15;
// //     }
// //     else if (total >= 5000){
// //         return 10;
// //     }
// //     else if (total >= 2000){
// //         return 5;
// //     }
// //     else {
// //         return 0;
// //     }
// // }
// // function getDiscountValue(total, percent){
// //     return total * percent / 100;
// // }
// //
// // function getFinalPrice(total, discount){
// //     return total - discount;
// // }
// // let productName = prompt("name");
// // let productPrice = +prompt("price");
// // let productCount = +prompt("count");
// // let productTotal = getProductTotal(productPrice, productCount);
// // let productDiscountPercent = getDiscount(productTotal);
// // let productDiscountValue = getDiscountValue(productTotal, productDiscountPercent);
// // let productFinalPrice = getFinalPrice(productTotal, productDiscountValue);
// // console.log(productName);
// // console.log(productPrice);
// // console.log(productCount);
// // console.log(productTotal);
// // console.log(productDiscountPercent);
// // console.log(productDiscountValue);
// // console.log(productFinalPrice);ctFinalPrice);

// ------------------------------------------------DZ
function calculateTickets(price, count){
    return price * count;
}
function getTicketDiscount(total){
    if (total >= 1500){
        return 15;
    }else if (total >= 1000){
        return 10;
    }else if (total >= 500){
        return 5;
    }else{
        return 0;
    }
}
function calculateTicketsDiscount(total, percent){
    return total * percent / 100;
}
function TicketFinalPrice(total, discount){
    return total - discount;
}
let ticketPrice = +prompt("Enter ticket price");
let ticketCount = +prompt("Enter ticket count");
let total = calculateTickets(ticketPrice, ticketCount);
let percent = getTicketDiscount(total);
let discount = calculateTicketsDiscount(total, percent);
let finalPrice = TicketFinalPrice(total, discount);
console.log("Кінцева ціна: " + finalPrice);
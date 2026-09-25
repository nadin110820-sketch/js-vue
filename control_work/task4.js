let count = 0;
let Count = 0;
let total = 0;
let maxPayment = 0;
for (let i = 1; i <= 7; i++) {
    let hours = Number(prompt("Введіть кількість годин:"));
    if (hours === 0) {
        break;
    }
    if (hours < 0 || hours > 12) {
        continue;
    }
    let type = Number(prompt("Введіть тип автомобіля:"));

    if (type !== 1 && type !== 2) {
        console.log("Помилка: неправильний тип автомобіля");
        continue;
    }
    let price;
    if (type === 1) {
        price = hours * 40;
    } else {
        price = hours * 30;
        Count++;
    }
    if (hours > 5) {
        price = price * 0.8;
    }
    count++;
    total = total + price;

    if (price > maxPayment) {
        maxPayment = price;
    }
    console.log("Оплата за автомобіль: " + price + " грн");
}
console.log("Кількість оброблених автомобілів: " + count);
console.log("Кількість електромобілів: " + Count);
console.log("Загальна сума оплати: " + total + " грн");
console.log("Найбільша оплата: " + maxPayment + " грн");
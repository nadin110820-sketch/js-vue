let n = Number(prompt("Введіть кількість учнів:"));
let sum = 0;
let count7 = 0;
let countBelow7 = 0;
let max = 0;
for (let i = 1; i <= n; i++) {
    let grade = Number(prompt("Введіть оцінку від 1 до 12:"));
    sum = sum + grade;
    if (grade >= 7) {
        count7++;
    } else {
        countBelow7++;
    }
    if (grade > max) {
        max = grade;
    }
}
let average = sum / n;
console.log("Сума: " + sum);
console.log("Середня оцінка: " + average);
console.log("Оцінок 7 і вище: " + count7);
console.log("Оцінок нижче 7: " + countBelow7);
console.log("Найбільша оцінка: " + max);
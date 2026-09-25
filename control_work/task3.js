let attempts = 0;
while (attempts < 3) {
    let pin = Number(prompt("Введіть PIN:"));
    attempts++;
    if (pin === 2026) {
        console.log("Доступ дозволено");
        break;
    } else {
        if (attempts < 3) {
            console.log("Залишилося спроб: " + (3 - attempts));
        } else {
            console.log("Доступ заблоковано");
        }
    }
}
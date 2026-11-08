let input = document.querySelector("#userName");
let hello = document.querySelector("#welcome");
let btn = document.querySelector("#confirmBtn");
let msg = document.querySelector("#status");
let theme = document.querySelector("#theme");
let card = document.querySelector("#card");
let infoBtn = document.querySelector("#detailBtn");
let info = document.querySelector("#details");
btn.addEventListener("click", function(){
    let name = input.value.trim();
    if (name === ""){
        msg.textContent = "Введіть ім’я для підтвердження";
    }else{
        msg.textContent = "Готово! Ваше ім’я: " + name;
        msg.classList.add("success");
    }
});
input.addEventListener("input", function(){
    let name = input.value.trim();
    if (name === ""){
        hello.textContent = "Привіт, гостю!";
    }else{
        hello.textContent = "Привіт, " + name + "!";
    }
    msg.textContent = "Натисніть кнопку, щоб підтвердити ім’я";
    if (msg.classList.contains("success")){
        msg.classList.toggle("success");
    }
});
infoBtn.addEventListener("click", function(){
    info.classList.toggle("hidden");
    if (info.classList.contains("hidden")){
        infoBtn.textContent = "Показати інформацію";
    }else{
        infoBtn.textContent = "Приховати інформацію";
    }
});
theme.addEventListener("change", function(){
    if (theme.value === "dark"){
        card.classList.add("dark");
    }else{
        if (card.classList.contains("dark")){
            card.classList.toggle("dark");
        }
    }
});
let lessons = [
    {id: 1, title: "Web Design", category: "Frontend", price: 450, duration: 30, rating: 4, available: true},
    {id: 2, title: "HTML Basics", category: "Frontend", price: 250, duration: 20, rating: 5, available: true},
    {id: 3, title: "Node.js", category: "Backend", price: 950, duration: 60, rating: 4, available: false},
    {id: 4, title: "Angular", category: "Frontend", price: 850, duration: 45, rating: 3, available: true},
    {id: 5, title: "Django", category: "Backend", price: 1100, duration: 70, rating: 5, available: true},
    {id: 6, title: "SQL", category: "Backend", price: 600, duration: 35, rating: 4, available: true},
    {id: 7, title: "PHP", category: "Backend", price: 550, duration: 40, rating: 3, available: false},
    {id: 8, title: "Advanced CSS", category: "Frontend", price: 750, duration: 50, rating: 5, available: true}
];
function searchByNumber(number) {
    return lessons.find(item => item.id === number);
}
function searchByGroup(group) {
    return lessons.filter(item => item.category.toUpperCase() === group.toUpperCase());
}
function searchByBudget(budget) {
    return lessons.filter(item => item.price <= budget);
}
function searchByName(name) {
    return lessons.filter(item => item.title.toUpperCase().includes(name.toUpperCase()));
}
function createNameList() {
    return lessons.map(item => item.title);
}
function createSaleList() {
    return lessons.map(item => {
        return {
            title: item.title,
            price: item.price * 0.85
        };
    });
}
function orderByCost() {
    let copy = lessons.map(item => item);
    return copy.sort((first, second) => first.price - second.price);
}
function orderByStars() {
    let copy = lessons.map(item => item);
    return copy.sort((first, second) => second.rating - first.rating);
}
function orderByAlphabet() {
    let copy = lessons.map(item => item);
    return copy.sort((first, second) => first.title.localeCompare(second.title));
}
function getPriceStatistics() {
    let openLessons = lessons.filter(item => item.available === true);
    let sum = 0;
    for (let item of openLessons) {
        sum += item.price;
    }
    let average = 0;
    if (openLessons.length > 0) {
        average = sum / openLessons.length;
    }
    return {sum: sum, average: average};
}
function displayLessons(list) {
    if (list.length === 0) {
        alert("No results.");
    } else {
        let result = list.map(item =>
            item.title + " - " + item.price + " UAH, rating: " + item.rating
        ).join("\n");

        alert(result);
    }
}
let repeat = true;
do {
    let answer = prompt(
        "Choose an option:\n" +
        "1 - Find by ID\n" +
        "2 - Category\n" +
        "3 - Max price\n" +
        "4 - Search title\n" +
        "5 - All titles\n" +
        "6 - 15% off\n" +
        "7 - Sort by price\n" +
        "8 - Sort by rating\n" +
        "9 - Sort A-Z\n" +
        "10 - Price stats"
    );
    if (answer === null) {
        break;
    }
    let option = +answer;
    if (answer.trim() === "" || option < 1 || option > 10 || option % 1 !== 0) {
        alert("Invalid option.");
    }
    else if (option === 1) {
        let number = prompt("Course ID:");

        if (number === null || number.trim() === "" || +number <= 0 || +number % 1 !== 0) {
            alert("Invalid ID.");
        } else {
            let result = searchByNumber(+number);
            if (result === undefined) {
                alert("Course not found.");
            } else {
                let status = "No";

                if (result.available === true) {
                    status = "Yes";
                }
                alert(`Title: ${result.title}
Category: ${result.category}
Price: ${result.price} UAH
Duration: ${result.duration} h
Rating: ${result.rating}
Available: ${status}`);
            }
        }
    }
    else if (option === 2) {
        let group = prompt("Category: Frontend or Backend");

        if (group === null || group.trim() === "") {
            alert("No category.");
        } else {
            let result = searchByGroup(group.trim());
            displayLessons(result);
        }
    }
    else if (option === 3) {
        let money = prompt("Max price:");

        if (money === null || money.trim() === "" || isNaN(+money) || +money < 0) {
            alert("Invalid price.");
        } else {
            let result = searchByBudget(+money);
            displayLessons(result);
        }
    }
    else if (option === 4) {
        let text = prompt("Title or part:");

        if (text === null || text.trim() === "") {
            alert("No title.");
        } else {
            let result = searchByName(text.trim());
            displayLessons(result);
        }
    }
    else if (option === 5) {
        let names = createNameList();
        alert("All titles:\n" + names.join("\n"));
    }
    else if (option === 6) {
        let sale = createSaleList();

        let message = sale.map(item =>
            item.title + " - " + item.price + " UAH"
        ).join("\n");

        alert("15% off:\n" + message);
    }
    else if (option === 7) {
        let sorted = orderByCost();
        alert("Price: low to high");
        displayLessons(sorted);
    }
    else if (option === 8) {
        let sorted = orderByStars();
        alert("Rating: high to low");
        displayLessons(sorted);
    }
    else if (option === 9) {
        let sorted = orderByAlphabet();
        alert("Titles: A-Z");
        displayLessons(sorted);
    }
    else if (option === 10) {
        let statistics = getPriceStatistics();

        alert(`Total: ${statistics.sum} UAH
Average: ${statistics.average} UAH`);
    }
    repeat = confirm("Back to menu?");
} while (repeat);
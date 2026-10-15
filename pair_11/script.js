// // let book = {
// //     title: "Kobzar",
// //     author: "Taras",
// //     year: "1840",
// //     price: 500,
// //     available: true
// // }
// // console.log(book.title);
//
// let books = [
//     {
//         id: 1,
//         title: "Кобзар",
//         author: "Тарас Шевченко",
//         year: "1840",
//         price: 500,
//         available: true
//     },
//     {
//         id: 2,
//         title: "Лісова пісня",
//         author: "Леся Українка",
//         year: "1911",
//         price: 450,
//         available: true
//     },
//     {
//         id: 3,
//         title: "Тигролови",
//         author: "Іван Багряний",
//         year: "1943",
//         price: 550,
//         available: false
//     },
//     {
//         id: 4,
//         title: "Місто",
//         author: "Валер'ян Підмогильний",
//         year: "1927",
//         price: 450,
//         available: false
//     }
// ];
// // console.log(books[2]);
// // for(let book of books){
// //     cф
// // }
// // books.forEach(function(book){
// //     console.log(book.title)
// // })
// let availableCount = 0;
// let totalPrice = 0;
// for (let book of books) {
//     if (book.available) {
//         availableCount++;
//         totalPrice += book.price;
//     }
// }
// console.log(availableCount);
// console.log(totalPrice);
// books.push({
//     id: 5,
//     title: "Захар Беркут",
//     author: "Іван Франко",
//     year: "1882",
//     price: 500,
//     available: true
// })
// console.log(books.length)
// let idBooks = +prompt("Введіть id книги, яку хочете знайти: ");
// let foundBook = null;
// for (let book of books) {
//     if (book.id === idBooks) {
//         foundBook = book;
//         break;
//     }
// }
// console.log(foundBook);
// if (foundBook !== null) {
//     let status = "Немає в наявності";
//     if (foundBook.available) {
//         status = "В наявності";
//     }
//     alert([${foundBook.id}]: ${foundBook.title}, ${foundBook.author}, ${foundBook.year}, ${foundBook.price} грн. (${status}));
// }else{
//     alert("Книжки немає з таким ID")
// }

// ------------------Praktichna
let clubs = [
    {
        id: 1,
        name: "Volleyball",
        category: "Sport",
        price: 200,
        members: 15,
        active: true
    },
    {
        id: 2,
        name: "Ballroom dance",
        category: "Sport",
        price: 1000,
        members: 2,
        active: false
    },
    {
        id: 3,
        name: "HTML",
        category: "IT",
        price: 7000,
        members: 1,
        active: true
    },
    {
        id: 4,
        name: "CSS",
        category: "IT",
        price: 6000,
        members: 1,
        active: true
    },
    {
        id: 5,
        name: "Scrap booking",
        category: "Art",
        price: 2000,
        members: 50,
        active: false
    }
];
while (true) {
    let process = +prompt("1 - Show all clubs\n2 - Find a club by ID\n3 - Register a participant\n4 - Change enrollment status\n5 - Add a new club\n6 - Show statistics\n0 - Exit");
    if (process === 0) {
        break;
    }
    if (process !== 1 && process !== 2 && process !== 3 && process !== 4 && process !== 5 && process !== 6) {
        alert("Invalid");
    }
    if (process === 1) {
        if (clubs.length === 0) {
            alert("The catalog is empty");
        } else {
            let list = "";
            clubs.forEach(function (found) {
                let status = "Enrollment closed";
                if (found.active) {
                    status = "Enrollment open";
                }
                list += `[${found.id}]: ${found.name}, ${found.category}, ${found.price} Dollars, participants: ${found.members} (${status})\n`;
            });
            alert(list);
        }
    }
    if (process === 2) {
        let askID = +prompt("Enter the ID");
        let foundID = null;

        for (let found of clubs) {
            if (found.id === askID) {
                foundID = found;
                break;
            }
        }
        console.log(foundID);
        if (foundID !== null) {
            let status = "Enrollment closed";
            if (foundID.active) {
                status = "Enrollment open";
            }
            alert(`[${foundID.id}]: ${foundID.name}, ${foundID.category}, ${foundID.price} UAH, participants: ${foundID.members} (${status})`);
        } else {
            alert("No club found");
        }
    }
    if (process === 3) {
        let askID = +prompt("Enter the ID");
        let foundID = null;
        for (let found of clubs) {
            if (found.id === askID) {
                foundID = found;
                break;
            }
        }
        if (foundID === null) {
            alert("No club found");
        } else if (foundID.active === false) {
            alert("Enrollment is closed");
        } else {
            if (confirm("Do you want to join this club?")) {
                foundID.members++;
            }
        }
    }
    if (process === 4) {
        let askID = +prompt("Enter the ID");
        let foundID = null;
        for (let found of clubs) {
            if (found.id === askID) {
                foundID = found;
                break;
            }
        }
        if (foundID === null) {
            alert("No club found");
        } else {
            if (confirm("Do you want to change the enrollment status?")) {
                if (foundID.active === true) {
                    foundID.active = false;
                } else {
                    foundID.active = true;
                }
                let status = "Enrollment closed";
                if (foundID.active) {
                    status = "Enrollment open";
                }
                alert(`${foundID.name}: ${status}`);
            }
        }
    }
    if (process === 5) {
        let name = prompt("name");
        let category = prompt("category");
        let price = +prompt("price");
        let members = +prompt("participants");
        if (name === null || name === "") {
            alert("The name cannot be empty");
        } else if (price < 0) {
            alert("The price cannot be negative");
        } else if (members < 0) {
            alert("The number of participants cannot be negative");
        } else {
            let newID = 0;
            for (let found of clubs) {
                if (found.id > newID) {
                    newID = found.id;
                }
            }
            newID++;
            clubs.push({
                id: newID,
                name: name,
                category: category,
                price: price,
                members: members,
                active: true
            });
        }
    }
    if (process === 6) {
        let activeCount = 0;
        let totalMembers = 0;
        let totalPrice = 0;
        for (let found of clubs) {
            if (found.active) {
                activeCount++;
            }
            totalMembers += found.members;
            totalPrice += found.price;
        }
        let averagePrice = 0;
        if (clubs.length > 0) {
            averagePrice = totalPrice / clubs.length;
        }
        alert(`Total number of clubs: ${clubs.length}\nClubs with open enrollment: ${activeCount}\nTotal number of participants: ${totalMembers}\nAverage club price: ${averagePrice}`);
    }
}
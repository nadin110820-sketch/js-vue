let news = [
    {   category: "JavaScript",
        title: "JavaScript for children",
        description: "The JavaScript library for JavaScript.",
        data: "20.11.2026"},
    {   category: "Design",
        title: "Дизайн для чайників",
        description: "Design for little kids.",
        data: "13.11.2026"}
]
let newsList = document.querySelector('#news-list');
let newsCount = document.querySelector('#news-count');
function renderNews(items){
    let card = document.createElement('article');
    card.classList.add('news-card');
    let tag = document.createElement('span');
    tag.classList.add('tag');
    tag.textContent = items.category;
    // card.textContent = news[0].title;
    // newsList.append(card);
    // newsCount.textContent = 1;
    let title = document.createElement('h2');
    title.textContent = items.title;
    let description = document.createElement('p');
    description.textContent = items.description;
    let date = document.createElement('small');
    date.textContent = items.data;
    card.append(tag, title, description, date);
    newsList.append(card);
}
renderNews(news);
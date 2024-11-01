// scripts.js

// Function for vertical news scroll
function scrollNews(elementId) {
    const list = document.getElementById(elementId);
    let items = list.getElementsByTagName('li');

    setInterval(() => {
        list.appendChild(items[0]); // Move the first item to the end
        items = list.getElementsByTagName('li');
    }, 3000);
}

// Initialize scroll for news and events
document.addEventListener("DOMContentLoaded", () => {
    scrollNews('newsList');
    scrollNews('eventsList');
});

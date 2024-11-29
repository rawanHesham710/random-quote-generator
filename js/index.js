var Quotes = [];
function getQuote() {
    Quotes = [{
        quote: "Be yourself; everyone else is already taken",
        author: "― Oscar Wilde"
    }, {
        quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind."
        , author: "― Bernard M. Baruch"
    }, {
        quote: "You only live once, but if you do it right, once is enough.",
        author: "― Mae West"
    }, {
        quote: "Be the change that you wish to see in the world.",
        author: "― Mahatma Gandhi"
    }, {
        quote: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
        author: "― J.K. Rowling, Harry Potter and the Goblet of Fire"
    }
    ]


}

function generate() {
    return Math.floor(Math.random() * 5);
}

function display() {
    getQuote();
    run = generate();
    document.getElementById("demo").innerHTML = 
    `   <p class="fs-1 mb-4 fw-semibold">${Quotes[run].quote}</p>
        <h3 class="fw-semibold fs-2">${Quotes[run].author}</h3>`
}
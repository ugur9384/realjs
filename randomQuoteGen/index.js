const backgroundimages=[
    "url(./images/image1.jpg)",
    "url(./images/image2.jpg)"
]
let background="url(./images/image2.jpg)"
document.body.style.backgroundImage = background;
document.body.style.backgroundSize = "cover";
changebackground = () => {
    if (background=="url(./images/image1.jpg)"){
        background="url(./images/image2.jpg)";
    }else{
        background="url(./images/image1.jpg)";
    };
    document.body.style.backgroundImage = background;
    document.body.style.backgroundSize = "cover";}

const quotes ={
    "Albert Einstein": "Life is like riding a bicycle. To keep your balance you must keep moving.",
    "Oscar Wilde": "Be yourself; everyone else is already taken.",
    "Frank Zappa": "So many books, so little time.",
    "Marcus Tullius Cicero": "A room without books is like a body without a soul.",
    "Bernard M. Baruch": "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind."
}
quoteauthor = document.getElementById('author');
quot = document.getElementById('quote');
const newquote=(quot,quoteauthor)=>{
    const authors = Object.keys(quotes);
    const author = authors[Math.floor(Math.random() * authors.length)];
    const quote = quotes[author];
    quot.textContent = quote;
    quoteauthor.textContent = author;
}
document.getElementById("quotegen").addEventListener('click',()=>{
    newquote(quot,quoteauthor);
    changebackground();
})
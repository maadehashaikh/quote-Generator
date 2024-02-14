let quote = document.querySelector(".quote-content");
let author = document.querySelector(".Author");
let btn = document.querySelector(".quote-btn");

async function GetQuotes() {
  const URL = "https://api.quotable.io/random";
  const response = await fetch(URL);
  const data =await response.json();
  quote.textContent = data.content;
  author.textContent = `- ${data.author}`;
}
btn.addEventListener("click",GetQuotes);

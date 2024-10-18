//What do you have to do?
//Add a style to the project using one of the following tools: CSS and ( Bootstrap or Materialize )
//Use the input fields in order to add data to the table using Javascript ( Don't forget to use the help of Javascript Crash Course at the beginning of this card)
//You have to use at least an Event listener, For loop, and Function.

//eventlistener with for each loop

const buttons = document.querySelectorAll("#read-more");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    alert("Do you want to read more?");
  });
});

//function

const quotes = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    text: "Get busy living or get busy dying.",
    author: "Stephen King",
  },
  {
    text: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
  {
    text: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    author: "Martin Luther King Jr.",
  },
  {
    text: "The purpose of our lives is to be happy.",
    author: "Dalai Lama",
  },
  {
    text: "Life is either a daring adventure or nothing at all.",
    author: "Helen Keller",
  },
  {
    text: "To live is the rarest thing in the world. Most people exist, that is all.",
    author: "Oscar Wilde",
  },
  {
    text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    author: "Ralph Waldo Emerson",
  },
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
];

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

function displayNewQuote() {
  const quote = getRandomQuote();
  document.getElementById("quote").textContent = `"${quote.text}"`;
  document.getElementById("author").textContent = `- ${quote.author}`;
}

document
  .getElementById("newQuoteButton")
  .addEventListener("click", displayNewQuote);

displayNewQuote();

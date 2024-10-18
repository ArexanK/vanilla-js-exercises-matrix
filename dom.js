// Create an HTML page with a button and a div element. Write a JavaScript function that changes the text content of the div when the button is clicked.

const myText = document.getElementById("myText");
const myButton = document.getElementById("myButton");

myButton.addEventListener("click", function () {
  myText.textContent = "i changed this text";
});

//In an HTML page, create a list of items (e.g., a to-do list) using an unordered list (`<ul>`) and list items (`<li>`). Write JavaScript to add a new item to the list when a button is clicked.
const myList = document.getElementById("myList");
const addButton = document.getElementById("addButton");

addButton.addEventListener("click", function () {
  const newItem = document.createElement("li");

  newItem.textContent = "learn react";
  myList.appendChild(newItem);
});

//Create a web page with an image and a button. Write JavaScript to change the image source when the button is clicked.
const myImage = document.getElementById("myImage");
const changeButton = document.getElementById("changeButton");

changeButton.addEventListener("click", function () {
  myImage.src = "https://images.unsplash.com/photo-1596883821973-e4ac8c3e47a3";
});

//Build an interactive form in HTML (e.g., a simple login form) with input fields for username and password. Write JavaScript to validate the form when submitted. Display a message based on whether the login was successful or not.

const validUsername = "Arex";
const validPassword = "Kheyr";

function login() {
  const myPassword = document.getElementById("password");
  const myUsername = document.getElementById("username");
  const errorMessage = document.getElementById("error-msg");

  if (myUsername === validUsername && myPassword === validPassword) {
    alert("login succesfull");
    errorMessage.style.display = "none";
  } else {
    errorMessage.style.display = "error";
  }
}

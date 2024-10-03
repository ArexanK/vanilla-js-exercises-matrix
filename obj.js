//Create an object representing a book with properties like title, author, and year. Print the book's details to the console.


const book={
    title: "Normal People", 
    author: "Sally Rooney",
    year: 2022
}

console.log(book)

//Define an object to represent a person with properties like name, age, and gender. Create a function that takes a person's object as a parameter and prints a message with their information.

const person ={
    name:"Alice",
    age: 25, 
    gender: "Female",
    id:function(person){
        return this.name + " " + this.age+ " " +this.gender
    }
}

console.log(person.id())


// function Book(title,author,year){
//     this.title = title;
//     this.author = author;
//     this.year = year;
// }
// // prototype function
// Book.prototype.getSummary = function(){
//     return `${this.title} is written by ${this.author} in ${this.year} `
// }
// Book.prototype.getAge = function (){
//     let years = new Date().getFullYear() - this.year;
//     return `${this.title} is ${years} years old!`
// }
// // Create a subclass
// function Magazine(title,author,year,month){
//     Book.call(this,title,author,year)
//     this.month = month;
// }

// Magazine.prototype = Object.create(Book.prototype)

// const magazine = new Magazine('sunday','Juan',1990,'March');
// console.log(magazine.getSummary())

// class Book{
//     constructor(title,author,year,month){
//         this.title = title;
//         this.author = author;
//         this.year = year;
//         this.month = month;
//     }
//     getSummary(){
//      return `This book,${this.title} is written by ${this.author} in ${this.year}, ${this.month}`
//     }
//     getAge(){
//         const years = new Date().getFullYear() - this.year;
//         return `${this.title} is ${years} years old!`
//     }
// }

// Let's create subclass
// class Magazine extends Book{
//     constructor(title,author,year,month,revisedYear){
//         super(title,author,year,month)
//         this.revisedYear = revisedYear;
//     }
// }
// Magazine.prototype = Book.prototype;
// const book1 = new Book('Monday', 'Lim', 1990, 'March');
// const magazine = new Magazine('What a wonderfulday','Jen Holiday', 2030,'May',2040);
// console.log(book1)
// console.log(magazine.getAge())

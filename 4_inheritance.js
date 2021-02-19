// Constructor
// function Movie(title, director, year) {
//     this.title = title;
//     this.director = director;
//     this.year = year;
// }
// get Summary
// Movie.prototype.getSummary = function (){
//     return `${this.title} was written by ${this.director} in ${this.year}`
// }
// Netflix Constructor 
// function Netflix(title, director, year, month) {
//     Movie.call(this, title, director, year)
//     this.month = month;
// }
// Inherit prototype 
// Netflix.prototype = Object.create(Movie.prototype)
// Instantiate an Netflix Object
// const netflix1 = new Netflix('newgirl','Jane Smith',1990,'May')
// console.log(netflix1)
// Change Netflix as a constructor (from Movie constructor)
// Netflix.prototype.constructor = Netflix;
// console.log(netflix1)




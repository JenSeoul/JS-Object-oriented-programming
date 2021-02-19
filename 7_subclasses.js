// class Movie {
//     constructor(title, director, year){
//         this.title = title;
//         this.director = director;
//         this.year = year;
//     }
//     getSummary(){
//         return `${this.title} was written by ${this.director} in ${this.year}`
//     }
//     getAge(){
//         const years = new Date().getFullYear() - this.year;
//         return `${this.title} is ${years} years old!`
//     }
//     remake(revisedYear){
//         this.year = revisedYear;
//         this.revised = true;
//     }   
// }
// // Netflix as a subclass
// class Netflix extends Movie{
//     constructor(title,director,year,month){
//         super(title,director,year);
//         this.month = month;
//     }
// }
// const netflix1 = new Netflix('Breaking Bed', 'Carlos',2015,'April')
// netflix1.remake(2025);
// console.log(netflix1)
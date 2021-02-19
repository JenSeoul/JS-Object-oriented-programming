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

//     static topMovieTheater(){
//         return 'Hulu'
//     }
// }


// Instantiate Object
// const movie1 = new Movie('Parasite', 'Junho Bong', 2020)
// movie1.remake(2030)
// console.log(movie1)
// console.log(Movie.topMovieTheater())
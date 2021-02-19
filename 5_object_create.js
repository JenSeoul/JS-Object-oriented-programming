const movieProtos = {
    getSummary: function(){
        return `${this.title} was written by ${this.director} in ${this.year}`
    },
    getAge: function (){
        const years = new Date().getFullYear() - this.year;
         return `${this.title} is ${years} years old!`
    }
}
// Create object
// const movie1 = Object.create(movieProtos);
// movie1.title = 'Gone girl';
// movie1.director = 'Donald Graham';
// movie1.year = 2010;

const movie1 = Object.create(movieProtos, {
    title: {value: 'Gone girl'},
    director: {value: 'Donald Graham'},
    year: {value: '2010'}
})
console.log(movie1.getAge())
// Ex 47 - Map Practice

const fullNames = [{first: 'Albus', last: 'Dumbledore'},
    {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'},
    {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];

const firstNames = fullNames.map(function(name){
    return name.first;
})

console.log(firstNames);


// Ex 48 - Arrow Function Exercise

const greet = (name) => {
    return (`Hey ${name}!`);
}


// Ex 49 - Filter Ex

function validUserNames(usernames) {
    return usernames.filter(username => username.length < 10);
}


// Ex 50 - Some/Every Ex

function allEvens (num){
    return num.every(n => n % 2 === 0)
}
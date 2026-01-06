// Ex 44 - Function Expression

const square = function(num){
    // return num*num;
    return Math.pow(num, 2);
}

console.log(square(4));
console.log(square(3));


// Ex 45 - Methods

let squareObject = {
    area: function(side){
        return side * side;
    },
    perimeter(side){
        return side * 4;
    }
}

console.log(squareObject.area(10));
console.log(squareObject.perimeter(10));


// Ex 46 - Egg Laying Ex

let hen = {
    name: "Helen",
    eggCount: 0,
    layAnEgg() {
        this.eggCount++;
        return "EGG"
    }
}

console.log(hen.name);
console.log(hen.eggCount);
console.log(hen.layAnEgg());
console.log(hen.layAnEgg());
console.log(hen.eggCount);
// Create a Color object that has r, g, b properties
// and methods to return the color in rgb(), hex(), and rgba() formats.

function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
    console.log(this);
}

Color.prototype.rgb = function (){
        const{r, g, b} = this;
        return `rgb(${r}, ${g}, ${b})`;
};

Color.prototype.hex = function (){
        const{r, g, b} = this;
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

Color.prototype.rgba = function (a=1.0){
        const{r, g, b} = this;
        return `rgb(${r}, ${g}, ${b}, ${a})`;
};

const color1 = new Color(255, 40, 100);
const color2 = new Color(10, 11, 12);


// Class version

class ColorClass {
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    };
    rgb() {
        const{r, g, b} = this;
        return `rgb(${r}, ${g}, ${b})`;
    };
    hex() {
        const{r, g, b} = this;
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    };
    rgba(a=1.0) {
        const{r, g, b} = this;
        return `rgb(${r}, ${g}, ${b}, ${a})`;
    };
}

const color3 = new ColorClass(255, 40, 100);
const color4 = new ColorClass(10, 11, 12);

console.log(color1.rgb());
console.log(color1.hex());
console.log(color1.rgba(0.5));

console.log(color3.rgb());
console.log(color3.hex());
console.log(color3.rgba(0.5));


// Extends and super example

class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    };
    info() {
        return `${this.name} is ${this.age} years old.`;
    };
}

class Dog extends Pet {
    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
    };
    info() {
        return `${super.info()} It is a ${this.breed}.`;
    };
}

const myDog = new Dog("Buddy", 3, "Golden Retriever");
console.log(myDog.info());



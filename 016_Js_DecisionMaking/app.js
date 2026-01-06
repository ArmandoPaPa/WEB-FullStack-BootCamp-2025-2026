console.log("HELLO FROM OUR FIRST JS FILE!");

let random = Math.random();
if (random < 0.5) {
    console.log("Your number is less than 0.5!");
}


// const dayOfWeek = "Monday";
const dayOfWeek = prompt("Enter day of week!").toLowerCase();

if (dayOfWeek === "monday" || dayOfWeek === "tuesday") {
    console.log("The week has just started ;)");
} else if (dayOfWeek === "wednesday") {
    console.log("It's Wednesday! HAHAHA");
} else if (dayOfWeek === "thursday" || dayOfWeek === "friday") {
    console.log("Just a little bit more...!");
} else {
    console.log("It's WEEKEND! RELAX & Enjoy!");
}


// SWITCH

const day = 2;

switch (day) {
    case 1: // case value:
        console.log("MONDAY");
        break;
    case 2:
        console.log("TUESDAY");
        break;
    case 3:
        console.log("WEDNESDAY");
        break;
    case 4:
        console.log("THURSDAY");
        break;
    case 5:
        console.log("FRIDAY");
        break;
    case 6:
    case 7:
        console.log("WEEKEND!");
        break;
    default:
        console.log("NOT FOUND");
}

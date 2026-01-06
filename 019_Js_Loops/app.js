// // for loops
//
// for (let i = 1; i<=10; i++) {
//     console.log(i);
// }
//
// for (let i = 2; i<=20; i+=2) {
//     console.log(i);
// }
//
// for (let i = 100; i>0; i-=10) {
//     console.log(i);
// }
//
//
// const students = ['anna', 'john', 'liz', 'thomas'];
//
// for (let i = 0; i < students.length; i++) {
//     console.log(i, students[i]);
// }
//
//
// for (let i=1; i<=10; i++){
//     console.log(`i is ${i}`);
//     for(let j=1; j<=3; j++){
//         console.log(`     j is ${j}`);
//     }
// }
//
//
// // while loops
//
// let count = 0;
// while (count < 10) {
//     console.log(count);
//     count++;
// }
//
//
// // Number guess GAME
//
// let maximum = parseInt(prompt("Enter the maximum number to guess!"));
// while(!maximum){
//     maximum = parseInt(prompt("Enter a valid number!"));
// }
//
// const targetNum = Math.floor(Math.random() * maximum) + 1;
// console.log(`Number to guess => ${targetNum}`);
//
// let guess = prompt("Enter your first guess! (Type 'q' to quit!)");
// let counter = 1;
//
// while(true){
//     if(parseInt(guess)<targetNum){
//         guess = prompt("Too LOW. Guess again");
//         counter++;
//     } else if(parseInt(guess) > targetNum){
//         guess = prompt("Too HIGH. Guess again");
//         counter++;
//     } else if(guess === "q"){
//         counter--;
//         console.log(`You decided to QUIT! You made ${counter} guesses!`);
//         break;
//     } else if (parseInt(guess) === targetNum){
//         console.log(`CONGRATS! You guessed the number ${targetNum}. It took you ${counter} guess(es)!`);
//         break;
//     } else{
//         guess = prompt("Enter a valid number or 'q' to quit! Guess again");
//     }
// }


// ToDo List Project in a Console

console.log('WELCOME to ToDo Projects | in Console');
console.log('*'.repeat(23));
console.log('INSTRUCTIONS! Write:');
console.log('*'.repeat(23));
console.log('"new" - to add a ToDo');
console.log('"list" - to list all ToDos');
console.log('"delete" - to remove a specific ToDo');
console.log('"quit" - to Quit');
console.log('*'.repeat(23));
console.log('*'.repeat(23));

let action = "start";
const toDo = [];

while (action !== 'quit') {
    action = prompt("What ToDo action do you want to make?").toLowerCase()
    if (action === 'new') {
        let newToDo = prompt("Enter a new ToDo:");
        toDo.push(newToDo);
        console.log("Added ToDo:", newToDo);
    }
    else if (action === 'list') {
        console.log('*'.repeat(23));
        console.log("ToDos:");
        for (let i = 0; i < toDo.length; i++) {
            console.log(`${i+1}. --- ${toDo[i]}`);
        }
        console.log('*'.repeat(23));
    }
    else if (action === 'delete') {
        if (toDo.length > 0) {
            let index = prompt("Enter the index of the ToDo to delete:");
            while(!parseInt(index) || !(Math.floor(parseInt(index)) > 0
                && Math.floor(parseInt(index)) <= toDo.length)){
                index = prompt("Enter a valid index! Or 'quit' to go back!");
                if (index === "quit") {
                    break;
                }
            }
            if (Math.floor(parseInt(index)) > 0 && Math.floor(parseInt(index)) <= toDo.length) {
                toDo.splice(Math.floor(parseInt(index))-1, 1);
                console.log("Deleted ToDo at index", Math.floor(parseInt(index)));
            }
        } else{
            console.log("ToDo List is empty. Nothing to delete");
        }
    }
    else if (action === 'quit') {
        console.log("See You next Time!");
        break;
    }
    else{
        console.log("Invalid action. Allowed actions (type): 'new' | 'list' | 'delete' | 'quit' !");
    }
}

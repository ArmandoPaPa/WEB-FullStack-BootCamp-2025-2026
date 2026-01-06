// Ex 35: Heart Function
function printHeart(){
    console.log("<3")
}

printHeart()


// Ex 36: Rant Exercise

function rant(message){
    for(let i = 0; i < 3; i++){
        console.log(message.toUpperCase())
    }
}

rant("I hate beets")


// Ex 37: Multiple Args Exercise

function isSnakeEyes(diceOneNum, diceTwoNum){
    if (diceOneNum === 1 && diceTwoNum === 1){
        console.log("Snake Eyes!")
    } else {
        console.log("Not Snake Eyes!")
    }
}

isSnakeEyes(1,1)
isSnakeEyes(1,5)
isSnakeEyes(4,5)


// Ex 38: Return Value practice

function multiply(num1, num2){
    return num1 * num2
}


// Ex 39: isShortsWeather Function

function isShortsWeather(temperature){
    // if (temperature >= 75){
    //     return true
    // }
    // return false

    return temperature >= 75
}


// Ex 40: Last Element Exercise

function lastElement(arr){
    if (arr.length === 0){
        return null
    }
    return arr[arr.length-1]
}


// Ex 41: Capitalise Exercise

function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1)
}


// Ex 42: Sum Array Exercise

function sumArray(arr){
    let total = 0;
    for (let num of arr){
        total += num
    }
    return total;
}


// Ex 43: Days of the Week Exercise

function returnDay(dayNumeric){
    switch(dayNumeric){
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 7:
            return "Sunday";
        default:
            return null;
    }
}

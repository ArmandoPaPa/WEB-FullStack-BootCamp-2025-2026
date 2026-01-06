// Call Stack

const multiply = (x, y) => x * y

const square = x => multiply(x, x);

const isRightTriangle = (a, b, c) => (
    square(a) + square(b) === square(c)
)

console.log("BEFORE")
isRightTriangle(3, 4, 5)

console.log("DONE!")


// Single Threaded

// console.log("Sending request to server")
// setTimeout(() => {
//     console.log("Here is your data from the server...")
// }, 3000)
// console.log("I AM AT THE END OF THE FILE!")


// Callbacks

// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'orange';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'yellow';
//             setTimeout(() => {
//                 document.body.style.backgroundColor = 'green';
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)


// const delayedColorChange = (newColor, delay, doNext) => {
//     setTimeout(() => {
//         document.body.style.backgroundColor = newColor;
//         doNext && doNext();
//     }, delay)
// }
//
// delayedColorChange("red", 1000, () => {
//     delayedColorChange("orange", 1000, () => {
//         delayedColorChange("yellow", 1000, () => {
//             delayedColorChange("green", 1000)
//         })
//     })
// })


// Promises

// new Promise((resolve, reject) => {
//     resolve()
// })

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random()
        setTimeout(() => {
            if (rand < 0.7){
                resolve('YOUR FAKE DATA HERE');
            }
            reject('Ŗequest Error');
        }, 1000)
    })
}

fakeRequest('/dogs/1')
    .then((data) => {
        console.log("DONE WITH REQUEST!")
        console.log('data is:', data)
    })
    .catch((err) => {
        console.log("OH NO!", err)
    })


// Async and Await

const delayedColorChange = (newColor, delay) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            document.body.style.backgroundColor = newColor;
            resolve();
        }, delay);
    });
}

// delayedColorChange('red', 1000)
//     .then(() => delayedColorChange('orange', 1000))
//     .then(() => delayedColorChange('yellow', 1000))
//     .then(() => delayedColorChange('green', 1000))
//     .then(() => delayedColorChange('blue', 1000))
//     .then(() => delayedColorChange('indigo', 1000))
//     .then(() => delayedColorChange('violet', 1000))

async function rainbow() {
    await delayedColorChange('red', 1000)
    await delayedColorChange('orange', 1000)
    await delayedColorChange('yellow', 1000)
    await delayedColorChange('green', 1000)
    await delayedColorChange('blue', 1000)
    await delayedColorChange('indigo', 1000)
    await delayedColorChange('violet', 1000)
    return "ALL DONE!"
}

rainbow().then(msg => console.log(msg)).catch(console.error);


async function makeTwoRequests() {
    try {
        let data1 = await fakeRequest('/page1');
        console.log(data1);
        let data2 = await fakeRequest('/page2');
        console.log(data2);
    } catch (e) {
        console.log("Caught an error:", e);
    }
}
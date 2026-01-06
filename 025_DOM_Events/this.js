const randomColor = () => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`;
}

const buttons = document.querySelectorAll('button');

const h1s = document.querySelectorAll('h1')

for(let button of buttons){
    // button.addEventListener('click', function () {
    //     // console.log("CLICKED!")
    //     button.style.backgroundColor = randomColor();
    //     button.style.color = randomColor();
    //
    // })
    button.addEventListener('click', colorize)
}

for(let h1 of h1s){
    // h1.addEventListener('click', function () {
    //     // console.log("CLICKED!")
    //     h1.style.backgroundColor = randomColor();
    //     h1.style.color = randomColor();
    // })
    h1.addEventListener('click', colorize)
}


function colorize(){
        this.style.backgroundColor = randomColor();
        this.style.color = randomColor();
}
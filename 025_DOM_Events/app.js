const btn = document.querySelector('#v2');

btn.onclick = function (){
    console.log("YOU CLICKED 2nd BUTTON")
    console.log("It worked!")
}

function screem(){
    console.log("AAAAAAAHHHHHHHH");
    console.log("STOP TOUCHING ME!")
}

btn.onmouseenter = screem;

document.querySelector('h1').onclick = function (){
    alert('You clicked the h1!')
}

const btn3 = document.querySelector('#v3');

btn3.addEventListener('click', function(){
    alert("CLICKED btn3!")
})

function twist(){
    console.log("TWIST!")
}

function shout() {
    console.log("SHOUT!")
}

const tasButton = document.querySelector('#tas')

// tasButton.onclick = twist;
// tasButton.onclick = shout;

tasButton.addEventListener('click', twist, {once: true})
tasButton.addEventListener('click', shout)




// Making XHRs

const req = new XMLHttpRequest();

req.onload = function () {
    console.log("IT LOADED!!");
    const data = JSON.parse(this.responseText);
    // console.log(data.result.properties);
    console.log(data.result.properties.name, data.result.properties.height);
};

req.onerror = function () {
    console.log("ERROR!!!!");
    console.log(this);
};

req.open("GET", "https://swapi.tech/api/people/1/");
req.send();


// Using The Fetch API

fetch("https://swapi.tech/api/people/1/")
    .then((res) => {
        console.log("RESOLVED!", res);
        return res.json();
    })
    .then((data) => {
        console.log(data.result.properties);
    })
    .catch((e) => {
        console.log("ERROR!", e);
    });

// Using Async/Await
const loadStarWarsPeople = async () => {
    try {
        const res = await fetch("https://swapi.tech/api/people/1/");
        const data = await res.json();
        console.log(data.result.properties);
        const res2 = await fetch("https://swapi.tech/api/people/2/");
        const data2 = await res2.json();
        console.log(data.result.properties);
    } catch (e) {
        console.log("ERROR!!!", e);
    }
};

loadStarWarsPeople();


// Introducing Axios

axios.get("https://swapi.tech/api/people/1/")
    .then((res) => {
        console.log("RESPONSE: ", res);
    })
    .catch((e) => {
        console.log("ERROR! ", e);
    });

const getStarWarsPerson = async (id) => {
    try {
        const res = await axios.get(`https://swapi.tech/api/people/${id}/`);
        console.log(res.data.result.properties);
    } catch (e) {
        console.log("ERROR", e);
    }
};

getStarWarsPerson(5);
getStarWarsPerson(10);


// Setting Headers with Axios

const jokes = document.querySelector('#jokes');
const button = document.querySelector('button')
// button.addEventListener('click', getDadJoke)
const getDadJoke = async () => {
    try {
        console.log("Fetching a dad joke...");
        const config = {headers: {Accept: "application/json"}};
        const res = await axios.get("https://icanhazdadjoke.com/", config);
        console.log(res.data.joke);
        const newLI = document.createElement('LI');
        newLI.append(res.data.joke);
        jokes.append(newLI);
    } catch (e) {
        console.log("ERROR", e);
    }
};

getDadJoke();
button.addEventListener('click', getDadJoke)

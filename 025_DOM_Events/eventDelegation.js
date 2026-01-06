// const lis = document.querySelectorAll('li');
//
// for(let li of lis){
//     li.addEventListener('click', function (){
//         li.remove();
//     })
// }

const tweetForm = document.querySelector('#tweetForm');
const tweetContainer = document.querySelector('#tweets');
tweetForm.addEventListener('submit', function(e){
    e.preventDefault();
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(usernameInput.value, tweetInput.value)
    usernameInput.value = '';
    tweetInput.value = '';
});

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username);
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`)
    tweetContainer.append(newTweet);
}

tweetContainer.addEventListener('click', function(e){
    // console.log("CLICK ON UL!")
    // console.log(e)
    // e.target.remove();
    e.target.nodeName === 'LI' && e.target.remove();
})
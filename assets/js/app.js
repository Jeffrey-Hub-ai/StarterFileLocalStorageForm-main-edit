//variables 
const tweetList = document.getElementById('tweet-List');



//Event Listeners

function eventListerners(){

 document.querySelector('#form').addEventListener('submit', newTweet);

}


//Functions
function newTweet(e){
e.preventDefault();
// read the textarea value
const tweet = document.getElementById('tweet').value;
// create an <li> element
const li = document.createElement('li');
li.textContent = tweet;
tweetList.appendChild(li);

}


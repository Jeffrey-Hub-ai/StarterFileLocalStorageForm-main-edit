//variables 
const tweetList = document.getElementById('tweet-list');



//Event Listeners
eventListerners();
function eventListerners(){

 document.querySelector('#form').addEventListener('submit', newTweet);

 // Remove tweet from the list
 tweetList.addEventListener('click', removeTweet);

}


//Functions
function newTweet(e){
e.preventDefault();


// read the textarea value
const tweet = document.getElementById('tweet').value;

// create the  remove button
const removeBtn = document.createElement('a');
removeBtn.classList = 'remove-tweet';
removeBtn.textContent = 'X';


// create an <li> element
const li = document.createElement('li');
li.textContent = tweet;


// Add the remove button to each tweet 
li.appendChild(removeBtn);

// Add to the List
tweetList.appendChild(li);
}

//Removes tweet from the DOM
function removeTweet(e){
    if(e.target.classList.contains('remove-tweet')){
        e.target.parentElement.remove();
    }

}
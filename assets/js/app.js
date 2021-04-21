//variables 




//Event Listeners

function eventListerners(){

 document.querySelector('#form').addEventListener('submit', newTweet);

}


//Functions
function newTweet(e){
e.preventDefault();
console.log('Form Submitted');
}


/*
 * Array that holds the list of different cards in the deck
 */

var cardDeck = ["fa fa-pinterest", "fa fa-facebook", "fa fa-youtube", "fa fa-snapchat", "fa fa-whatsapp", "fa fa-twitter",
"fa fa-instagram", "fa fa-linkedin","fa fa-pinterest", "fa fa-facebook", "fa fa-youtube", "fa fa-snapchat", "fa fa-whatsapp",
"fa fa-twitter", "fa fa-instagram", "fa fa-linkedin"];

// Game state variables
var open = [];
var matched = 0;
var moveCounter = 0;
var numStars = 3;
var timer = {
    seconds: 0,
    minutes: 0,
    clearTime: -1
    rank3stars = 10,
    rank2stars = 16,
    rank1stars = 20,
};

// Function to start timer
var startTimer = function() {
    if (timer.seconds === 59) {
        timer.minutes++;
        timer.seconds = 0;
    } else {
        timer.seconds++;
    }


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// start a new game
// shuffle the list of cards using function provided
function initGame(){
  cards = shuffle(cardDeck);
//loop through each card and create its html
  for (var i = 0; i < cardDeck.length; i++){
  jQuery('ul.deck').append('<li class="card"><i class='+ cardDeck[i] +'></i></li>');
  }
}

// Event listener for when the refresh button is hit
document.getElementById("fa fa-repeat").addEventListener("click", initGame);
function initGame(){
  cards = shuffle(cardDeck);
  for (var i = 0; i < cardDeck.length; i++){
  jQuery('ul.deck').append('<li class="card"><i class='+ cardDeck[i] +'></i></li>');
  }
}


// Event listener for when each card is initially clicked

document.getElementById("card").addEventListener("click", cards);
function


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

//Final rating and final score

  function setRating(moves) {
	var rating = 3;
	if (moves > rank3stars && moves < rank2stars) {
		$ratingStars.eq(2).removeClass('fa-star').addClass('fa-star-o');
		rating = 2;
	} else if (moves > rank2stars && moves < rank1stars) {
		$ratingStars.eq(1).removeClass('fa-star').addClass('fa-star-o');
		rating = 1;
	} else if (moves > rank1stars) {
		$ratingStars.eq(0).removeClass('fa-star').addClass('fa-star-o');
		rating = 0;
	}
	return { score: rating };
};

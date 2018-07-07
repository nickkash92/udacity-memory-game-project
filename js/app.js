//Array that holds the list of different cards in the deck
 var cardDeck = ["fa fa-pinterest", "fa fa-facebook", "fa fa-youtube",
"fa fa-snapchat", "fa fa-whatsapp", "fa fa-twitter",
"fa fa-instagram", "fa fa-linkedin","fa fa-pinterest",
"fa fa-facebook", "fa fa-youtube", "fa fa-snapchat",
"fa fa-whatsapp","fa fa-twitter", "fa fa-instagram", "fa fa-linkedin"];

// Game variables
const cards= document.querySelectorAll ('.cards');
const deck= document.querySelector ('deck');
let cardClicked= [];
let moves = 0;
let clockOff = true;
let time = 0;
};

// Functions for controlling the timer - grabbed from third party source
function (startClock) {
  time = 0;
  let clockID = setInterval(() {
    time++;
  }, 1000);
}
startClock();

deck.addEventListener("click",validClick);
  function (validClick){
    if (validClick(clickTarget)) {
      if (clickOff) {
        startClock();
        clockOff = false;
      }
    }
  }


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
//add each card's HTML to the page
  for (var i = 0; i < cardDeck.length; i++){
  deck.appendChild('<li class="card"><i class='+ cardDeck[i] +'></i></li>');
  }
}

// Event listener for when the refresh button is hit
document.getElementByClassName("fa fa-repeat").addEventListener("click", initGame);
function initGame(){
  cards = shuffle(cardDeck);
  for (var i = 0; i < cardDeck.length; i++){
  deck.appendChild('<li class="card"><i class='+ cardDeck[i] +'></i></li>');
  }
}


// Event listener for when each card is initially clicked
// Add to array of flipped cards
deck.addEventListener("click", cardClicked);
function cardClicked(){
  const clickTarget = cardClicked.target;
  if (clickTarget.classList.contains('card') && cardClicked.length < 2){
    clickTarget.classList.toggle('card open show');
  } if (cardClicked.length === 2) {
    function comparedCard();
  {  function addmove();
  }}
};

function addCardClicked(clickTarget){
  cardClicked.push(clickTarget);
}


// Creates function that switches to class to match if two clicked cards match
// Switch back to unflipped if not a match
function comparedCard() {
  if (
    cardClicked[0].firstElementChild.className === cardClicked[1].firstElementChild.className
  ) {
    cardClicked[0].classList.toggle("deck card match");
    cardClicked[1].classList.toggle("deck card match");
    cardClicked =[];
  } else {
    cardClicked =[];
    cardClicked[0].classList.toggle("deck");
    cardClicked[1].classList.toggle("deck");
  } else {
    setTimeout(() {
      toggleCard(cardClicked {0});
      toggleCard(cardClicked {1};
      cardClicked = [];
    }, 1000)
  }

//Function to count moves each time
function addMove() {
  moves++;
  const movesText = document.querySelector(".moves");
  movesText.innerHTML = moves;
}

//Module pop-up at the end
function toggleModal() {
  const modal = document.querySelector('.modal-background');
  modal.classList.toggle('hide');
}

toggleModal() //Open
toggleModal() //Close

function writeModalsStats() {
  const timeStat = document.querySelector('modal-time');
  const clockTime = document.querySelector('.clock');
  const moveStat = document.querySelector('modal-moves');
  const starsStat = document.querySelector('modal-stars');


}

//Final rating and final score

//function setRating(moves) {
  //if (moves === 16 || moves === 24
  //){ removeStar()

//  }
//}

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

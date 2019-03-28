/*
 * Create a list that holds all of your cards
 */
const deck = document.querySelector('.deck');
let cards = document.querySelectorAll('.card');
let toggledCards =[];
let matched = [] //We would have a total of 8 pairs / 16 cards
let moves = 0;



console.log(cards)

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


//shuffle function has not been used yet 
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

//add a click event
    
deck.addEventListener('click', event => { 
    const clickTarget = event.target;
        // console.log(event) 
        //mouse event example 
        if(isClickValid(clickTarget)) {
        
            toggleCard(clickTarget); //this is showing
            addOpen(clickTarget);    //this is pushing
          
    }
       
        if(toggledCards.length === 2) {
         checkMatch(clickTarget);
            addMove();
        }

     
});





function isClickValid(clickTarget) {
    return(
        clickTarget.classList.contains('card') &&
        !clickTarget.classList.contains('match') &&
        toggledCards.length < 2 &&
        !toggledCards.includes(clickTarget)
    )
}


    
//toggle cards
function toggleCard(clickTarget) {
        clickTarget.classList.toggle('open');
        clickTarget.classList.toggle('show');
    }

    //push open cards into the toggled cards array
    function addOpen(clickTarget) {
        toggledCards.push(clickTarget);
        console.log(toggledCards);
        
    }

    function checkMatch() {
        //we need to compare the two elements in the array
        if(toggledCards[0].firstElementChild.className === toggledCards[1].firstElementChild.className) {
            console.log('You found a match!')
            toggledCards[0].classList.add('match'); //was classList.toggle('match')
            toggledCards[1].classList.add('match');
            toggledCards = [];
        }
        else {
            console.log('This was not a match!')
            setTimeout(() => {
                toggleCard(toggledCards[0]);
                toggleCard(toggledCards[1]);
                toggledCards = [];

            }, 1000);
            
        }
    }
    
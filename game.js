/*
1. variables for player health/enemy health
2. variables for cards, and card stats (attack, defense, type)
3. display variables that allow us to change the page
4. add on click listeners to buttons
    a. have only play game working at first
    b. have attack and enemy turn buttons working
    c. have selected player card and selected enemy card work
5. game logic
*/


//game logic
var playerHealth = 50;
var enemyHealth = 50;
var gameInfo = "Discover the Secret by Pressing Play";
var cardsBankLength = 100;

var playerCards = [
    // [image, cardName, health, attack, defense, dead?]
    //insible woman
    [src="Pictures\InvisibleWoman.jpg",
    "Invisible Woman", 100, 4, 10, false],
    //human torch
    [src="Pictures\TheTorch.jpg",
    "The Human Torch", 100, 9, 7, false],
    //mr fantastic
    [src="Pictures\MrFantastic.jpg", "Mr. Fantastic", 100, 7, 6, false],
    //the thing
    [src="Pictures\TheThing.jpg", "The Thing", 100, 9, 9, false],
    //She-Hulk
    [src="", "She-Hulk", 100, 8, 4, false],
    //Franklin Richards
    [src="", "Franklin Richards", 100, 10, 10, false],
    //luke cage
    [src="", "Luke Cage", 100, 6, 9, false],
    //crystal
    [src="", "Crystal", 100, 8, 5, false],
];
var enemyCards = [
    //diablo
    [src="", "Diablo", 100, 0, 0, false],
    //galactus
    [src="", "Galactus", 100, 0, 0, false],
    //king namor
    [src="", "King Namor", 100, 0, 0, false],
    //dr doom
    [src="", "Dr Doom", 100, 0, 0, false],
    //brute
    [src="", "Brute", 100, 0, 0, false],
    //molecule man
    [src="", "Molecule Man", 100, 0, 0, false],
    //kang the conquerer
    [src="", "Kang the Conquerer", 100, 0, 0, false],
    //red ghost
    [src="", "Red Ghost", 100, 0, 0, 0, false]
];

var cardsDamage; 
var cardsDefense;
var cardsName;
var cards;
var cardImage;

var gameOver = false;
var playerDone = false;
var initialized = false;
var lastCardID = 0;
var enemyAIInterval;
var highlightChoice = 4;

var gameOverSeq;
function gameOver() {
    if (playerHealth <= 0) {
        gameInfoDisp.innerHTML = "You Lost, try again!"
        gameOverSeq = setInterval(repeatGameSequence, 1000);
        setTimeout(startAgain, 4000);
        return true;
    }
    else if (enemyHealth <= 0) {
        gameInfoDisp.innerHTML = "YOU WON BOOYAH!!!"
        gameOverSeq = setInterval(repeatGameSequence, 1000);
        setTimeout(startAgain, 4000);
        return true;
    }
    else if (tieGame())
    {
        gameInfoDisp.innerHTML = "Tie game, tie your shoes!"
        gameOverSeq = setInterval(repeatGameSequence, 1000);
        setTimeout(startAgain, 4000);
        return true;
    }
    return false;
} 

//display variables
var gameInfoDisp = document.getElementById('info');
var playerHealthDisp = document.getElementById('playerHealth');
var enemyHealthDisp = document.getElementById('enemyHealth');

//enableAllButtons();
const playerTurnButton = document.getElementById('playerTurn');
playerTurnButton.addEventListener('click', playerAttack);

const doneButton = document.getElementById('done');
doneButton.addEventListener('click', done);

const upgradeButton = document.getElementById('play');
upgradeButton.addEventListener('click', upgrade);

playerTurnButton.disabled = false;
doneButton.disabled = false;  
upgradeButton.disabled = false;

function ididit() {
    console.log("i did it");
}

function done() {
    playerDone = true;
    console.log("done function");
    //disableAllButtons();
    enemyTurn();
}

function upgrade() {
    //console.log("Upgrade: " + lastCardID);
    //playerCards[lastCardID][0] += (parseInt(Math.random() * playerCards[lastCardID][0] + playerCards[lastCardID][0]/4));
    //playerCards[lastCardID][1] += (parseInt(Math.random() * playerCards[lastCardID][1] + playerCards[lastCardID][1]/4));
    
    console.log("upgrade function");
    initializeCards();
    //disableAllButDone();
}


function playerAttack() {
    /*if(!gameOver()) {
        console.log("In player attack");
        cardBattle();
        gameOver();
        playerDone = true;
        disableAllButDone();
    }*/
    console.log("playerAttack");
}

function enemyTurn() {
    /*if(!gameOver()) {
        disableAllButtons();
        simulateThinking();
        setTimeout(enemyChoice, 3200);
        gameOver();
    }*/
    disableAllButtons();
    simulateThinking();
    //setTimeout(enemyChoice, 3200);
    console.log("enemys turn");
}

function playerTurn(){
    if(!gameOver() && !playerDone) {
        //enableAllButtons();
        //gameOver();
    }
    console.log("players turn");
}

function simulateThinking() {
    console.log("simulatedThinking function");
    //enemyAIInterval = setInterval(enemyAI, 500);
    //essentially this makes it player turn again:
    //setTimeout(enableAllButtons, 3000);
}
function enemyAI() {
    //first 3 cards are enemy cards
    console.log("enemyAI function");
    //highlightChoice = parseInt(Math.random() * 3);
    //cards[highlightChoice].style.backgroundColor = cards[highlightChoice].style.backgroundColor == "red" ? enemyCards[i][3] : "red";
    //cards[highlightChoice].style.backgroundColor = "#c00000"
}

function enableAllButtons() {
    //if (initialized) {
    //    clearInterval(enemyAIInterval);
    //}
    //initialized = true;
    //initializeCards();
   // playerTurnButton.disabled = false;
    //doneButton.disabled = false;  
    //upgradeButton.disabled = false;
    console.log("enableAllButtons function");

}

function disableAllButDone(){
    playerTurnButton.disabled = false;
    doneButton.disabled = false;  
    upgradeButton.disabled = true;
    console.log("disableAllButDone function");
}

function disableAllButtons() {
    playerTurnButton.disabled = true;
    doneButton.disabled = true;  
    upgradeButton.disabled = true;
    console.log("disableAllButtons function");
}

function setUpCardBanks() {
    for (var i = 0; i < cardsBankLength; i++) {
        console.log(i);
        /*
        var cardStats = getRandomStats();
        // [1, 2, 3, 4]
        cardStats.push(getRandomName());
        // [1, 2, 'random name']   -  for enemy cards
        cardStats.push(getRandomFanasticFour());
        //get random fantastic four hero for player
        cardStats.push(getRandomColor());
        // [1, 2, 'random name', 'random color']
        cardStats.push(i);
        // [1, 2, 'random name', 'random color', 'enemy_id_3' 'image url', dead? 0 is dead, 1 is alive]

        //our image is in position 5
        cardStats.push(getRandomImageURL());

        //this will tell us if the card is in play at position 6:
        
        // the first 3 enemy cards and first 3 player cards are in play (index 0,1,2 and 50, 51, 52)
        if (i < 3) {
            cardStats.push(1);
            console.log('enemy card in play index is: ' + i);

        }
        else if (i >= cardsBankLength/2 && i < (cardsBankLength/2 + 3)) {
            cardStats.push(1);
            console.log('player card in play index is: ' + i);
        }
        else {
            cardStats.push(0);
        }
        //console.log("card stats: " + cardStats);
        // [3, 6, 'aoughalkh'];
        if (i < cardsBankLength/2 ) {
            playerCards.push(cardStats);
        }
        else {
            enemyCards.push(cardStats);
            // [[1, 2, 'name'],[1, 2, 'other name']]
        }*/
    }
}

function initializeCards(){
    //console.log("Calling");
    //Get a list of all the cards damage in play in the game:
    
    cardsHealth = document.getElementsByClassName('card-health'); //added
    cardsDamage = document.getElementsByClassName('card-attack');
    cardsDefense= document.getElementsByClassName('card-defense');
    cardsName = document.getElementsByClassName('card-name');
    cards = document.getElementsByClassName('card');
    cardImage = document.getElementsByTagName('img');
    //for player card intializations:
    for (var i = 0; i < cardsBankLength; i++) {

    /*
    //enemy card initializiations:
    for (var i = 0; i < 6; i++) {
        //need to run a check to see if the card is already dead:
        if (!cardIsDead(i)) {

        //enemy cards: 
        if(i < 3) {
        //set the attack of the enemy card damage by accessing the list and assignting it the value of enemycards at first array first index
        //[[2, 3, 'aadfuaio' ], [2, 3, 'aadfuaio' ], [2, 3, 'aadfuaio' ]]
        cardsDamage[i].innerHTML = "Attack: " + enemyCards[i][0];
        //set the defense
        cardsDefense[i].innerHTML = "Defense: " + enemyCards[i][1];
        //set the name
        cardsName[i].innerHTML = enemyCards[i][2];

        cards[i].style.backgroundColor = enemyCards[i][3];
        cardImage[i].src = enemyCards[i][5];
        cards[i].id = 'enemyCard' + i;

        }
        //player cards:
        else {
        //set the attack of the enemy card damage by accessing the list at i
        cardsDamage[i].innerHTML = "Attack: " + playerCards[i-3][0];
        //set the defense
        cardsDefense[i].innerHTML = "Defense: " +  playerCards[i-3][1];
        //set the name
        cardsName[i].innerHTML = playerCards[i-3][2];
        cards[i].style.backgroundColor = playerCards[i-3][3];
        cardImage[i].src = playerCards[i-3][5];
        cards[i].id = 'playerCard' + i;
        if (!initialized) {
            cards[i].addEventListener('click',selectedCard, false);
        }

        }
    }
    else if (cardIsDead(i)){
        cards[i].style.backgroundColor = "black";
        console.log("deteced death of: " + cards[i].id);
    }
}
    */
     console.log("initializeCards function");}
}
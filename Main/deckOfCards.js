"use strict";
var prompt = require('prompt-sync')();
var utility = require('../Utility/utility.js');

function deckOfCards()
{
   var cards =[];
    // initialize deck
    var initialdeck = utility.initializeDeck()
    //console.log(initialdeck);
    
    // shuffle
    var seconddeck = utility.shuffle(initialdeck)
    //console.log(seconddeck);

    // print shuffled deck
    var finaldeck = utility.shuffleddeck(seconddeck)
        
         

    var players = prompt('Enter number of players : ');

    var size = parseInt(prompt('Enter number of cards for each player : '));

    let initial = 0;
    let stop = size;

    let result = [];

    for (let index = 1; index <= players; index++) {

        let name = '';

        name = 'player' + index;

        name = [];

        for (let index = initial; index < stop; index++) {

            name.push(finaldeck[index]);
        }
  
        cards.push(name);
        
       console.log('\nCards for player' + index + ' are : ' + name);

        initial = initial + size;

        stop = stop + size;
    } 
    console.log("The  total cards received by the user are : ")
    console.log(cards);     
}
deckOfCards()
module.exports = {


    // initialize deck
    initializeDeck() {
        var suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
        var ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
        var n = suits.length * ranks.length;
        var deck = [];

        for (var i = 0; i < ranks.length; i++) {
            for (var j = 0; j < suits.length; j++) {
                //console.log(deck)
                var finaldeck = deck.push(deck[suits.length * i + j] = ranks[i] + " of " + suits[j])
                //var initialResult = deck[suits.length*i + j] = ranks[i] + " of " + suits[j];
            }
        }
        //console.log(finaldeck);
        return deck;
    },

    shuffle(deck) {
        for (var i = 0; i < deck.length; i++) {
            var r = i + (Math.floor)(Math.random() * (deck.length - i));
            var temp = deck[r];
            deck[r] = deck[i];
            deck[i] = temp;
            //console.log(deck)
        }
        return deck;
    },

    shuffleddeck(deck) {
        for (var i = 0; i < deck.length; i++) {
            //console.log(deck[i] );
        }
        return deck;
    },
}
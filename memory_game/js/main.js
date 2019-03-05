/*
console.log("up and running");
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

//console.log("Use Flipped" + " " + cardOne + " and " + cardThree);
console.log("Use Flipped" + " " + cardOne);
console.log("Use Flipped" + " " + cardThree);
*/

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

/*
	var cardOne = cards[0];
	cardsInPlay.push(cardOne);
	console.log('user flipped ' + cardsInPlay);
	var cardTwo = cards[2];
	cardsInPlay.push(cardTwo);
	console.log('user flipped ' + cardsInPlay[1]);
	if (cardsInPlay.length === 2){
		//console.log('2');
		if (cardsInPlay[0] === cardsInPlay[1]){
			alert("found a match");
		}
			else{
				alert("try again");
			}
		
	}
	else{
		console.log('0');
	}
*/
var checkForMatch = function(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
	console.log("You found a match!");
	} else {
		console.log("Sorry, try again.");
	}
}
var flipCard = function(cardId){
	console.log("user flipped " + cards[cardId]);
	cardsInPlay.push(cardId);
	checkForMatch();
};
flipCard(0);
flipCard(2);
//why is the below not writing values / error
//console.log("cards flipped " + cardsInPlay[]); 












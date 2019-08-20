let rollCounter = 0;
let shotCounter = 0;
let brainsCounter = 0;
let footCounter = 0;
let carriedBrains = 0;
function getRoll(){
	if(confirm("Click for your roll?")){
	rollTheDice();
	console.log("Your total carried Brains for this round is " +carriedBrains)
	if (carriedBrains === 10){
			console.log("you Win!")
			}
	else if (carriedBrains < 10){
		console.log("you lose :( ")
	}	
	}
	else{
		alert("you didn't roll!")
	}
}


function rollDieOne(){
	let threeSidedDice = Math.ceil(Math.random()*3);
	return threeSidedDice;
} 
function rollDieTwo(){
	let fourSidedDice = Math.ceil(Math.random()*4);
	return fourSidedDice;
		}
function rollDieThree(){
 	let sixSidedDice = Math.ceil(Math.random()*6);
	return	sixSidedDice;
}
function rollDieFour(){
	let eightSidedDice = Math.ceil(Math.random()*8);
	return eightSidedDice;
}
function rollDieFive(){
	let tenSidedDice = Math.ceil(Math.random()*10);
	return tenSidedDice;
}
function rollDieSix(){
	let twelveSidedDice = Math.ceil(Math.random()*12);
	return twelveSidedDice;
}
function rollTheDice(){
	let rollOne = counterBrains(rollDieOne());
		let rollTwo = counterBrains(rollDieTwo());
		let rollThree = counterBrains(rollDieThree());
		let rollFour = counterBrains(rollDieFour());
		let rollFive = counterBrains (rollDieFive());
		let rollSix = counterBrains(rollDieSix());
		carriedBrains = brainsCounter - shotCounter;
		return carriedBrains
}
function counterBrains(diceRoll){
	if(diceRoll === 2){
		return	++brainsCounter;
	}
	else if(diceRoll === 5){
		return ++brainsCounter;
	}
	else if (diceRoll === 8){
		return ++brainsCounter;
	}
	else if (diceRoll === 11){
		return ++brainsCounter;
	}
	else if (diceRoll === 3) {
		return ++shotCounter;
	}
	else if (diceRoll === 6){
		return ++shotCounter;
	}
	else if (diceRoll === 9){
		return ++shotCounter;
		}
	else if (diceRoll === 12){
		return ++shotCounter;
		}
	else{
		return ++footCounter;
	}
	}
	
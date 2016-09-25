var pointNumber = 0;
var amountOfPlayers = 0;

function nextShooter(){
	pointNumber = 0;
	if(currentPlay<amountOfPlayers){
		currentPlay = currentPlay +=1;
		
	}else{
		currentPlay = 0;
	}
	displayShooter(currentPlay);
	document.getElementById('roll').style.display='none';
	document.getElementById('rollButton').style.display='none';
}


function RollDice(){
	//roll each die 
	var die1 = Math.floor((Math.random() * 6) + 1);
	var die2 = Math.floor((Math.random() * 6) + 1);
	var roll = die1 + die2;
alert("next");
	document.getElementById('roll').style.display='block';
	document.getElementById('pointNumberbox').style.display='block';
	document.getElementById('roll').innerHTML = roll + " was rolled";
	switch(roll){
		case 2:
		case 3:
		case 12:
			if (pointNumber!=0){
					setTimeout(RollDice,3000);
			}else{
			alert("you lose next round");
			setTimeout(nextShooter,2000);
			}
			//go to next player, next roll
			break;
		case 7:
			if(pointNumber!=0){
				alert("you lose next round");
				setTimeout(nextShooter,2000);
				if (currentPlay == 0){
				//user input
				}else{
					setTimeout(RollDice,3000);
				}					
				//go to current player rolls again
			}else{
				
			}
			break;
		case 11:
			if (currentPlay == 0){
				//user input
			}else{
				setTimeout(RollDice,3000);
			}					
			//go to current player rolls again
				
			break;
		case 4:
		case 5:
		case 6: 
		case 8:
		case 9:
		case 10:
			if (pointNumber == 0){
				pointNumber = roll;
			}else{
				alert("you win");
			}
			document.getElementById('pointNumberbox').innerHTML = "the point number is " + pointNumber;
			//roll again check against point number current roll = point number;
			if (currentPlay == 0){
				//no op click button user input
			}else{
				setTimeout(RollDice,3000);
			}					
			break;
		default:
			break;	
	}
	
}

function displayRollButton(){
	document.getElementById('rollButton').style.display='block';
	
}
function displayShooter(currentPlay){
	if( currentPlay == 0){
		document.getElementById('whoseRolling').style.display='block';
		document.getElementById("whoseRolling").innerHTML="It's your turn to roll.";
		setTimeout(displayRollButton,3000);
		setTimeout(lineBet,2000); 
		//add button to roll then go to swich statement to compare number rolled
	}else{
		document.getElementById('whoseRolling').style.display='block';
		document.getElementById("whoseRolling").innerHTML="It's player "+ currentPlay +" turn to roll";
		 setTimeout(lineBet,2000); 
		 setTimeout(RollDice,5000);
		//run calculation 
		//time delay
		//display what currentPlay rolled
	}
}


function whoseTurnIsIt(amountOfPlayers){
	currentPlay = Math.floor((Math.random() * 6) + 0);
	while(currentPlay>amountOfPlayers){
		currentPlay = Math.floor((Math.random() * 6) + 0);
	}
	displayShooter(currentPlay);
}


function howManyPlayers(){
	amountOfPlayers = Math.floor((Math.random() * 6) + 0);
	if (amountOfPlayers==1){
		document.getElementById('players1').style.display='block';
		document.getElementById('players1').innerHTML="Fantatic! There is " + amountOfPlayers + " player at the table right now.";
		whoseTurnIsIt(amountOfPlayers);
 
	}else{
		document.getElementById('players1').style.display='block';
		document.getElementById('players1').innerHTML="Fantatic! There are " + amountOfPlayers + " players at the table right now.";
		whoseTurnIsIt(amountOfPlayers);
	}

  }
  
  

//Global Variables



// Counters
var pointCounter = 0;
var wins = 0;
var losses = 0;
var totalScore = 0;
var randomTotal;




//Functions
alert("hello");



//Operation



$("#pointCounter").html(pointCounter);
$("#wins").html(wins);
$("#losses").html(losses);
$("#scoreCounter").html(totalScore);

if(pointCounter == randomTotal){
	wins++;
}

if(pointCounter > randomTotal){
	losses++;
}

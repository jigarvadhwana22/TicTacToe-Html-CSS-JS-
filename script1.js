var counter=0;// for checking if all quadrants have been filled but no one has won so it's a draw
var gamePlaying = true;//state variable, if any player has won, the game shud stop
var Player1,Player2;
Player1='X';
Player2='0';

function xIsWinner(){
	    tie=0;	
		document.getElementById('name-0').style.color="red";
		document.getElementById('name-1').style.color="black";
		 document.getElementById("winner").innerHTML = 'Player1 Wins..!!';
	gamePlaying=false;
}

function OisWinner(){
	
	tie=0;
		document.getElementById('name-1').style.color="red";
		document.getElementById('name-0').style.color="black";
		document.getElementById("winner").innerHTML = 'Player2 Wins..!!';
	stopBlink(0);
	gamePlaying=false;
}


function hasAnyoneWon(){

if(gamePlaying){	
	  if(document.getElementById("q0").value=='X' &&
	     document.getElementById("q1").value=='X' &&
	     document.getElementById("q2").value=='X'){
		  
		  	document.getElementById("q0").style.backgroundColor="orange";
		  document.getElementById("q1").style.backgroundColor="orange";
		  document.getElementById("q2").style.backgroundColor="orange";
		  	xIsWinner();
	   
	   }else if(document.getElementById("q3").value=='X' &&
		        document.getElementById("q4").value=='X' &&
		        document.getElementById("q5").value=='X'){ 
		  document.getElementById("q3").style.backgroundColor="orange";
		   document.getElementById("q4").style.backgroundColor="orange";
		   document.getElementById("q5").style.backgroundColor="orange";
		   xIsWinner();
		   
	   }else if(document.getElementById("q6").value=='X' &&
		        document.getElementById("q7").value=='X' &&
	            document.getElementById("q8").value=='X'){
		   
		    document.getElementById("q6").style.backgroundColor="orange";
		   document.getElementById("q7").style.backgroundColor="orange";
		   document.getElementById("q8").style.backgroundColor="orange";
		   
		    xIsWinner();
		   
	   }else if(document.getElementById("q0").value=='X'&&
	            document.getElementById("q4").value=='X'&&
	            document.getElementById("q8").value=='X'){
		   
		    document.getElementById("q0").style.backgroundColor="orange";
		   document.getElementById("q4").style.backgroundColor="orange";
		   document.getElementById("q8").style.backgroundColor="orange";
		    
		   xIsWinner();
		   
	   }else if(document.getElementById("q2").value=='X'&&
	            document.getElementById("q4").value=='X'&&
	            document.getElementById("q6").value=='X'){
		   
		    document.getElementById("q2").style.backgroundColor="orange";
		   document.getElementById("q4").style.backgroundColor="orange";
		   document.getElementById("q6").style.backgroundColor="orange";
		   
		   xIsWinner();
		   
	   }else if(document.getElementById("q0").value=='X' &&
		        document.getElementById("q3").value=='X' &&
		        document.getElementById("q6").value=='X'){
		   
		    document.getElementById("q0").style.backgroundColor="orange";
		   document.getElementById("q3").style.backgroundColor="orange";
		   document.getElementById("q6").style.backgroundColor="orange";
		   xIsWinner();
		   
	   }else if(document.getElementById("q1").value=='X' &&
		        document.getElementById("q4").value=='X' &&
	            document.getElementById("q7").value=='X'){
		   
		    document.getElementById("q1").style.backgroundColor="orange";
		   document.getElementById("q4").style.backgroundColor="orange";
		   document.getElementById("q7").style.backgroundColor="orange";
		   
		   xIsWinner();
		   
	   }else if(document.getElementById("q2").value=='X'&&
	            document.getElementById("q5").value=='X'&&
	            document.getElementById("q8").value=='X'){
		   
		    document.getElementById("q2").style.backgroundColor="orange";
		   document.getElementById("q5").style.backgroundColor="orange";
		   document.getElementById("q8").style.backgroundColor="orange";
		   
		   xIsWinner();
		   
	   }else if(document.getElementById("q0").value=='0' &&
	            document.getElementById("q1").value=='0' &&
	            document.getElementById("q2").value=='0'){
		   
		    document.getElementById("q0").style.backgroundColor="orange";
		   document.getElementById("q1").style.backgroundColor="orange";
		   document.getElementById("q2").style.backgroundColor="orange";
		   OisWinner();
	   
	   }else if(document.getElementById("q3").value=='0' &&
		        document.getElementById("q4").value=='0' &&
		        document.getElementById("q5").value=='0'){ 
		   
		    document.getElementById("q3").style.backgroundColor="orange";
		   document.getElementById("q4").style.backgroundColor="orange";
		   document.getElementById("q5").style.backgroundColor="orange";
		
		   OisWinner();
		   
	   }else if(document.getElementById("q6").value=='0' &&
		        document.getElementById("q7").value=='0' &&
	            document.getElementById("q8").value=='0'){
		   
		    document.getElementById("q6").style.backgroundColor="orange";
		   document.getElementById("q7").style.backgroundColor="orange";
		   document.getElementById("q8").style.backgroundColor="orange";
		   OisWinner();
		   
		   
	   }else if(document.getElementById("q0").value=='0'&&
	            document.getElementById("q4").value=='0'&&
	            document.getElementById("q8").value=='0'){
		   
		    document.getElementById("q0").style.backgroundColor="orange";
		   document.getElementById("q4").style.backgroundColor="orange";
		   document.getElementById("q8").style.backgroundColor="orange";
		   
		   OisWinner();
		   
	   }else if(document.getElementById("q2").value=='0'&&
	            document.getElementById("q4").value=='0'&&
	            document.getElementById("q6").value=='0'){
		   
		    document.getElementById("q2").style.backgroundColor="orange";
		   document.getElementById("q4").style.backgroundColor="orange";
		   document.getElementById("q6").style.backgroundColor="orange";
		   OisWinner();
		   
	   }else if(document.getElementById("q0").value=='0' &&
		        document.getElementById("q3").value=='0' &&
		        document.getElementById("q6").value=='0'){
		   
		    document.getElementById("q0").style.backgroundColor="orange";
		   document.getElementById("q3").style.backgroundColor="orange";
		   document.getElementById("q6").style.backgroundColor="orange";
		   OisWinner();
		   
	   }else if(document.getElementById("q1").value=='0' &&
		        document.getElementById("q4").value=='0' &&
	            document.getElementById("q7").value=='0'){
		   
		    document.getElementById("q1").style.backgroundColor="orange";
		   document.getElementById("q4").style.backgroundColor="orange";
		   document.getElementById("q7").style.backgroundColor="orange";
		   OisWinner();
		   
	   }else if(document.getElementById("q2").value=='0'&&
	            document.getElementById("q5").value=='0'&&
	            document.getElementById("q8").value=='0'){
		   
		    document.getElementById("q2").style.backgroundColor="orange";
		   document.getElementById("q5").style.backgroundColor="orange";
		   document.getElementById("q8").style.backgroundColor="orange";
		   
		   OisWinner();
	   }
	
}//closing gamePlaying braces
/*	winning condns
	[0,1,2],
	[3,4,5],
	[6,7,8],
	[0,4,8],
	[2,4,6],
	[0,3,6],
	[1,4,7],
	[2,5,8]*/
}


var activePlayer,idr;
function blink(curPlyr){
 idr=setInterval(function(){
		 activePlayer = document.getElementById("name-"+curPlyr);
		activePlayer.style.display=(activePlayer.style.display=='none' ?'':'none');
	},500);
}
function stopBlink(curPlyr){
	clearInterval(idr);
	//document.getElementById('name-'+curPlyr).style.color="black";
	
}

var currPlayer = 0;//Player 1 will start
blink(currPlayer);
function play(quad_id){
	if(gamePlaying){
		
		if(currPlayer==0){	
			
			//stopBlink(currPlayer);
			document.getElementById(quad_id).value = "X";
			document.getElementById('name-0').style.color="black";
			document.getElementById('name-1').style.color="red";
			//name-0 black && name-1 red
			stopBlink(currPlayer);
			currPlayer+=1;    
			counter+=1;
			document.getElementById(quad_id).disabled="disable";//so that we cannot override
			hasAnyoneWon();
			blink(currPlayer);	
		}else{
		   
			document.getElementById(quad_id).value = "0";
			stopBlink(currPlayer);
			document.getElementById('name-0').style.color="red";
			document.getElementById('name-1').style.color="black";
			//name-0 red && name-1 black
			currPlayer-=1;
			blink(currPlayer);
			counter+=1;
			document.getElementById(quad_id).disabled="disable";
			hasAnyoneWon();
			
		}		
		if(counter==9)
		{
			document.getElementById("winner").innerHTML = 'Draw..!!';
		}
	}
}

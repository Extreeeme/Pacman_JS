

document.getElementById("pac").onclick = function(){
	document.getElementById("pacman").innerHTML = "";

	////////////////////////////////////////////////LIGNE/////////////////////////////////////////////
	var ligne = "<tr>";
	for(var i=0; i<14; i++){
		if(i>=6 && i<=8){
			ligne += "<div id='noir'><td></td></div>";
		}
		else {
			ligne +="<div id='blanc'><td></td></div>";
		}
	}

	ligne += "</tr>";
	document.getElementById("pacman").innerHTML += ligne;

	////////////////////////////////////////////////LIGNE/////////////////////////////////////////////

	ligne = "<tr>";
	for(var i=0; i<14; i++){
		if(i>=4 && i<=5 || i>=9 && i<=10){
			ligne += "<div id='noir'><td></td></div>";
		}
		else if (i>=6 && i<=8){
			ligne += "<div id='jaune'><td></td></div>";
		}
		else {
			ligne +="<div id='blanc'><td></td></div>";
		}
	}

	ligne += "</tr>";
	document.getElementById("pacman").innerHTML += ligne;

	////////////////////////////////////////////////LIGNE/////////////////////////////////////////////

	ligne = "<tr>";
	for(var i=0; i<14; i++){
		if(i==3 || i==11){
			ligne += "<div id='noir'><td></td></div>";
		}
		else if (i>3 && i<11){
			ligne += "<div id='jaune'><td></td></div>";
		}
		else {
			ligne +="<div id='blanc'><td></td></div>";
		}
	}

	ligne += "</tr>";
	document.getElementById("pacman").innerHTML += ligne;

	////////////////////////////////////////////////LIGNE/////////////////////////////////////////////

	ligne = "<tr>";
	for(var i=0; i<14; i++){
		if(i==2 || i==12){
			ligne += "<div id='noir'><td></td></div>";
		}
		else if (i>2 && i<12){
			ligne += "<div id='jaune'><td></td></div>";
		}
		else {
			ligne +="<div id='blanc'><td></td></div>";
		}
	}

	ligne += "</tr>";
	document.getElementById("pacman").innerHTML += ligne;

	////////////////////////////////////////////////LIGNE/////////////////////////////////////////////

	ligne = "<tr>";
	for(var i=0; i<14; i++){
		if(i==1 || i==7 || i==13){
			ligne += "<div id='noir'><td></td></div>";
		}
		else if (i>1 && i<13){
			ligne += "<div id='jaune'><td></td></div>";
		}
		else {
			ligne +="<div id='blanc'><td></td></div>";
		}
	}

	ligne += "</tr>";
	document.getElementById("pacman").innerHTML += ligne;

	////////////////////////////////////////////////LIGNE/////////////////////////////////////////////

	ligne = "<tr>";
	for(var i=0; i<14; i++){
		if(i==1 || i==11 || i==12){
			ligne += "<div id='noir'><td></td></div>";
		}
		else if (i>1 && i<12){
			ligne += "<div id='jaune'><td></td></div>";
		}
		else {
			ligne +="<div id='blanc'><td></td></div>";
		}
	}

	ligne += "</tr>";
	document.getElementById("pacman").innerHTML += ligne;

	////////////////////////////////////////////////LIGNE/////////////////////////////////////////////

	ligne = "<tr>";
	for(var i=0; i<14; i++){
		if(i==0 || i>=8 && i<=10){
			ligne += "<div id='noir'><td></td></div>";
		}
		else if (i>0 && i<10){
			ligne += "<div id='jaune'><td></td></div>";
		}
		else {
			ligne +="<div id='blanc'><td></td></div>";
		}
	}

	ligne += "</tr>";
	document.getElementById("pacman").innerHTML += ligne;

	////////////////////////////////////////////////LIGNE/////////////////////////////////////////////

	ligne = "<tr>";
	for(var i=0; i<14; i++){
		if(i==0 || i>=6 && i<=7){
			ligne += "<div id='noir'><td></td></div>";
		}
		else if (i>0 && i<7){
			ligne += "<div id='jaune'><td></td></div>";
		}
		else {
			ligne +="<div id='blanc'><td></td></div>";
		}
	}

	ligne += "</tr>";
	document.getElementById("pacman").innerHTML += ligne;

	////////////////////////////////////////////////LIGNE/////////////////////////////////////////////

	ligne = "<tr>";
	for(var i=0; i<14; i++){
		if(i==0 || i>=8 && i<=10){
			ligne += "<div id='noir'><td></td></div>";
		}
		else if (i>0 && i<10){
			ligne += "<div id='jaune'><td></td></div>";
		}
		else {
			ligne +="<div id='blanc'><td></td></div>";
		}
	}

	ligne += "</tr>";
	document.getElementById("pacman").innerHTML += ligne;

	////////////////////////////////////////////////LIGNE/////////////////////////////////////////////

	ligne = "<tr>";
	for(var i=0; i<14; i++){
		if(i==1 || i==11 || i==12){
			ligne += "<div id='noir'><td></td></div>";
		}
		else if (i>1 && i<12){
			ligne += "<div id='jaune'><td></td></div>";
		}
		else {
			ligne +="<div id='blanc'><td></td></div>";
		}
	}

	ligne += "</tr>";
	document.getElementById("pacman").innerHTML += ligne;

	////////////////////////////////////////////////LIGNE/////////////////////////////////////////////

	ligne = "<tr>";
	for(var i=0; i<14; i++){
		if(i==1 || i==13){
			ligne += "<div id='noir'><td></td></div>";
		}
		else if (i>1 && i<13){
			ligne += "<div id='jaune'><td></td></div>";
		}
		else {
			ligne +="<div id='blanc'><td></td></div>";
		}
	}

	ligne += "</tr>";
	document.getElementById("pacman").innerHTML += ligne;

	////////////////////////////////////////////////LIGNE/////////////////////////////////////////////

	ligne = "<tr>";
	for(var i=0; i<14; i++){
		if(i==2 || i==12){
			ligne += "<div id='noir'><td></td></div>";
		}
		else if (i>2 && i<12){
			ligne += "<div id='jaune'><td></td></div>";
		}
		else {
			ligne +="<div id='blanc'><td></td></div>";
		}
	}

	ligne += "</tr>";
	document.getElementById("pacman").innerHTML += ligne;

	////////////////////////////////////////////////LIGNE/////////////////////////////////////////////

	ligne = "<tr>";
	for(var i=0; i<14; i++){
		if(i==3 || i==11){
			ligne += "<div id='noir'><td></td></div>";
		}
		else if (i>3&& i<11){
			ligne += "<div id='jaune'><td></td></div>";
		}
		else {
			ligne +="<div id='blanc'><td></td></div>";
		}
	}

	ligne += "</tr>";
	document.getElementById("pacman").innerHTML += ligne;

	////////////////////////////////////////////////LIGNE/////////////////////////////////////////////

	ligne = "<tr>";
	for(var i=0; i<14; i++){
		if(i>=4 && i<=5 || i>=9 && i<=10){
			ligne += "<div id='noir'><td></td></div>";
		}
		else if (i>4 && i<10){
			ligne += "<div id='jaune'><td></td></div>";
		}
		else {
			ligne +="<div id='blanc'><td></td></div>";
		}
	}

	ligne += "</tr>";
	document.getElementById("pacman").innerHTML += ligne;

	////////////////////////////////////////////////LIGNE/////////////////////////////////////////////
	var ligne = "<tr>";
	for(var i=0; i<14; i++){
		if(i>=6 && i<=8){
			ligne += "<div id='noir'><td></td></div>";
		}
		else {
			ligne +="<div id='blanc'><td></td></div>";
		}
	}

	ligne += "</tr>";
	document.getElementById("pacman").innerHTML += ligne;


}
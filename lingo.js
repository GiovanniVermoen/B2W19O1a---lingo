var lingocontainer = document.getElementById("lingo");
var checkBtn = document.getElementById("check");
var lingoWord = words[Math.floor(words.length * Math.random())];
var lingoWordSplits = lingoWord.split("");

for (var i = 1; i <= 5; i++){
	for (var j = 1; j <=5; j++){
		var element = document.createElement("input");
		element.id = "r" + i + "c" + j;
		element.maxLength = 1;
		lingocontainer.appendChild(element);
		document.getElementById("r1c1").value = lingoWord [i-5];
	}
}

var rij = 1;

function check(){
	var gok = "";
	var gokSplit = [];
	var lingoWordTemp = lingoWord.split("");


	for (var i = 1; i <= 5; i++){
		console.log("r" + rij + "c" + i)
		var element = document.getElementById("r" + rij + "c" + i);
		var letter = element.value;

		gok += letter;

		if (letter === lingoWordSplits[i-1]){
			element.style.backgroundColor = "red";
			gokSplit.push(false);
			lingoWordTemp[i-1] = true;
		}else{
			gokSplit.push(letter);
		}

	}

	if (gok === lingoWord){
		alert("Gefeliciteerd je hebt het woord geraden!!!");
	}

	for (var i = 0; i < 5; i++){
		var element = document.getElementById("r" + rij + "c" + (i+1));
		var letter = gokSplit[i];
		var pos = lingoWordTemp.indexOf(letter);

		if (pos > -1){
			element.style.backgroundColor = "Yellow";
			lingoWordTemp[pos] = true;
		}
	}

	rij++;

	if(rij > 5){
		alert("Je hebt het helaas niet gehaald het woord wat je had moeten invullen was: " + lingoWord)

	}
}

checkBtn.onclick = check;

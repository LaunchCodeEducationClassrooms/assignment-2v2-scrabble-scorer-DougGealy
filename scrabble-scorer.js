// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");
let userWord = "";
let userChoice = "";
let items = "";

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(userWord) {
	userWord = userWord.toUpperCase();
	let letterPoints = "";
  let totalPoints = 0;
 
	for (let i = 0; i < userWord.length; i++) {
    //loops over the word for each letter
	  //for (const pointValue in oldPointStructure) {
      //goes over each KEY in oldPointStructure once and follows instructions below
      // line 19+ line 21 goes over each KEY in object once for each letter in word entered
		 if (oldPointStructure[pointValue].includes(userWord[i])) {
			// if the KEY (number) in oldPointStructure object includes the letter of the word we're looking at in the outer loop then do: 
      letterPoints += `Points for '${userWord[i]}': ${pointValue}\n`
      totalPoints += Number(pointValue);
      //totalPoints += 
      //add the text above "Points for ${lettr of word} : ${KEY (number that equals points)}"
		 }
 
	  }
	
  console.log(letterPoints);
	return totalPoints;
 };

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
  console.log("Let's play some scrabble!\n")
  userWord = input.question("Enter a word to score: ");
};

function simpleScoreOne(userWord) {
  	userWord = userWord.toUpperCase();
	let letterPoints = "";
  let totalPoints = 0;
 
	for (let i = 0; i < userWord.length; i++) {
    //loops over the word for each letter
	  for (const pointValue in simpleScore) {
      //goes over each KEY in oldPointStructure once and follows instructions below
      // line 19+ line 21 goes over each KEY in object once for each letter in word entered
		 if (simpleScore[pointValue].includes(userWord[i])) {
			// if the KEY (number) in oldPointStructure object includes the letter of the word we're looking at in the outer loop then do: 
      letterPoints += `Points for '${userWord[i]}': ${pointValue}\n`
      totalPoints += Number(pointValue);
      //add the text above "Points for ${lettr of word} : ${KEY (number that equals points)}"
      
		 }
 
	  }
	}
  //console.log(letterPoints);
	return totalPoints;
};

let simpleScore = {
    1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T','D', 'G', 'B', 'C', 'M', 'P', 'F', 'H', 'V', 'W', 'Y', 'K', 'J', 'X', 'Q', 'Z']
};
function vowelBonusScoreOne(userWord) {
  userWord = userWord.toUpperCase();
	let letterPoints = "";
  let totalPoints = 0;
 
	for (let i = 0; i < userWord.length; i++) {
    //loops over the word for each letter
	  for (const pointValue in vowelBonusScore) {
      //goes over each KEY in oldPointStructure once and follows instructions below
      // line 19+ line 21 goes over each KEY in object once for each letter in word entered
		 if (vowelBonusScore[pointValue].includes(userWord[i])) {
			// if the KEY (number) in oldPointStructure object includes the letter of the word we're looking at in the outer loop then do: 
      letterPoints += `Score for '${userWord[i]}': ${pointValue}\n`
      totalPoints += Number(pointValue);
      //add the text above "Points for ${lettr of word} : ${KEY (number that equals points)}"
      //letterPoints += `Score for '${word[i]}': ${pointValue}\n`
		 //let letter = word[i];
      //letterPoints += vowelBonusScore[letter];
     }
 
	  }
	}
  //console.log(letterPoints);
	return totalPoints;
};

let vowelBonusScore = {
  1: ['L', 'N', 'R', 'S', 'T', 'D', 'G', 'B', 'C', 'M', 'P', 'F', 'H', 'V', 'W', 'Y', 'K', 'J', 'X', 'Q', 'Z'],
  3: ['A', 'E', 'I', 'O', 'U'],

};

function scrabbleScore(userWord) {
  userWord = userWord.toLowerCase();
	let letterPoints = 0;
 
	for (let i = 0; i < userWord.length; i++) {
    //loops over the word for each letter
	  //for (const letterKey in newPointStructure) {
      //goes over each KEY in oldPointStructure once and follows instructions below
      // line 19+ line 21 goes over each KEY in object once for each letter in word entered
      let letter = userWord[i];
		 //if (newPointStructure[letterKey] = (word[i])) {
			// if the KEY (number) in oldPointStructure object includes the letter of the word we're looking at in the outer loop then do: 
      letterPoints += newPointStructure[letter];
      //letterPoints += `Points for '${word[i]}': ${pointValue}\n`
      //add the text above "Points for ${lettr of word} : ${KEY (number that equals points)}"
		 //}
 
	  //}
	}
  //console.log(letterPoints);
	return letterPoints;
};

const scoringAlgorithms = [];
let simpleScoreObject = {
  name: "0 - Simple:",
  description: "Each letter is worth 1 point.",
  scoringFunction: simpleScoreOne,
}

let bonusVowelObject = {
  name: "1 - Bonus Vowels:",
  description: "Vowels are 3 pts, consonants are 1 pt.",
  scoringFunction: vowelBonusScoreOne,
}

let scrabbleObject = {
  name: "2 - Scrabble:",
  description: "Uses scrabble point system.",
  scoringFunction: scrabbleScore,
}

scoringAlgorithms.push(simpleScoreObject, bonusVowelObject, scrabbleObject);
//console.log(scoringAlgorithms);
//scoringAlgorithms.push(scrabbleScore, simpleScore, vowelBonusScore);
function scorerPrompt() {
  console.log("Which scoring algorithm would you like to use?\n");
  console.log(scoringAlgorithms[0].name, scoringAlgorithms[0].description);
  console.log(scoringAlgorithms[1].name, scoringAlgorithms[1].description);
  console.log(scoringAlgorithms[2].name, scoringAlgorithms[2].description);
  //console.log("0 - Simple: One point per character\n" + "1 - Vowel Bonus: Vowels are worth 3 points\n" + "2 - Scrabble: Uses scrabble point system");
  userChoice = input.question("Enter 0, 1, or 2: ");
  if (userChoice == 0) {
    //console.log("algorithm name: ", scoringAlgorithms[0].name);
    console.log( "Score for", "'" + userWord + "'" + ": " + scoringAlgorithms[0].scoringFunction(userWord)); 
  } else if (userChoice == 1) {
    //console.log("algorithm name: ", scoringAlgorithms[1].name);
    console.log( "Score for", "'" + userWord + "'" + ": " + scoringAlgorithms[1].scoringFunction(userWord)); 
  } else if (userChoice == 2) {
    //console.log("algorithm name: ", scoringAlgorithms[2].name);
    console.log( "Score for", "'" + userWord + "'" + ": " + scoringAlgorithms[2].scoringFunction(userWord));
  }
  "Score for", "'" + userWord + "'" + ":"
};

function transform(oldPointStructure) {
  for (items in oldPointStructure) {
    for (i = 0; i < oldPointStructure['1'].length; i++) {
      oldPointStructure[oldPointStructure['1'][i].toLowerCase()] = 1;
    }
    for (i = 0; i < oldPointStructure['2'].length; i++) {
      oldPointStructure[oldPointStructure['2'][i].toLowerCase()] = 2; 
    }
    for (i = 0; i < oldPointStructure['3'].length; i++) {
      oldPointStructure[oldPointStructure['3'][i].toLowerCase()] = 3;
    }
    for (i = 0; i < oldPointStructure['4'].length; i++) {
      oldPointStructure[oldPointStructure['4'][i].toLowerCase()] = 4;
    }
    for (i = 0; i < oldPointStructure['8'].length; i++) {
      oldPointStructure[oldPointStructure['8'][i].toLowerCase()] = 5;
    }
    for (i = 0; i < oldPointStructure['8'].length; i++) {
      oldPointStructure[oldPointStructure['8'][i].toLowerCase()] = 8;
    }
    for (i = 0; i < oldPointStructure['10'].length; i++) {
      oldPointStructure[oldPointStructure['10'][i].toLowerCase()] = 10;
    }
  }
  delete oldPointStructure['1'];
  delete oldPointStructure['2'];
  delete oldPointStructure['3'];
  delete oldPointStructure['4'];
  delete oldPointStructure['5']
  delete oldPointStructure['8'];
  delete oldPointStructure['10'];
  return oldPointStructure
};




//console.log("Letters with score '4':", oldPointStructure['4']);
//console.log("3rd letter within the key '4' array:", oldPointStructure['4'][2]);

//let letters = oldPointStructure['8'];
//console.log("Letters with score '8':", letters);
//console.log("2nd letter within the key '8' array:", letters[1]);


//output:
//Letters with score '4': [ 'F', 'H', 'V', 'W', 'Y' ]
//3rd letter within the key '4' array: V

//Letters with score '8': [ 'J', 'X' ]
//2nd letter within the key '8' array: X


let newPointStructure = transform(oldPointStructure);

//console.log("Scrabble scoring values for");
//console.log("letter a: ", newPointStructure.a);
//console.log("letter j: ", newPointStructure.j);
//console.log("letter z: ", newPointStructure["z"]);
function runProgram() {
  // THIS IS WHAT OUR PROGRAM WILL DO WHEN WE RUN IT!
   initialPrompt();
   scorerPrompt();
   //simpleScore1(userWord);
   //vowelBonusScore1(userWord);
   //oldScrabbleScorer(userWord);
   //we're running this function ON the word stored in userWord;
   //console.log(newPointStructure);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};


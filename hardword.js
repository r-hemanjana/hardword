import promptSync from 'prompt-sync';
const prompt = promptSync();
import words from "an-array-of-english-words" assert { type: "json" };

const isHardWord = (eachWord) => {
    if (eachWord.length != 4) return false;
    if ((new Set(eachWord)).size != 4) return false;

    return true;
}

const hardwords = words.filter(isHardWord);
const randomIndex = Math.floor(Math.random() * hardwords.length);
const todayWord = hardwords[randomIndex];
const trialCount = 6;



export const guessWord = () => {

    for (let i = 0; i < trialCount; i++) { 
        const userInput = prompt("Enter your guess: ")
        if (userInput === todayWord) {
            console.log("Congratulations! You guessed the correct word.");
            return;
        } else {
            let matchedLetter = 0;
            let differentPosition = 0;

            const wordArray = todayWord.split('');
            const inputArray = userInput.split('');

            for (let j = 0; j < inputArray.length; j++) {
                if (inputArray[j] === wordArray[j]) {
                    matchedLetter++;
                }
                else if (wordArray.includes(inputArray[j])) {
                    differentPosition++;
                }
            }
            console.log(`Wrong, ${matchedLetter} letters matched, ${differentPosition} letter matched but in different position.`);
        }
    } 
    console.log(`Sorry, you've used all your trials. The correct word was: ${todayWord}`);
    return;

}

guessWord();

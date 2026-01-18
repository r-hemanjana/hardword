import promptSync from 'prompt-sync';
const prompt = promptSync();

let listOfWords = [
    "save",
    "date",
    "rope",
    "nest",
    "love",
    "time",
    "fire",
    "lost",
    "mile",
    "hope",
    "wind",
    "vibe",
    "like",
    "okay",
    "dark",
    "dust",
    "lamp",
    "wave",
    "star",
    "rock"
];

const randomIndex = Math.floor(Math.random() * listOfWords.length);
const todayWord = listOfWords[randomIndex];
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

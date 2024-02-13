function play(){
    hideSectionById('home-page');
    showSectionById('play-ground');
    continueGame();
    // getARandomAlphabet();
};

function hideSectionById(element){
    const hideSection = document.getElementById(element);
    hideSection.classList.add('hidden');
};

function showSectionById(element){
    const showSection = document.getElementById(element);
    showSection.classList.remove('hidden');
    
};

/*____________________________________________________*/

function continueGame(){
    // step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('Your random Alphabet',alphabet);

    // set randomly generated alphabet to the display (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet.toUpperCase();

    // set background color
    setBackgroundColorById(alphabet);
};

function getARandomAlphabet(){
    // get or create Alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('')
    // console.log(alphabets);

    // get a random index between 0 to 25
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    
    const alphabet = alphabets[index];
    // console.log(index, alphabet);
    return alphabet;
};

function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-500');
}
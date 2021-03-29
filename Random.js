

//Random Number
const randomButton = document.getElementById('Random');
randomButton.addEventListener('click', randomNumber);

const randomEventButton = document.getElementById('RandomEvent');
randomEventButton.addEventListener('click', randomEvent);

//Textbox User Input
const textBoxButton = document.getElementById('TextBox');
textBoxButton.addEventListener('click', textBoxChange);

//HTML element change
const fontButton = document.getElementById('Comic');
fontButton.addEventListener('click', fontChange);

//Use Random number generator to change elements within certain ranges
function randomNumber() {
    var x = document.getElementById("Display")
    x.innerHTML = Math.floor((Math.random() * 100) + 1);
}

function fontChange() {
    var fonts = ['Comic Sans MS', 'Brush Script MT', 'Times New Roman'];
    var x = document.getElementById('Display2')

    fontNumber = Math.floor((Math.random() * fonts.length));
    x.innerHTML = 'Slaw is the LAW! in ' + fonts[fontNumber];
    document.getElementById('Display2').style.fontFamily = fonts[fontNumber];
}

//Use Random number generator to change elements within certain ranges
function randomEvent() {
    var x = document.getElementById("Display3")
    var y = document.getElementById("Output")
    x.innerHTML = Math.floor((Math.random() * 100) + 1);

    //String placeholders
    if (x.innerHTML >= 0)
    {
        y.innerHTML = 'Under 25';
    } 
    if (x.innerHTML >= 25) {

        y.innerHTML = "Over 25"
    }
    if (x.innerHTML >= 50) {

        y.innerHTML = "Over 50"
    }
    if (x.innerHTML >= 75) {

        y.innerHTML = "Over 75"
    }

}

//User input string into Textbox
function textBoxChange() {
    var x = document.getElementById("Display4");

    if (document.getElementById("myText").value == "")
    {
        x.innerHTML = "Please enter a name!"
    }
    else if (document.getElementById("myText").value == "Jason Bourne") {
        x.innerHTML = "Oh... I guess you do know your name."
    }
    else{
        x.innerHTML = "No! Your name isn't " + document.getElementById("myText").value + "!" + " It's Jason Bourne!"
    }
}
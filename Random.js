

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
    document.getElementById('Display2').style.fontFamily = fonts[fontNumber];
    x.innerHTML = 'Slaw is the LAW! in ' + fonts[fontNumber];
    
}

//Use Random number generator to change elements within certain ranges
function randomEvent() {

    //Arrays
    var backgrounds = ['Background2', 'Background3', 'Background4', 'Background5'];
    var headers = ['Header1', 'Header2', 'Header3', 'Header4'];
    var colors = ['red', 'blue', 'green', 'yellow'];

    //Math
    backgroundsRandom = Math.floor((Math.random() * backgrounds.length));
    headerNumber = Math.floor((Math.random() * headers.length));
    color = Math.floor((Math.random() * colors.length));

    //Random number output
    var a = document.getElementById("Display3")

    a.innerHTML = Math.floor((Math.random() * 100) + 1);
    /*
    var b = document.getElementById("Header1")
    var c = document.getElementById("Header2")
    var d = document.getElementById("Header3")
    var e = document.getElementById("Header4")
    */
    
    

    //Parameters
    if (a.innerHTML >= 0)
    {
        document.getElementById(headers[headerNumber]).style.color = colors[color];
    } 
    if (a.innerHTML >= 25) {

        document.getElementById(backgrounds[backgroundsRandom]).style.backgroundColor = colors[color];
    }
    if (a.innerHTML >= 50) {

        document.getElementById(headers[headerNumber]).style.borderColor = colors[color];
    }
    if (a.innerHTML >= 75) {

        document.getElementById(headers[headerNumber]).style.color=colors[color];
    }

}

//User input string into Textbox
function textBoxChange() {
    var x = document.getElementById("Display4");
    var y = document.getElementById("myText").value;

    if (y == "")
    {
        x.innerHTML = "Please enter a name!"
    }
    else if (y == "no") {
        x.innerHTML = "Rude..."
    }
    else if (y == "No") {
        x.innerHTML = "Rude..."
    }
    else if (y == "Jason Bourne") {
        x.innerHTML = "Oh... I guess you do know your name."
    }
    else if (y == "jason bourne") {
        x.innerHTML = "Oh... I guess you do know your name."
    }
    else{
        x.innerHTML = "No! Your name isn't " + y + "!" + " It's Jason Bourne!";
    }
}
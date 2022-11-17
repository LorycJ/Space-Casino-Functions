function displayWelcome() {
    document.write("<h2>Welcome to Canto Bight");
}

function displayInstructions() {
    document.write("<br/><p>This is how you play...</p><br/><br/>");
}

function play() {
    var die1 = Math.ceil(Math.random() * 6);
    var die2 = Math.ceil(Math.random() * 6);

    var sum = die1 + die2
    document.write("Die 1 = " + die1)
    document.write("<br/>")
    document.write("Die 2 = " + die2)
    document.write("<br/>")
    document.write("Sum = " + sum)
    document.write("<br/>")
    if (sum == 7 || sum == 11) {
        document.write("<h2/>You lose Cadet!!")
        document.write("<br/>")
    }
    else if (die1 == die2 && die1 % 2 == 0){
        document.write("<h1/>DOUBLES - YOU WIN RANGER!!")
        document.write("<br/>")
    }
    else {
        document.write("<h2/>Roll again Space Cadet!")
        document.write("<br/>")
    }
}
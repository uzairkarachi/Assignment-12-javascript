// 1. Create a simple Hat-Tail program using with Math.random() method.
var randomNumber = Math.random();
if (randomNumber < 0.5) {
    console.log("Heads");
}
else {
    console.log("Tails");
}




// 2. Create a simple Dice roll program using with 
// Math.random() method.
var diceRoll = Math.floor(Math.random() * 6) + 1;
console.log("You rolled a ".concat(diceRoll));

// 3. Create a simple random password generator for length of password is 10.1. Create a simple Hat-Tail program using with Math.random() method.
var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@_$-?&';
var password = '';
for (var i = 0; i < 10; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
}
console.log("Random password: " + (password));
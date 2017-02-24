const Game = require("./game.js");

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const game = new Game(reader, completionCallback);
game.run();

function completionCallback() {
  reader.question("Do you want to play again?", function(ans) {
    if (ans === 'yes') {
      const newGame = new Game(reader, completionCallback);
      newGame.run();
    } else {
      reader.close();
    }
  });
}

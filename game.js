class Game {

  constructor(reader, completionCallback) {
    this.reader = reader;
    this.completionCallback = completionCallback;
    this.stack = [[1,2,3],[],[]];
  }

  promptMove(callback) {
    console.log(this.stack);
    const myReader = this.reader;
    myReader.question("Where do you want to move the disc from?", function(moveFrom_str) {
      myReader.question("Where do you want to move the disc to?", function(moveTo_str) {
        const moveFrom = parseInt(moveFrom_str);
        const moveTo = parseInt(moveTo_str);

        callback(moveFrom, moveTo);
      });
    });
  }

  isValidMove(moveFrom, moveTo) {
    if (this.stack[moveFrom].length) {
      if(this.stack[moveTo].length < 1 || this.stack[moveFrom][0] < this.stack[moveTo][0]) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  move(moveFrom, moveTo)  {
    if (this.isValidMove(moveFrom, moveTo)) {
      this.stack[moveTo].unshift(this.stack[moveFrom].shift());
      return true;
    }
    else {
      console.log("Invalid move");
      return false;
    }
  }

  print() {
    console.log(JSON.stringify(this.stack));
  }

  isWon() {
    if (!this.stack[0].length && (this.stack[1].length === 3 || this.stack[2].length === 3)) {
      return true;
    }
    else {
      return false;
    }
  }

  run() {
    this.promptMove((x,y) => {
      this.move(x,y);
      if (this.isWon()) {
        console.log("You win!");
        this.completionCallback();
      }
      else {
        this.run();
      }
    });
  }


}

module.exports = Game;

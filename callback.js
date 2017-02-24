class Clock {
  constructor() {
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.
    const date = new Date();
    this.hour = date.getHours();
    this.min = date.getMinutes();
    this.sec = date.getSeconds();
    this.printTime();
    setInterval( () => { this._tick(); } , 1000);
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    console.log(`${this.hour}:${this.min}:${this.sec}`);
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
    this.sec += 1;
    this.printTime();
  }
}

// const clock = new Clock();
//
// const readline = require('readline');
//
// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
//
// function addNumber(sum, numsLeft, completionCallback) {
//   if (numsLeft > 0) {
//     reader.question("Enter a number", function(answer) {
//       const num = parseInt(answer);
//       sum += num;
//       console.log(`Sum is ${sum}`);
//       numsLeft -= 1;
//       addNumber(sum, numsLeft, completionCallback);
//     });
//   } else if (numsLeft === 0) {
//     completionCallback(sum);
//     reader.close();
//   }
// }

// addNumber(0, 3, sum => console.log(`Total Sum: ${sum}`));


// absurdBubbleSort(arr, sortCompletionCallback)

// function askIfGreaterThan(el1, el2, callback) {
//   reader.question(`Is ${el1} greater than ${el2}?`, function(answer) {
//     if (answer === 'yes') {
//       callback(true);
//     }
//     else {
//       callback(false);
//     }
//   });
// }
//
// function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
//   if (i < arr.length - 1) {
//
//     askIfGreaterThan(arr[i], arr[i+1], (isGreaterThan) => {
//       if (isGreaterThan) {
//         const temp =  arr[i];
//         arr[i] = arr[i+1];
//         arr[i+1] = temp;
//         madeAnySwaps = true;
//         innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
//       } else {
//         innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
//       }
//     });
//   }
//   else if (i === arr.length - 1) {
//     outerBubbleSortLoop(madeAnySwaps);
//   }
// }
//
// function absurdBubbleSort(arr, sortCompletionCallback) {
//   function outerBubbleSortLoop(madeAnySwaps) {
//     if (madeAnySwaps) {
//       innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
//     }
//     else {
//       sortCompletionCallback(arr);
//     }
//   }
//   outerBubbleSortLoop(true);
// }

// absurdBubbleSort([3, 2, 1], function (arr) {
//   console.log("Sorted array: " + JSON.stringify(arr));
//   reader.close();
// });

Function.prototype.myBind = function(context) {
  return () => {this.apply(context);} ;
};


class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

const turnOn = function() {
   console.log("Turning on " + this.name);
};

const lamp = new Lamp();

// turnOn(); // should not work the way we want it to

const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);

boundTurnOn(); // should say "Turning on a lamp"
myBoundTurnOn(); // should say "Turning on a lamp"

/* 1. makeCounter below is a decorator function which creates and returns a function that
increments a counter.
a) Create a second counter counter2 using the makeCounter function and test to see if
it remains independent to counter1
b) Modify makeCounter so that it takes an argument startFrom specifying where the
counter starts from (instead of always starting from 0)
c) Modify makeCounter to take another argument incrementBy, which specifies how
much each call to counter() should increase the counter value by. */
function makeCounter(startingNumber, incrementBy) {
  let currentCount = startingNumber;
  return function () {
    currentCount+=incrementBy;
    console.log(currentCount);
    return currentCount;
  };
}
let counter1 = makeCounter(5, 3);
let counter2 = makeCounter(3, 7);
counter1(); // 1
counter1(); // 2
counter2();
counter2();
counter2();

/* 2. The following delayMsg function is intended to be used to delay printing a message until
some time has passed.
a) What order will the four tests below print in? Why? #4, #3 then #2, #1 in the last. 
b) Rewrite delayMsg as an arrow function
c) Add a fifth test which uses a large delay time (greater than 10 seconds)
d) Use clearTimeout to prevent the fifth test from printing at all. */
function delayMsg(msg) {
  console.log(`This message will be printed after a delay: ${msg}`);
}

const delayMsg2 = (msg) => {
    console.log(`This message will be printed after a delay: ${msg}`);
}

setTimeout(delayMsg2, 100, "#1: Delayed by 100ms");
setTimeout(delayMsg2, 20, "#2: Delayed by 20ms");
setTimeout(delayMsg2, 0, "#3: Delayed by 0ms");
delayMsg2("#4: Not delayed at all");
const fifthTest = setTimeout(delayMsg2, 10000, "#5: Delayed by 10000ms");
clearTimeout(fifthTest);



/* 3. 'Debouncing' is a concept that refers to 'putting off' the execution of multiple, fast-timed,
similar requests until there's a brief pause, then only executing the most recent of those
requests. See https://www.techtarget.com/whatis/definition/debouncing
It's often used to handle fast-firing scrolling events in a browser, or to prevent multiple server
requests being initiated if a user clicks repeatedly on a button.
Using the following code to test and start with:
a) Create a debounce(func) decorator, which is a wrapper that takes a function func and
suspends calls to func until there's 1000 milliseconds of inactivity. After this 1 second
pause, the most recent call to func should be executed and any others ignored.
b) Extend the debounce decorator function to take a second argument ms, which defines the
length of the period of inactivity instead of hardcoding to 1000ms
c) Extend debounce to allow the original debounced function printMe to take an argument
msg which is included in the console.log statement. */
function printMe(msg) {
    console.log(msg);
  }

function debounce(func) {
    let timeOut;
    return function () {
        clearTimeout(timeOut);
        timeOut = setTimeout(func, 1000);
    };
}

function debounce2(func, ms) {
    let timeOut;
    return function () {
        clearTimeout(timeOut);
        timeOut = setTimeout(func, ms);
    };
}

function debounce3(func, ms) {
    let timeOut;
    return function (msg) {
        clearTimeout(timeOut);
        timeOut = setTimeout(func, ms, msg);
    }

}

    //printMe = debounce(printMe); //create this debounce function for a)
  //fire off 3 calls to printMe within 300ms - only the LAST one should print, after
  /* 1000ms of no calls */
    printMe = debounce3(printMe, 5000);


/*   setTimeout(printMe, 100, "test1");
  setTimeout(printMe, 200, "test2");
  setTimeout(printMe, 300, "test3"); */
  
  /* 4. The Fibonacci sequence of numbers is a famous pattern where the next number in the
  sequence is the sum of the previous 2.
  e.g. 1, 1, 2, 3, 5, 8, 13, 21, 34, etc.
  a) Write a function printFibonacci() using setInterval that outputs a number in
  the Fibonacci sequence every second.
  b) Write a new version printFibonacciTimeouts() that uses nested setTimeout
  calls to do the same thing
  c) Extend one of the above functions to accept a limit argument, which tells it how many
  numbers to print before stopping. */

/*   function printFibonacci() {
    let fibonacciNum1 = 1;
    let fibonacciNum2 = 1;
    console.log(fibonacciNum1, fibonacciNum2);
    setInterval(function fibonacciSequence(){
        let next = fibonacciNum1 + fibonacciNum2;
        fibonacciNum1 = fibonacciNum2;
        fibonacciNum2 = next;
        console.log(fibonacciNum1, fibonacciNum2);
    }, 1000);
  } */

/*   function printFibonacciTimeouts() {
    let [fibonacciNum1, fibonacciNum2] = [1, 1];
    console.log(fibonacciNum1, fibonacciNum2);
    setTimeout(function fibonacciSequence(fibonacciNum1, fibonacciNum2){
        let next = fibonacciNum1 + fibonacciNum2;
        fibonacciNum1 = fibonacciNum2;
        fibonacciNum2 = next; 
        setTimeout(fibonacciSequence, 1000, fibonacciNum2, next);
    }, 1000, fibonacciNum1, fibonacciNum2);
  } 
  */

  function printFibonacciTimeouts() {
    let [fibonacciNum1, fibonacciNum2] = [1, 1]
    console.log(fibonacciNum1)
    console.log(fibonacciNum2)
    setTimeout(function printNext(fibonacciNum1, fibonacciNum2) {
    let next = fibonacciNum1+fibonacciNum2;
    console.log(next);
    setTimeout(printNext, 1000, fibonacciNum2, next);
    }, 1000, fibonacciNum1, fibonacciNum2);
    }
  
//printFibonacciTimeouts();

/* function printFibonacci(limits) {
    let fibonacciNum1 = 1;
    let fibonacciNum2 = 1;
    let fibonacciCounter = 2;
    console.log(fibonacciNum1, fibonacciNum2);
    let intervalRef = setInterval(function fibonacciSequence(){
        let next = fibonacciNum1 + fibonacciNum2;
        fibonacciNum1 = fibonacciNum2;
        fibonacciNum2 = next;
        fibonacciCounter ++;
        if (fibonacciCounter == limits) {
            clearInterval(intervalRef);
        }
    }, 1000);
  } */

  function printFibonacciLimit(limit) {
    let fibonacciNum1 = 1;
    let fibonacciNum2 = 1;
    console.log(fibonacciNum1)
    console.log(fibonacciNum2)
    let counter = 2; 
    let intervalRef = setInterval(function fibonacciSequence() {
    let next = fibonacciNum1+fibonacciNum2;
    console.log(next)
    fibonacciNum1 = fibonacciNum2;
    fibonacciNum2 = next;
    counter++; 
    
    if (counter == limit) clearInterval(intervalRef)}, 1000)
    }

  //printFibonacciLimit(5);

  /* 5. The following car object has several properties and a method which uses them to print a
  description. When calling the function normally this works as expected, but using it from
  within setTimeout fails. Why? */ 
  let car = {
    make: "Porsche",
    model: "911",
    year: 1964,
    description() {
      console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
    },
  };
  car.description(); //works
  //setTimeout(car.description, 200); //fails
  /* a) Fix the setTimeout call by wrapping the call to car.description() inside a
  function
  b) Change the year for the car by creating a clone of the original and overriding it
  c) Does the delayed description() call use the original values or the new values from
  b)? Why?
  d) Use bind to fix the description method so that it can be called from within
  setTimeout without a wrapper function
  e) Change another property of the car by creating a clone and overriding it, and test that
  setTimeout still uses the bound value from d) */

  setTimeout(()=>car.description, 200);

  car = {...car,
    year: 1970,
  }

  console.log(car.year);

  //let describeCar = car.description.bind(car);
  // setTimeout(describeCar, 200);

  car = {...car, 
    model: 919,
}
let describeCar = car.description.bind(car);
setTimeout(describeCar, 300);


/** Exercise 01 - Fizzbuzz

Write a program that writes all the numbers from 1 to 100, with some exceptions: 
- For numbers divisible by 3, print “fizz” 
- For numbers divisible by 5 (but not 3), print “buzz” 
- For numbers divisible by 3 and 5, print “fizzbuzz”

Use console.log() to write the proper output to the command line.

**/

const fizzBuzz = () => {
  for (let i = 1; i <= 100; i++) {
    i % 3 === 0
      ? console.log("fizz")
      : i % 5 === 0 && i % 3 != 0
      ? console.log("buzz")
      : i % 5 === 0 && i % 3 === 0
      ? console.log("fizzbuzz")
      : console.log(i);
  }
};

fizzBuzz();

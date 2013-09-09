/**
 * Javascript Exercise: Objects
 */

/**
 * Question 1:
 * Modify the "booleanValue" function so that it returns "true" when it's called.
 */
function booleanValue() {
  return true;
}


/**
 * Question 2:
 * Modify the "helloWorld" function so it returs the string "Hello World!".
 * Notice that the function is being executed and the result stored in the variable "q2"
 */
 var q2
function salute(text) {
	text("Hello World")

}
salute("Hello World")
var q2 = text + '!'


/**
 * Question 3:
 * Modify the function "join" so that it concatenates (joins) the two string arguments together.
 * Notice that the result of that function is being stored in q3
 */
function join(left, right) {

}
var q3 = join("1 + 1 = ", "2");


/**
 * Question 4:
 * You're on your own this time! First, write a function called "multiply" which takes in
 * two numbers, multiplies them, and returns the result. Next call your new function
 * with the number 42 and 3257 and store the result in variable "q4".
 */
function multiply(x, y) {
	return x * y;
}

var q4 = multiply(42, 3247)
/**
 * Question 5:
 * Write a function named "smallNumber" that compares two number and returns that one.
 */

function smallnumber(x, y){
	return x < y ? x : y;
}


/**
 * Question 6:
 * Similar to question 5, write a function called "bigNumber" which returns the larger of the
 * two number passed in as arguments
 */
function bignNumber(x, y){
	return x > y ? x : y;
}

/**
 * Question 7:
 * Write a function named "addArray" that takes an array as its only argument
 * and finds the sum of all the numbers in an array.
 * There is an array provided below to test with.
 * Hint: Use you for loops!
 */
var testArray = [1, 5, 4, 3, 2, 9, 8, 7, 6, 10];
function addArray(arr) {
	var result = 0;
	for (i = 0; i < arr.length; i ++) {
		result = result + arr[i];
	}

	return result;
}

/**
 * Question 8:
 * Now that you're a function writing master, write a function named "theBigOne" that finds the
 * largest number in an array and returns it
 * Hint: You'll need to keep track of the largest number you found so far as
 *       you step through the array
 */


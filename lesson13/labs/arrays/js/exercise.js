/**
 * Javascript Exercise: Data Types
 * Most of your answers should be stored in variables called q1, q2 etc.. and the variables printed to the console.

 	(i.e) console.log("Question 1" + q1)
 */

/**
 * Question 1
 * Create an array with the elements 'New York' 'London' 'San Francisco'
 */
var q1 = ['New York', 'London', 'San Francisco'];

/**
 * Question 2
 * Create an array with the elements 'New York' 'London' 'San Francisco' and extract the first element
 */
var q2 = q1[0];

/**
 * Question 3
 * Create an array with the elements 'New York' 'London' 'San Francisco' and extract the last element
 */
var q3 = q1[2]

/* alternative, to always get the same value */

/**
 * Question 4
 * Get the length of var q3
 */
var q4 = q3.length

/*
 * Question 5
 * Create a new array called q5 and assign it to q1. Add 'Berlin', 'Sydney', 'Boston',  'LA' to q5 array
 */
 /*var q5 = q1.push('Berlin', 'Sydney', 'Boston',  'LA')  this won't work as it will change the values of previous questions/*
correct answer is:*/

var q5 = q1.concat('Berlin', 'Sydney', 'Boston', 'LA')


 /* Question 6
 * Get  the length of array q5 programmatically
 */
var q6 = q5.length

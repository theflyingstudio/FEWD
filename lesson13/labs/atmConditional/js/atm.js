/*

This is a banking application. This program will update your balance with your deposits and withdrawls.

-	Create 3 variables: balance, transaction, and amount.
-	The starting account balance is 1000$.
-	Ask for their transaction type (deposit, withdrawl).
-	Ask for the amount to withdraw or deposit.
-	Depending on their transaction choice either add or substract the balance.
-	Print the new balance to the console.
*/

var balance = 1000;
var transaction;
var amount;

/*-	Ask for their transaction type (deposit, withdrawl).*/


/*-	Ask for the amount to withdraw or deposit.*/



/*-	Depending on their transaction choice either add or substract the balance.*/

/*var response = 'c'
var counter =  1
response = prompt('Enter \'q\'uit or \'c\'ontinue');

while (response === 'c'){

	response = prompt('Enter \'q\'uit or \'c\'ontinue');

	console.log(' I ran this loop ' + counter + ' times');
	counter++;
}
*/

/*while loop*/

while (transaction != 'q'){

	transaction = prompt('(d)eposit, (w)ithdrawl or (q)uit?');

	if (transaction == 'd') {
	amount = parseInt(prompt('How much?'));
	balance = balance + amount;
	console.log('Your current balance: $' + balance);

	} else if (transaction == 'w'){
	amount = parseInt(prompt('How much?'));
	balance = balance - amount;
	console.log('Your current balance: $' + balance);

	} else if (transaction == 'q'){
	console.log('You are exiting the bank. Thank you.');
	console.log('Your final balance: $' + balance);

	} else {
	console.log('error on input');
	}
	console.log('Your new balance: $' + balance);
	}



/* SYNTAX: for ([initialExpression]; [condition]; [incrementExpression]){
  statement
}
var vegetables = ['Broccoli','Peas','Carrots'];

for (var i = 0; i < vegetables.length; i++) {
  console.log(vegetables[i]);
}/*

/*loop*/

for (null; transaction != 'q'; null) {
	transaction = prompt('(d)eposit, (w)ithdrawl or (q)uit?');
}

	if (transaction == 'd') {
	amount = parseInt(prompt('How much?'));
	balance = balance + amount;
	console.log('Your current balance: $' + balance);

	} else if (transaction == 'w'){
	amount = parseInt(prompt('How much?'));
	balance = balance - amount;
	console.log('Your current balance: $' + balance);

	} else if (transaction == 'q'){
	console.log('You are exiting the bank. Thank you.');
	console.log('Your final balance: $' + balance);

	} else {
	console.log('error on input');
	}
	console.log('Your new balance: $' + balance);
	}


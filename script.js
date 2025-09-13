function isSameType(value1, value2) {
  //your js code here
	const num1  = Number (value1);
	const num2 = Number (value2);

	 const isNum1NaN = Number.isNaN(num1);
	const isNum2NaN = Number.isNaN(num2);
	
if (isNum1NaN && isNum2NaN) return true;

	if(isNum1NaN && isNum2NaN) return false;

	return true;
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));

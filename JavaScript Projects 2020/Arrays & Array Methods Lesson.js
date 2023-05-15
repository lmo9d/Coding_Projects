// To Create some arrays, we'll use the variables "const" & "val" //


const numbers = [43,56,33,23,44,36,5];
const numbers2 = new Array(22,45,33,76,54);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

let val;

// Get array length

val = numbers.length;


// To Check if it is an Array .. (this is an Array Method fyi)
val = Array.isArray(numbers);


// Get single a value
val = numbers[3];
val = numbers[0];


// To Insert into the Array

numbers[2] = 100;  // This will place the number "100" in the 2nd position of the Array: ex: [43,56, 100, 33,23,44,36,5];


// To Find index of value ..(Note: Arrays start on "0" --that is the first value, followed by 1, 2, 3 etc)
val = numbers.indexOf(36);



// MUTATING ARRAYS

// To Add a number onto the end of the Array
 numbers.push(250);   // End Result : [43,56,33,23,44,36,5, 250];




// //To  Add on to front of the Array (as the 0 index)
	 numbers.unshift(120); //[120, 43,56,33,23,44,36,5];



// // Take off/ Remove the number from the END of an array
	 numbers.pop(5);  // Result:  [43,56,33,23,44,36];

// // To Remove a number from front of the Array
	numbers.shift();  //  Result:  [56,33,23,44,36];


// // Splice values : used to remove a range of numbers, but using their index value:
	numbers.splice(1,3); // (the 1 is the starting point of the index, the 3 is where the index cut ends) 

	 					// Result:   [43,33,44,36];

// used to Reverse the Array
	numbers.reverse();  // Result: [5, 36, 44, 33, 43, 43];


// Concatenate array
	val = numbers.concat(numbers2); // this adds the "numbers2 array " into the "numbers" array
									// Result: [5, 36, 44, 33, 43, 43, 22, 45, 33, 76, 54];

//  Sorting Arrays (for Strings)
	val = fruit.sort();  // Results: Sorts the Array in "ALPHABETICAL ORDER"

// Sorting Arrays (for Integers), Not the best way, b/c it SORTS by the 1st digit in the number..;
 	val = numbers.sort();

// Use the "Compare Function" -- Best Way to SORT Numbers from Right to left or vice versa using X & Y as variables. 
  val = numbers.sort(function(x, y){
 return x - y;
 });

// // Reverse sort (for numbers)
	val = numbers.sort(function(x, y){
	 return y - x;
	 });


// Find (A Method & Testing Function)

function over50(num){
		return num > 50;
}

val = numbers.find(over50);  //



function under50(num){
		return num > 50;
}

val = numbers.find(under50); 





console.log(numbers);
console.log(val);

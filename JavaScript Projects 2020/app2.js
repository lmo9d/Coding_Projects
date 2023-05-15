//  PRIMITIVE  Data Types:



// STRINGS 

const name = "John Doe";



// NUMBERS:

const age = 45;			// Note:  Do NOT Place the NUMBERS 45 in "", or else it will convert it to a STRING




// Boolean:

const hasKids = true;   // Note:  Do NOT Place the word True in "", or else it will convert it to a STRING
 


// NULL:

const car = null;  // NOTE: In the CONSOLE, it shows up as "Object". It's a bug, It's not correct. It's not a TRUE OBJECT. 



// UNDEFINED 

let test;       // By Default, ALL VARIABLES are considered UNDEFINED, until a VALUE is assigned to it. 



// SYMBOL :

const sym = SYMBOL();  // This is how you do a SYMBOL 



console.log(typeof car);



// REFERENCE DATA TYPES:



// ARRAYS: 

const hobbies ["movies," "music"];   // Recall arrays are part of a LIST ...



// OBJECT LITERAL:   (BJECTS IN JS)

const address = {
	city: 'Boston';
	state: 'MA'

}




// DATE : 

const today = new Date();
console.log(today);


console.log(type of );

-----------------

-----------------

// DATA TYPE CONVERSIONS (Taking the Variable and Changing the DATA TYPE) :   

let val;


// Converting NUMBERS to STRINGS:
val = String(5);  // to convert a Number to a string, wrap the number in   String();

val = STRING(555);

val = STRING(4 + 4);



//BOOL to STRING : 

val = STRING(true);  // to convert a Boolean to a String, wrap Boolean Expression in String();




// DATE to STRING: 
val = String(new Date()); // to convert a DATE to a String, wrap DATE in String();





//Array to STRING: 

val = String([1, 2, 3 , 4 , 5]); // // to convert an ARRAY to a String, wrap ARRAY in String();






// The: ".toString()"" METHOD  -- another way of converting DATA TYPES TO STRINGS:

val = (5).toString();  

val = (true).toString();

----------------
----------------


//Strings To NUMBERS 

val = Number("5");  // Converting a String to a Number
val = Number(true); // Converting a BOOLEAN to a Number , True Converts to the NUMBER "1"
val = Number(false); // Converting a BOOLEAN to a NUMBER, FALSE Converts to the NUMBER "0"
val = Number(null); // Converts to NUMBER, NULL converts to "0"
val = Number("Hello"); // Converts to NaN -- which means NOT A NUMBER.




//STRINGS To INTEGERS OR DECIMAL POINT NUMBERS:

val = parseInt('100');  // Converts STRING to INTEGER NUMBERS ONLY. DOES NOT CONVERT DECIMAL POINT Numbers.

val = parseFloat('15.395') // Converts STRINGS TO DECIMAL POINT NUMBERS. USE THIS ONE!





//OUTPUT:

console.log(val);
console.log(typeof val);
console.log(val.length);  





// TYPE COHERSION: 

const val1 = 5;
const val2 = 6;
const sum = val1 + val2;

console.log(sum);
console.log(typeof sum);



//Basic MATH:

variables:

const num1 = 100;

const num2= 50;

let val; 

// SIMPLE MATH with Numbers

val = num1 + num2;   // ADDITION

val = num1 * num2;   // Multiplication

val = num1 - num2;   // Subtraction 

val = num1 + num2;   //  Addition

val = num1 / num2;   // DIVISION

val = num1 % num2;   // MODULS OPERATOR : TELLS US THE REMAINDER




// MATH OBJECTS

val = MATH.PI;  //  give you the 3.14  Property is an Attribute,  Method is just a Function inside an Object;

val = MATH.E;  // Eulers Number: 

val = MATH.round(2.8);  // Rounds UP to the number 3 in this example

val = Math.ceil(2.4); //   Rounds UP

val = Math.floor(2.8)  // ROUNDS DOWN:

val= Math.sqrt(64); // Square root of number in parenthesis;


val= Math.abs(-3);  // Returns the ABSOLUTE VALUE/ ABSOLUTE NUMBER: Answer = 3

val = Math.pow(8, 2);  // Returns the POWER of the number. In this ex: 8 to the 2nd degree

val = Math.min (2, 3, 4, 1,):  //RETURNS  what the MINIMUM number in the row is
 
val = Math.max(2, 33, 4, 1, 55, 6, 3, -2); // Gives you MAXIMUM Number in the set (so "55" in this set)
 

 val = Math.random();  // Gives us a Random Decimal number 

 val = Math.random() * 20;  // Gives us a RANDOM number with a Decimal point x 20.

 val = Math.floor(Math.random() * 20 + 1); // Gives us a Number BETWEEN 1 & 20 , common in JS 

console.log(val);










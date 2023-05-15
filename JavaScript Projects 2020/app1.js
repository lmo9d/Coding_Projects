alert("Hello World!");



// Declaring Variables : var, let & const.

var name = 'John Doe'; // Example of var -- for Variable
console.log(name);
name = "Steve Smith";
console.log(name);


//LET 

let name = 'John Doe';  // Example 1 of LET, which is another way of declaring a Variable //
console.log(name);
name = "Steve Smith";
console.log(name);



let name; 
name = 'John Doe';  // Example 2 of LET, INITIALIZES LET as Undefined //
console.log(name);
name = "Steve Smith";
console.log(name);



//CONST, short for CONSTANCE.   THIS Variable is the only one that CANNOT Be REASSIGNED. (With the exceptions of ARRAYS, & OBJECTS)

const name = "John Doe";   // This example is fine & correct on how to use CONST
console.log(name);


// CONST CANNOT REASSIGN!!
 name = "Sara";  // THIS WOULD NOT WORK, trying to REASSIGN THIS from JOHN to SARA will FAIL
 				// it would give you an error in the Console. You Have to assign a Value.


 const greeting; // This would give you an error. CONST must have a VALUE assigned ot it. 
 				// You would see the error "Missing Initializer" in the Console


-----------------

const person = {   // In this Example: This is an OBJECT. You are Assigning PERSON as the OBJECT. With CONST, this WILL BE PERMANENT.
                    // INSIDE the Object, there is a NAME and AGE. to "Name " is assigned ot the the Value of "JOHN", "AGE " to the value of 32
					// via CONST.  The VARIABLES INSIDE THE OBJECT can be modified (Ex: Name and AGE) THEY CAN BE CHANGED! YOU CAN CHANGE THEM! AS LONG AS the OBJECT "Person" remains Permanent.
	age: 30			// HOWEVER, THE OBJECT OF "PERSON" IS PERMANENT and must remain the same.
}

person.age = 32; 
console.log(person);





// INIT variables (INIT = Initialize )

var greeting;

console.log(greeting);


greeting = "Hello";

console.log(greeting);






//Rules & Conventions for Variables:  

// Variables can only include: Letters, Numbers & "underscore __",  & "$"


// VARIABLES CANNOT Start with Numbers.

var $name = "John";

var _name = "John";
 
var Xname4 = "John";


 //Multi- WORD Variables :

 var firstName = "John"; // aka Camel Case

 var first_name = "Sara" // aka Underscore

 var FirstName = "Tom" ; // Pascal Case






// DATA TYPES & TYPES OF DATA Stored in VARIABLES


// In JavaScript, there are Essentially 2 TYPES of DATA TYPES

// The 2 TYPES OF DATA TYPES ARE:  PRIMITIVE & REFERENCE DATA TYPES

// In PRIMITIVE DATA TYPES: are STORED DIRECTLY in the Location that the Variable Accesses. Stored on the Stack.


// In  REFERENCE DATA TYPES : are accessed by REFERENCE. DATA is NOT stored in the Variable
// Instead they are stored on the HEAP, which deals with Dynamically Allocated Memory. 
// 

// 6 PRIMITIVE DATA TYPES:
/* STRINGS,  
	NUMBERS (Integers, Decimals & Floats are all considered Numbers in JavaScript ), 
	Boolean (True or False) , 
	NULL , 
	UNDEFINED (Undeclared Variable),  
	SYMBOLS (ES6)    
*/ 

// 5 REFERENCE DATA TYPES (also considered OBJECTS!!):
/* Arrays
	Object Literals
	Functions
	Dates
	Anything Else..
	                 */


// JS is considered a DYNAMIC Language:  Types are Associated with VALUES not Variables. 
// The SAME variable can HOLD MULTIPLE TYPES. We DON"T Need to Specify TYPES.

// MOST OTHER LANGUAGES ARE STATICALLY TYPED: EX: (JAVA, C# , & C++), which this IS NOT Allowed.
// In these languages you have define what type of Data Value is allowed in the VARIABLE.

//** Note, There ARE SUPERSETS of JavaScript and ADD ON's that can allow STATIC TYPING IN JS Ex: 
// TYPESCRIPT and FLOW let you convert JS for STATIC Typing, but at it's core, JS IS DYNAMIC.






























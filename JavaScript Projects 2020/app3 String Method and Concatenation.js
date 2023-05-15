// STRINGS 

const name = "William";   
const lastName = "Johnson"; // Declaring a variable called lastName and assigining it value of "Johnson"
const age = 36;

const str = "Hello there, my name is Brad"; 

const tags = 'web design, web development, programming'; 

let val;  // Declaring a Variable named "val"



val = firstName + lastName;  


// Concatenation 

val = firstName + " " + lastName;




//Append  (to add on to something, NOT REPLACE)

val = "Brad"  ;  			// the val value is assigned "Brad"


val += "Traversy" 	  // The val value adds "Traversy " b/c of the += symbol
						// to "append" , use the "+= " symbols
						// So it shows up as: "Brad Traversy" in the DOM


val = "Hello, my name is " + firstName + "and I am " + age;   // response is = "Hello, my name is William and I am 36"


console.log(val);



// ESCAPING

val = "That's awesome, I can't wait ";  //PROBLEM: This will give you an error due to a Double Apostrophe's from That's and can't

val = "That\'s awesome, I can\'t wait "; // Solution, use a  "\ " to separate the apostrophe's




// Length  -- counts the number of characters in the string 
val = firstName.length;  // so in the firstName "William" -- it gives you the value of 7 b/c there are 7 characters in the name "William" 



// concat()   -- used to concat / combine strings
val = firstName.concat('', .lastName);     // in the parentheses, it's concatenating a "space" + .lastName "Johnson"



// Change case 

val = firstName.toUpperCase();	// changes the first name "William " to CAPITAL  "WILLIAM"

val = firstName.toLowerCase();  // changes the first name "William " to Lowercase "wiliam"



// You can also Treat Strings as Read-Only ARRAYS. This isn't very useful

val = firstName[0];  // takes a Zero (0) index of this value. Arrays and Strings start on "0".  




// indexOf() 

val = firstName.indexOf('1');
val = firstName.lastIndexOf('1'); 




// charAt()

val = firstName.charAt('2');  // Points to Character 3 and gives that as answer..so "l"




//Get last character of string

val = firstName.charAt(firstName.length -1);   // gets you the last character of firstName "William": answer is "m"



// substring ()

val = firstName.substring(0, 4); // "Will" is plucked out , b/c you're selecting range 0 - 4



// Slice   -- mostly used with ARRAYS, but also with Strings

val= firstName.slice(0,4);  // similar to Substring, will pluck out "Will"


val= firstName.slice(-3);  //  one thing you can do in "Slice", is use NEGATIVE Numbers, it will start from the back. 




// split()  -- can split a STRING into an ARRAY based on a Separator

val = str.split("");  // splits each word in the STRINGS of [const str = "Hello there, " at the TOP]

val = tags.split(',');  //  splits it by the comma, creating an ARRAY of Strings 




// replace()
val = str.replace('Brad', "Jack");   // Replaces the Name "Brad" with "Jack" in the STRING


// includes()
val = str.includes("Hello"); // Gives you a True or False value based on what is IN the STRING.
							// in this case "Hello" is in the "str " variable, so it returns a TRUE value



console.log(val);



/////////////

// Template LITERALS    (AKA TEMPLATE STRINGS) PART OF ES6 and most MODERN BROWSERS   



//Template literals are literals delimited with backticks (`), 
//allowing embedded expressions called substitutions.  2 types:  Untagged template literals & Tagged Template Literals.



const name = "John";

const age  = 30;

const job = "Web Developer";

const city = "Miami";




// Without Template Strings (aka THe ES5 way )

html = "<ul><li>Name:'+ name +' </li><li>Age: '+ age + ' </li><li> '+ job +'</li><li> '+ city +'  </li><li></ul>"; 



html = '<ul>' + 
	   '<li> Name: ' + name + ' </li>' + 
	   '<li> Age:  ' + age +  ' </li>' +
	   '<li> Job:   '+ job +  ' </li>' +
	   '<li> City:  '+ city + ' </li>'; 


function hello() {
		return 'hello';
	}
----



// WITH Template Strings (the ES6 Method)

html = `
	<ul>
		<li>Name: ${name} </li>
		<li>Age: ${age}/li>
		<li>Job: ${job}</li>
		<li>City: ${city}</li>
		<li>${2 + 2}</li>
		<li>${hello()}</li>
		<li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
	</ul>
`;







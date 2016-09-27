var weirdObject = {};
    weirdObject.property =  "Time for an astronomy lesson!",
    weirdObject.property1 = "Cameron's minor in college was astronomy",
    weirdObject.property-2 =  "The 4 Galilean largest moons of Jupiter are:",
    weirdObject.property 3 = "Io, Ganymede, Callisto, Europa",
    weirdObject.property$ = "Saturn's moon Enceladus has liquid water ocean under its icy surface",
    weirdObject. property = "The Sun contains 99.87% of the mass of the entire solar system",
    weirdObject.property() = "There are 5 dwarf planets in our solar system:",
    weirdObject.property[] = "Pluto, Ceres, Eris, Haumea, Makemake",
    weirdObject.8property = "Mars has two tiny moons: Phobos and Deimos"


// Use console.log() to figure out if dot and/or bracket notation
// will work to access the properties below. Mark true if you can use dot/bracket
// notation to access the property, otherwise mark false.

// For example, uncomment the line below to see if you can use dot notation to access `property1`.
// console.log(weirdObject.property1);

// I'll give you the first answer. The rest are set to false. Try out each property and
// if you can use dot or bracket notation to access it, change the answer to true!

// property
var dotNotation0 = true;
var bracketNotation0 = true;

// property1
var dotNotation1 = false;
var bracketNotation1 = false;

// property-2
var dotNotation2 = false;
var bracketNotation2 = false;

// property 3
var dotNotation3 = false;
var bracketNotation3 = false;

// property$
var dotNotation4 = false;
var bracketNotation4 = false;

// *space*property
var dotNotation5 = false;
var bracketNotation5 = false;

// property()
var dotNotation6 = false;
var bracketNotation6 = false;

// property[]
var dotNotation7 = false;
var bracketNotation7 = false;

// 8property
var dotNotation8 = false;
var bracketNotation8 = false;
/*
Solution Summary:
Bracket notation always works. Dot notation requires properties that begin with a letter and do not include special characters.

Let's go through these one-by-one.

property
dot notation: true

bracket notation: true

This one is normal. Either syntax is fine.

"property1"
dot notation: true

bracket notation: true

A number attached to the end of a property is acceptable for dot and bracket notation.

"property-2"
dot notation: false

bracket notation: true

Some special characters like the - are not acceptable with dot notation but will still work with bracket notation.

"property 3"
dot notation: false

bracket notation: true

Spaces are generally bad form in programming. Don't use them except within strings. 
But you can still access a property name with a space using bracket notation.

"property$"
dot notation: true

bracket notation: true

Surprisingly, you actually can use $ within property names and still access them with dot notation.

" property"
dot notation: false

bracket notation: true

In dot notation, the space actually gets ignored, so you are accessing "property" instead. 
But bracket notation still works.

"property()"
dot notation: false

bracket notation: true

Without quotes, property() is a function call. This is just plain bad. 
While you can access a property like this one with bracket notation, 
there's no reason you should ever include () within an object property.

"property[]"
dot notation: false

bracket notation: true

Like the last one, this is bad form too. [] already have a specific purpose in 
JavaScript and should never be used within a property.

"8property"
dot notation: false

bracket notation: true

Dot notation fails to work if the property starts with a number. 
This is also bad form. Properties should never start with numbers.
*/
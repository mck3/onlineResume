/*
This code will replace all greater than and less than 
signs with quotation makrs redering any malishious code null
*/
var html = '<script src="http://hackyourwebsite.com/eviljavascript.js"></script>';

var charEscape = function(_html) {
    var newHTML = _html;
    // How will you make sure that newHTML doesn't contain any < or > ?
    // Your code goes here!
    newHTML = _html.replace(/</g, "$lt;");
    newHTML = newHTML.replace(/>/g, "$gt;");

    // Don't delete this line!
    return newHTML;
};

// Did your code work? The line below will tell you!
console.log(charEscape(html));
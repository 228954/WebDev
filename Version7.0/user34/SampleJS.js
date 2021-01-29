unction changeText() {
    document.getElementById("textChange").innerHTML = "Thanks for liking my Webpage";
}
var space = " ";
var pos = 0;
var msg = "User 19";

function Scroll() {
    document.title = msg.substring(pos, msg.length) + space + msg.substring(0, pos);

    pos++;
    if (pos > msg.length) pos = 0;
    window.setTimeout("Scroll()", 0);
}
Scroll();
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");
var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13);
var person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};
const PI = 3.141592653589793;
PI = 3.14; // This will give an error
PI = PI + 10; // This will also give an error
function myFunction(p1, p2) {
    return p1 * p2; // The function returns the product of p1 and p2
}
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.join(" * ");
var a, b, c; // Declare 3 variables
a = 5; // Assign the value 5 to a
b = 6; // Assign the value 6 to b
c = a + b; // Assign the sum of a and b to c
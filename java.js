var a = prompt("Write down a first number")
var c = prompt("Write down a sign")
var b = prompt("Write down a second number")

a = Number(a)
b = Number(b)

if (c === "+") {console.log(a+b)}
else if (c === "-") {console.log(a-b)}
else if (c === "*") {console.log(a*b)}
else if (c === "/" && b !== 0) {console.log(a/b)}
else if (c === "/" && b === 0) {console.log("It is not allowed to divide by zero.")}
else {console.log("This operation is not allowed.")}
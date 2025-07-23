import add from './script2.js'
console.log(x)  //undefined  -- Hoisting
var x = 25;
var a1 = 10
let b1 = 20
console.log(x);
function sum (a, b)
{
    console.log(a + b);
}
sum(x, 5)
console.log("hello world")
function outer() {
	let a = 1
	function inner() {
		a++
		console.log(a)
	}
	return inner
}
const z = outer()
z()
z()
z()
class Student
{
    name; rno; age;
    constructor(a, b, c)
    {
        this.name = a;
        this.rno = b; this.age = c;
    }
}
class Topper extends Student
{
    rank;
}
let obj = new Student("john", 25, 25);

//modules

add(5, 3)
let arr = [5, 3];
let [a, b] = arr;
let obj2 = { name: "raj", age: 35 }
const { age } = obj2;
console.log(age) //35





console.log("hello world")

// sample function
function display ()
{
    console.log("hiiii")
}
display();

// function with parameters
function sum (a, b)
{
    console.log(a + b);
}
sum(4, "2");

// default parameters
function sum2(a, b=2) {
	console.log(a + b)
}
sum2(3);

// function for area of rectangle
function areaRect (l, b)
{
    console.log(`Area of Rectangle is: ${l*b}`)
}
areaRect(10, 20)

function add (a, b)
{
    return a + b;
} 
let res = add(5, 3);
console.log(res);

function areaSquare(a) {
    return a * a;
}
res = areaSquare(10);
console.log(res)
// function expression
const area2 = function(a)
{
       return a*a
}
res = area2(10)
console.log(res)
// arrow function
const area3 =  (a)=>  a * a

res = area3(10)
console.log(res)



function isEligible(age) {
    let eligibility = (age >= 18) ? "eligible" : "not eligible";
    return eligibility
}
const isEligible2 = function (age)
{
    if (age >= 18) return "eligible"
    else return "not eligible"
}
const isEligible3 = (age) =>
{
    let eligibility = age >= 18 ? "eligible" : "not eligible"
		return eligibility 
}
res = isEligible(25)
console.log(res)



function totalwithoutSpace (str)
{
    let len = str.length;
    let spaces = str.split(' ').length - 1
    return len - spaces;
}
console.log(totalwithoutSpace("js is easy"))




function sum (a, b)
{
    console.log(a+b)
}
function bigSum (x)
{
}
bigSum(sum)












/*function read ()
{
    console.log("i'm reading")
}
function write() {
	console.log("i'm writing")
}
function display (a, b)
{
    a();
}
display(read,write)*/




function outer ()
{
    let i = 0;
    function inner ()
    {
        i++;
        console.log(i)
    }  
    return inner;
}
res = outer();
console.log(res); //inner fun
res()
res()
res()


//
const  largeValue = (a, b,c) => Math.max(a,b,c)

largeValue(5,6)
function largeValue2 (a, b)
{
    if (a > b)
        return a;
    else if (b > a)
        return b
    else
        return "equal"
}
function largeValue3 (a, b)
{
    return (a > b) && (a>c) ? a : (b>c)?b:c;
}









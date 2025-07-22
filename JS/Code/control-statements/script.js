// if-else -- check whether a person is eligible to marry or not
let salary = 10000;
if (salary > 100000)
{
    console.log("Eligible")
}
else
{
    console.log("not eligible")
}

// guess 7   -- generate a random number between 1 to 14
let myNum = +prompt("enter a number")
let decision =confirm("pakka?")
let autoGenerate = Math.ceil(Math.random() * 14)
console.log(autoGenerate)
if (myNum == autoGenerate)
{
    alert("congratulations! you guessed correct")
}
else if (myNum > autoGenerate) {
	alert(
		`your number is ${myNum - autoGenerate} values greater than my number`,
	)
} else {
	console.log(
		`your number is ${autoGenerate - myNum} values less than my number`,
	)
}

//GST
// cars-28%, pan masala-28%, food grains-0%, electronics -18%, package food-5%
let type = "electronics", cost = 18000
switch (type) {
	case "electronics":
		console.log(`total cost is ${cost * 1.18}`)
		break
	case "cars":
		console.log(`total cost is ${cost * 1.28}`)
		break
    case "pan masala":
        console.log(`total cost is ${cost * 1.28}`); break;
    case "food grains":
        console.log(`total cost is ${cost}`); break;
    default: console.log("enter valid type");
}










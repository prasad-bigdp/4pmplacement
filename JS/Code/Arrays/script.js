let arr = [23, "raj", true, 45.36];
let arr1 = [23, "raj", true, 45.36];
console.log(arr == arr1);
console.log(arr[0]);
console.log(arr.length);
arr[100] = "prasad"
console.log(arr.length)
console.log(arr[1000]); //undefined

arr = [10, 20, 30, 40, 50];
console.log(arr[1] + arr[2]);

arr.push(60, 70, 80);
console.log(arr);
arr.pop();
console.log(arr)
arr.unshift(1, 2, 3);
console.log(arr);
arr.shift();
console.log(arr);
arr.splice(0, 0, 4, 5, 6);
console.log(arr)

let friends = ["sheldon", "rachel", "ross", "monica", "chandler", "penny"];
// remove sheldon and add pheobe
friends.shift(); friends.unshift("pheobe") //friends.splice(0,1,"pheobe")
// remove penny and add joey
friends.pop(); friends.push("joey"); //friends.splice(5,1,"joey");
// add "emma" between rachel and ross
friends.splice(2, 0, "emma")
console.log(friends);

// reverse;
arr = [10, 20, 30, 40, 50];
console.log(arr.reverse());

// includes
console.log(arr.includes(90))
//reverse string
let str = "prasad";
console.log(str.split('').reverse().join(''))

arr = [10, 20, 9, 40, 50];
function square (n)
{
    console.log(n * n);
}
for (let i = 0; i < arr.length; i++)
{
    square(arr[i])
}

// for Each
arr.forEach(function (ele, ind)
{
    console.log(ele*ele , ind) 
 })

arr = [1, 2, 3, 4, 5];
let x= arr.forEach(function (ele, ind)
{
    return ele + 1;
})
console.log(x);
let x1 = arr.map(function (ele, ind) {
	return ele + 1
})
console.log(x1)
arr = [5,4,6,7,9];
let x2 = arr.map(function (ele, ind) {
    return ele % 2 == 0;
})
console.log(x2);
let x3 = arr.filter(function (ele, ind) {
	return ele % 2 == 0
})
console.log(x3)


arr = [10, 20, 30, 40];
res= arr.every(function (ele, ind)
{
    return ele > 20;
})
console.log(res);

//sort
arr = [20, 10, 30, 1,111, 50]
console.log(arr.sort(function (a, b) { return b-a; })) //[10,20,30,5]


let obj = {
	name: "prasad",
	age: 86,
	run: function () {
		console.log(this.name+"running")
	},
}
console.log(obj.name, obj['name']) 
console.log(obj.phno) //undefined;
obj.ph = 252525;
console.log(obj)
obj.run()
// seal and freeze
// Object.seal(obj)
// obj.name = 20;
// console.log(obj)
Object.freeze(obj)
obj.name = 20;
console.log(obj)



























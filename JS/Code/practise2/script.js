// write a function that prints each value of an array with indexes
function printArray ()
{
    let arr = [5, 4, 3, 2, 1]
    for (let i = 0; i < arr.length; i++)
    {
        console.log(arr[i])
    }
}
printArray();
let arr = [10, 20, 30,20]
console.log(arr.indexOf(20));
console.log(arr.lastIndexOf(20));
console.log(arr.reverse())
// push,pop,unshift, shift;
arr = [5, 4, 3, 2, 1]
console.log(arr.splice(2, 2, 10, 20))
console.log(arr)
console.log(arr.includes(5));

arr = [5, 4, 3]   //--  6,5,4

arr.forEach(function (ele,ind)
{
    console.log(ele+1);
})

let x = arr.map(function (ele, ind) {
	return ele+1
})
console.log(x);  //[6,5,4]
let y = arr.filter(function (ele, ind) {
	return ele % 2==0
})
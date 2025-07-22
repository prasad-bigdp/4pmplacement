// using while print 1 to 10
// let i = 1; //initialization;
// if (i % 2 == 1)
// {
//     i++;
// }
// while (i <= 10)   //condition
// {
//    console.log(i) //statement
//     i+=2;
// }

// print 1 to 20  multiples of 3

// print 1 to 10 using do while
// let i = 2;
// do
// {
//     console.log(i);
//     i++;
// } while (i <= 10);
let arr = [5, 6, 7, 8, 9];
for (let i = 0; i < arr.length;i++)
{
    console.log(arr[i])
}

for (let z of arr)
{
    console.log(z)
}

for (let z in arr)
{
    console.log(arr[z])
}
arr = [8, 1, 2, 3, 4];
// use for loop an dprint sum of all elements in array
// let sum = 0;
// for (let i = 0; i < arr.length; i++)
// {
//     sum = sum + arr[i];
// }
// console.log(sum)
// let sum = 0;
// for (let i of arr)
// {
//     sum = sum + i;
// }
// console.log(sum);
let sum = 0;
for (let i in arr)
{
    sum = sum + arr[i];
}
console.log(sum);
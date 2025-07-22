// console.log("hello world");
// let str = "megha";
// let x;
// console.log(x)
// // i want to generate 5 random values between 1 and 6
// for (let i = 1; i <= 5; i++)
// {
//     console.log(Math.ceil(Math.random() * 6))
// }
// //  generate random values between 1 to 10 until i get 7;
// let i = 1;
// while(i>0)
// {
//     let x = Math.ceil(Math.random() * 10);
//     console.log(x);
//     if (x == 7)
//     {
//         break;
//     }
//     i++;
// }
 
// // input: "raj", output: "jar"
// let n = "raj";
// console.log(n.split('').reverse().join(''));
// //pallindrome

// // function calculateTaxiFare(km,price) , if price is not available take charge ₹10, if km is not available  return baic price ₹50

// let km = +prompt("enter km");
// let price = +prompt("enter price");
// function calculateTaxiFare (km,price=10)
// {
//     if (!km)
//     {
//         return 50;
//     }
//     return km * price;
// }
// let res = calculateTaxiFare(km, price);
// alert(res);

// let arr = [5, 4, 3, 2, 1], p = 1;
// arr.forEach(function (ele, ind)
// {
//     p = p * ele;
// })
// console.log(p)
// let names = ["kajal agarwal", "nitesh agarwal", "john cena", "prasad"];
// function indexAgarwal ()
// {
//     ar=[]
//     for (let i = 0; i < names.length; i++)
//     {
//         if (names[i].endsWith('Agarwal'))
//         {
//             ar.push(i);
//         }
//     }
//     return ar;
// }

// 1
// 1 2
// 1 2 3
// 1 2 3 4
let str= ''
for (let r = 1; r <= 4; r++)
{
    str=''
    for (let c = 1; c <= r; c++)
    {
        str = str+c+" ";
    }
    console.log(str)
}

























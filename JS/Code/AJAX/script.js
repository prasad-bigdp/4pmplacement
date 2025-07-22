// setTimeout(function ()
// {
//     console.log("Hi")
// }, 0)
// for (let i = 0; i < 10000; i++)
// {
//     console.log("bye")
// }
// let c = 0;
// setTimeout(function ()
// {
//     c++;
//     document.getElementById('count').textContent = c;
//     document.body.style.background="red"
// },1000)

// let c = 10;
// function happynewyear ()
// {
//   let x =  setInterval(function ()
//     {
//         c--
// 				document.getElementById("count").textContent = c
//       if (c <= 0)
//       {
//             clearInterval(x);
//           console.log("hi")
//           document.getElementById("count").textContent = "happy new year"
// 				}
//   },1000)
// }
// setTimeout(function ()
// {
//     c++;
//     console.log(c);
// }, 2000)
// let b = 10
// setInterval(function () {
// 	b++
// 	console.log(b)
// }, 2000)

let minute = document.getElementById('minute');
let second = document.getElementById('seconds');
let m = 5, s = 0;
let x;
let rt=1000;
function timer ()
{
  x=  setInterval(() =>
    {
        if (s == 0)
        {
            s = 60;
            m--;
      } 
      s--;
        minute.textContent = m;
        second.textContent = s;
    },rt)
}
function stop ()
{
    clearInterval(x);
}
function speedup ()
{
    rt = 100;
    timer()
}
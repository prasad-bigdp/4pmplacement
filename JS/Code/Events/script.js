// document.getElementById('btn').addEventListener('click', function ()
// {
//     console.log("hello world")
    
// })
// const img= document.getElementById('image')
// img.addEventListener('mouseover', function ()
//gggg {
//     img.style.top = Math.round(Math.random() * 80) + "%"  
//     img.style.left=Math.round(Math.random()*80)+"%" 
// })

document.addEventListener('keydown', function (e)
{
    if (e.key == 'a')
    {
        console.log(e)
    }
    // if (e.key == "b")
    // {
    //     img.style.height="500px"
    // }
})

document.getElementById('inp').addEventListener('input', function (e)
{
    console.log(e.target.value)
})

document.addEventListener('scroll', function (e)
{
    console.log(e)
})
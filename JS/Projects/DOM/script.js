const p = document.getElementById('name')

function disappear ()
{
    p.style.transform='translateX(-100vw)'
}
function appear ()
{
    p.style.opacity='1'
}
let colors = ["red","green","blue","orange","pink","yellow","white","brown"]
function change ()
{
    let n= Math.floor(Math.random()*colors.length)
    document.body.style.background= colors[n]
}

let images = ["https://baburao123.netlify.app/Assests/Slide2.jpg", "https://baburao123.netlify.app/Assests/Slide3.jpg", "https://baburao123.netlify.app/Assests/Slide4.jpg"]
let i = 0;
function prev ()
{
    if(i>0)
        i--;
    if (i == 0)
        i = images.length - 1
    show()
}
function next() {
	if (i >= 0) i++
    if (i == images.length - 1) i = 0
    show()
}
function show ()
{
    document.getElementById('img').src = images[i];
}
show()



const heading = document.getElementById('heading');
const inputEle = document.getElementById("box")
function change ()
{
    alert(inputEle.value)
    heading.innerHTML = "<u>Bye world</u>"
    heading.style.color = "red";
    // heading.style.background="black"
}
function rotate ()
{
    heading.style.transform="rotate(360deg)"
}
function displayNone() {
	heading.style.display = "none"
}

function changeMode ()
{
    document.body.classList.toggle('dark')
}
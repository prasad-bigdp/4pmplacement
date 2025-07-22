const form = document.getElementById('form')
const nameInput = document.getElementById('na');
const emailInput = document.getElementById('em');
const phnoInput = document.getElementById("pno")
const passwordInput = document.getElementById('pwd');
form.addEventListener('submit', function (e)
{
    e.preventDefault()
    console.log(nameInput.value, emailInput.value, passwordInput.value);
    if (nameInput.value.trim() == "")
        document.getElementById('nameError').textContent = "name is required"
    let pregex = /^[0-9]{10}$/
    if (!phnoInput.value.match(pregex))
    {
       alert("enter valid phnone number") 
    }
    let eregex = /^[A-Za-z0-9_]+@[A-Za-z]+\.[A-Za-z]{2,}$/
    let pwdRegex = /^[A-Z]+[a-z]+[0-9]+$/
})
document.getElementById("showHide").addEventListener('click', function ()
{
    if (passwordInput.type == "password")
        passwordInput.type = "text"
    else
        passwordInput.type = "password"
})
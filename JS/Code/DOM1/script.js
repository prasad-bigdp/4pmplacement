console.log(document)
let x = document.getElementsByTagName('h1')
console.log(x[0])
x[0].textContent = "Bye World"
let y = document.getElementsByClassName('heading');
console.log(y[0])
y[0].textContent ="hello world"
const z = document.getElementById('head');
z.textContent = "our world"
const i = document.getElementById("image");
i.src = "https://upload.wikimedia.org/wikipedia/en/b/bd/Doraemon_character.png"
const p = document.querySelectorAll('.heading');
console.log(p)
const mainDiv = document.getElementById('main');
const urlInput = document.getElementById('url');
const nameInput= document.getElementById('name')
function addData ()
{
    const myDiv = document.createElement('div');
    myDiv.classList.add('divv')
    const image = document.createElement('img');
    image.src = urlInput.value
    image.alt = "shinchan"
    image.height = "200";
    const para = document.createElement('p');
    para.textContent = nameInput.value;
    myDiv.append(image, para);
    mainDiv.appendChild(myDiv);
    urlInput.value = '';
    nameInput.value=''
}
const cityInput = document.getElementById('inp');
document.getElementById('btn').addEventListener('click', function ()
{
    fetch(`http://api.weatherapi.com/v1/current.json?key=0692d8a9a25f433baae113547251807&q=${cityInput.value}&aqi=no
`)
        .then((res) => res.json())
        .then((data) => displayData(data))
        .catch((err) => console.log(err))
})



function openBox ()
{
    document.getElementById('modal').style.display="block"
}









function displayData (data)
{
    const temp = document.createElement('p');
    temp.innerHTML =data.current.temp_c+"<sup>o</sup>c"
    const message = document.createElement('p');
    message.textContent = data.current.condition.text
    const Image = document.createElement('img');
    Image.src = data.current.condition.icon
    document.getElementById('main').append(Image,message,temp)
}
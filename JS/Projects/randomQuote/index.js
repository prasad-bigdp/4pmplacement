function fethcData ()
{
    fetch('https://dummyjson.com/quotes/random')
        .then( (res)=> res.json() )
        .then((data)=>displayData(data))
        .catch((err)=>console.log(err))
    
}
fethcData();
function displayData (data)
{
    const q = document.createElement('h3');
    q.textContent = data.quote
    const a = document.createElement('p')
    a.textContent = data.author;
    document.getElementById('main').append(q, a);
}
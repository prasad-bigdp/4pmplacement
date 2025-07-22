function fetchData ()
{
    fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => displayData(data))
        .catch((err)=>console.log(err))
    
}
fetchData()
function displayData (data)
{
    document.getElementById('main').textContent = ''
    data.forEach((ele, ind) =>
    {
        const pDiv = document.createElement('div');
        const pImg = document.createElement('img');
        pImg.src = ele.image;
        pImg.alt = ele.title
        const pTitle = document.createElement('h2');
        pTitle.textContent = ele.title;
        const pPrice = document.createElement('p');
        pPrice.textContent = "₹"+ele.price
        pDiv.append(pImg, pTitle, pPrice);
        document.getElementById('main').appendChild(pDiv)
    })
}
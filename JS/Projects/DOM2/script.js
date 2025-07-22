const pname = document.getElementById('pname')
const pprice = document.getElementById('pprice');
const pcategory = document.getElementById('pcategory');
let products = []
document.getElementById('myForm').addEventListener('submit', function (e)
{
    e.preventDefault();
    console.log("hi")
    addProduct();
})
function addProduct ()
{
    let pobject = {
        name: pname.value,
        price: pprice.value,
        category:pcategory.value    
    }
    products.push(pobject)
    displayProducts(products) 
}
const mainDiv = document.getElementById('main')
function displayProducts (products)
{
    mainDiv.textContent = ''
    products.forEach((ele,ind) =>
    {
        const pDiv = document.createElement('div');
        const prName = document.createElement('h2');
        prName.textContent = ele.name
        const prPrice = document.createElement('p');
        prPrice.textContent = ele.price 
        const pCat = document.createElement('p');
        pCat.textContent= ele.category
        pDiv.append(prName, prPrice, pCat);
        mainDiv.appendChild(pDiv)
    })
}

document.getElementById("categories").addEventListener('change', function ()
{
    const cat = document.getElementById("categories")
    let newProducts = products.filter((ele,ind) =>
    {
        return ele.category == cat.value
    })
    displayProducts(newProducts)
})
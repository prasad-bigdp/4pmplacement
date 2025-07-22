const input = document.getElementById('inp');
const button = document.getElementById('btn');
button.addEventListener('click', async function ()
{
    try
    {
        const res =  await  fetch(`https://dev.to/api/articles?tag=${input.value}`)
        const data = await res.json();
        console.log(data);
        displayData(data)
    }
    catch (err)
    {
        console.log(err);
    }
})
const mainDiv= document.getElementById('main')
function displayData (data)
{
    mainDiv.textContent = '';
    data.forEach((e, i) =>
    {
        const PDiv = document.createElement('div');
        PDiv.classList.add('article')
        const PImg = document.createElement('img');
        PImg.src = e.cover_image;
        PImg.alt = e.title
        const Pheading = document.createElement('h2');
        Pheading.textContent = e.title;
        const PPara = document.createElement('p');
        PPara.textContent = e.description;
        const Link = document.createElement('a');
        Link.href = e.url;
        Link.target = "_blank";
        Link.textContent="read the article"
        PDiv.append(PImg, Pheading, PPara, Link);
        mainDiv.appendChild(PDiv)
    })
}
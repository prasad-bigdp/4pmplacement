let data = [
	{
		image_url:
			"https://images.assetsdelivery.com/compings_v2/bsd555/bsd5551808/bsd555180800691.jpg",
		name: "Donation Box Tee",
		size: "M",
		gender: "Unisex",
		age: "Adult",
	},
	{
		image_url:
			"https://i.etsystatic.com/23842934/r/il/ca09a6/3653781413/il_570xN.3653781413_ri89.jpg",
		name: "Heart Tee Donation",
		size: "L",
		gender: "Female",
		age: "Teen",
	},
	{
		image_url:
			"https://5.imimg.com/data5/ECOM/Default/2025/1/478040625/JO/HT/TW/88736396/t-shirt-blood-donation-88-t-shirt-blood-donation-collection-38537523495139-250x250.jpg",
		name: "Charity Tee",
		size: "S",
		gender: "Male",
		age: "Child",
	},
	{
		image_url:
			"https://rlv.zcache.com/red_heart_save_a_life_give_blood_donation_t_shirt-r80f5a60230bd4de4b5b1042b2ac0bff3_k2grt_644.jpg",
		name: "Feed Kids Donation Tee",
		size: "Youth M",
		gender: "Unisex",
		age: "Child",
	},
]

async function fetchData(url) {
	try {
		const res = await fetch(url)
		// const data = await res.json();

		console.log(data)
		displayData(data)
	} catch (err) {
		console.log(err)
	}
}
fetchData(`https://ca69537faf4a927c549a.free.beeceptor.com/api/clothes`)
const mainDiv = document.getElementById("main")
function displayData(data) {
	mainDiv.textContent = ""
	data.forEach((e, i) => {
        const div = document.createElement("div")
        div.classList.add('cloth')
		const img = document.createElement("img")
		img.src = e.image_url
		img.alt = e.name
		const name = document.createElement("h3")
		name.textContent = e.name
		const age = document.createElement("p")
		age.textContent = e.age
		const gender = document.createElement("p")
		gender.textContent = e.gender
		const size = document.createElement("p")
		size.textContent = "size: " + e.size
		div.append(img, name, age, gender, size)
		mainDiv.appendChild(div)
	})
}
document.getElementById('gender').addEventListener('change', function (e)
{
    let newArray = data.filter((ele) => ele.gender == e.target.value)
    displayData(newArray)
})
document.getElementById("age").addEventListener("change", function (e) {
	let newArray = data.filter((ele) => ele.age == e.target.value)
	displayData(newArray)
})
document.getElementById("size").addEventListener("change", function (e) {
	let newArray = data.filter((ele) => ele.size == e.target.value)
	displayData(newArray)
})
document.getElementById('frm').addEventListener('submit', function (e)
{
	e.preventDefault();
	const na = document.getElementById('na');
	const em = document.getElementById('em');
	const pwd = document.getElementById('pwd');
	if ((na.trim() == "") || (em.trim() == ''))
	{
		alert("username or email should not be empty")
	}
	if (!em.value.match("/^[A-Za-z0-9]+@[A-Za-z]{2,}+.[A-Za-z]{1,}$/"))
	{
		alert("email is not valid")
	} 
})
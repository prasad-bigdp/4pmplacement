console.log(window)
// geo location
window.navigator.geolocation.getCurrentPosition((res) =>
{
    console.log(res.coords.latitude,res.coords.longitude)
})
// video recording
function start ()
{
    window.navigator.mediaDevices.getUserMedia({ video: true, audio: true })
   .then((res)=>document.getElementById('vd').srcObject=res)
}
//current location
console.log(window.location.href)
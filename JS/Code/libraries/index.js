/*Libraries: library is a pre wriiten code used for specific purpose
Every library can be used in vanilla  JS by attaching its cdn link. Most famous libraries are:
   1. JQuery
   2. GSAP
   3. slick,owl carousel,swiper js
   4. chart js, am4charts
   5. typed js, AOS JS
   6. Three JS*/

$('#btn').click(function ()
{
    $('#heading').text("Bye World")  
    $('#box').fadeToggle(2000); 
})
 var typed = new Typed("#msg", {
		strings: ["easy","fun","simple"],
		typeSpeed: 50,
 })
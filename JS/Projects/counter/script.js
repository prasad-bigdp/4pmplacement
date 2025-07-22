const countPara = document.getElementById('count');
let c = 0;
function incr ()
{
    c++;
    countPara.textContent = c
}
function decr() {
	c--
	countPara.textContent = c
}
function reset() {
	c=0
	countPara.textContent = c
}

function rotateDIV()
{
	var x=document.getElementById("rotate2D");
	var n = (90 + parseInt(x.style["transform"] ? x.style["transform"].match(/\d+/)[0] : 0)) % 360;
	
	x.style.transform = n;
	x.style.webkitTransform = "rotate(" + n + "deg)"
	x.style.OTransform = "rotate(" + n + "deg)"
	x.style.MozTransform = "rotate(" + n + "deg)"
}

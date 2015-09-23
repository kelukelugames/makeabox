$(document).ready(function() {
	$(function() {
		$( ".piece" ).draggable();
	});

	$(".rotatable").bind( "tap", rotate);


	$(".piece").bind("mousedown", function() {
		updateZIndex(this);
		$(this).addClass("selected");
	});

	$(".piece").bind("mouseup", function() {
		$(this).removeClass("selected");
	});
});

var zIndex = 1;

function updateZIndex(x) {
	$(x).css("z-index", zIndex);
	zIndex++;
}

function flip(x) {
	if ($(x).hasClass("flipped")) {
		$(x).removeClass("flipped");
	} else {
		$(x).addClass("flipped");
	}
}

function rotate() {
	updateZIndex(this);
	var n = (90 + parseInt(this.style["transform"] ?
		this.style["transform"].match(/\d+/)[0] : 0)) % 360;
	
	this.style.transform = n;
	this.style.webkitTransform = "rotate(" + n + "deg)"
	this.style.OTransform = "rotate(" + n + "deg)"
	this.style.MozTransform = "rotate(" + n + "deg)"

	if (n == 0) {
		flip(this);
	}
}


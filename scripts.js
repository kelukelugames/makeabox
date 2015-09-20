$(document).ready(function() {
	/*
	$(".piece").click(function() {
		if (!isDragging) {
			rotate(this);
		} else {
		    isDragging = false;
		}
		$(this).removeClass("selected");
	});
	
	$(".piece").mousedown(function() {
		updateZIndex(this);
	});

	$('.piece').mousedown(function() {
		$(this).addClass("selected");
	    $(document).mousemove(function(){
	       isDragging = true;
	    });
	});

	$(document).mouseup(function() {
	    $(document).unbind('mousemove');
	});*/
});

var isDragging = false;
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

function rotate(x) {
	var n = (90 + parseInt(x.style["transform"] ?
		x.style["transform"].match(/\d+/)[0] : 0)) % 360;
	
	x.style.transform = n;
	x.style.webkitTransform = "rotate(" + n + "deg)"
	x.style.OTransform = "rotate(" + n + "deg)"
	x.style.MozTransform = "rotate(" + n + "deg)"

	if (n == 0) {
		flip(x);
	}
}


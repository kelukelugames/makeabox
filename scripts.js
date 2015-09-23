$(document).ready(function() {
    $(function() {
      $( ".piece" ).draggable();
    });

	$(".piece").bind("mousedown", function() {
		updateZIndex(this);
		$(this).addClass("selected");

		if ($(this).hasClass("rotatable")) {
			x = event.clientX;
			y = event.clientY;
			console.log("original eventx: " + x + " eventy: " + y);
		
		    $(this).mousemove(function(){
				console.log("eventx: " + event.clientX + " eventy: " + event.clientY);
				var deltaX = x - event.clientX;
				var deltaY = y - event.clientY;

				if (deltaX * deltaX + deltaY * deltaY > 20) {
			       	isDragging = true;
			    }
		    });
		}
	});

	$(".piece").bind("mouseup", function() {
		if (!isDragging && $(this).hasClass("rotatable")) {
			rotate(this);
		}		    

		isDragging = false;

	    $(this).unbind("mousemove");
	    $(this).unbind("touchmove");
		$(this).removeClass("selected");
	});
});

var isDragging = false;
var zIndex = 1;
var x;
var y;

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


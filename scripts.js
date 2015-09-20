$(document).ready(function() {
    $(".piece").click(function() {
        rotate(this);
    });


	  $(function() {
	    $( ".piece" ).draggable();
	  });
});

function flip(x) {
    if ($(x).hasClass("flipped")) {
        $(x).removeClass("flipped");
        console.log("removed");
    } else {
        $(x).addClass("flipped");
        console.log("added");
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


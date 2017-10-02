var numClicks = null;
var elementHistory = [];

$(document).ready(function() {
	console.log("HELLO THERE")
	$("#theimage").click(function(e) {
		numClicks++;
		$("#numpeoplefield").val(numClicks);
		$("#numpeople").text(numClicks);
		var newDomElement = $("<div class='marker'></div>");
		newDomElement.css("left", (e.pageX-3)+"px");
		newDomElement.css("top", (e.pageY-3)+"px");
		$("body").append(newDomElement);
		elementHistory.push(newDomElement);
		var currentHistory = $("#history");
		currentHistory.append("|"+e.PageX+","+e.PageY+"|");
		$("#history").val(currentHistory);
	});
	$("#undobutton").click(function() {
		numClicks--;
		$("#numpeoplefield").val(numClicks);
		$("#numpeople").text(numClicks);
		var elementToRemove = elementHistory.pop();
		elementToRemove.remove();
	});
	$("#increasesizebutton").click(function() {
		var imgheight=$("#theimage").height;
		if (imgheight<1000) {
			imgheight+=200;
			$("#theimage").height(imgheight);
		}
	});

})
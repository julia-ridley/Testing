var numClicks1 = null;
var elementHistory1 = [];
var numClicks2 = null;
var elementHistory2 = [];
var numClicks3 = null;
var elementHistory3 = [];
var numClicks4 = null;
var elementHistory4 = [];
var numClicks5 = null;
var elementHistory5 = [];
var numClicks6 = null;
var elementHistory6 = [];

$(document).ready(function() {
	//image 1 functions________________________________________
	$("#people_1").click(function(e) {
		numClicks1++;
		$("#numpeoplefield1").val(numClicks1);
		console.log(numClicks1);
		$("#peoplecount1").text(numClicks1);
		var newDomElement = $("<div class='marker'></div>");
		newDomElement.css("left", (e.pageX-3)+"px");
		newDomElement.css("top", (e.pageY-3)+"px");
		$("body").append(newDomElement);
		elementHistory1.push(newDomElement);
		var currentHistory = $("#history1");
		currentHistory.append("|"+e.PageX+","+e.PageY+"|");
		$("#history1").val(currentHistory);
	});
	$("#undobutton1").click(function() {
		numClicks1--;
		$("#numpeoplefield1").val(numClicks1);
		$("#peoplecount1").text(numClicks1);
		var elementToRemove = elementHistory1.pop();
		elementToRemove.remove();
	});
	$("#increasesizebutton1").click(function() {
		var imgheight = $("#people_1").height;
		if (imgheight<1000) {
			imgheight+=200;
			$("#people_1").height(imgheight);
		}
	});
	$("#decreasesizebutton1").click(function() {
		var imgheight = $("#people_1").height;
		if (imgheight>400) {
			imgheight-=200;
			$("#people_1").height(imgheight);
		}
	});

	//image 2 functions________________________________________
	$("#people_2").click(function(e) {
		numClicks2++;
		$("#numpeoplefield2").val(numClicks2);
		console.log(numClicks2);
		$("#peoplecount2").text(numClicks2);
		var newDomElement = $("<div class='marker'></div>");
		newDomElement.css("left", (e.pageX-3)+"px");
		newDomElement.css("top", (e.pageY-3)+"px");
		$("body").append(newDomElement);
		elementHistory2.push(newDomElement);
		var currentHistory = $("#history2");
		currentHistory.append("|"+e.PageX+","+e.PageY+"|");
		$("#history2").val(currentHistory);
	});
	$("#undobutton2").click(function() {
		numClicks2--;
		$("#numpeoplefield2").val(numClicks2);
		$("#peoplecount2").text(numClicks2);
		var elementToRemove = elementHistory2.pop();
		elementToRemove.remove();
	});
	$("#increasesizebutton2").click(function() {
		var imgheight = $("#people_2").height;
		if (imgheight<1000) {
			imgheight+=200;
			$("#people_2").height(imgheight);
		}
	});
	$("#decreasesizebutton2").click(function() {
		var imgheight = $("#people_2").height;
		if (imgheight>400) {
			imgheight-=200;
			$("#people_2").height(imgheight);
		}
	});

	//image 3 functions________________________________________
	$("#people_3").click(function(e) {
		numClicks3++;
		$("#numpeoplefield3").val(numClicks3);
		console.log(numClicks3);
		$("#peoplecount3").text(numClicks3);
		var newDomElement = $("<div class='marker'></div>");
		newDomElement.css("left", (e.pageX-3)+"px");
		newDomElement.css("top", (e.pageY-3)+"px");
		$("body").append(newDomElement);
		elementHistory3.push(newDomElement);
		var currentHistory = $("#history3");
		currentHistory.append("|"+e.PageX+","+e.PageY+"|");
		$("#history3").val(currentHistory);
	});
	$("#undobutton3").click(function() {
		numClicks3--;
		$("#numpeoplefield3").val(numClicks3);
		$("#peoplecount3").text(numClicks3);
		var elementToRemove = elementHistory3.pop();
		elementToRemove.remove();
	});
	$("#increasesizebutton3").click(function() {
		var imgheight = $("#people_3").height;
		if (imgheight<1000) {
			imgheight+=200;
			$("#people_3").height(imgheight);
		}
	});
	$("#decreasesizebutton3").click(function() {
		var imgheight = $("#people_3").height;
		if (imgheight>400) {
			imgheight-=200;
			$("#people_3").height(imgheight);
		}
	});

	//image 4 functions________________________________________
	$("#people_4").click(function(e) {
		numClicks4++;
		$("#numpeoplefield4").val(numClicks4);
		console.log(numClicks4);
		$("#peoplecount4").text(numClicks4);
		var newDomElement = $("<div class='marker'></div>");
		newDomElement.css("left", (e.pageX-3)+"px");
		newDomElement.css("top", (e.pageY-3)+"px");
		$("body").append(newDomElement);
		elementHistory4.push(newDomElement);
		var currentHistory = $("#history4");
		currentHistory.append("|"+e.PageX+","+e.PageY+"|");
		$("#history4").val(currentHistory);
	});
	$("#undobutton4").click(function() {
		numClicks4--;
		$("#numpeoplefield4").val(numClicks4);
		$("#peoplecount4").text(numClicks4);
		var elementToRemove = elementHistory4.pop();
		elementToRemove.remove();
	});
	$("#increasesizebutton4").click(function() {
		var imgheight = $("#people_4").height;
		if (imgheight<1000) {
			imgheight+=200;
			$("#people_4").height(imgheight);
		}
	});
	$("#decreasesizebutton4").click(function() {
		var imgheight = $("#people_4").height;
		if (imgheight>400) {
			imgheight-=200;
			$("#people_4").height(imgheight);
		}
	});

	//image 5 functions________________________________________
	$("#people_5").click(function(e) {
		numClicks5++;
		$("#numpeoplefield5").val(numClicks5);
		console.log(numClicks5);
		$("#peoplecount5").text(numClicks5);
		var newDomElement = $("<div class='marker'></div>");
		newDomElement.css("left", (e.pageX-3)+"px");
		newDomElement.css("top", (e.pageY-3)+"px");
		$("body").append(newDomElement);
		elementHistory5.push(newDomElement);
		var currentHistory = $("#history5");
		currentHistory.append("|"+e.PageX+","+e.PageY+"|");
		$("#history5").val(currentHistory);
	});
	$("#undobutton5").click(function() {
		numClicks5--;
		$("#numpeoplefield5").val(numClicks5);
		$("#peoplecount5").text(numClicks5);
		var elementToRemove = elementHistory5.pop();
		elementToRemove.remove();
	});
	$("#increasesizebutton5").click(function() {
		var imgheight = $("#people_5").height;
		if (imgheight<1000) {
			imgheight+=200;
			$("#people_5").height(imgheight);
		}
	});
	$("#decreasesizebutton5").click(function() {
		var imgheight = $("#people_5").height;
		if (imgheight>400) {
			imgheight-=200;
			$("#people_5").height(imgheight);
		}
	});

	//image 6 functions________________________________________
	$("#people_6").click(function(e) {
		numClicks6++;
		$("#numpeoplefield6").val(numClicks6);
		console.log(numClicks6);
		$("#peoplecount6").text(numClicks6);
		var newDomElement = $("<div class='marker'></div>");
		newDomElement.css("left", (e.pageX-3)+"px");
		newDomElement.css("top", (e.pageY-3)+"px");
		$("body").append(newDomElement);
		elementHistory6.push(newDomElement);
		var currentHistory = $("#history6");
		currentHistory.append("|"+e.PageX+","+e.PageY+"|");
		$("#history6").val(currentHistory);
	});
	$("#undobutton6").click(function() {
		numClicks6--;
		$("#numpeoplefield6").val(numClicks6);
		$("#peoplecount6").text(numClicks6);
		var elementToRemove = elementHistory6.pop();
		elementToRemove.remove();
	});
	$("#increasesizebutton6").click(function() {
		var imgheight = $("#people_6").height;
		if (imgheight<1000) {
			imgheight+=200;
			$("#people_6").height(imgheight);
		}
	});
	$("#decreasesizebutton6").click(function() {
		var imgheight = $("#people_6").height;
		if (imgheight>400) {
			imgheight-=200;
			$("#people_6").height(imgheight);
		}
	});
})
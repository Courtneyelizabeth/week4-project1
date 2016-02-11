$(document).ready(function(){
 //Question #1 (first part):
 $("#hover").mouseenter(function(){
   $("#hover").css("background-color", "red")
 });

$("#hover").click(function(){
	$(this).toggleClass("green")
});
//Question #2:
$(".hideMe").click(function(){
	$(this).hide()
});
//Question #3:
$(".changeColor").click(function(){
	$("ul li:nth-child(3)").css("color", "#8A2BE2");
});
//Question #4:
$("#removeLi").click(function(){
	$("ul li:nth-child(2)").remove()
});
//Question #5:
$("ul li:nth-child(4)").click(function(){
	$(this).clone().appendTo(this);
});
//Question #6:
$("ul li:last-child").click(function(){
	$(this).css("font-size", "40px");
	$("ul li").hide();
	$(this).show();
});
//Question #7:
var puppy = $(".cute")
$(".cute").click(function(){
	for (var i=0; i<20; i++){
		puppy.clone().appendTo(".clones");
	}
});
//Question #8:
 $("body").dblclick(function(){
 	$("#makeSquare").css("width", "120px");
 	$("#makeSquare").css("border-radius", "0px");
 });
 //Question #9:
 $("#dontClick").click(function(){
 	 alert("Hey, don't click!!");
 })
 //Question #10;
$(".black").click(function(){
	$("body").removeClass();
	$("body").addClass("black");	
});
$(".wood").click(function(){
	$("body").removeClass();
	$("body").addClass("wood");
});
$(".chaos").click(function(){
	$("body").removeClass();
	$("body").addClass("chaos");
});
$(".restore").click(function(){
	$("body").removeClass();
});
//end
});

$(document).ready(function(){
console.log("jquery is working");


$("#h-da").click(function(){
	$('#MscPopup').addClass("active");
	$('#MscOverlay').addClass('show');
	$('body').css('overflow','hidden');
	});
$('#MscPopupClose').click(function(){
	$('#MscPopup').removeClass("active");
	$('#MscOverlay').removeClass('show');
	$('body').css('overflow','auto');
});
$("#OU").click(function(){
	$('#BEPopup').addClass("active");
	$('#BEOverlay').addClass('show');
	$('body').css('overflow','hidden');
	});
$('#BEPopupClose').click(function(){
	$('#BEPopup').removeClass("active");
	$('#BEOverlay').removeClass('show');
	$('body').css('overflow','auto');
});
$("#Narayana").click(function(){
	$('#InterPopup').addClass("active");
	$('#InterOverlay').addClass('show');
	$('body').css('overflow','hidden');
	});
$('#InterPopupClose').click(function(){
	$('#InterPopup').removeClass("active");
	$('#InterOverlay').removeClass('show');
	$('body').css('overflow','auto');
});
});
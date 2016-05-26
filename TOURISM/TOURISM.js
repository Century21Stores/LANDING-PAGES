// THIS GOES IN THE "SCRIPT CONTENT AREA" 
 
 jrios@c21stores.com 
 05262016
function showDetails(element){
	var parent = element.parentNode.nextElementSibling;
// 	console.log(parent);
	if (($(window).width() > 641) && ($(window).width() < 701)) {
   		parent.classList.toggle("jmrv_mobilePor");
	}
	else if ($(window).width() < 640){
   		parent.classList.toggle("jmrv_mobilePor");
	}
	else{
	console.log(parent);
	}
}
function hideInfo(e){
	e.classList.remove("jmrv_mobilePor");
}

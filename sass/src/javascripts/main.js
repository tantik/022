$(document).ready(initPage);
function initPage(){
	initFooter();
}

function initFooter() {
	jQuery(document).on("scroll",function(){
		if (jQuery(window).scrollTop() > 200){
			jQuery('#footer').addClass('visible');
		}else{
			jQuery('#footer').removeClass('visible');
		}
	});
}

$(document).ready(initPage);
function initPage(){
	initFooter();
	initScrol();
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
function initScrol() {
	$(".links-blocks").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top -10;
		$('body,html').animate({scrollTop: top}, 1500);
	});

}
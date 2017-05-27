$(document).ready(function(){
	
	// on click, scroll to projects
	$("#scroll-projects").click(function() {
		$("html, body").animate({scrollTop: $("#project-ow").offset().top }, 600);
		return false;
	});

	// on click, scroll to top
	$("#scroll-top").click(function() {
		$("html, body").animate({scrollTop : 0}, 600);
		return false;
	});
	
});
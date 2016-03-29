(function($){
	// This is where you will write your function for the programming challenge
	// Do not commit console.log statements
	// Use ajax to reach the api endpoint
	// Whether or not you use jQuery, you still have to fix the jQuery errors. Removing jQuery is not fixing the problem.

	var data = null;
	var cur = null;

	$(".titleBtn").click(function(){
		var item = Math.floor(Math.random()*14);

		if(data == null) {

			$.ajax({
				type:"GET",
				url:"http://www.mattbowytz.com/simple_api.json",
				dataType:"json",
				data:"data=quizdata",
				success:function(returned){
					data = returned.data;
					$("#title").html(data[item]);
					cur = data[item];
				}
			});

			$(this).html("Change It");
			$(".keepBtn").fadeIn("fast");
		} else {
			$("#title").html(data[item]);
			cur = data[item];
		}
		
	});

	$(".keepBtn").click(function(){
		document.cookie = "title=" + cur + ";";
	});

	var $mouseover = $('.mouseover');
	var $click     = $('.click');
	var $sub       = $('.submit');
	var $timeout   = $('.timeout');
	var $submit    = $('.submit');

	$timeout.hide(0);
		$(".keepBtn").hide(0);

	$mouseover.on('mouseover', function() {
		$(this).html('Scrooge McDuck!');
		$(this).height($(this).height() + 50);
	});

	$click.on('click', function() {
		$(this).html('Peace Out!');
		$(this).fadeOut(1500);
		return false;
	});

	$submit.on('submit', function(e) {
		e.preventDefault();
		if ($(this).find('input[type="text"]').val() !== '') {
			$.each($(this).find('input'), function() {
				$(this).fadeOut('slow');
			});
			$(this).append('<h2>Congratulations! You\'ve entered some text!</h2>');
		}
	});

	$(document).ready( function() {

		var title = document.cookie.split("=");
		
		if(title[1] != undefined) {
			$("#title").html(title[1]);
		}


		setTimeout(function() {
			$timeout.fadeIn('slow');
		}, 1000);
	});

})(jQuery);

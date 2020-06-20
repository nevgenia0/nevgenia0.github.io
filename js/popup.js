$(function(){

	const disableScroll = function()
	{
		$("body").addClass("fixed");
	}

	const enableScroll = function()
	{
		$("body").removeClass("fixed");
	}

	$('.number-button')
		.click(function(){
			$('#popup-container').fadeIn(400, disableScroll);
			$('#popup').animate({
				width: '600px',
				height: '500px'
			}, 400);
		});
	$('.more-button')
	.click(function(){
		$('#popup-container').fadeIn(400, disableScroll);
		$('#popup').animate({
			width: '600px',
			height: '500px'
		}, 400);
	});
	$('#popup-container').click(function(event){
		if(event.target == this){
			$(this).fadeOut(400, enableScroll);
			$('#popup').animate({
				width : 0,
				heigth : 0
			}, 400);
		}
	});
});
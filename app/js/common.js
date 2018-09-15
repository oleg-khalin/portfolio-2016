$(function() {
	var mainAnimationDelay = 2,
			headerDelay = .5,
			headerFillDelay = .2,
			headerStager = 200,
			headerLetterDelay = 200;

	var headerWordStager = 0;
	// Drawing svg on load page
	if($("div").is(".home-page"))
	{
		new DrawFillSVG({
			elementId: "logo-home-svg-index1",
			delay: mainAnimationDelay
		});
		setTimeout(function(){
			for(var i = 2; i < 11; i++)
				$('.logo-home-svg-index' + i).css({'opacity': (0.24 - (0.02*i))})
		}, mainAnimationDelay * 1000);
		setTimeout(function () {
			$('.lion-wrap').css({'opacity': '1'});
		}, mainAnimationDelay * 500);
		// Home page parallax
		setTimeout(function () {
			$(document).on('mousemove', '.home-page', function (event) {
				// Parallax for round shape
				var roundx = (parseInt(event.pageX - $(window).width() / 2))/150;
				var roundy = -(parseInt(event.pageY - $(window).height() / 2))/50;
				var roundz = parseInt(event.pageX)/65;
				var roundr2 = -parseInt(event.pageY - $(window).height() / 2)/60;
				var roundr1 = parseInt(event.pageX - $(window).width() / 2)/60;
				$('.logo-home-svg-index1').css({'transform': ' perspective(500px) translate3d(' + roundx + 'px, ' + roundy + 'px, ' + roundz + 'px) rotate3d(0, 1, 0, ' + roundr1 + 'deg) rotate3d(1, 0, 0, ' + roundr2 + 'deg)'});
				setTimeout(function () {
					$('.logo-home-svg-index2').css({'transform': ' perspective(500px) translate3d(' + roundx + 'px, ' + roundy + 'px, ' + roundz + 'px) rotate3d(0, 1, 0, ' + roundr1 + 'deg) rotate3d(1, 0, 0, ' + roundr2 + 'deg)'});
				}, 50);
				setTimeout(function () {
					$('.logo-home-svg-index3').css({'transform': ' perspective(500px) translate3d(' + roundx + 'px, ' + roundy + 'px, ' + roundz + 'px) rotate3d(0, 1, 0, ' + roundr1 + 'deg) rotate3d(1, 0, 0, ' + roundr2 + 'deg)'});
				}, 100);
				setTimeout(function () {
					$('.logo-home-svg-index4').css({'transform': ' perspective(500px) translate3d(' + roundx + 'px, ' + roundy + 'px, ' + roundz + 'px) rotate3d(0, 1, 0, ' + roundr1 + 'deg) rotate3d(1, 0, 0, ' + roundr2 + 'deg)'});
				}, 150);
				setTimeout(function () {
					$('.logo-home-svg-index5').css({'transform': ' perspective(500px) translate3d(' + roundx + 'px, ' + roundy + 'px, ' + roundz + 'px) rotate3d(0, 1, 0, ' + roundr1 + 'deg) rotate3d(1, 0, 0, ' + roundr2 + 'deg)'});
				}, 200);
				setTimeout(function () {
					$('.logo-home-svg-index6').css({'transform': ' perspective(500px) translate3d(' + roundx + 'px, ' + roundy + 'px, ' + roundz + 'px) rotate3d(0, 1, 0, ' + roundr1 + 'deg) rotate3d(1, 0, 0, ' + roundr2 + 'deg)'});
				}, 250);
				setTimeout(function () {
					$('.logo-home-svg-index7').css({'transform': ' perspective(500px) translate3d(' + roundx + 'px, ' + roundy + 'px, ' + roundz + 'px) rotate3d(0, 1, 0, ' + roundr1 + 'deg) rotate3d(1, 0, 0, ' + roundr2 + 'deg)'});
				}, 300);
				setTimeout(function () {
					$('.logo-home-svg-index8').css({'transform': ' perspective(500px) translate3d(' + roundx + 'px, ' + roundy + 'px, ' + roundz + 'px) rotate3d(0, 1, 0, ' + roundr1 + 'deg) rotate3d(1, 0, 0, ' + roundr2 + 'deg)'});
				}, 350);
				setTimeout(function () {
					$('.logo-home-svg-index9').css({'transform': ' perspective(500px) translate3d(' + roundx + 'px, ' + roundy + 'px, ' + roundz + 'px) rotate3d(0, 1, 0, ' + roundr1 + 'deg) rotate3d(1, 0, 0, ' + roundr2 + 'deg)'});
				}, 400);
				setTimeout(function () {
					$('.logo-home-svg-index10').css({'transform': ' perspective(500px) translate3d(' + roundx + 'px, ' + roundy + 'px, ' + roundz + 'px) rotate3d(0, 1, 0, ' + roundr1 + 'deg) rotate3d(1, 0, 0, ' + roundr2 + 'deg)'});
				}, 450);
				if($(window).width() > 480)
				{
					$('#home-header-index1').css({'transform': ' perspective(500px) translate3d(' + roundx/2 + 'px, ' + roundy/2 + 'px, ' + roundz/2 + 'px) rotate3d(0, 1, 0, ' + roundr1 + 'deg) rotate3d(1, 0, 0, ' + roundr2 + 'deg)'});
					$('#home-header-index2').css({'transform': ' perspective(500px) translate3d(' + roundx/2 + 'px, ' + roundy/2 + 'px, ' + roundz/2+ 'px) rotate3d(0, 1, 0, ' + roundr1 + 'deg) rotate3d(1, 0, 0, ' + roundr2 + 'deg)'});
					$('#home-header-index3').css({'transform': ' perspective(500px) translate3d(' + roundx/2 + 'px, ' + roundy/2 + 'px, ' + roundz/2 + 'px) rotate3d(0, 1, 0, ' + roundr1 + 'deg) rotate3d(1, 0, 0, ' + roundr2 + 'deg)'});
					$('#home-header-index4').css({'transform': ' perspective(500px) translate3d(' + roundx/2 + 'px, ' + roundy/2 + 'px, ' + roundz/2 + 'px) rotate3d(0, 1, 0, ' + roundr1 + 'deg) rotate3d(1, 0, 0, ' + roundr2 + 'deg)'});
					$('#home-header-index5').css({'transform': ' perspective(500px) translate3d(' + roundx/2 + 'px, ' + roundy/2 + 'px, ' + roundz/2 + 'px) rotate3d(0, 1, 0, ' + roundr1 + 'deg) rotate3d(1, 0, 0, ' + roundr2 + 'deg)'});
					$('#home-header-index6').css({'transform': ' perspective(500px) translate3d(' + roundx/2 + 'px, ' + roundy/2 + 'px, ' + roundz/2 + 'px) rotate3d(0, 1, 0, ' + roundr1 + 'deg) rotate3d(1, 0, 0, ' + roundr2 + 'deg)'});
				}
				// Parallax for lion
				var lionx = 0.04 * parseInt(event.pageX - $(window).width() / 2);
				var liony = -0.04 * parseInt(event.pageY - $(window).height() / 2);
				var helpheight = -($('.lion-image-1-1').height()/2);
				var helpwidth = -($('.lion-image-1-1').width()/2);
				$('.lion-image-1-1').css({'transform': ' translate(' + (helpwidth + 0.07 * lionx) + 'px, ' + (helpheight + 0.07 * liony) + 'px) rotateY(' + lionx + 'deg) rotateX(' + liony + 'deg)'});
				$('.lion-image-1-2').css({'transform': ' translate(' + (helpwidth + 0.11 * lionx) + 'px, ' + (helpheight + 0.11 * liony) + 'px) rotateY(' + 0.9 * lionx + 'deg) rotateX(' + 0.9 * liony + 'deg)'});
				$('.lion-image-eyes').css({'transform': ' translate(' + (helpwidth + 0.2 * lionx) + 'px, ' + (helpheight - 0.15 * liony) + 'px) rotateY(' + 0.9 * lionx + 'deg) rotateX(' + 0.9 * liony + 'deg)'});
				$('.lion-image-2').css({'transform': ' translate(' + (helpwidth + 0.2 * (lionx + 10)) + 'px, ' + (helpheight + 0.4 * liony) + 'px) rotateY(' + 0.9 * lionx + 'deg) rotateX(' + 0.9 * liony + 'deg)'});
				$('.lion-image-3').css({'transform': ' translate(' + (helpwidth + 0.1 * (lionx + 10)) + 'px, ' + (helpheight + 0.6 * liony) + 'px) rotateY(' + 0.9 * lionx + 'deg) rotateX(' + 0.9 * liony + 'deg)'});
				$('.lion-image-4').css({'transform': ' translate(' + (helpwidth + 0.1 * (lionx + 10)) + 'px, ' + (helpheight + 0.6 * liony) + 'px) rotateY(' + 0.9 * lionx + 'deg) rotateX(' + 0.9 * liony + 'deg)'});
			});
		}, mainAnimationDelay*1000);
		// Drawing header
		$('.home-header').find('svg').each(function(i) {
			$(this).attr('id', 'home-header-index' + (i + 1));
		});
		headerWordStager = mainAnimationDelay * 500;
		setTimeout(function() {
			new DrawFillSVG({
				elementId: "home-header-index1",
				delay: headerDelay,
				filldelay: headerFillDelay,
				stager: headerStager
			});
		}, headerWordStager);
		headerWordStager += headerLetterDelay * 5;
		setTimeout(function() {
			new DrawFillSVG({
				elementId: "home-header-index2",
				delay: headerDelay,
				filldelay: headerFillDelay,
				stager: headerStager
			});
		}, headerWordStager);
		headerWordStager += headerLetterDelay * 2;
		setTimeout(function() {
			new DrawFillSVG({
				elementId: "home-header-index3",
				delay: headerDelay,
				filldelay: headerFillDelay,
				stager: headerStager
			});
		}, headerWordStager);
		headerWordStager += headerLetterDelay * 10;
		setTimeout(function() {
			new DrawFillSVG({
				elementId: "home-header-index4",
				delay: headerDelay,
				filldelay: headerFillDelay,
				stager: headerStager
			});
		}, headerWordStager);
		headerWordStager += headerLetterDelay * 2;
		setTimeout(function() {
			new DrawFillSVG({
				elementId: "home-header-index5",
				delay: headerDelay,
				filldelay: headerFillDelay,
				stager: headerStager
			});
		}, headerWordStager);
		headerWordStager += headerLetterDelay * 4;
		setTimeout(function() {
			new DrawFillSVG({
				elementId: "home-header-index6",
				delay: headerDelay,
				filldelay: headerFillDelay,
				stager: headerStager
			});
		}, headerWordStager);	
	}




	
	// Form
	$("form.callback").submit(function() {
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: th.serialize()
		}).done(function() {
			$(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
			setTimeout(function() {
				$(th).find('.success').removeClass('active').fadeOut();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});







	$('#fullpage').fullpage();



	if($("div").is(".projects-page"))
	{
		// console.log($(window).width()/randomInteger(-4,5));
		$("#fullpage .section .project-image img:nth-child(1)").css({"transform": "translate(" + $(window).width()/randomInteger(-4,5) + "px, 50px)"});
		$("#fullpage .section .project-image img").each(function() {
			$(this).css({"transform": "translate(" + $(window).width()/randomInteger(-4,5) + "px, 50px)"});
		});
	}

});

function randomInteger(min, max) {
	rand = Math.floor(Math.random() * (max-min)) + min;
	// console.log(rand);
	if(rand == 1 || rand == -1 || rand == 0)
		return randomInteger(min, max);
		// console.log("error");
	else
		return rand;
}
$(document).ready(function() {
		$('.nav-toggle').on('click', function(){
			$('.collapse').collapse("show");
			//$('html').addClass('mm-slidein');
		});
		
		$('.navbar-toggle').on('click', function(){
			$('.collapse').collapse("hide");
			//$('html').removeClass('mm-slidein');
		});
		

            var didScroll;
            var lastScrollTop = 0;
            var delta = 5;
            var navbarHeight = 100;
            var scrollPos = 0;

            $(window).scroll(function(event) {
                didScroll = true;

                var st = $(window).scrollTop();

                if (Math.abs(lastScrollTop - st) <= delta)
                    return;
                if (st > navbarHeight) {
                    // Scroll Down
					$('html').removeClass('nav-down').addClass('nav-up');
                } else {
                    // Scroll Up
                    //if (st + $(window).height() < $(document).height()) {
                        //$('.warning_area').css('top', '80px');
                        if (st < 130)
                            $('html').removeClass('nav-up').addClass('nav-down');
                    //}
                }
                lastScrollTop = st;

            });
			
			$('#userSetting').on('click', function(){
				$(this).parent().addClass("open");
			});
			

});
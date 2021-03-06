$(document).ready(function(){

	/* =========================
	   Detect Mobile Device
	============================*/
	var isMobile = {
	    Android: function() {
	        return navigator.userAgent.match(/Android/i);
	    },
	    BlackBerry: function() {
	        return navigator.userAgent.match(/BlackBerry/i);
	    },
	    iOS: function() {
	        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	    },
	    Opera: function() {
	        return navigator.userAgent.match(/Opera Mini/i);
	    },
	    Windows: function() {
	        return navigator.userAgent.match(/IEMobile/i);
	    },
	    any: function() {
	        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	    }
	};

	/* ===================================
		Smooth Scroll for Original Navbar
	======================================*/
	$(function() {
	  $('.the-origin-header .navbar-nav li a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top - 50
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});


	/* ===============
	   Dropdown Menu
	==================*/
	$('ul.main-nav > li:has(ul)').addClass("dropdown");

    function dequeue(){
	$(this).dequeue();
	};

	$('ul.main-nav > li > a').click(function() {

		var checkElement = $(this).next();

		$('ul.main-nav li').removeClass('active');
		$(this).closest('li').addClass('active');

		if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
			$(this).closest('li').removeClass('active');
			checkElement.slideUp(200, dequeue);
		}

		if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
			$('ul.main-nav ul:visible').slideUp('normal');
			checkElement.slideDown(200, dequeue);
		}

		if (checkElement.is('ul')) {
			return false;
		} else {
			return true;
		}
	});


	/* ===========================
	   Custom Smooth Scroll For an Anchor
	==============================*/
	$(function() {
	  $('a.scroll-to[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top - 50
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});

	/* ===========================
	   Scroll to Top Button
	==============================*/
	$(window).scroll(function() {
        if($(this).scrollTop() > 100){
            $('#to-top').stop().animate({
                bottom: '30px'
                }, 750);
        }
        else{
            $('#to-top').stop().animate({
               bottom: '-100px'
            }, 750);
        }
    });

    $('#to-top').click(function() {
        $('html, body').stop().animate({
           scrollTop: 0
        }, 750, function() {
           $('#to-top').stop().animate({
               bottom: '-100px'
           }, 750);
        });
    });

    /* ==========================
	   Progress Bar Animation
	=============================*/
	var skillbar = $('#skillbar').waypoint({
		handler: function() {
			$('.progress-bar').each(function(){
				$(this).animate({
					width:$(this).attr('data-percent')
				},500)
			})
		},
		offset: '500%'
	});


	/* =================================
	   Add Custom Class to Open Toggle Panel
	====================================*/
	$('.panel-heading a').click(function() {

		var clickElement = $(this);

		if (clickElement.parents('.panel-heading').is('.panel-active')) {
			$('.panel-heading').removeClass('panel-active');
		} else {
			$('.panel-heading').removeClass('panel-active');
			clickElement.parents('.panel-heading').addClass('panel-active');
		}
	});


	/* ==================================
	   Contact Form Validation
	=====================================*/
    $('#submit').click(function(e){

        // Stop form submission & check the validation
        e.preventDefault();

        // Variable declaration
        var error = false;
        var fname = $('#fname').val();
        var email = $('#email').val();
        var subject = $('#subject').val();
        var message = $('#message').val();

     	// Form field validation
        if(fname.length == 0){
            var error = true;
            $('#fname').parent('div').addClass('field-error');
        }else{
            $('#fname').parent('div').removeClass('field-error');
        }
        if(email.length == 0 || email.indexOf('@') == '-1'){
            var error = true;
            $('#email').parent('div').addClass('field-error');
        }else{
            $('#email').parent('div').removeClass('field-error');
        }
        if(subject.length == 0){
            var error = true;
            $('#subject').parent('div').addClass('field-error');
        }else{
            $('#subject').parent('div').removeClass('field-error');
        }
        if(message.length == 0){
            var error = true;
            $('#message').parent('div').addClass('field-error');
        }else{
            $('#message').parent('div').removeClass('field-error');
        }

        if(error == true){
        	$('#error-notification').addClass('show-up');
        }else{
           $('#error-notification').removeClass('show-up');
        }

        if(error == false){
            $.post("contactform.php", $("#contact-form").serialize(),function(result){
                if(result == 'sent'){
                    $('#success-notification').addClass('show-up');
                    $('.submit-btn').addClass('disabled');
                }
            });
        }
    });

    /* ==================================
	   Hero Form Validation
	=====================================*/
	$('#hero-submit').click(function(e){

        // Stop form submission & check the validation
        e.preventDefault();

        // Variable declaration
        var error = false;
        var fname = $('#hero-fname').val();
        var email = $('#hero-email').val();
        var username = $('#hero-username').val();

     	// Form field validation
        if(fname.length == 0){
            var error = true;
            $('#hero-fname').parent('div').addClass('field-error');
        }else{
            $('#hero-fname').parent('div').removeClass('field-error');
        }
        if(email.length == 0 || email.indexOf('@') == '-1'){
            var error = true;
            $('#hero-email').parent('div').addClass('field-error');
        }else{
            $('#hero-email').parent('div').removeClass('field-error');
        }
        if(username.length == 0){
            var error = true;
            $('#hero-username').parent('div').addClass('field-error');
        }else{
            $('#hero-username').parent('div').removeClass('field-error');
        }

        if(error == true){
        	$('#hero-error-notification').addClass('show-up');
        }else{
           $('#hero-error-notification').removeClass('show-up');
        }

        if(error == false){
            $.post("hero-form.php", $("#register-form").serialize(),function(result){
                if(result == 'sent'){
                    $('#hero-success-notification').addClass('show-up');
                    $('#hero-submit').addClass('disabled');
                }
            });
        }
    });


	// Function to close the Notification
    $('a.notification-close').click(function(){
	    $(this).parent('div').fadeOut(200);
    });


	/* ==========================
	   Custom Popover
	   (for Language Selection)
	=============================*/
    $("[data-toggle=popover]").popover();


	/* ===================================
	   Change Footer Background
	   (when Social Icons hovered)

	   and

	   Activate Stellar JS on deskton only
	======================================*/
	if(!isMobile.any()) {
		$(".footer-social .icon-facebook-with-circle").hover(function(){$("#main-footer").toggleClass("footer-facebook-hovered")});
		$(".footer-social .icon-twitter-with-circle").hover(function(){$("#main-footer").toggleClass("footer-twitter-hovered")});
		$(".footer-social .icon-linkedin-with-circle").hover(function(){$("#main-footer").toggleClass("footer-linkedin-hovered")});
		$(".footer-social .icon-instagram-with-circle").hover(function(){$("#main-footer").toggleClass("footer-instagram-hovered")});
		$(".footer-social .icon-google-with-circle").hover(function(){$("#main-footer").toggleClass("footer-google-hovered")});
		$(".footer-social .icon-dribbble-with-circle").hover(function(){$("#main-footer").toggleClass("footer-dribbble-hovered")});
		$(".footer-social .icon-pinterest-with-circle").hover(function(){$("#main-footer").toggleClass("footer-pinterest-hovered")});
		$(".footer-social .icon-vimeo-with-circle").hover(function(){$("#main-footer").toggleClass("footer-vimeo-hovered")});
		$(window).stellar({
			responsive: false,
	        horizontalScrolling: false,
	        parallaxBackgrounds: true,
	        parallaxElements: true,
	        hideDistantElements: true
		});
	}

	/* ===========================
	   jQuery One Page Navigation
	==============================*/
	// One Page Nav for Main Nav (Slide Nav)
	$('#main-nav').onePageNav({
	    filter: ':not(.external)'
	});

	// One Page Nav for Navbar
	$('.header-clone .navbar-nav').onePageNav({
	    filter: ':not(.external)'
	});

});




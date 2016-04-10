
/* Message Fade In */
$(document).ready(function () {
   $('.welcome').fadeIn(2000);    
});

/* Smooth Transition to links preceded by hashtag */
$(document).ready(function() {
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});

/* Fixed Sidebar begins to scroll when it reaches a point midway down the page */


$(window).scroll(function() {


    if($(".slides").scrollTop() >= 400){
        $('#sidebar').addClass('scrolling');
    } else {
        $('#sidebar').removeClass('scrolling');
    }
});
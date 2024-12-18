jQuery(document).ready(function($){

	$(window).scroll(function(){
		if($(this).scrollTop() >= 100){
			$('header').addClass('fixed');
		}else{
			$('header').removeClass('fixed');
		}
	});



	$('.slickslider').slick({
		dots: false,
	  	infinite: true,
	  	slidesToShow: 5,
	  	slidesToScroll: 5,
	  	autoplay: true,
  		autoplaySpeed: 2000,
  		arrows: false,
	  	responsive: [
					    {
					      breakpoint: 1280,
					      settings: {
					        slidesToShow: 4,
					        slidesToScroll: 4
					      }
					    },
					    {
					      breakpoint: 800,
					      settings: {
					        slidesToShow: 2,
					        slidesToScroll: 2
					      }
					    },
					    {
					      breakpoint: 480,
					      settings: {
					        slidesToShow: 1,
					        slidesToScroll: 1
					      }
					    }
				  	]
	});



	var createdate = new Date();
	var getyear = createdate.getFullYear();
	var getyeardiv = document.getElementById('year');
	getyeardiv.innerHTML = getyear;



	$('a.showmenu').click(function(){
		$('nav').fadeIn();
		$('body').addClass('disablescroll');
		$('a.hidemenu').show();
	});
	$('a.hidemenu').click(function(){
		$('nav').fadeOut();
		$('body').removeClass('disablescroll');
		$(this).hide();
	});

	var viewportWidth = $(window).width();
    if (viewportWidth < 1200) {
    	$("nav a").click(function() {
			$("nav").fadeOut();
			$(".hidemenu").hide();
			$(".showmenu").show();
			$('body').removeClass('disablescroll');
		});
    }
	var lastId,topMenu=$("#headnav"),topMenuHeight=topMenu.outerHeight()+135,menuItems=topMenu.find("a").not("li.phone a"),scrollItems=menuItems.map(function(){var t=$($(this).attr("href"));if(t.length)return t});menuItems.click(function(t){var e=$(this).attr("href"),n="#"===e?0:$(e).offset().top-120;$("html, body").stop().animate({scrollTop:n},1200),t.preventDefault()}),$(window).scroll(function(){var t=$(this).scrollTop()+topMenuHeight,e=scrollItems.map(function(){if($(this).offset().top<t)return this}),n=(e=e[e.length-1])&&e.length?e[0].id:"";lastId!==n&&(lastId=n,menuItems.parent().removeClass("active").end().filter("[href='#"+n+"']").parent().addClass("active"))});

});
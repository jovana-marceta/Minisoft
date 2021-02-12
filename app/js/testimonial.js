$('.testimonial-container').slick({
	infinite: true,
	slidesToScroll: 1,
	arrows: false,
	slidesToShow: 2,
	dots: true,
	responsive: [
		{
			breakpoint: 768,
			settings: {
			  slidesToShow: 1,
			  arrows: false
			}
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 1,
			arrows: false
		  }
		}
	]
});

$('.projects-container').slick({
	infinite: true,
	slidesToScroll: 1,
	arrows: true,
	slidesToShow: 4,
	dots: false,
	responsive: [
		{
			breakpoint: 768,
			settings: {
			  slidesToShow: 2,
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
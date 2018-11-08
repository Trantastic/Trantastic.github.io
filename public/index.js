$(document).ready(function(){

	var slideUp = {
		distance: "100px",
		origin: "bottom",
		opacity: 0,
		delay: 500
	};

	ScrollReveal({ viewOffset: { bottom: 200}}).reveal(".slide-up", slideUp);
});
'use strict';

(function($){
	$(document).ready(function() {

		// //Masonry
		// $('.sservices').masonry({
		// 	columnWidth: 1,
		// 	itemSelector: '.services__link',
		// 	horizontalOrder: true,
		// });

		//Slider
		$('.slider__items').slick({
			appendArrows: $('.slider__arrows'),
			prevArrow: '<div class="slider__prev"></div>',
			nextArrow: '<div class="slider__next"></div>',
			autoplay: true,
			autoplaySpeed: 2000,
			slidesToShow: 4,
			slidesToScroll: 1,
			infinite: false,
			responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					autoplay: false,
					infinite: true,
				}
			},
			]
		});
	});

	//Price events
	$('.price__link--event').on('mouseover', function() {
		$('.price__emit--color--white').css('color', '#fff');
		$('.price__emit--color--black').css('color', '#0e1d32');
	});
	$('.price__link--event').on('mouseout', function() {
		$('.price__emit--color--white').css('color', '#A60101');
		$('.price__emit--color--black').css('color', '#A60101');
	});
	$('.price__link--event-1').on('mouseover', function() {
		$('.price__emit--color--black-1').css('color', '#0e1d32');
	});
	$('.price__link--event-1').on('mouseout', function() {
		$('.price__emit--color--black-1').css('color', '#A60101');
	});
	$('.price__link--event-2').on('mouseover', function() {
		$('.price__emit--color--black-2').css('color', '#0e1d32');
	});
	$('.price__link--event-2').on('mouseout', function() {
		$('.price__emit--color--black-2').css('color', '#A60101');
	});
	$('.price__link--event-3').on('mouseover', function() {
		$('.price__emit--color--black-3').css('color', '#0e1d32');
	});
	$('.price__link--event-3').on('mouseout', function() {
		$('.price__emit--color--black-3').css('color', '#A60101');
	});
	

	//Burger-btn
	$('.burger-btn').on('click', function() {
		$(this).toggleClass('burger-btn--move');
		$('.burger-menu').toggleClass('burger-menu--move');
	});

	//Submenu
	$('.submenu').on('click', function() {
		$(this).toggleClass('burger-menu__item--active');
		$('.burger-menu__subitems').toggleClass('burger-menu__subitems--open');
	});

	//GoogleMap
	$(window).load(function(){
		var $mapContainer = $('.coordinates__map')[0];
		var infoWindowContent = $('.coordinates__info').html();
		var mapCenter = {lat: 49.599264, lng: 34.526544};
		var map = new google.maps.Map($mapContainer, {
			center: mapCenter,
			zoom: 17.5,
			disableDefaultUI: true,
			styles: [
			{
				"featureType": "all",
				"stylers": [ { "saturation": 0 }, { "hue": "#e7ecf0" } ]
			},
			{
				"featureType": "road",
				"stylers": [ { "saturation": -70 } ]
			},
			]
			//zoomControl: true,
			//mapTypeId: google.maps.MapTypeId.SATELLITE
		});

		//Marker
		var marker = new google.maps.Marker({
			position: mapCenter,
			map: map,
			title: 'On Top',
			icon: 'images/marker.svg'
		});

		//InfoWindow
		var infowindow = new google.maps.InfoWindow({
			content: infoWindowContent
		});

		//Show InfoWindow
		// infowindow.open(map, marker);
		marker.addListener('click', function(){
			infowindow.open(map, marker);
		});

		//Center Map when resize
		google.maps.event.addDomListener(window, 'resize', function(){
			var center = map.getCenter();
			google.maps.event.trigger(map, 'resize');
			map.setCenter(center);
		});

	});
})(jQuery);

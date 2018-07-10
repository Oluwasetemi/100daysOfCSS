// import $ from 'jquery'
// const $ = require('jquery')

$('.menu-icon').bind('click', function() {
	$(this).toggleClass('active');
	$(this).find('div').removeClass('no-animation');
});
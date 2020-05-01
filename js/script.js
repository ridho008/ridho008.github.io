new WOW().init();

const container = document.getElementById('project');
const jumboImg = document.querySelector('.jumbo-img');
const thumbs = document.querySelectorAll('.thumb');

container.addEventListener('click', function(e){
	// cek apakah yang diklik adalah thumb
	if(e.target.className == 'thumb') {
		jumboImg.src = e.target.src;
		jumboImg.classList.add('fade');
		setTimeout(function(){
			jumboImg.classList.remove('fade');
		}, 500);

		thumbs.forEach(function(thumb){
			thumb.className = 'thumb';
		})
		e.target.classList.add('active');
	}
});


$(document).ready(function(){
// scroll JS
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        window.location.hash = hash;
      });
    } 
  });


// gallery box
  $('.popup-gallery').magnificPopup({
   delegate: 'a',
   type: 'image',
   tLoading: 'Loading image #%curr%...',
   mainClass: 'mfp-img-mobile',
   gallery: {
    enabled: true,
    navigateByImgClick: true,
    preload: [0,1] 
    // Will preload 0 - before current, and 1 after the current image
   },
   image: {
    tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
    titleSrc: function(item) {
     return item.el.attr('title') + '<small></small>';
    }
   }
  });









});


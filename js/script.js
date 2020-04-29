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
})


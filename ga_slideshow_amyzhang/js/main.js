var images = ["../img/img-0.jpg", "../img/img-1.jpg","../img/img-2.jpg","../img/img-3.jpg","../img/img-4.jpg", "../img/img-5.jpg"]
var currentImage = 0;
document.getElementsByClassName('thumb').onclick = thumbPicture;
document.getElementById('prevBtn').onclick = prevPicture;
document.getElementById('nextBtn').onclick = nextPicture;

function thumbPicture (imgNum) {
	var img = document.body.style.backgroundImage('url', images[imgNum]);
	currentImage = imgNum;
}

function prevPicture (imgNum) {
	currentImage++;
	var img = document.body.style.backgroundImage('url', images[imgNum]);
	img.setAttribute('src', images[currentImage]);
}

function prevImage(imgNum) {

}
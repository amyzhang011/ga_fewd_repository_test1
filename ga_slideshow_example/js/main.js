var images = ["img/thumb-0.jpg", "img/thumb-1.jpg","img/thumb-2.jpg","img/thumb-3.jpg","img/thumb-4.jpg",]
var currentImage = 0;

function changePicture(whichNum) {
	var img = document.getElementById('mainImage')
	img.setAttribute('src', images[whichNum]);
	currentImage = whichNum;
}

function nextImage() {
	currentImage++;
	var img = document.getElementById('mainImage');
	img.setAttribute('src', images[currentImage]);
}

function prevImage() {

}
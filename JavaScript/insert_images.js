var images_white = new Array();
var images_stylized = new Array();
var images_model = new Array();

images_white[0] = new Image();
images_white[0].src = 'img/white/img1.jpg';
images_white[1] = new Image();
images_white[1].src = 'img/white/img2.jpg';
images_white[2] = new Image();
images_white[2].src = 'img/white/img3.jpg';

images_stylized[0] = new Image();
images_stylized[0].src = 'img/stylized/img1.jpg';
images_stylized[1] = new Image();
images_stylized[1].src = 'img/stylized/img2.jpg';

images_model[0] = new Image();
images_model[0].src = 'img/model/img1.jpg';
images_model[1] = new Image();
images_model[1].src = 'img/model/img2.jpg';



function gallery(gallery_type) {
	let src = eval(`images_${gallery_type}[0].src`);
	document.getElementById(`gallery_${gallery_type}`).innerHTML = `<img src=${src} id="images_${gallery_type}">`;
};
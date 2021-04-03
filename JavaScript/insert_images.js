var images = new Array();

images[0] = new Image();
images[0].src = 'img/img1.jpg';
images[1] = new Image();
images[1].src = 'img/img2.jpg';
images[2] = new Image();
images[2].src = 'img/img3.jpg';

function gallery1() {
  document.getElementById('gallery1').innerHTML = `<img src=${images[0].src} id="images1">`;
};

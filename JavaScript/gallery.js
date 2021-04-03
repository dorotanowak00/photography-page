function findIndex() {
 let source = document.getElementById('images1').src;
 for (let i = 0; i < images.length; i++) {
   if (images[i].src === source) {
     return i;
     break;
   };
 };
};

function next() {
  let currentIndex = findIndex();
  let nextIndex = currentIndex + 1;
  if (nextIndex > images.length - 1) {
    nextIndex = 0;
  };
  document.getElementById('gallery1').innerHTML = `<img src=${images[nextIndex].src} id="images1">`;
};

function prev() {
  let currentIndex = findIndex();
  let previousIndex = currentIndex - 1;
  if (previousIndex < 0) {
    previousIndex = images.length - 1;
  };
  document.getElementById('gallery1').innerHTML = `<img src=${images[previousIndex].src} id="images1">`;
};

function findIndex(gallery_type) {
 let src = document.getElementById(`images_${gallery_type}`).src;
 let length = eval(`images_${gallery_type}.length`);
 for (let i = 0; i < length; i++) {
   if (eval(`images_${gallery_type}[i].src`) === src) {
     return i;
     break;
   };
 };
};

function remove() {
  document.getElementById('remove').remove();
};


function next(gallery_type) {
  let currentIndex = findIndex(gallery_type);
  let nextIndex = currentIndex + 1;
  let length = eval(`images_${gallery_type}.length`);
  if (nextIndex > length - 1) {
    nextIndex = 0;
  };
  let src_current = eval(`images_${gallery_type}[currentIndex].src`);
  let src_next = eval(`images_${gallery_type}[nextIndex].src`);
  document.getElementById(`gallery_${gallery_type}`).innerHTML = `
  <img src=${src_current} id="remove" class="animation">
  <img src=${src_next} id="images_${gallery_type}" class="animation2">`;
  setTimeout(remove, 1500);
};

function prev(gallery_type) {
  let currentIndex = findIndex(gallery_type);
  let previousIndex = currentIndex - 1;
  let length = eval(`images_${gallery_type}.length`);
  if (previousIndex < 0) {
    previousIndex = length - 1;
  };
  let src_current = eval(`images_${gallery_type}[currentIndex].src`);
  let src_prev = eval(`images_${gallery_type}[previousIndex].src`);
  document.getElementById(`gallery_${gallery_type}`).innerHTML = `
  <img src=${src_current} id="remove" class="animation">
  <img src=${src_prev} id="images_${gallery_type}" class="animation2">`;
};

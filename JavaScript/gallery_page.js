let imagesCollection = document.getElementsByClassName('image');
let images = Array.from(imagesCollection);


function remove(className) {
    let removedElement = document.getElementsByClassName(className)[0];
    console.log(removedElement);
    removedElement.remove();

}



function openModal(src, id) {
   
    let modal = document.getElementById('modal');
    modal.style.display = "block";
    modal.innerHTML = `
    <div class="image-container">
        <img src="${src}" id=${id}>
        <button class="prev" onclick="prev()">&#10092</button>
        <button class="next" onclick="next()">&#10093</button>
    </div>
    <span onclick="closeModal()">&#10006</span>
    `;
}

function closeModal() {
    modal.style.display = "none";
}

function next() {
    let modal = document.getElementById('modal');

    let currentImg = document.getElementById('modal').firstElementChild.firstElementChild;
    let currentImgId = currentImg.id;
    let currentImgSrc = currentImg.src;

    let nextImg;
    let nextImgId;
    let nextImgSrc;

    if (currentImgId < images.length) {
        nextImgId = currentImgId * 1 + 1;
    } else {
        nextImgId = 1;
    }

    for (let i = 0; i < images.length; i++) {
        if(images[i].id == nextImgId) {
            nextImg = images[i];
            nextImgSrc = images[i].src;
        }
    }

    modal.innerHTML = `
    <div class="image-container">
        <img src="${currentImgSrc}" id="${currentImgId}" class="current-left">
        <img src="${nextImgSrc}" id="${nextImgId}" class="next-left">
        <button class="prev" onclick="prev()">&#10092</button>
        <button class="next" onclick="next()">&#10093</button>
    </div>
    <span onclick="closeModal()">&#10006</span>`
    ;
    setTimeout(() => remove('current-left'), 1000);
}

function prev() {
    let modal = document.getElementById('modal');

    let currentImg = document.getElementById('modal').firstElementChild.firstElementChild;
    let currentImgId = currentImg.id;
    let currentImgSrc = currentImg.src;

    let prevImg;
    let prevImgId;
    let prevImgSrc;

    if (currentImgId > 1) {
        prevImgId = currentImgId * 1 - 1;
    } else {
        prevImgId = images.length;
    }

    for (let i = 0; i < images.length; i++) {
        if(images[i].id == prevImgId) {
            prevImgSrc = images[i].src;
        }
    }

    modal.innerHTML = `
    <div class="image-container">
        <img src="${currentImgSrc}" id="${currentImgId}" class="current-right">
        <img src="${prevImgSrc}" id="${prevImgId}" class="prev-right">
        <button class="prev" onclick="prev()">&#10092</button>
        <button class="next" onclick="next()">&#10093</button>
    </div>
    <span onclick="closeModal()">&#10006</span>`
    ;

    setTimeout(() => remove('current-right'), 1000);
}

images.forEach(item => {
    item.addEventListener('click', (e) => {
        openModal(e.target.src, e.target.id)
    });
})

document.addEventListener('keydown', e => {
    if (e.keyCode === 39) {
        next();
    }
    if (e.keyCode === 37) {
        prev();
    }
    if (e.keyCode === 27) {
        modal.style.display = "none";
    }
})


window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = "none";
    }
})

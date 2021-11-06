let imagesCollection = document.getElementsByClassName('image');
let images = Array.from(imagesCollection);


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

function prev() {
    console.log('prev');
}

function next() {
    let modal = document.getElementById('modal');
    let currentImgId = document.getElementById('modal').firstElementChild.firstElementChild.id;

    let nextImgId;
    let nextImgSrc;

    if (currentImgId < images.length) {
        nextImgId = currentImgId * 1 + 1;
    } else {
        nextImgId = 1;
    }

    for (let i = 0; i < images.length; i++) {
        if(images[i].id == nextImgId) {
            nextImgSrc = images[i].src;
        }
    }

    modal.innerHTML = `
    <div class="image-container">
        <img src="${nextImgSrc}" id="${nextImgId}" class="animation-left">
        <button class="prev" onclick="prev()">&#10092</button>
        <button class="next" onclick="next()">&#10093</button>
    </div>
    <span onclick="closeModal()">&#10006</span>`
    ;
}

function prev() {
    let modal = document.getElementById('modal');
    let currentImgId = document.getElementById('modal').firstElementChild.firstElementChild.id;

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
        <img src="${prevImgSrc}" id="${prevImgId}">
        <button class="prev" onclick="prev()">&#10092</button>
        <button class="next" onclick="next()">&#10093</button>
    </div>
    <span onclick="closeModal()">&#10006</span>`
    ;
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

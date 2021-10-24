
let divContainer = document.getElementById('container');
let galleries = [...document.getElementsByClassName('img_container')];

let buttons = [...document.getElementsByTagName('button')];

filter = (e) => {
    galleries.forEach(item => item.style.display = "block");
    let button = e.target;
    let buttonId = e.target.id;

    if (e.target.id === "all") {
        galleries.forEach(item => item.style.display = "block");
        return;
    };

    galleries.forEach(item => {
        if (!item.className.includes(buttonId)) {
            item.style.display = "none";
        } else {
            return
        }
    })
    
}

buttons.forEach(item => {
    item.addEventListener('click', filter)
});

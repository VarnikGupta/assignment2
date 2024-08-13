const inner = document.getElementById("innerDiv");

function generateRandomColor() {
    let a = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let c = Math.floor(Math.random() * 256);
    inner.style.backgroundColor = `rgb(${a},${b},${c})`;    
}

function moveDivRandomly() {
    const outer = document.querySelector('.outer');
    
    const outerHeight = outer.clientHeight;
    const outerWidth = outer.clientWidth;
    
    const innerHeight = inner.clientHeight;
    const innerWidth = inner.clientWidth;

    const randomTop = Math.floor(Math.random() * (outerHeight - innerHeight));
    const randomLeft = Math.floor(Math.random() * (outerWidth - innerWidth));

    inner.style.top = `${randomTop}px`;
    inner.style.left = `${randomLeft}px`;
}

inner.addEventListener("click", function () {
    generateRandomColor()
    moveDivRandomly()
});


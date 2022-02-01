const btnRotate = document.getElementById('btn-rotate')
const goofy = document.getElementById('goofy')

let rotation = 0;
let font = 12;
const rotate = () => {
    rotation += 90;
    btnRotate.style.transform = `rotate(${rotation}deg)`;
    console.log('function fired')
    font += 2;
    goofy.style.fontSize = `${font}px`
}

btnRotate.addEventListener('click', rotate)



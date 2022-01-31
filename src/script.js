const btnRotate = document.getElementById('btn-rotate')

let rotation = 0;
const rotate = () => {
    rotation += 90;
    btnRotate.style.transform = `rotate(${rotation}deg)`;
    console.log('function fired')
}

btnRotate.addEventListener('click', rotate)
const btnRotate = document.getElementById('btn-rotate')
const rotate = () => {
    btnRotate.style.transform = 'rotate(90deg)';
    console.log('function fired')
}

btnRotate.addEventListener('click', rotate)